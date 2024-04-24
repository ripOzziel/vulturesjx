// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,41,213,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,56,8,1,
11,1,12,1,57,1,2,1,2,1,2,3,2,63,8,2,1,2,3,2,66,8,2,1,3,1,3,1,3,1,3,3,3,72,
8,3,1,3,3,3,75,8,3,1,4,1,4,1,4,1,4,3,4,81,8,4,1,5,1,5,1,5,1,5,3,5,87,8,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,4,9,113,8,9,11,9,12,9,114,1,10,1,10,1,10,1,10,1,
10,1,10,3,10,123,8,10,1,11,1,11,1,11,1,11,3,11,129,8,11,1,12,1,12,1,13,1,
13,1,13,5,13,136,8,13,10,13,12,13,139,9,13,1,14,1,14,1,14,5,14,144,8,14,
10,14,12,14,147,9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,
16,1,16,1,16,3,16,162,8,16,1,16,1,16,3,16,166,8,16,1,17,1,17,1,17,4,17,171,
8,17,11,17,12,17,172,1,18,1,18,3,18,177,8,18,1,19,1,19,1,19,1,19,1,19,3,
19,184,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,196,8,
19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,204,8,19,10,19,12,19,207,9,19,1,20,
1,20,1,21,1,21,1,21,0,1,38,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,0,8,1,0,33,34,1,0,39,40,1,0,23,24,1,0,17,22,1,0,5,6,1,
0,3,4,1,0,30,32,1,0,3,6,222,0,44,1,0,0,0,2,55,1,0,0,0,4,59,1,0,0,0,6,67,
1,0,0,0,8,76,1,0,0,0,10,86,1,0,0,0,12,88,1,0,0,0,14,96,1,0,0,0,16,102,1,
0,0,0,18,110,1,0,0,0,20,116,1,0,0,0,22,128,1,0,0,0,24,130,1,0,0,0,26,132,
1,0,0,0,28,140,1,0,0,0,30,148,1,0,0,0,32,156,1,0,0,0,34,167,1,0,0,0,36,176,
1,0,0,0,38,195,1,0,0,0,40,208,1,0,0,0,42,210,1,0,0,0,44,45,5,1,0,0,45,46,
5,15,0,0,46,47,3,2,1,0,47,48,5,16,0,0,48,1,1,0,0,0,49,56,3,4,2,0,50,56,3,
6,3,0,51,56,3,8,4,0,52,56,3,10,5,0,53,56,3,32,16,0,54,56,3,40,20,0,55,49,
1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,
0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,3,1,0,0,0,59,60,3,40,
20,0,60,62,7,0,0,0,61,63,3,42,21,0,62,61,1,0,0,0,62,63,1,0,0,0,63,65,1,0,
0,0,64,66,5,2,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,5,1,0,0,0,67,68,3,40,20,
0,68,69,7,0,0,0,69,71,5,7,0,0,70,72,3,38,19,0,71,70,1,0,0,0,71,72,1,0,0,
0,72,74,1,0,0,0,73,75,5,2,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,7,1,0,0,0,76,
77,5,33,0,0,77,78,5,7,0,0,78,80,3,38,19,0,79,81,5,2,0,0,80,79,1,0,0,0,80,
81,1,0,0,0,81,9,1,0,0,0,82,87,3,14,7,0,83,87,3,18,9,0,84,87,3,20,10,0,85,
87,3,12,6,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,11,
1,0,0,0,88,89,5,27,0,0,89,90,5,13,0,0,90,91,3,22,11,0,91,92,5,14,0,0,92,
93,5,15,0,0,93,94,3,2,1,0,94,95,5,16,0,0,95,13,1,0,0,0,96,97,3,12,6,0,97,
98,5,28,0,0,98,99,5,15,0,0,99,100,3,2,1,0,100,101,5,16,0,0,101,15,1,0,0,
0,102,103,5,29,0,0,103,104,5,13,0,0,104,105,3,22,11,0,105,106,5,14,0,0,106,
107,5,15,0,0,107,108,3,2,1,0,108,109,5,16,0,0,109,17,1,0,0,0,110,112,3,12,
6,0,111,113,3,16,8,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,
115,1,0,0,0,115,19,1,0,0,0,116,122,3,18,9,0,117,118,5,28,0,0,118,119,5,15,
0,0,119,120,3,2,1,0,120,121,5,16,0,0,121,123,1,0,0,0,122,117,1,0,0,0,122,
123,1,0,0,0,123,21,1,0,0,0,124,129,3,26,13,0,125,126,5,25,0,0,126,129,3,
22,11,0,127,129,3,24,12,0,128,124,1,0,0,0,128,125,1,0,0,0,128,127,1,0,0,
0,129,23,1,0,0,0,130,131,7,1,0,0,131,25,1,0,0,0,132,137,3,28,14,0,133,134,
7,2,0,0,134,136,3,28,14,0,135,133,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,
0,137,138,1,0,0,0,138,27,1,0,0,0,139,137,1,0,0,0,140,145,3,38,19,0,141,142,
7,3,0,0,142,144,3,38,19,0,143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,
0,145,146,1,0,0,0,146,29,1,0,0,0,147,145,1,0,0,0,148,149,5,41,0,0,149,150,
5,13,0,0,150,151,3,22,11,0,151,152,5,14,0,0,152,153,5,15,0,0,153,154,3,2,
1,0,154,155,5,16,0,0,155,31,1,0,0,0,156,157,5,26,0,0,157,161,5,13,0,0,158,
162,5,35,0,0,159,162,3,38,19,0,160,162,3,34,17,0,161,158,1,0,0,0,161,159,
1,0,0,0,161,160,1,0,0,0,162,163,1,0,0,0,163,165,5,14,0,0,164,166,5,2,0,0,
165,164,1,0,0,0,165,166,1,0,0,0,166,33,1,0,0,0,167,170,3,36,18,0,168,169,
5,3,0,0,169,171,3,36,18,0,170,168,1,0,0,0,171,172,1,0,0,0,172,170,1,0,0,
0,172,173,1,0,0,0,173,35,1,0,0,0,174,177,5,35,0,0,175,177,3,38,19,0,176,
174,1,0,0,0,176,175,1,0,0,0,177,37,1,0,0,0,178,179,6,19,-1,0,179,180,5,13,
0,0,180,181,3,38,19,0,181,183,5,14,0,0,182,184,3,38,19,0,183,182,1,0,0,0,
183,184,1,0,0,0,184,196,1,0,0,0,185,186,5,13,0,0,186,187,3,38,19,0,187,188,
5,14,0,0,188,189,5,13,0,0,189,190,3,38,19,0,190,191,5,14,0,0,191,196,1,0,
0,0,192,196,5,34,0,0,193,196,5,36,0,0,194,196,5,33,0,0,195,178,1,0,0,0,195,
185,1,0,0,0,195,192,1,0,0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,205,1,0,
0,0,197,198,10,5,0,0,198,199,7,4,0,0,199,204,3,38,19,6,200,201,10,4,0,0,
201,202,7,5,0,0,202,204,3,38,19,5,203,197,1,0,0,0,203,200,1,0,0,0,204,207,
1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,39,1,0,0,0,207,205,1,0,0,0,208,
209,7,6,0,0,209,41,1,0,0,0,210,211,7,7,0,0,211,43,1,0,0,0,21,55,57,62,65,
71,74,80,86,114,122,128,137,145,161,165,172,176,183,195,203,205];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'hiram'", "';'", "'+'", "'-'", "'*'", 
                            "'/'", "'='", "'#'", "'$'", "':'", "'&'", "','", 
                            "'('", "')'", "'{'", "'}'", "'=='", "'!='", 
                            "'>'", "'<'", "'>='", "'<='", "'&&'", "'||'", 
                            "'!'", "'printPlease'", "'if'", "'else'", "'elseif'", 
                            "'num'", "'vul'", "'v'", null, null, null, null, 
                            null, "'\\n'", "'true'", "'false'", "'mien'" ];
    static symbolicNames = [ null, null, "FIN", "PLUS", "MINUS", "TIMES", 
                             "DIV", "EQUALS", "GATO", "DOLLAR", "DOBLEPUNTO", 
                             "ANDPERSON", "COMMA", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "IGUAL", "DISTINTO", "MAYOR", "MENOR", 
                             "MAYORIGUAL", "MENORIGUAL", "AND", "OR", "NOT", 
                             "PRINT", "IF", "ELSE", "ELSEIF", "NUM", "VUL", 
                             "V", "ID", "NUMBER", "STRING", "CHAR", "WS", 
                             "SALTO", "TRUE", "FALSE", "WHILE" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "ifStatement", "ifSentence", "ifWithElse", 
                         "elseIfSintax", "ifWithElseIf", "ifWithElseIfElse", 
                         "condition", "trueOrFalse", "logicalExpression", 
                         "relationalExpression", "whileStatement", "printPlease", 
                         "concat", "atom", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 19:
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(ArrayInitParser.T__0);
	        this.state = 45;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 46;
	        this.content();
	        this.state = 47;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 55;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 49;
	                this.declaration();
	                break;

	            case 2:
	                this.state = 50;
	                this.declarationAndAssignament();
	                break;

	            case 3:
	                this.state = 51;
	                this.assignment();
	                break;

	            case 4:
	                this.state = 52;
	                this.ifStatement();
	                break;

	            case 5:
	                this.state = 53;
	                this.printPlease();
	                break;

	            case 6:
	                this.state = 54;
	                this.dataType();
	                break;

	            }
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 243) !== 0));
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
	        if(!(_la===33 || _la===34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0)) {
	            this.state = 61;
	            this.simbolos();
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
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
	        if(!(_la===33 || _la===34)) {
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
	        if(_la===2) {
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
	        if(_la===2) {
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ArrayInitParser.RULE_ifStatement);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.ifWithElse();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.ifWithElseIf();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.ifWithElseIfElse();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.ifSentence();
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



	ifSentence() {
	    let localctx = new IfSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ArrayInitParser.RULE_ifSentence);
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(ArrayInitParser.IF);
	        this.state = 89;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 90;
	        this.condition();
	        this.state = 91;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 92;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 93;
	        this.content();
	        this.state = 94;
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



	ifWithElse() {
	    let localctx = new IfWithElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ArrayInitParser.RULE_ifWithElse);
	    try {
	        localctx = new IfConElseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.ifSentence();
	        this.state = 97;
	        this.match(ArrayInitParser.ELSE);
	        this.state = 98;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 99;
	        this.content();
	        this.state = 100;
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



	elseIfSintax() {
	    let localctx = new ElseIfSintaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ArrayInitParser.RULE_elseIfSintax);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(ArrayInitParser.ELSEIF);
	        this.state = 103;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 104;
	        this.condition();
	        this.state = 105;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 106;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 107;
	        this.content();
	        this.state = 108;
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



	ifWithElseIf() {
	    let localctx = new IfWithElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ArrayInitParser.RULE_ifWithElseIf);
	    var _la = 0;
	    try {
	        localctx = new IfConElseIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.ifSentence();
	        this.state = 112; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 111;
	            this.elseIfSintax();
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===29);
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



	ifWithElseIfElse() {
	    let localctx = new IfWithElseIfElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArrayInitParser.RULE_ifWithElseIfElse);
	    var _la = 0;
	    try {
	        localctx = new IfConElseIfConElseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.ifWithElseIf();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 117;
	            this.match(ArrayInitParser.ELSE);
	            this.state = 118;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 119;
	            this.content();
	            this.state = 120;
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
	    this.enterRule(localctx, 22, ArrayInitParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 33:
	        case 34:
	        case 36:
	            this.state = 124;
	            this.logicalExpression();
	            break;
	        case 25:
	            this.state = 125;
	            this.match(ArrayInitParser.NOT);
	            this.state = 126;
	            this.condition();
	            break;
	        case 39:
	        case 40:
	            this.state = 127;
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
	    this.enterRule(localctx, 24, ArrayInitParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===39 || _la===40)) {
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
	    this.enterRule(localctx, 26, ArrayInitParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.relationalExpression();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 133;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===24)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 134;
	            this.relationalExpression();
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



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ArrayInitParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.exp(0);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8257536) !== 0)) {
	            this.state = 141;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8257536) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 142;
	            this.exp(0);
	            this.state = 147;
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ArrayInitParser.RULE_whileStatement);
	    try {
	        localctx = new WhileSentenciaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(ArrayInitParser.WHILE);
	        this.state = 149;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 150;
	        this.condition();
	        this.state = 151;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 152;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 153;
	        this.content();
	        this.state = 154;
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



	printPlease() {
	    let localctx = new PrintPleaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ArrayInitParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(ArrayInitParser.PRINT);
	        this.state = 157;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 158;
	            this.match(ArrayInitParser.STRING);
	            break;

	        case 2:
	            this.state = 159;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 160;
	            this.concat();
	            break;

	        }
	        this.state = 163;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 164;
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
	    this.enterRule(localctx, 34, ArrayInitParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.atom();
	        this.state = 170; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 168;
	            this.match(ArrayInitParser.PLUS);
	            this.state = 169;
	            this.atom();
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
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
	    this.enterRule(localctx, 36, ArrayInitParser.RULE_atom);
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.match(ArrayInitParser.STRING);
	            break;
	        case 13:
	        case 33:
	        case 34:
	        case 36:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
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


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, ArrayInitParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 179;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 180;
	            this.exp(0);
	            this.state = 181;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 183;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 182;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 185;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 186;
	            this.exp(0);
	            this.state = 187;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 188;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 189;
	            this.exp(0);
	            this.state = 190;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 192;
	            this.match(ArrayInitParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 193;
	            this.match(ArrayInitParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 194;
	            this.match(ArrayInitParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 205;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 203;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 197;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 198;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 199;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 200;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 201;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 202;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 207;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	    this.enterRule(localctx, 40, ArrayInitParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 42, ArrayInitParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0))) {
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
ArrayInitParser.FIN = 2;
ArrayInitParser.PLUS = 3;
ArrayInitParser.MINUS = 4;
ArrayInitParser.TIMES = 5;
ArrayInitParser.DIV = 6;
ArrayInitParser.EQUALS = 7;
ArrayInitParser.GATO = 8;
ArrayInitParser.DOLLAR = 9;
ArrayInitParser.DOBLEPUNTO = 10;
ArrayInitParser.ANDPERSON = 11;
ArrayInitParser.COMMA = 12;
ArrayInitParser.LPAREN = 13;
ArrayInitParser.RPAREN = 14;
ArrayInitParser.LBRACE = 15;
ArrayInitParser.RBRACE = 16;
ArrayInitParser.IGUAL = 17;
ArrayInitParser.DISTINTO = 18;
ArrayInitParser.MAYOR = 19;
ArrayInitParser.MENOR = 20;
ArrayInitParser.MAYORIGUAL = 21;
ArrayInitParser.MENORIGUAL = 22;
ArrayInitParser.AND = 23;
ArrayInitParser.OR = 24;
ArrayInitParser.NOT = 25;
ArrayInitParser.PRINT = 26;
ArrayInitParser.IF = 27;
ArrayInitParser.ELSE = 28;
ArrayInitParser.ELSEIF = 29;
ArrayInitParser.NUM = 30;
ArrayInitParser.VUL = 31;
ArrayInitParser.V = 32;
ArrayInitParser.ID = 33;
ArrayInitParser.NUMBER = 34;
ArrayInitParser.STRING = 35;
ArrayInitParser.CHAR = 36;
ArrayInitParser.WS = 37;
ArrayInitParser.SALTO = 38;
ArrayInitParser.TRUE = 39;
ArrayInitParser.FALSE = 40;
ArrayInitParser.WHILE = 41;

ArrayInitParser.RULE_prog = 0;
ArrayInitParser.RULE_content = 1;
ArrayInitParser.RULE_declaration = 2;
ArrayInitParser.RULE_declarationAndAssignament = 3;
ArrayInitParser.RULE_assignment = 4;
ArrayInitParser.RULE_ifStatement = 5;
ArrayInitParser.RULE_ifSentence = 6;
ArrayInitParser.RULE_ifWithElse = 7;
ArrayInitParser.RULE_elseIfSintax = 8;
ArrayInitParser.RULE_ifWithElseIf = 9;
ArrayInitParser.RULE_ifWithElseIfElse = 10;
ArrayInitParser.RULE_condition = 11;
ArrayInitParser.RULE_trueOrFalse = 12;
ArrayInitParser.RULE_logicalExpression = 13;
ArrayInitParser.RULE_relationalExpression = 14;
ArrayInitParser.RULE_whileStatement = 15;
ArrayInitParser.RULE_printPlease = 16;
ArrayInitParser.RULE_concat = 17;
ArrayInitParser.RULE_atom = 18;
ArrayInitParser.RULE_exp = 19;
ArrayInitParser.RULE_dataType = 20;
ArrayInitParser.RULE_simbolos = 21;

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

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
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

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	declarationAndAssignament = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationAndAssignamentContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationAndAssignamentContext,i);
	    }
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	ifStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfStatementContext);
	    } else {
	        return this.getTypedRuleContext(IfStatementContext,i);
	    }
	};

	printPlease = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrintPleaseContext);
	    } else {
	        return this.getTypedRuleContext(PrintPleaseContext,i);
	    }
	};

	dataType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataTypeContext);
	    } else {
	        return this.getTypedRuleContext(DataTypeContext,i);
	    }
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

	ifWithElse() {
	    return this.getTypedRuleContext(IfWithElseContext,0);
	};

	ifWithElseIf() {
	    return this.getTypedRuleContext(IfWithElseIfContext,0);
	};

	ifWithElseIfElse() {
	    return this.getTypedRuleContext(IfWithElseIfElseContext,0);
	};

	ifSentence() {
	    return this.getTypedRuleContext(IfSentenceContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifSentence;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SentenciaIfContext extends IfSentenceContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(ArrayInitParser.IF, 0);
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

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
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

class IfWithElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifWithElse;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfConElseContext extends IfWithElseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ifSentence() {
	    return this.getTypedRuleContext(IfSentenceContext,0);
	};

	ELSE() {
	    return this.getToken(ArrayInitParser.ELSE, 0);
	};

	LBRACE() {
	    return this.getToken(ArrayInitParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIfConElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IfConElseContext = IfConElseContext;

class ElseIfSintaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_elseIfSintax;
    }

	ELSEIF() {
	    return this.getToken(ArrayInitParser.ELSEIF, 0);
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

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitElseIfSintax(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfWithElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifWithElseIf;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfConElseIfContext extends IfWithElseIfContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ifSentence() {
	    return this.getTypedRuleContext(IfSentenceContext,0);
	};

	elseIfSintax = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfSintaxContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfSintaxContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIfConElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IfConElseIfContext = IfConElseIfContext;

class IfWithElseIfElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_ifWithElseIfElse;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfConElseIfConElseContext extends IfWithElseIfElseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ifWithElseIf() {
	    return this.getTypedRuleContext(IfWithElseIfContext,0);
	};

	ELSE() {
	    return this.getToken(ArrayInitParser.ELSE, 0);
	};

	LBRACE() {
	    return this.getToken(ArrayInitParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIfConElseIfConElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IfConElseIfConElseContext = IfConElseIfConElseContext;

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

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(ArrayInitParser.RBRACE, 0);
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
ArrayInitParser.IfStatementContext = IfStatementContext; 
ArrayInitParser.IfSentenceContext = IfSentenceContext; 
ArrayInitParser.IfWithElseContext = IfWithElseContext; 
ArrayInitParser.ElseIfSintaxContext = ElseIfSintaxContext; 
ArrayInitParser.IfWithElseIfContext = IfWithElseIfContext; 
ArrayInitParser.IfWithElseIfElseContext = IfWithElseIfElseContext; 
ArrayInitParser.ConditionContext = ConditionContext; 
ArrayInitParser.TrueOrFalseContext = TrueOrFalseContext; 
ArrayInitParser.LogicalExpressionContext = LogicalExpressionContext; 
ArrayInitParser.RelationalExpressionContext = RelationalExpressionContext; 
ArrayInitParser.WhileStatementContext = WhileStatementContext; 
ArrayInitParser.PrintPleaseContext = PrintPleaseContext; 
ArrayInitParser.ConcatContext = ConcatContext; 
ArrayInitParser.AtomContext = AtomContext; 
ArrayInitParser.ExpContext = ExpContext; 
ArrayInitParser.DataTypeContext = DataTypeContext; 
ArrayInitParser.SimbolosContext = SimbolosContext; 
