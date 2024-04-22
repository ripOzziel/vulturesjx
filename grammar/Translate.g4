grammar Translate;
import CoomonC;

/** The start rule; begin parsing here. */

prog: INT MAIN LPAREN RPAREN LBRACE content RBRACE ;

//contenido
content: ( declaration | declarationAndAssignament | assignment |ifSentence| printPlease | dataType )+;

//sintaxis de las declaraciones y asignaciones
declaration: dataType (ID)  FIN   #declaracion;
declarationAndAssignament: dataType ID EQUALS exp FIN #declAndAssig;
assignment: ID EQUALS exp FIN #asignacion;
 
//sintaxis del if
ifSentence: IF LPAREN condition RPAREN LBRACE content RBRACE FIN #sentenciaIf;
condition: (logicalExpression | NOT condition | trueOrFalse) #condicion;
trueOrFalse:(TRUE |FALSE) #verdaderoOFalso;
logicalExpression: relationalExpression ( logic=(AND | OR) relationalExpression )* #expresionLogica;
relationalExpression: 
    (exp ( relation=(IGUAL | DISTINTO | MAYOR | MENOR | MAYORIGUAL | MENORIGUAL) exp)*) #expresionRelacional
    ; 
//sintaxis de impresion
printPlease: PRINT LPAREN (STRINGL|exp|concat) RPAREN FIN #impresion;        
concat:  (atom) (PLUS atom)+ #concatenacion;
atom:STRINGL #string
    |
    exp #expp;

//expresion                                                                                                                                     
exp: 
    
    '(' exp ')' exp?           #parentesis
    |
    '(' exp ')''(' exp ')'       #parentesisMultiply
    |
    exp operation=(TIMES|DIV) exp     #timesDiv
    |
    exp operation=(PLUS|MINUS) exp    #plusSubtraction
    |
    NUMBER #numero
    | 
    CHAR    #char
    |
    ID      #identificador
    ;   
                                        //Traduccion de los tipos de datos de Vulture
dataType: INT | STRING | CHAR; // (int, int), (flot, float), (vul, String), (v, char)
simbolos: PLUS | MINUS | TIMES | DIV;


