    grammar ArrayInit;
    import CommonLexerRules;

    /** The start rule; begin parsing here. */

    prog: 'hiram' '{' content '}' ;

    //contenido
    content: ( declaration | declarationAndAssignament | assignment |ifSentence| printPlease | dataType )+;

    //sintaxis de las declaraciones y asignaciones
    declaration: dataType (ID|NUMBER) simbolos? FIN?    #declaracion;
    declarationAndAssignament: dataType (ID|NUMBER) EQUALS exp? FIN? #declAndAssig;
    assignment: ID EQUALS exp FIN?  #asignacion;

    //sintaxis del if
    ifSentence: IF LPAREN condition RPAREN LBRACE content RBRACE #sentenciaIf;
    condition: (logicalExpression | NOT condition | trueOrFalse) #condicion;
    trueOrFalse:(TRUE |FALSE) #verdaderoOFalso;
    logicalExpression: relationalExpression ( logic=(AND | OR) relationalExpression )* #expresionLogica;
    relationalExpression: 
        (exp ( relation=(IGUAL | DISTINTO | MAYOR | MENOR | MAYORIGUAL | MENORIGUAL) exp)*) #expresionRelacional
        ;
    //sintaxis de impresion
    printPlease: PRINT LPAREN (STRING|exp|concat) RPAREN FIN?  #impresion;
    concat:  (atom) (PLUS atom)+ #concatenacion;
    atom:STRING #string
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
    dataType: NUM | VUL | V; // (int, int), (flot, float), (vul, String), (v, char)
    simbolos: PLUS | MINUS | TIMES | DIV;


