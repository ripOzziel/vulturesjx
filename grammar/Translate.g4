grammar Translate;
import CoomonC;

/** The start rule; begin parsing here. */

prog: INT MAIN LPAREN RPAREN LBRACE content* RBRACE ;

/**
    Contenido es lo que el cascaron puede soportar dentro de el.
    contenido puede tener declaracion de variables, declaracion con asignacion,
    asignacion de una variable creada
 */
content: declaration | declarationAndAssignament | assignment | ifStatement | whileStatement| printPlease | dataType | incre| decre ;

/**
    Sinntaxis de las declaracion y asignaciones
 */
declaration: dataType (ID|NUMBER) simbolos? FIN?    #declaracion;
declarationAndAssignament: dataType (ID|NUMBER) EQUALS exp? FIN? #declAndAssig;
assignment: ID EQUALS exp FIN?  #asignacion;

//sintaxis de while
whileStatement: WHILE LPAREN condition RPAREN LBRACE content* RBRACE #whileSentencia;

//sintaxis de sentencia if
ifStatement: IF LPAREN condition RPAREN LBRACE content* RBRACE 
(ELSEIF LPAREN condition RPAREN LBRACE content* RBRACE)* 
(ELSE LBRACE content* RBRACE)? #sentenciaIf;
condition: (logicalExpression | NOT condition | trueOrFalse) #condicion;
trueOrFalse:(TRUE |FALSE) #verdaderoOFalso;
logicalExpression: relationalExpression ( logic=(AND | OR) relationalExpression )* #expresionLogica;
relationalExpression: 
    (exp ( relation=(IGUAL | DISTINTO | MAYOR | MENOR | MAYORIGUAL | MENORIGUAL) exp)*) #expresionRelacional;

//sintaxis de impresion
printPlease: PRINT LPAREN (STRINGL|exp|concat) RPAREN FIN?  #impresion;
concat:  (atom) (PLUS atom)+ #concatenacion;
atom:STRING #string
    |
    exp #expp;

//incremento y decremento
incre : ID '++' #incremento;
decre : ID '--' #decremento;
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


