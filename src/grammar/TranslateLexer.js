// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,44,266,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,
13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,
20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,
1,27,1,28,1,28,5,28,198,8,28,10,28,12,28,201,9,28,1,29,3,29,204,8,29,1,29,
4,29,207,8,29,11,29,12,29,208,1,29,1,29,4,29,213,8,29,11,29,12,29,214,3,
29,217,8,29,1,30,1,30,5,30,221,8,30,10,30,12,30,224,9,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,
36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,41,1,41,
1,42,1,42,1,43,4,43,261,8,43,11,43,12,43,262,1,43,1,43,1,222,0,44,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,
40,81,41,83,42,85,43,87,44,1,0,4,3,0,65,90,94,94,97,122,3,0,48,57,65,90,
97,122,1,0,48,57,3,0,9,10,13,13,32,32,272,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,
51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,
0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,
1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,
0,85,1,0,0,0,0,87,1,0,0,0,1,89,1,0,0,0,3,91,1,0,0,0,5,94,1,0,0,0,7,97,1,
0,0,0,9,100,1,0,0,0,11,103,1,0,0,0,13,108,1,0,0,0,15,111,1,0,0,0,17,118,
1,0,0,0,19,123,1,0,0,0,21,129,1,0,0,0,23,134,1,0,0,0,25,142,1,0,0,0,27,147,
1,0,0,0,29,153,1,0,0,0,31,157,1,0,0,0,33,163,1,0,0,0,35,170,1,0,0,0,37,175,
1,0,0,0,39,177,1,0,0,0,41,179,1,0,0,0,43,181,1,0,0,0,45,183,1,0,0,0,47,185,
1,0,0,0,49,187,1,0,0,0,51,189,1,0,0,0,53,191,1,0,0,0,55,193,1,0,0,0,57,195,
1,0,0,0,59,203,1,0,0,0,61,218,1,0,0,0,63,227,1,0,0,0,65,231,1,0,0,0,67,234,
1,0,0,0,69,237,1,0,0,0,71,239,1,0,0,0,73,241,1,0,0,0,75,244,1,0,0,0,77,247,
1,0,0,0,79,250,1,0,0,0,81,253,1,0,0,0,83,255,1,0,0,0,85,257,1,0,0,0,87,260,
1,0,0,0,89,90,5,44,0,0,90,2,1,0,0,0,91,92,5,43,0,0,92,93,5,43,0,0,93,4,1,
0,0,0,94,95,5,45,0,0,95,96,5,45,0,0,96,6,1,0,0,0,97,98,5,43,0,0,98,99,5,
61,0,0,99,8,1,0,0,0,100,101,5,45,0,0,101,102,5,61,0,0,102,10,1,0,0,0,103,
104,5,109,0,0,104,105,5,97,0,0,105,106,5,105,0,0,106,107,5,110,0,0,107,12,
1,0,0,0,108,109,5,105,0,0,109,110,5,102,0,0,110,14,1,0,0,0,111,112,5,112,
0,0,112,113,5,114,0,0,113,114,5,105,0,0,114,115,5,110,0,0,115,116,5,116,
0,0,116,117,5,102,0,0,117,16,1,0,0,0,118,119,5,116,0,0,119,120,5,114,0,0,
120,121,5,117,0,0,121,122,5,101,0,0,122,18,1,0,0,0,123,124,5,102,0,0,124,
125,5,97,0,0,125,126,5,108,0,0,126,127,5,115,0,0,127,128,5,101,0,0,128,20,
1,0,0,0,129,130,5,101,0,0,130,131,5,108,0,0,131,132,5,115,0,0,132,133,5,
101,0,0,133,22,1,0,0,0,134,135,5,101,0,0,135,136,5,108,0,0,136,137,5,115,
0,0,137,138,5,101,0,0,138,139,5,32,0,0,139,140,5,105,0,0,140,141,5,102,0,
0,141,24,1,0,0,0,142,143,5,118,0,0,143,144,5,111,0,0,144,145,5,105,0,0,145,
146,5,100,0,0,146,26,1,0,0,0,147,148,5,119,0,0,148,149,5,104,0,0,149,150,
5,105,0,0,150,151,5,108,0,0,151,152,5,101,0,0,152,28,1,0,0,0,153,154,5,105,
0,0,154,155,5,110,0,0,155,156,5,116,0,0,156,30,1,0,0,0,157,158,5,102,0,0,
158,159,5,108,0,0,159,160,5,111,0,0,160,161,5,97,0,0,161,162,5,116,0,0,162,
32,1,0,0,0,163,164,5,115,0,0,164,165,5,116,0,0,165,166,5,114,0,0,166,167,
5,105,0,0,167,168,5,110,0,0,168,169,5,103,0,0,169,34,1,0,0,0,170,171,5,99,
0,0,171,172,5,104,0,0,172,173,5,97,0,0,173,174,5,114,0,0,174,36,1,0,0,0,
175,176,5,40,0,0,176,38,1,0,0,0,177,178,5,41,0,0,178,40,1,0,0,0,179,180,
5,123,0,0,180,42,1,0,0,0,181,182,5,125,0,0,182,44,1,0,0,0,183,184,5,59,0,
0,184,46,1,0,0,0,185,186,5,43,0,0,186,48,1,0,0,0,187,188,5,45,0,0,188,50,
1,0,0,0,189,190,5,42,0,0,190,52,1,0,0,0,191,192,5,47,0,0,192,54,1,0,0,0,
193,194,5,61,0,0,194,56,1,0,0,0,195,199,7,0,0,0,196,198,7,1,0,0,197,196,
1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,58,1,0,0,0,201,
199,1,0,0,0,202,204,5,45,0,0,203,202,1,0,0,0,203,204,1,0,0,0,204,206,1,0,
0,0,205,207,3,83,41,0,206,205,1,0,0,0,207,208,1,0,0,0,208,206,1,0,0,0,208,
209,1,0,0,0,209,216,1,0,0,0,210,212,5,46,0,0,211,213,3,83,41,0,212,211,1,
0,0,0,213,214,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,217,1,0,0,0,216,
210,1,0,0,0,216,217,1,0,0,0,217,60,1,0,0,0,218,222,5,34,0,0,219,221,9,0,
0,0,220,219,1,0,0,0,221,224,1,0,0,0,222,223,1,0,0,0,222,220,1,0,0,0,223,
225,1,0,0,0,224,222,1,0,0,0,225,226,5,34,0,0,226,62,1,0,0,0,227,228,5,39,
0,0,228,229,9,0,0,0,229,230,5,39,0,0,230,64,1,0,0,0,231,232,5,61,0,0,232,
233,5,61,0,0,233,66,1,0,0,0,234,235,5,33,0,0,235,236,5,61,0,0,236,68,1,0,
0,0,237,238,5,62,0,0,238,70,1,0,0,0,239,240,5,60,0,0,240,72,1,0,0,0,241,
242,5,62,0,0,242,243,5,61,0,0,243,74,1,0,0,0,244,245,5,60,0,0,245,246,5,
61,0,0,246,76,1,0,0,0,247,248,5,38,0,0,248,249,5,38,0,0,249,78,1,0,0,0,250,
251,5,124,0,0,251,252,5,124,0,0,252,80,1,0,0,0,253,254,5,33,0,0,254,82,1,
0,0,0,255,256,7,2,0,0,256,84,1,0,0,0,257,258,5,37,0,0,258,86,1,0,0,0,259,
261,7,3,0,0,260,259,1,0,0,0,261,262,1,0,0,0,262,260,1,0,0,0,262,263,1,0,
0,0,263,264,1,0,0,0,264,265,6,43,0,0,265,88,1,0,0,0,8,0,199,203,208,214,
216,222,262,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TranslateLexer extends antlr4.Lexer {

    static grammarFileName = "Translate.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "','", "'++'", "'--'", "'+='", "'-='", "'main'", 
                         "'if'", "'printf'", "'true'", "'false'", "'else'", 
                         "'else if'", "'void'", "'while'", "'int'", "'float'", 
                         "'string'", "'char'", "'('", "')'", "'{'", "'}'", 
                         "';'", "'+'", "'-'", "'*'", "'/'", "'='", null, 
                         null, null, null, "'=='", "'!='", "'>'", "'<'", 
                         "'>='", "'<='", "'&&'", "'||'", "'!'", null, "'%'" ];
	static symbolicNames = [ null, null, null, null, null, null, "MAIN", "IF", 
                          "PRINT", "TRUE", "FALSE", "ELSE", "ELSEIF", "VOID", 
                          "WHILE", "INT", "FLOAT", "STRING", "CHAR", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", 
                          "TIMES", "DIV", "EQUALS", "ID", "NUMBER", "STRINGL", 
                          "CHARL", "IGUAL", "DISTINTO", "MAYOR", "MENOR", 
                          "MAYORIGUAL", "MENORIGUAL", "AND", "OR", "NOT", 
                          "DIGIT", "RESI", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "MAIN", "IF", 
                      "PRINT", "TRUE", "FALSE", "ELSE", "ELSEIF", "VOID", 
                      "WHILE", "INT", "FLOAT", "STRING", "CHAR", "LPAREN", 
                      "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", 
                      "TIMES", "DIV", "EQUALS", "ID", "NUMBER", "STRINGL", 
                      "CHARL", "IGUAL", "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", 
                      "MENORIGUAL", "AND", "OR", "NOT", "DIGIT", "RESI", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

TranslateLexer.EOF = antlr4.Token.EOF;
TranslateLexer.T__0 = 1;
TranslateLexer.T__1 = 2;
TranslateLexer.T__2 = 3;
TranslateLexer.T__3 = 4;
TranslateLexer.T__4 = 5;
TranslateLexer.MAIN = 6;
TranslateLexer.IF = 7;
TranslateLexer.PRINT = 8;
TranslateLexer.TRUE = 9;
TranslateLexer.FALSE = 10;
TranslateLexer.ELSE = 11;
TranslateLexer.ELSEIF = 12;
TranslateLexer.VOID = 13;
TranslateLexer.WHILE = 14;
TranslateLexer.INT = 15;
TranslateLexer.FLOAT = 16;
TranslateLexer.STRING = 17;
TranslateLexer.CHAR = 18;
TranslateLexer.LPAREN = 19;
TranslateLexer.RPAREN = 20;
TranslateLexer.LBRACE = 21;
TranslateLexer.RBRACE = 22;
TranslateLexer.FIN = 23;
TranslateLexer.PLUS = 24;
TranslateLexer.MINUS = 25;
TranslateLexer.TIMES = 26;
TranslateLexer.DIV = 27;
TranslateLexer.EQUALS = 28;
TranslateLexer.ID = 29;
TranslateLexer.NUMBER = 30;
TranslateLexer.STRINGL = 31;
TranslateLexer.CHARL = 32;
TranslateLexer.IGUAL = 33;
TranslateLexer.DISTINTO = 34;
TranslateLexer.MAYOR = 35;
TranslateLexer.MENOR = 36;
TranslateLexer.MAYORIGUAL = 37;
TranslateLexer.MENORIGUAL = 38;
TranslateLexer.AND = 39;
TranslateLexer.OR = 40;
TranslateLexer.NOT = 41;
TranslateLexer.DIGIT = 42;
TranslateLexer.RESI = 43;
TranslateLexer.WS = 44;



