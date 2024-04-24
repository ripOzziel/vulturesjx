// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,43,223,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,58,8,1,1,2,1,2,1,2,3,2,63,8,2,1,2,3,2,66,8,2,1,3,1,3,1,3,1,3,3,3,72,
8,3,1,3,3,3,75,8,3,1,4,1,4,1,4,1,4,3,4,81,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,
5,89,8,5,10,5,12,5,92,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,102,8,6,10,
6,12,6,105,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,114,8,6,10,6,12,6,117,9,6,
1,6,1,6,5,6,121,8,6,10,6,12,6,124,9,6,1,6,1,6,1,6,5,6,129,8,6,10,6,12,6,
132,9,6,1,6,3,6,135,8,6,1,7,1,7,1,7,1,7,3,7,141,8,7,1,8,1,8,1,9,1,9,1,9,
5,9,148,8,9,10,9,12,9,151,9,9,1,10,1,10,1,10,5,10,156,8,10,10,10,12,10,159,
9,10,1,11,1,11,1,11,1,11,1,11,3,11,166,8,11,1,11,1,11,3,11,170,8,11,1,12,
1,12,1,12,4,12,175,8,12,11,12,12,12,176,1,13,1,13,3,13,181,8,13,1,14,1,14,
1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,194,8,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,206,8,16,1,16,1,16,1,16,1,16,1,16,
1,16,5,16,214,8,16,10,16,12,16,217,9,16,1,17,1,17,1,18,1,18,1,18,0,1,32,
19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,8,1,0,36,37,1,0,
42,43,1,0,25,26,1,0,19,24,1,0,7,8,1,0,5,6,1,0,33,35,1,0,5,8,239,0,38,1,0,
0,0,2,57,1,0,0,0,4,59,1,0,0,0,6,67,1,0,0,0,8,76,1,0,0,0,10,82,1,0,0,0,12,
95,1,0,0,0,14,140,1,0,0,0,16,142,1,0,0,0,18,144,1,0,0,0,20,152,1,0,0,0,22,
160,1,0,0,0,24,171,1,0,0,0,26,180,1,0,0,0,28,182,1,0,0,0,30,185,1,0,0,0,
32,205,1,0,0,0,34,218,1,0,0,0,36,220,1,0,0,0,38,39,5,1,0,0,39,43,5,17,0,
0,40,42,3,2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,
44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,18,0,0,47,1,1,0,0,0,48,58,3,4,2,0,49,
58,3,6,3,0,50,58,3,8,4,0,51,58,3,12,6,0,52,58,3,10,5,0,53,58,3,22,11,0,54,
58,3,34,17,0,55,58,3,28,14,0,56,58,3,30,15,0,57,48,1,0,0,0,57,49,1,0,0,0,
57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,53,1,0,0,0,57,54,1,0,0,0,57,
55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,60,3,34,17,0,60,62,7,0,0,0,61,63,
3,36,18,0,62,61,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,66,5,4,0,0,65,64,
1,0,0,0,65,66,1,0,0,0,66,5,1,0,0,0,67,68,3,34,17,0,68,69,7,0,0,0,69,71,5,
9,0,0,70,72,3,32,16,0,71,70,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,75,5,
4,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,7,1,0,0,0,76,77,5,36,0,0,77,78,5,9,
0,0,78,80,3,32,16,0,79,81,5,4,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,9,1,0,0,
0,82,83,5,32,0,0,83,84,5,15,0,0,84,85,3,14,7,0,85,86,5,16,0,0,86,90,5,17,
0,0,87,89,3,2,1,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,
0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,18,0,0,94,11,1,0,0,0,95,96,5,29,0,
0,96,97,5,15,0,0,97,98,3,14,7,0,98,99,5,16,0,0,99,103,5,17,0,0,100,102,3,
2,1,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,
106,1,0,0,0,105,103,1,0,0,0,106,122,5,18,0,0,107,108,5,31,0,0,108,109,5,
15,0,0,109,110,3,14,7,0,110,111,5,16,0,0,111,115,5,17,0,0,112,114,3,2,1,
0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,
1,0,0,0,117,115,1,0,0,0,118,119,5,18,0,0,119,121,1,0,0,0,120,107,1,0,0,0,
121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,134,1,0,0,0,124,122,
1,0,0,0,125,126,5,30,0,0,126,130,5,17,0,0,127,129,3,2,1,0,128,127,1,0,0,
0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,130,
1,0,0,0,133,135,5,18,0,0,134,125,1,0,0,0,134,135,1,0,0,0,135,13,1,0,0,0,
136,141,3,18,9,0,137,138,5,27,0,0,138,141,3,14,7,0,139,141,3,16,8,0,140,
136,1,0,0,0,140,137,1,0,0,0,140,139,1,0,0,0,141,15,1,0,0,0,142,143,7,1,0,
0,143,17,1,0,0,0,144,149,3,20,10,0,145,146,7,2,0,0,146,148,3,20,10,0,147,
145,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,19,1,0,0,
0,151,149,1,0,0,0,152,157,3,32,16,0,153,154,7,3,0,0,154,156,3,32,16,0,155,
153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,21,1,0,0,
0,159,157,1,0,0,0,160,161,5,28,0,0,161,165,5,15,0,0,162,166,5,38,0,0,163,
166,3,32,16,0,164,166,3,24,12,0,165,162,1,0,0,0,165,163,1,0,0,0,165,164,
1,0,0,0,166,167,1,0,0,0,167,169,5,16,0,0,168,170,5,4,0,0,169,168,1,0,0,0,
169,170,1,0,0,0,170,23,1,0,0,0,171,174,3,26,13,0,172,173,5,5,0,0,173,175,
3,26,13,0,174,172,1,0,0,0,175,176,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,
0,177,25,1,0,0,0,178,181,5,38,0,0,179,181,3,32,16,0,180,178,1,0,0,0,180,
179,1,0,0,0,181,27,1,0,0,0,182,183,5,36,0,0,183,184,5,2,0,0,184,29,1,0,0,
0,185,186,5,36,0,0,186,187,5,3,0,0,187,31,1,0,0,0,188,189,6,16,-1,0,189,
190,5,15,0,0,190,191,3,32,16,0,191,193,5,16,0,0,192,194,3,32,16,0,193,192,
1,0,0,0,193,194,1,0,0,0,194,206,1,0,0,0,195,196,5,15,0,0,196,197,3,32,16,
0,197,198,5,16,0,0,198,199,5,15,0,0,199,200,3,32,16,0,200,201,5,16,0,0,201,
206,1,0,0,0,202,206,5,37,0,0,203,206,5,39,0,0,204,206,5,36,0,0,205,188,1,
0,0,0,205,195,1,0,0,0,205,202,1,0,0,0,205,203,1,0,0,0,205,204,1,0,0,0,206,
215,1,0,0,0,207,208,10,5,0,0,208,209,7,4,0,0,209,214,3,32,16,6,210,211,10,
4,0,0,211,212,7,5,0,0,212,214,3,32,16,5,213,207,1,0,0,0,213,210,1,0,0,0,
214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,33,1,0,0,0,217,215,1,
0,0,0,218,219,7,6,0,0,219,35,1,0,0,0,220,221,7,7,0,0,221,37,1,0,0,0,24,43,
57,62,65,71,74,80,90,103,115,122,130,134,140,149,157,165,169,176,180,193,
205,213,215];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'hiram'", "'++'", "'--'", "';'", "'+'", 
                            "'-'", "'*'", "'/'", "'='", "'#'", "'$'", "':'", 
                            "'&'", "','", "'('", "')'", "'{'", "'}'", "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='", "'&&'", 
                            "'||'", "'!'", "'printPlease'", "'if'", "'else'", 
                            "'elseif'", "'mien'", "'num'", "'vul'", "'v'", 
                            null, null, null, null, null, "'\\n'", "'true'", 
                            "'false'" ];
    static symbolicNames = [ null, null, null, null, "FIN", "PLUS", "MINUS", 
                             "TIMES", "DIV", "EQUALS", "GATO", "DOLLAR", 
                             "DOBLEPUNTO", "ANDPERSON", "COMMA", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "IGUAL", "DISTINTO", 
                             "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", 
                             "AND", "OR", "NOT", "PRINT", "IF", "ELSE", 
                             "ELSEIF", "WHILE", "NUM", "VUL", "V", "ID", 
                             "NUMBER", "STRING", "CHAR", "WS", "SALTO", 
                             "TRUE", "FALSE" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "condition", "trueOrFalse", "logicalExpression", 
                         "relationalExpression", "printPlease", "concat", 
                         "atom", "incre", "decre", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.exp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    exp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
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
	        this.state = 38;
	        this.match(ArrayInitParser.T__0);
	        this.state = 39;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 40;
	            this.content();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 52;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 53;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 54;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 55;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 56;
	            this.decre();
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
	        this.state = 59;
	        this.dataType();
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0)) {
	            this.state = 61;
	            this.simbolos();
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 64;
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
	        this.state = 67;
	        this.dataType();
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 69;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 70;
	            this.exp(0);

	        }
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 73;
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
	        this.state = 76;
	        this.match(ArrayInitParser.ID);
	        this.state = 77;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 78;
	        this.exp(0);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 79;
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
	        this.state = 82;
	        this.match(ArrayInitParser.WHILE);
	        this.state = 83;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 84;
	        this.condition();
	        this.state = 85;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 86;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 87;
	            this.content();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
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
	        this.state = 95;
	        this.match(ArrayInitParser.IF);
	        this.state = 96;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 97;
	        this.condition();
	        this.state = 98;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 99;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 100;
	            this.content();
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 106;
	        this.match(ArrayInitParser.RBRACE);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 107;
	            this.match(ArrayInitParser.ELSEIF);
	            this.state = 108;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 109;
	            this.condition();
	            this.state = 110;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 111;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	                this.state = 112;
	                this.content();
	                this.state = 117;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 118;
	            this.match(ArrayInitParser.RBRACE);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 125;
	            this.match(ArrayInitParser.ELSE);
	            this.state = 126;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	                this.state = 127;
	                this.content();
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 133;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ArrayInitParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 36:
	        case 37:
	        case 39:
	            this.state = 136;
	            this.logicalExpression();
	            break;
	        case 27:
	            this.state = 137;
	            this.match(ArrayInitParser.NOT);
	            this.state = 138;
	            this.condition();
	            break;
	        case 42:
	        case 43:
	            this.state = 139;
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
	    this.enterRule(localctx, 16, ArrayInitParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
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



	logicalExpression() {
	    let localctx = new LogicalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ArrayInitParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.relationalExpression();
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 145;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 146;
	            this.relationalExpression();
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



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArrayInitParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.exp(0);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0)) {
	            this.state = 153;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 154;
	            this.exp(0);
	            this.state = 159;
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



	printPlease() {
	    let localctx = new PrintPleaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ArrayInitParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(ArrayInitParser.PRINT);
	        this.state = 161;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 162;
	            this.match(ArrayInitParser.STRING);
	            break;

	        case 2:
	            this.state = 163;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 164;
	            this.concat();
	            break;

	        }
	        this.state = 167;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 168;
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
	    this.enterRule(localctx, 24, ArrayInitParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.atom();
	        this.state = 174; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 172;
	            this.match(ArrayInitParser.PLUS);
	            this.state = 173;
	            this.atom();
	            this.state = 176; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
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
	    this.enterRule(localctx, 26, ArrayInitParser.RULE_atom);
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(ArrayInitParser.STRING);
	            break;
	        case 15:
	        case 36:
	        case 37:
	        case 39:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
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
	    this.enterRule(localctx, 28, ArrayInitParser.RULE_incre);
	    try {
	        localctx = new IncrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(ArrayInitParser.ID);
	        this.state = 183;
	        this.match(ArrayInitParser.T__1);
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
	    this.enterRule(localctx, 30, ArrayInitParser.RULE_decre);
	    try {
	        localctx = new DecrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(ArrayInitParser.ID);
	        this.state = 186;
	        this.match(ArrayInitParser.T__2);
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
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, ArrayInitParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 189;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 190;
	            this.exp(0);
	            this.state = 191;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 193;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 192;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 195;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 196;
	            this.exp(0);
	            this.state = 197;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 198;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 199;
	            this.exp(0);
	            this.state = 200;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 202;
	            this.match(ArrayInitParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 203;
	            this.match(ArrayInitParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 204;
	            this.match(ArrayInitParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 215;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 213;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 207;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 208;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 209;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 211;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 212;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 217;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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
	    this.enterRule(localctx, 34, ArrayInitParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 36, ArrayInitParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0))) {
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
ArrayInitParser.FIN = 4;
ArrayInitParser.PLUS = 5;
ArrayInitParser.MINUS = 6;
ArrayInitParser.TIMES = 7;
ArrayInitParser.DIV = 8;
ArrayInitParser.EQUALS = 9;
ArrayInitParser.GATO = 10;
ArrayInitParser.DOLLAR = 11;
ArrayInitParser.DOBLEPUNTO = 12;
ArrayInitParser.ANDPERSON = 13;
ArrayInitParser.COMMA = 14;
ArrayInitParser.LPAREN = 15;
ArrayInitParser.RPAREN = 16;
ArrayInitParser.LBRACE = 17;
ArrayInitParser.RBRACE = 18;
ArrayInitParser.IGUAL = 19;
ArrayInitParser.DISTINTO = 20;
ArrayInitParser.MAYOR = 21;
ArrayInitParser.MENOR = 22;
ArrayInitParser.MAYORIGUAL = 23;
ArrayInitParser.MENORIGUAL = 24;
ArrayInitParser.AND = 25;
ArrayInitParser.OR = 26;
ArrayInitParser.NOT = 27;
ArrayInitParser.PRINT = 28;
ArrayInitParser.IF = 29;
ArrayInitParser.ELSE = 30;
ArrayInitParser.ELSEIF = 31;
ArrayInitParser.WHILE = 32;
ArrayInitParser.NUM = 33;
ArrayInitParser.VUL = 34;
ArrayInitParser.V = 35;
ArrayInitParser.ID = 36;
ArrayInitParser.NUMBER = 37;
ArrayInitParser.STRING = 38;
ArrayInitParser.CHAR = 39;
ArrayInitParser.WS = 40;
ArrayInitParser.SALTO = 41;
ArrayInitParser.TRUE = 42;
ArrayInitParser.FALSE = 43;

ArrayInitParser.RULE_prog = 0;
ArrayInitParser.RULE_content = 1;
ArrayInitParser.RULE_declaration = 2;
ArrayInitParser.RULE_declarationAndAssignament = 3;
ArrayInitParser.RULE_assignment = 4;
ArrayInitParser.RULE_whileStatement = 5;
ArrayInitParser.RULE_ifStatement = 6;
ArrayInitParser.RULE_condition = 7;
ArrayInitParser.RULE_trueOrFalse = 8;
ArrayInitParser.RULE_logicalExpression = 9;
ArrayInitParser.RULE_relationalExpression = 10;
ArrayInitParser.RULE_printPlease = 11;
ArrayInitParser.RULE_concat = 12;
ArrayInitParser.RULE_atom = 13;
ArrayInitParser.RULE_incre = 14;
ArrayInitParser.RULE_decre = 15;
ArrayInitParser.RULE_exp = 16;
ArrayInitParser.RULE_dataType = 17;
ArrayInitParser.RULE_simbolos = 18;

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


	ELSE() {
	    return this.getToken(ArrayInitParser.ELSE, 0);
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

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDecremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DecrementoContext = DecrementoContext;

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
ArrayInitParser.ConditionContext = ConditionContext; 
ArrayInitParser.TrueOrFalseContext = TrueOrFalseContext; 
ArrayInitParser.LogicalExpressionContext = LogicalExpressionContext; 
ArrayInitParser.RelationalExpressionContext = RelationalExpressionContext; 
ArrayInitParser.PrintPleaseContext = PrintPleaseContext; 
ArrayInitParser.ConcatContext = ConcatContext; 
ArrayInitParser.AtomContext = AtomContext; 
ArrayInitParser.IncreContext = IncreContext; 
ArrayInitParser.DecreContext = DecreContext; 
ArrayInitParser.ExpContext = ExpContext; 
ArrayInitParser.DataTypeContext = DataTypeContext; 
ArrayInitParser.SimbolosContext = SimbolosContext; 
