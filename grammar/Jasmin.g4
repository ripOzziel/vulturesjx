    grammar Jasmin;
    import CommonLexerRules;

//!GRAMATICA DEL LENGUAJE DE PROGRAMACIÓN VULTRES
/** prog es el cascaron que se utiliza para poder compilar el codigo */
prog: 'hiram' '{' content* '}' ;

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

//sintaxis del if
ifStatement: IF LPAREN condition RPAREN LBRACE ifContent RBRACE 
(ELSEIF LPAREN condition RPAREN LBRACE elseifContent RBRACE)* 
(ELSE LBRACE elseContent RBRACE)? #sentenciaIf;
ifContent: content*;
elseifContent: content*;
elseContent: content*;

condition: (logicalExpression | NOT condition | trueOrFalse) #condicion;
trueOrFalse:(TRUE |FALSE) #verdaderoOFalso;
logicalExpression: 
    logicalExpression (logic=(AND | OR) logicalExpression)+ #logicLogical
    |
    LPAREN logicalExpression RPAREN #logicalConParentesis
    |
    relationalExpression ( logic=(AND | OR) relationalExpression )* #expresionLogica
    ;
relationalExpression: 
    LPAREN relationalExpression RPAREN #relacionalConParentesis
    |
    (exp ( relation=(IGUAL | DISTINTO | MAYOR | MENOR | MAYORIGUAL | MENORIGUAL) exp)*) #expresionRelacional;


//sintaxis de impresion
printPlease: PRINT LPAREN (STRING|exp|concat) RPAREN FIN?  #impresion;
concat:  (atom) ((PLUS|',') atom)+ #concatenacion;
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
    exp RESI exp #resiudo
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
dataType: NUM | VUL | V; // (int, int), (flot, float), (vul, String), (v, char)
simbolos: PLUS | MINUS | TIMES | DIV;
