lexer grammar CoomonC;


MAIN: 'main';
IF: 'if';
PRINT: 'printf';
TRUE: 'true';
FALSE: 'false';
ELSE: 'else';
ELSEIF: 'elseif';
VOID: 'void';
WHILE: 'while';
INT: 'int';
FLOAT: 'float';
STRING: 'string';
CHAR: 'char';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
FIN: ';';
PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
EQUALS   : '=';
ID: [^a-zA-Z][a-zA-Z0-9]*;
NUMBER: [0-9]+;
STRINGL: '"' .*? '"';
CHARL: '\'' . '\'';

// Operadores relacionales
IGUAL: '==';
DISTINTO: '!=';
MAYOR: '>';
MENOR: '<';
MAYORIGUAL: '>=';
MENORIGUAL: '<=';

// Operadores lógicos
AND: '&&';
OR: '||';
NOT: '!';



WS: [ \t\r\n]+ -> skip;