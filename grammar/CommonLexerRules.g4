lexer grammar CommonLexerRules;

FIN: ';';
PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
EQUALS   : '=';
GATO    : '#';
DOLLAR  : '$';
DOBLEPUNTO  : ':';
ANDPERSON   : '&';
COMMA    : ',';
LPAREN   : '(';
RPAREN   : ')';
LBRACE   : '{';
RBRACE   : '}';

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

//prs
PRINT: 'printPlease';
IF: 'if';
ELSE: 'else';
ELSEIF: 'elseif';
WHILE: 'mien';
//TIPOS DE DATOS
NUM: 'num';
VUL: 'vul';
V: 'v';
ID: [^a-zA-Z][a-zA-Z0-9]*;
NUMBER: '-'? DIGIT+ ('.' DIGIT+)?;
STRING: '"' .*? '"';
CHAR: '\'' . '\'';
WS: [ \t\r\n]+ -> skip;
SALTO: '\n';


//verdadero o falso
TRUE: 'true';
FALSE: 'false';
DIGIT: [0-9];
RESI: '%';

