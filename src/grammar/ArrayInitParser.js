// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,47,283,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,5,0,52,8,0,10,0,12,0,55,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,70,8,1,1,2,1,
2,1,2,3,2,75,8,2,1,2,3,2,78,8,2,1,3,1,3,1,3,1,3,3,3,84,8,3,1,3,3,3,87,8,
3,1,4,1,4,1,4,1,4,3,4,93,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,101,8,5,10,5,12,
5,104,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,5,6,123,8,6,10,6,12,6,126,9,6,1,6,1,6,1,6,1,6,1,6,3,6,133,8,6,1,7,
5,7,136,8,7,10,7,12,7,139,9,7,1,8,5,8,142,8,8,10,8,12,8,145,9,8,1,9,5,9,
148,8,9,10,9,12,9,151,9,9,1,10,1,10,1,10,1,10,3,10,157,8,10,1,11,1,11,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,169,8,12,10,12,12,12,172,9,12,
3,12,174,8,12,1,12,1,12,1,12,4,12,179,8,12,11,12,12,12,180,5,12,183,8,12,
10,12,12,12,186,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,195,8,13,10,
13,12,13,198,9,13,3,13,200,8,13,1,14,1,14,1,14,1,14,1,14,3,14,207,8,14,1,
14,1,14,3,14,211,8,14,1,15,1,15,1,15,4,15,216,8,15,11,15,12,15,217,1,16,
1,16,3,16,222,8,16,1,17,1,17,1,17,3,17,227,8,17,1,18,1,18,1,18,3,18,232,
8,18,1,19,1,19,1,19,1,19,3,19,238,8,19,1,20,1,20,1,20,1,20,3,20,244,8,20,
1,21,1,21,1,21,1,21,1,21,3,21,251,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,3,21,263,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
5,21,274,8,21,10,21,12,21,277,9,21,1,22,1,22,1,23,1,23,1,23,0,2,24,42,24,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,9,1,
0,38,39,1,0,44,45,1,0,27,28,1,0,21,26,2,0,7,7,16,16,1,0,9,10,1,0,7,8,1,0,
35,37,1,0,7,10,305,0,48,1,0,0,0,2,69,1,0,0,0,4,71,1,0,0,0,6,79,1,0,0,0,8,
88,1,0,0,0,10,94,1,0,0,0,12,107,1,0,0,0,14,137,1,0,0,0,16,143,1,0,0,0,18,
149,1,0,0,0,20,156,1,0,0,0,22,158,1,0,0,0,24,173,1,0,0,0,26,199,1,0,0,0,
28,201,1,0,0,0,30,212,1,0,0,0,32,221,1,0,0,0,34,223,1,0,0,0,36,228,1,0,0,
0,38,233,1,0,0,0,40,239,1,0,0,0,42,262,1,0,0,0,44,278,1,0,0,0,46,280,1,0,
0,0,48,49,5,1,0,0,49,53,5,19,0,0,50,52,3,2,1,0,51,50,1,0,0,0,52,55,1,0,0,
0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,20,0,0,
57,1,1,0,0,0,58,70,3,4,2,0,59,70,3,6,3,0,60,70,3,8,4,0,61,70,3,12,6,0,62,
70,3,10,5,0,63,70,3,28,14,0,64,70,3,44,22,0,65,70,3,34,17,0,66,70,3,36,18,
0,67,70,3,38,19,0,68,70,3,40,20,0,69,58,1,0,0,0,69,59,1,0,0,0,69,60,1,0,
0,0,69,61,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,
0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,3,1,0,0,0,71,72,3,44,22,0,
72,74,7,0,0,0,73,75,3,46,23,0,74,73,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,
76,78,5,6,0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,5,1,0,0,0,79,80,3,44,22,0,80,
81,7,0,0,0,81,83,5,11,0,0,82,84,3,42,21,0,83,82,1,0,0,0,83,84,1,0,0,0,84,
86,1,0,0,0,85,87,5,6,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,7,1,0,0,0,88,89,
5,38,0,0,89,90,5,11,0,0,90,92,3,42,21,0,91,93,5,6,0,0,92,91,1,0,0,0,92,93,
1,0,0,0,93,9,1,0,0,0,94,95,5,34,0,0,95,96,5,17,0,0,96,97,3,20,10,0,97,98,
5,18,0,0,98,102,5,19,0,0,99,101,3,2,1,0,100,99,1,0,0,0,101,104,1,0,0,0,102,
100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,20,
0,0,106,11,1,0,0,0,107,108,5,31,0,0,108,109,5,17,0,0,109,110,3,20,10,0,110,
111,5,18,0,0,111,112,5,19,0,0,112,113,3,14,7,0,113,124,5,20,0,0,114,115,
5,33,0,0,115,116,5,17,0,0,116,117,3,20,10,0,117,118,5,18,0,0,118,119,5,19,
0,0,119,120,3,16,8,0,120,121,5,20,0,0,121,123,1,0,0,0,122,114,1,0,0,0,123,
126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,132,1,0,0,0,126,124,1,0,
0,0,127,128,5,32,0,0,128,129,5,19,0,0,129,130,3,18,9,0,130,131,5,20,0,0,
131,133,1,0,0,0,132,127,1,0,0,0,132,133,1,0,0,0,133,13,1,0,0,0,134,136,3,
2,1,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,
15,1,0,0,0,139,137,1,0,0,0,140,142,3,2,1,0,141,140,1,0,0,0,142,145,1,0,0,
0,143,141,1,0,0,0,143,144,1,0,0,0,144,17,1,0,0,0,145,143,1,0,0,0,146,148,
3,2,1,0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,
150,19,1,0,0,0,151,149,1,0,0,0,152,157,3,24,12,0,153,154,5,29,0,0,154,157,
3,20,10,0,155,157,3,22,11,0,156,152,1,0,0,0,156,153,1,0,0,0,156,155,1,0,
0,0,157,21,1,0,0,0,158,159,7,1,0,0,159,23,1,0,0,0,160,161,6,12,-1,0,161,
162,5,17,0,0,162,163,3,24,12,0,163,164,5,18,0,0,164,174,1,0,0,0,165,170,
3,26,13,0,166,167,7,2,0,0,167,169,3,26,13,0,168,166,1,0,0,0,169,172,1,0,
0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,173,
160,1,0,0,0,173,165,1,0,0,0,174,184,1,0,0,0,175,178,10,3,0,0,176,177,7,2,
0,0,177,179,3,24,12,0,178,176,1,0,0,0,179,180,1,0,0,0,180,178,1,0,0,0,180,
181,1,0,0,0,181,183,1,0,0,0,182,175,1,0,0,0,183,186,1,0,0,0,184,182,1,0,
0,0,184,185,1,0,0,0,185,25,1,0,0,0,186,184,1,0,0,0,187,188,5,17,0,0,188,
189,3,26,13,0,189,190,5,18,0,0,190,200,1,0,0,0,191,196,3,42,21,0,192,193,
7,3,0,0,193,195,3,42,21,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,
0,196,197,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,199,187,1,0,0,0,199,191,
1,0,0,0,200,27,1,0,0,0,201,202,5,30,0,0,202,206,5,17,0,0,203,207,5,40,0,
0,204,207,3,42,21,0,205,207,3,30,15,0,206,203,1,0,0,0,206,204,1,0,0,0,206,
205,1,0,0,0,207,208,1,0,0,0,208,210,5,18,0,0,209,211,5,6,0,0,210,209,1,0,
0,0,210,211,1,0,0,0,211,29,1,0,0,0,212,215,3,32,16,0,213,214,7,4,0,0,214,
216,3,32,16,0,215,213,1,0,0,0,216,217,1,0,0,0,217,215,1,0,0,0,217,218,1,
0,0,0,218,31,1,0,0,0,219,222,5,40,0,0,220,222,3,42,21,0,221,219,1,0,0,0,
221,220,1,0,0,0,222,33,1,0,0,0,223,224,5,38,0,0,224,226,5,2,0,0,225,227,
5,6,0,0,226,225,1,0,0,0,226,227,1,0,0,0,227,35,1,0,0,0,228,229,5,38,0,0,
229,231,5,3,0,0,230,232,5,6,0,0,231,230,1,0,0,0,231,232,1,0,0,0,232,37,1,
0,0,0,233,234,5,38,0,0,234,235,5,4,0,0,235,237,3,32,16,0,236,238,5,6,0,0,
237,236,1,0,0,0,237,238,1,0,0,0,238,39,1,0,0,0,239,240,5,38,0,0,240,241,
5,5,0,0,241,243,3,32,16,0,242,244,5,6,0,0,243,242,1,0,0,0,243,244,1,0,0,
0,244,41,1,0,0,0,245,246,6,21,-1,0,246,247,5,17,0,0,247,248,3,42,21,0,248,
250,5,18,0,0,249,251,3,42,21,0,250,249,1,0,0,0,250,251,1,0,0,0,251,263,1,
0,0,0,252,253,5,17,0,0,253,254,3,42,21,0,254,255,5,18,0,0,255,256,5,17,0,
0,256,257,3,42,21,0,257,258,5,18,0,0,258,263,1,0,0,0,259,263,5,39,0,0,260,
263,5,41,0,0,261,263,5,38,0,0,262,245,1,0,0,0,262,252,1,0,0,0,262,259,1,
0,0,0,262,260,1,0,0,0,262,261,1,0,0,0,263,275,1,0,0,0,264,265,10,6,0,0,265,
266,5,47,0,0,266,274,3,42,21,7,267,268,10,5,0,0,268,269,7,5,0,0,269,274,
3,42,21,6,270,271,10,4,0,0,271,272,7,6,0,0,272,274,3,42,21,5,273,264,1,0,
0,0,273,267,1,0,0,0,273,270,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,
276,1,0,0,0,276,43,1,0,0,0,277,275,1,0,0,0,278,279,7,7,0,0,279,45,1,0,0,
0,280,281,7,8,0,0,281,47,1,0,0,0,32,53,69,74,77,83,86,92,102,124,132,137,
143,149,156,170,173,180,184,196,199,206,210,217,221,226,231,237,243,250,
262,273,275];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'hiram'", "'++'", "'--'", "'+='", "'-='", 
                            "';'", "'+'", "'-'", "'*'", "'/'", "'='", "'#'", 
                            "'$'", "':'", "'&'", "','", "'('", "')'", "'{'", 
                            "'}'", "'=='", "'!='", "'>'", "'<'", "'>='", 
                            "'<='", "'&&'", "'||'", "'!'", "'printPlease'", 
                            "'if'", "'else'", "'elseif'", "'mien'", "'num'", 
                            "'vul'", "'v'", null, null, null, null, null, 
                            "'\\n'", "'true'", "'false'", null, "'%'" ];
    static symbolicNames = [ null, null, null, null, null, null, "FIN", 
                             "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", 
                             "GATO", "DOLLAR", "DOBLEPUNTO", "ANDPERSON", 
                             "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "IGUAL", "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", 
                             "MENORIGUAL", "AND", "OR", "NOT", "PRINT", 
                             "IF", "ELSE", "ELSEIF", "WHILE", "NUM", "VUL", 
                             "V", "ID", "NUMBER", "STRING", "CHAR", "WS", 
                             "SALTO", "TRUE", "FALSE", "DIGIT", "RESI" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "ifContent", "elseifContent", "elseContent", "condition", 
                         "trueOrFalse", "logicalExpression", "relationalExpression", 
                         "printPlease", "concat", "atom", "incre", "decre", 
                         "masi", "menosi", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.logicalExpression_sempred(localctx, predIndex);
    	case 21:
    	    		return this.exp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logicalExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    exp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ArrayInitParser.T__0);
	        this.state = 49;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 499) !== 0)) {
	            this.state = 50;
	            this.content();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(ArrayInitParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_content);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 62;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 63;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 64;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 65;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 66;
	            this.decre();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 67;
	            this.masi();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 68;
	            this.menosi();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ArrayInitParser.RULE_declaration);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.dataType();
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===38 || _la===39)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0)) {
	            this.state = 73;
	            this.simbolos();
	        }

	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 76;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declarationAndAssignament() {
	    let localctx = new DeclarationAndAssignamentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ArrayInitParser.RULE_declarationAndAssignament);
	    var _la = 0;
	    try {
	        localctx = new DeclAndAssigContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.dataType();
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!(_la===38 || _la===39)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 81;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 82;
	            this.exp(0);

	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 85;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ArrayInitParser.RULE_assignment);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(ArrayInitParser.ID);
	        this.state = 89;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 90;
	        this.exp(0);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 91;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ArrayInitParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        localctx = new WhileSentenciaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(ArrayInitParser.WHILE);
	        this.state = 95;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 96;
	        this.condition();
	        this.state = 97;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 98;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 499) !== 0)) {
	            this.state = 99;
	            this.content();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this.match(ArrayInitParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ArrayInitParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(ArrayInitParser.IF);
	        this.state = 108;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 109;
	        this.condition();
	        this.state = 110;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 111;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 112;
	        this.ifContent();
	        this.state = 113;
	        this.match(ArrayInitParser.RBRACE);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 114;
	            this.match(ArrayInitParser.ELSEIF);
	            this.state = 115;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 116;
	            this.condition();
	            this.state = 117;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 118;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 119;
	            this.elseifContent();
	            this.state = 120;
	            this.match(ArrayInitParser.RBRACE);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 127;
	            this.match(ArrayInitParser.ELSE);
	            this.state = 128;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 129;
	            this.elseContent();
	            this.state = 130;
	            this.match(ArrayInitParser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifContent() {
	    let localctx = new IfContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ArrayInitParser.RULE_ifContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 499) !== 0)) {
	            this.state = 134;
	            this.content();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseifContent() {
	    let localctx = new ElseifContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ArrayInitParser.RULE_elseifContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 499) !== 0)) {
	            this.state = 140;
	            this.content();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseContent() {
	    let localctx = new ElseContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ArrayInitParser.RULE_elseContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 499) !== 0)) {
	            this.state = 146;
	            this.content();
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArrayInitParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 38:
	        case 39:
	        case 41:
	            this.state = 152;
	            this.logicalExpression(0);
	            break;
	        case 29:
	            this.state = 153;
	            this.match(ArrayInitParser.NOT);
	            this.state = 154;
	            this.condition();
	            break;
	        case 44:
	        case 45:
	            this.state = 155;
	            this.trueOrFalse();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	trueOrFalse() {
	    let localctx = new TrueOrFalseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ArrayInitParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        _la = this._input.LA(1);
	        if(!(_la===44 || _la===45)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	logicalExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, ArrayInitParser.RULE_logicalExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalConParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 161;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 162;
	            this.logicalExpression(0);
	            this.state = 163;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionLogicaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            this.relationalExpression();
	            this.state = 170;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 166;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===27 || _la===28)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 167;
	                    this.relationalExpression(); 
	                }
	                this.state = 172;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicLogicalContext(this, new LogicalExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_logicalExpression);
	                this.state = 175;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 178; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 176;
	                		localctx.logic = this._input.LT(1);
	                		_la = this._input.LA(1);
	                		if(!(_la===27 || _la===28)) {
	                		    localctx.logic = this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		this.state = 177;
	                		this.logicalExpression(0);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 180; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 186;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ArrayInitParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RelacionalConParentesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 188;
	            this.relationalExpression();
	            this.state = 189;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionRelacionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.exp(0);
	            this.state = 196;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 192;
	                    localctx.relation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 132120576) !== 0))) {
	                        localctx.relation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 193;
	                    this.exp(0); 
	                }
	                this.state = 198;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printPlease() {
	    let localctx = new PrintPleaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ArrayInitParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(ArrayInitParser.PRINT);
	        this.state = 202;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 203;
	            this.match(ArrayInitParser.STRING);
	            break;

	        case 2:
	            this.state = 204;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 205;
	            this.concat();
	            break;

	        }
	        this.state = 208;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 210;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 209;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concat() {
	    let localctx = new ConcatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ArrayInitParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.atom();
	        this.state = 215; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 213;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 214;
	            this.atom();
	            this.state = 217; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7 || _la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ArrayInitParser.RULE_atom);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 219;
	            this.match(ArrayInitParser.STRING);
	            break;
	        case 17:
	        case 38:
	        case 39:
	        case 41:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this.exp(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incre() {
	    let localctx = new IncreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ArrayInitParser.RULE_incre);
	    var _la = 0;
	    try {
	        localctx = new IncrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(ArrayInitParser.ID);
	        this.state = 224;
	        this.match(ArrayInitParser.T__1);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 225;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decre() {
	    let localctx = new DecreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ArrayInitParser.RULE_decre);
	    var _la = 0;
	    try {
	        localctx = new DecrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(ArrayInitParser.ID);
	        this.state = 229;
	        this.match(ArrayInitParser.T__2);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 230;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	masi() {
	    let localctx = new MasiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ArrayInitParser.RULE_masi);
	    var _la = 0;
	    try {
	        localctx = new MasigualContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(ArrayInitParser.ID);
	        this.state = 234;
	        this.match(ArrayInitParser.T__3);
	        this.state = 235;
	        this.atom();
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 236;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	menosi() {
	    let localctx = new MenosiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ArrayInitParser.RULE_menosi);
	    var _la = 0;
	    try {
	        localctx = new MenosigualContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(ArrayInitParser.ID);
	        this.state = 240;
	        this.match(ArrayInitParser.T__4);
	        this.state = 241;
	        this.atom();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 242;
	            this.match(ArrayInitParser.FIN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, ArrayInitParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 246;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 247;
	            this.exp(0);
	            this.state = 248;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 250;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 249;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 252;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 253;
	            this.exp(0);
	            this.state = 254;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 255;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 256;
	            this.exp(0);
	            this.state = 257;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 259;
	            this.match(ArrayInitParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 260;
	            this.match(ArrayInitParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 261;
	            this.match(ArrayInitParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 275;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 273;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ResiudoContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 265;
	                    this.match(ArrayInitParser.RESI);
	                    this.state = 266;
	                    this.exp(7);
	                    break;

	                case 2:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 268;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 269;
	                    this.exp(6);
	                    break;

	                case 3:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 271;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 272;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 277;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	dataType() {
	    let localctx = new DataTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ArrayInitParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolos() {
	    let localctx = new SimbolosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ArrayInitParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.T__3 = 4;
ArrayInitParser.T__4 = 5;
ArrayInitParser.FIN = 6;
ArrayInitParser.PLUS = 7;
ArrayInitParser.MINUS = 8;
ArrayInitParser.TIMES = 9;
ArrayInitParser.DIV = 10;
ArrayInitParser.EQUALS = 11;
ArrayInitParser.GATO = 12;
ArrayInitParser.DOLLAR = 13;
ArrayInitParser.DOBLEPUNTO = 14;
ArrayInitParser.ANDPERSON = 15;
ArrayInitParser.COMMA = 16;
ArrayInitParser.LPAREN = 17;
ArrayInitParser.RPAREN = 18;
ArrayInitParser.LBRACE = 19;
ArrayInitParser.RBRACE = 20;
ArrayInitParser.IGUAL = 21;
ArrayInitParser.DISTINTO = 22;
ArrayInitParser.MAYOR = 23;
ArrayInitParser.MENOR = 24;
ArrayInitParser.MAYORIGUAL = 25;
ArrayInitParser.MENORIGUAL = 26;
ArrayInitParser.AND = 27;
ArrayInitParser.OR = 28;
ArrayInitParser.NOT = 29;
ArrayInitParser.PRINT = 30;
ArrayInitParser.IF = 31;
ArrayInitParser.ELSE = 32;
ArrayInitParser.ELSEIF = 33;
ArrayInitParser.WHILE = 34;
ArrayInitParser.NUM = 35;
ArrayInitParser.VUL = 36;
ArrayInitParser.V = 37;
ArrayInitParser.ID = 38;
ArrayInitParser.NUMBER = 39;
ArrayInitParser.STRING = 40;
ArrayInitParser.CHAR = 41;
ArrayInitParser.WS = 42;
ArrayInitParser.SALTO = 43;
ArrayInitParser.TRUE = 44;
ArrayInitParser.FALSE = 45;
ArrayInitParser.DIGIT = 46;
ArrayInitParser.RESI = 47;

ArrayInitParser.RULE_prog = 0;
ArrayInitParser.RULE_content = 1;
ArrayInitParser.RULE_declaration = 2;
ArrayInitParser.RULE_declarationAndAssignament = 3;
ArrayInitParser.RULE_assignment = 4;
ArrayInitParser.RULE_whileStatement = 5;
ArrayInitParser.RULE_ifStatement = 6;
ArrayInitParser.RULE_ifContent = 7;
ArrayInitParser.RULE_elseifContent = 8;
ArrayInitParser.RULE_elseContent = 9;
ArrayInitParser.RULE_condition = 10;
ArrayInitParser.RULE_trueOrFalse = 11;
ArrayInitParser.RULE_logicalExpression = 12;
ArrayInitParser.RULE_relationalExpression = 13;
ArrayInitParser.RULE_printPlease = 14;
ArrayInitParser.RULE_concat = 15;
ArrayInitParser.RULE_atom = 16;
ArrayInitParser.RULE_incre = 17;
ArrayInitParser.RULE_decre = 18;
ArrayInitParser.RULE_masi = 19;
ArrayInitParser.RULE_menosi = 20;
ArrayInitParser.RULE_exp = 21;
ArrayInitParser.RULE_dataType = 22;
ArrayInitParser.RULE_simbolos = 23;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_prog;
    }

	LBRACE() {
	    return this.getToken(ArrayInitParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
	};

	content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContentContext);
	    } else {
	        return this.getTypedRuleContext(ContentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_content;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	declarationAndAssignament() {
	    return this.getTypedRuleContext(DeclarationAndAssignamentContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	printPlease() {
	    return this.getTypedRuleContext(PrintPleaseContext,0);
	};

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	incre() {
	    return this.getTypedRuleContext(IncreContext,0);
	};

	decre() {
	    return this.getTypedRuleContext(DecreContext,0);
	};

	masi() {
	    return this.getTypedRuleContext(MasiContext,0);
	};

	menosi() {
	    return this.getTypedRuleContext(MenosiContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_declaration;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclaracionContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(ArrayInitParser.NUMBER, 0);
	};

	simbolos() {
	    return this.getTypedRuleContext(SimbolosContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DeclaracionContext = DeclaracionContext;

class DeclarationAndAssignamentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_declarationAndAssignament;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclAndAssigContext extends DeclarationAndAssignamentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	EQUALS() {
	    return this.getToken(ArrayInitParser.EQUALS, 0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(ArrayInitParser.NUMBER, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDeclAndAssig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DeclAndAssigContext = DeclAndAssigContext;

class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_assignment;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends AssignmentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(ArrayInitParser.EQUALS, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.AsignacionContext = AsignacionContext;

class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_whileStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class WhileSentenciaContext extends WhileStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(ArrayInitParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(ArrayInitParser.LPAREN, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	RPAREN() {
	    return this.getToken(ArrayInitParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(ArrayInitParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
	};

	content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContentContext);
	    } else {
	        return this.getTypedRuleContext(ContentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitWhileSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.WhileSentenciaContext = WhileSentenciaContext;

class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SentenciaIfContext extends IfStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(ArrayInitParser.IF, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.LPAREN);
	    } else {
	        return this.getToken(ArrayInitParser.LPAREN, i);
	    }
	};


	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.RPAREN);
	    } else {
	        return this.getToken(ArrayInitParser.RPAREN, i);
	    }
	};


	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.LBRACE);
	    } else {
	        return this.getToken(ArrayInitParser.LBRACE, i);
	    }
	};


	ifContent() {
	    return this.getTypedRuleContext(IfContentContext,0);
	};

	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.RBRACE);
	    } else {
	        return this.getToken(ArrayInitParser.RBRACE, i);
	    }
	};


	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.ELSEIF);
	    } else {
	        return this.getToken(ArrayInitParser.ELSEIF, i);
	    }
	};


	elseifContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseifContentContext);
	    } else {
	        return this.getTypedRuleContext(ElseifContentContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(ArrayInitParser.ELSE, 0);
	};

	elseContent() {
	    return this.getTypedRuleContext(ElseContentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitSentenciaIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.SentenciaIfContext = SentenciaIfContext;

class IfContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifContent;
    }

	content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContentContext);
	    } else {
	        return this.getTypedRuleContext(ContentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIfContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseifContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_elseifContent;
    }

	content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContentContext);
	    } else {
	        return this.getTypedRuleContext(ContentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitElseifContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_elseContent;
    }

	content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContentContext);
	    } else {
	        return this.getTypedRuleContext(ContentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitElseContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_condition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CondicionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logicalExpression() {
	    return this.getTypedRuleContext(LogicalExpressionContext,0);
	};

	NOT() {
	    return this.getToken(ArrayInitParser.NOT, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	trueOrFalse() {
	    return this.getTypedRuleContext(TrueOrFalseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.CondicionContext = CondicionContext;

class TrueOrFalseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_trueOrFalse;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VerdaderoOFalsoContext extends TrueOrFalseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ArrayInitParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ArrayInitParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitVerdaderoOFalso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.VerdaderoOFalsoContext = VerdaderoOFalsoContext;

class LogicalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_logicalExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExpresionLogicaContext extends LogicalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.logic = null;;
        super.copyFrom(ctx);
    }

	relationalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExpressionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.AND);
	    } else {
	        return this.getToken(ArrayInitParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.OR);
	    } else {
	        return this.getToken(ArrayInitParser.OR, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitExpresionLogica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ExpresionLogicaContext = ExpresionLogicaContext;

class LogicLogicalContext extends LogicalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.logic = null;;
        super.copyFrom(ctx);
    }

	logicalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalExpressionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.AND);
	    } else {
	        return this.getToken(ArrayInitParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.OR);
	    } else {
	        return this.getToken(ArrayInitParser.OR, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitLogicLogical(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.LogicLogicalContext = LogicLogicalContext;

class LogicalConParentesisContext extends LogicalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ArrayInitParser.LPAREN, 0);
	};

	logicalExpression() {
	    return this.getTypedRuleContext(LogicalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(ArrayInitParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitLogicalConParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.LogicalConParentesisContext = LogicalConParentesisContext;

class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_relationalExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RelacionalConParentesisContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ArrayInitParser.LPAREN, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(ArrayInitParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitRelacionalConParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.RelacionalConParentesisContext = RelacionalConParentesisContext;

class ExpresionRelacionalContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.relation = null;;
        super.copyFrom(ctx);
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	IGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.IGUAL);
	    } else {
	        return this.getToken(ArrayInitParser.IGUAL, i);
	    }
	};


	DISTINTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.DISTINTO);
	    } else {
	        return this.getToken(ArrayInitParser.DISTINTO, i);
	    }
	};


	MAYOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.MAYOR);
	    } else {
	        return this.getToken(ArrayInitParser.MAYOR, i);
	    }
	};


	MENOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.MENOR);
	    } else {
	        return this.getToken(ArrayInitParser.MENOR, i);
	    }
	};


	MAYORIGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.MAYORIGUAL);
	    } else {
	        return this.getToken(ArrayInitParser.MAYORIGUAL, i);
	    }
	};


	MENORIGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.MENORIGUAL);
	    } else {
	        return this.getToken(ArrayInitParser.MENORIGUAL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitExpresionRelacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ExpresionRelacionalContext = ExpresionRelacionalContext;

class PrintPleaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_printPlease;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImpresionContext extends PrintPleaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PRINT() {
	    return this.getToken(ArrayInitParser.PRINT, 0);
	};

	LPAREN() {
	    return this.getToken(ArrayInitParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ArrayInitParser.RPAREN, 0);
	};

	STRING() {
	    return this.getToken(ArrayInitParser.STRING, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	concat() {
	    return this.getTypedRuleContext(ConcatContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ImpresionContext = ImpresionContext;

class ConcatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_concat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConcatenacionContext extends ConcatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.PLUS);
	    } else {
	        return this.getToken(ArrayInitParser.PLUS, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.COMMA);
	    } else {
	        return this.getToken(ArrayInitParser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitConcatenacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ConcatenacionContext = ConcatenacionContext;

class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_atom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(ArrayInitParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.StringContext = StringContext;

class ExppContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitExpp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ExppContext = ExppContext;

class IncreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_incre;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IncrementoContext extends IncreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IncrementoContext = IncrementoContext;

class DecreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_decre;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecrementoContext extends DecreContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDecremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DecrementoContext = DecrementoContext;

class MasiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_masi;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MasigualContext extends MasiContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitMasigual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.MasigualContext = MasigualContext;

class MenosiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_menosi;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MenosigualContext extends MenosiContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	FIN() {
	    return this.getToken(ArrayInitParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitMenosigual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.MenosigualContext = MenosigualContext;

class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_exp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ArrayInitParser.LPAREN, 0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(ArrayInitParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ParentesisContext = ParentesisContext;

class TimesDivContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	TIMES() {
	    return this.getToken(ArrayInitParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(ArrayInitParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitTimesDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.TimesDivContext = TimesDivContext;

class ParentesisMultiplyContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.LPAREN);
	    } else {
	        return this.getToken(ArrayInitParser.LPAREN, i);
	    }
	};


	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArrayInitParser.RPAREN);
	    } else {
	        return this.getToken(ArrayInitParser.RPAREN, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitParentesisMultiply(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ParentesisMultiplyContext = ParentesisMultiplyContext;

class ResiudoContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	RESI() {
	    return this.getToken(ArrayInitParser.RESI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitResiudo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ResiudoContext = ResiudoContext;

class NumeroContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(ArrayInitParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.NumeroContext = NumeroContext;

class CharContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(ArrayInitParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.CharContext = CharContext;

class PlusSubtractionContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(ArrayInitParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ArrayInitParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPlusSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PlusSubtractionContext = PlusSubtractionContext;

class IdentificadorContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IdentificadorContext = IdentificadorContext;

class DataTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_dataType;
    }

	NUM() {
	    return this.getToken(ArrayInitParser.NUM, 0);
	};

	VUL() {
	    return this.getToken(ArrayInitParser.VUL, 0);
	};

	V() {
	    return this.getToken(ArrayInitParser.V, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDataType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimbolosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_simbolos;
    }

	PLUS() {
	    return this.getToken(ArrayInitParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ArrayInitParser.MINUS, 0);
	};

	TIMES() {
	    return this.getToken(ArrayInitParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(ArrayInitParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitSimbolos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ArrayInitParser.ProgContext = ProgContext; 
ArrayInitParser.ContentContext = ContentContext; 
ArrayInitParser.DeclarationContext = DeclarationContext; 
ArrayInitParser.DeclarationAndAssignamentContext = DeclarationAndAssignamentContext; 
ArrayInitParser.AssignmentContext = AssignmentContext; 
ArrayInitParser.WhileStatementContext = WhileStatementContext; 
ArrayInitParser.IfStatementContext = IfStatementContext; 
ArrayInitParser.IfContentContext = IfContentContext; 
ArrayInitParser.ElseifContentContext = ElseifContentContext; 
ArrayInitParser.ElseContentContext = ElseContentContext; 
ArrayInitParser.ConditionContext = ConditionContext; 
ArrayInitParser.TrueOrFalseContext = TrueOrFalseContext; 
ArrayInitParser.LogicalExpressionContext = LogicalExpressionContext; 
ArrayInitParser.RelationalExpressionContext = RelationalExpressionContext; 
ArrayInitParser.PrintPleaseContext = PrintPleaseContext; 
ArrayInitParser.ConcatContext = ConcatContext; 
ArrayInitParser.AtomContext = AtomContext; 
ArrayInitParser.IncreContext = IncreContext; 
ArrayInitParser.DecreContext = DecreContext; 
ArrayInitParser.MasiContext = MasiContext; 
ArrayInitParser.MenosiContext = MenosiContext; 
ArrayInitParser.ExpContext = ExpContext; 
ArrayInitParser.DataTypeContext = DataTypeContext; 
ArrayInitParser.SimbolosContext = SimbolosContext; 
