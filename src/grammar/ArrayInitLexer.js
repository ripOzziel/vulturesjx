// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,41,230,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,
1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,
15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,
1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,
1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,
30,1,30,1,31,1,31,1,32,1,32,5,32,183,8,32,10,32,12,32,186,9,32,1,33,4,33,
189,8,33,11,33,12,33,190,1,34,1,34,5,34,195,8,34,10,34,12,34,198,9,34,1,
34,1,34,1,35,1,35,1,35,1,35,1,36,4,36,207,8,36,11,36,12,36,208,1,36,1,36,
1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,
40,1,40,1,40,1,40,1,196,0,41,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,
22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,
34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,1,0,4,3,0,65,90,94,94,97,122,
3,0,48,57,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,233,0,1,1,0,0,0,0,
3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,
1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,
0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,
0,0,0,1,83,1,0,0,0,3,89,1,0,0,0,5,91,1,0,0,0,7,93,1,0,0,0,9,95,1,0,0,0,11,
97,1,0,0,0,13,99,1,0,0,0,15,101,1,0,0,0,17,103,1,0,0,0,19,105,1,0,0,0,21,
107,1,0,0,0,23,109,1,0,0,0,25,111,1,0,0,0,27,113,1,0,0,0,29,115,1,0,0,0,
31,117,1,0,0,0,33,119,1,0,0,0,35,122,1,0,0,0,37,125,1,0,0,0,39,127,1,0,0,
0,41,129,1,0,0,0,43,132,1,0,0,0,45,135,1,0,0,0,47,138,1,0,0,0,49,141,1,0,
0,0,51,143,1,0,0,0,53,155,1,0,0,0,55,158,1,0,0,0,57,163,1,0,0,0,59,170,1,
0,0,0,61,174,1,0,0,0,63,178,1,0,0,0,65,180,1,0,0,0,67,188,1,0,0,0,69,192,
1,0,0,0,71,201,1,0,0,0,73,206,1,0,0,0,75,212,1,0,0,0,77,214,1,0,0,0,79,219,
1,0,0,0,81,225,1,0,0,0,83,84,5,104,0,0,84,85,5,105,0,0,85,86,5,114,0,0,86,
87,5,97,0,0,87,88,5,109,0,0,88,2,1,0,0,0,89,90,5,59,0,0,90,4,1,0,0,0,91,
92,5,43,0,0,92,6,1,0,0,0,93,94,5,45,0,0,94,8,1,0,0,0,95,96,5,42,0,0,96,10,
1,0,0,0,97,98,5,47,0,0,98,12,1,0,0,0,99,100,5,61,0,0,100,14,1,0,0,0,101,
102,5,35,0,0,102,16,1,0,0,0,103,104,5,36,0,0,104,18,1,0,0,0,105,106,5,58,
0,0,106,20,1,0,0,0,107,108,5,38,0,0,108,22,1,0,0,0,109,110,5,44,0,0,110,
24,1,0,0,0,111,112,5,40,0,0,112,26,1,0,0,0,113,114,5,41,0,0,114,28,1,0,0,
0,115,116,5,123,0,0,116,30,1,0,0,0,117,118,5,125,0,0,118,32,1,0,0,0,119,
120,5,61,0,0,120,121,5,61,0,0,121,34,1,0,0,0,122,123,5,33,0,0,123,124,5,
61,0,0,124,36,1,0,0,0,125,126,5,62,0,0,126,38,1,0,0,0,127,128,5,60,0,0,128,
40,1,0,0,0,129,130,5,62,0,0,130,131,5,61,0,0,131,42,1,0,0,0,132,133,5,60,
0,0,133,134,5,61,0,0,134,44,1,0,0,0,135,136,5,38,0,0,136,137,5,38,0,0,137,
46,1,0,0,0,138,139,5,124,0,0,139,140,5,124,0,0,140,48,1,0,0,0,141,142,5,
33,0,0,142,50,1,0,0,0,143,144,5,112,0,0,144,145,5,114,0,0,145,146,5,105,
0,0,146,147,5,110,0,0,147,148,5,116,0,0,148,149,5,80,0,0,149,150,5,108,0,
0,150,151,5,101,0,0,151,152,5,97,0,0,152,153,5,115,0,0,153,154,5,101,0,0,
154,52,1,0,0,0,155,156,5,105,0,0,156,157,5,102,0,0,157,54,1,0,0,0,158,159,
5,101,0,0,159,160,5,108,0,0,160,161,5,115,0,0,161,162,5,101,0,0,162,56,1,
0,0,0,163,164,5,101,0,0,164,165,5,108,0,0,165,166,5,115,0,0,166,167,5,101,
0,0,167,168,5,105,0,0,168,169,5,102,0,0,169,58,1,0,0,0,170,171,5,110,0,0,
171,172,5,117,0,0,172,173,5,109,0,0,173,60,1,0,0,0,174,175,5,118,0,0,175,
176,5,117,0,0,176,177,5,108,0,0,177,62,1,0,0,0,178,179,5,118,0,0,179,64,
1,0,0,0,180,184,7,0,0,0,181,183,7,1,0,0,182,181,1,0,0,0,183,186,1,0,0,0,
184,182,1,0,0,0,184,185,1,0,0,0,185,66,1,0,0,0,186,184,1,0,0,0,187,189,7,
2,0,0,188,187,1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,
68,1,0,0,0,192,196,5,34,0,0,193,195,9,0,0,0,194,193,1,0,0,0,195,198,1,0,
0,0,196,197,1,0,0,0,196,194,1,0,0,0,197,199,1,0,0,0,198,196,1,0,0,0,199,
200,5,34,0,0,200,70,1,0,0,0,201,202,5,39,0,0,202,203,9,0,0,0,203,204,5,39,
0,0,204,72,1,0,0,0,205,207,7,3,0,0,206,205,1,0,0,0,207,208,1,0,0,0,208,206,
1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,211,6,36,0,0,211,74,1,0,0,0,
212,213,5,10,0,0,213,76,1,0,0,0,214,215,5,116,0,0,215,216,5,114,0,0,216,
217,5,117,0,0,217,218,5,101,0,0,218,78,1,0,0,0,219,220,5,102,0,0,220,221,
5,97,0,0,221,222,5,108,0,0,222,223,5,115,0,0,223,224,5,101,0,0,224,80,1,
0,0,0,225,226,5,109,0,0,226,227,5,105,0,0,227,228,5,101,0,0,228,229,5,110,
0,0,229,82,1,0,0,0,5,0,184,190,196,208,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ArrayInitLexer extends antlr4.Lexer {

    static grammarFileName = "ArrayInit.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'hiram'", "';'", "'+'", "'-'", "'*'", "'/'", 
                         "'='", "'#'", "'$'", "':'", "'&'", "','", "'('", 
                         "')'", "'{'", "'}'", "'=='", "'!='", "'>'", "'<'", 
                         "'>='", "'<='", "'&&'", "'||'", "'!'", "'printPlease'", 
                         "'if'", "'else'", "'elseif'", "'num'", "'vul'", 
                         "'v'", null, null, null, null, null, "'\\n'", "'true'", 
                         "'false'", "'mien'" ];
	static symbolicNames = [ null, null, "FIN", "PLUS", "MINUS", "TIMES", "DIV", 
                          "EQUALS", "GATO", "DOLLAR", "DOBLEPUNTO", "ANDPERSON", 
                          "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                          "IGUAL", "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", 
                          "MENORIGUAL", "AND", "OR", "NOT", "PRINT", "IF", 
                          "ELSE", "ELSEIF", "NUM", "VUL", "V", "ID", "NUMBER", 
                          "STRING", "CHAR", "WS", "SALTO", "TRUE", "FALSE", 
                          "WHILE" ];
	static ruleNames = [ "T__0", "FIN", "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", 
                      "GATO", "DOLLAR", "DOBLEPUNTO", "ANDPERSON", "COMMA", 
                      "LPAREN", "RPAREN", "LBRACE", "RBRACE", "IGUAL", "DISTINTO", 
                      "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", 
                      "OR", "NOT", "PRINT", "IF", "ELSE", "ELSEIF", "NUM", 
                      "VUL", "V", "ID", "NUMBER", "STRING", "CHAR", "WS", 
                      "SALTO", "TRUE", "FALSE", "WHILE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ArrayInitLexer.EOF = antlr4.Token.EOF;
ArrayInitLexer.T__0 = 1;
ArrayInitLexer.FIN = 2;
ArrayInitLexer.PLUS = 3;
ArrayInitLexer.MINUS = 4;
ArrayInitLexer.TIMES = 5;
ArrayInitLexer.DIV = 6;
ArrayInitLexer.EQUALS = 7;
ArrayInitLexer.GATO = 8;
ArrayInitLexer.DOLLAR = 9;
ArrayInitLexer.DOBLEPUNTO = 10;
ArrayInitLexer.ANDPERSON = 11;
ArrayInitLexer.COMMA = 12;
ArrayInitLexer.LPAREN = 13;
ArrayInitLexer.RPAREN = 14;
ArrayInitLexer.LBRACE = 15;
ArrayInitLexer.RBRACE = 16;
ArrayInitLexer.IGUAL = 17;
ArrayInitLexer.DISTINTO = 18;
ArrayInitLexer.MAYOR = 19;
ArrayInitLexer.MENOR = 20;
ArrayInitLexer.MAYORIGUAL = 21;
ArrayInitLexer.MENORIGUAL = 22;
ArrayInitLexer.AND = 23;
ArrayInitLexer.OR = 24;
ArrayInitLexer.NOT = 25;
ArrayInitLexer.PRINT = 26;
ArrayInitLexer.IF = 27;
ArrayInitLexer.ELSE = 28;
ArrayInitLexer.ELSEIF = 29;
ArrayInitLexer.NUM = 30;
ArrayInitLexer.VUL = 31;
ArrayInitLexer.V = 32;
ArrayInitLexer.ID = 33;
ArrayInitLexer.NUMBER = 34;
ArrayInitLexer.STRING = 35;
ArrayInitLexer.CHAR = 36;
ArrayInitLexer.WS = 37;
ArrayInitLexer.SALTO = 38;
ArrayInitLexer.TRUE = 39;
ArrayInitLexer.FALSE = 40;
ArrayInitLexer.WHILE = 41;



