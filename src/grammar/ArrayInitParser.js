// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,41,205,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,5,0,38,8,0,10,0,12,0,
41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,2,3,2,56,8,2,
1,2,3,2,59,8,2,1,3,1,3,1,3,1,3,3,3,65,8,3,1,3,3,3,68,8,3,1,4,1,4,1,4,1,4,
3,4,74,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,82,8,5,10,5,12,5,85,9,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,5,5,94,8,5,10,5,12,5,97,9,5,1,5,1,5,5,5,101,8,5,10,5,12,
5,104,9,5,1,5,1,5,1,5,5,5,109,8,5,10,5,12,5,112,9,5,1,5,3,5,115,8,5,1,6,
1,6,1,6,1,6,3,6,121,8,6,1,7,1,7,1,8,1,8,1,8,5,8,128,8,8,10,8,12,8,131,9,
8,1,9,1,9,1,9,5,9,136,8,9,10,9,12,9,139,9,9,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,154,8,11,1,11,1,11,3,11,158,8,11,
1,12,1,12,1,12,4,12,163,8,12,11,12,12,12,164,1,13,1,13,3,13,169,8,13,1,14,
1,14,1,14,1,14,1,14,3,14,176,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,3,14,188,8,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,196,8,14,10,14,
12,14,199,9,14,1,15,1,15,1,16,1,16,1,16,0,1,28,17,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,0,8,1,0,33,34,1,0,39,40,1,0,23,24,1,0,17,22,1,0,
5,6,1,0,3,4,1,0,30,32,1,0,3,6,219,0,34,1,0,0,0,2,50,1,0,0,0,4,52,1,0,0,0,
6,60,1,0,0,0,8,69,1,0,0,0,10,75,1,0,0,0,12,120,1,0,0,0,14,122,1,0,0,0,16,
124,1,0,0,0,18,132,1,0,0,0,20,140,1,0,0,0,22,148,1,0,0,0,24,159,1,0,0,0,
26,168,1,0,0,0,28,187,1,0,0,0,30,200,1,0,0,0,32,202,1,0,0,0,34,35,5,1,0,
0,35,39,5,15,0,0,36,38,3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,
39,40,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,16,0,0,43,1,1,0,0,0,44,
51,3,4,2,0,45,51,3,6,3,0,46,51,3,8,4,0,47,51,3,10,5,0,48,51,3,22,11,0,49,
51,3,30,15,0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,
48,1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,53,3,30,15,0,53,55,7,0,0,0,54,56,
3,32,16,0,55,54,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,5,2,0,0,58,57,
1,0,0,0,58,59,1,0,0,0,59,5,1,0,0,0,60,61,3,30,15,0,61,62,7,0,0,0,62,64,5,
7,0,0,63,65,3,28,14,0,64,63,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,68,5,
2,0,0,67,66,1,0,0,0,67,68,1,0,0,0,68,7,1,0,0,0,69,70,5,33,0,0,70,71,5,7,
0,0,71,73,3,28,14,0,72,74,5,2,0,0,73,72,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,
0,75,76,5,27,0,0,76,77,5,13,0,0,77,78,3,12,6,0,78,79,5,14,0,0,79,83,5,15,
0,0,80,82,3,2,1,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,
0,84,86,1,0,0,0,85,83,1,0,0,0,86,102,5,16,0,0,87,88,5,29,0,0,88,89,5,13,
0,0,89,90,3,12,6,0,90,91,5,14,0,0,91,95,5,15,0,0,92,94,3,2,1,0,93,92,1,0,
0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,
0,98,99,5,16,0,0,99,101,1,0,0,0,100,87,1,0,0,0,101,104,1,0,0,0,102,100,1,
0,0,0,102,103,1,0,0,0,103,114,1,0,0,0,104,102,1,0,0,0,105,106,5,28,0,0,106,
110,5,15,0,0,107,109,3,2,1,0,108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,0,
0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,110,1,0,0,0,113,115,5,16,0,0,114,
105,1,0,0,0,114,115,1,0,0,0,115,11,1,0,0,0,116,121,3,16,8,0,117,118,5,25,
0,0,118,121,3,12,6,0,119,121,3,14,7,0,120,116,1,0,0,0,120,117,1,0,0,0,120,
119,1,0,0,0,121,13,1,0,0,0,122,123,7,1,0,0,123,15,1,0,0,0,124,129,3,18,9,
0,125,126,7,2,0,0,126,128,3,18,9,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,
1,0,0,0,129,130,1,0,0,0,130,17,1,0,0,0,131,129,1,0,0,0,132,137,3,28,14,0,
133,134,7,3,0,0,134,136,3,28,14,0,135,133,1,0,0,0,136,139,1,0,0,0,137,135,
1,0,0,0,137,138,1,0,0,0,138,19,1,0,0,0,139,137,1,0,0,0,140,141,5,41,0,0,
141,142,5,13,0,0,142,143,3,12,6,0,143,144,5,14,0,0,144,145,5,15,0,0,145,
146,3,2,1,0,146,147,5,16,0,0,147,21,1,0,0,0,148,149,5,26,0,0,149,153,5,13,
0,0,150,154,5,35,0,0,151,154,3,28,14,0,152,154,3,24,12,0,153,150,1,0,0,0,
153,151,1,0,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,157,5,14,0,0,156,158,
5,2,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,23,1,0,0,0,159,162,3,26,13,0,
160,161,5,3,0,0,161,163,3,26,13,0,162,160,1,0,0,0,163,164,1,0,0,0,164,162,
1,0,0,0,164,165,1,0,0,0,165,25,1,0,0,0,166,169,5,35,0,0,167,169,3,28,14,
0,168,166,1,0,0,0,168,167,1,0,0,0,169,27,1,0,0,0,170,171,6,14,-1,0,171,172,
5,13,0,0,172,173,3,28,14,0,173,175,5,14,0,0,174,176,3,28,14,0,175,174,1,
0,0,0,175,176,1,0,0,0,176,188,1,0,0,0,177,178,5,13,0,0,178,179,3,28,14,0,
179,180,5,14,0,0,180,181,5,13,0,0,181,182,3,28,14,0,182,183,5,14,0,0,183,
188,1,0,0,0,184,188,5,34,0,0,185,188,5,36,0,0,186,188,5,33,0,0,187,170,1,
0,0,0,187,177,1,0,0,0,187,184,1,0,0,0,187,185,1,0,0,0,187,186,1,0,0,0,188,
197,1,0,0,0,189,190,10,5,0,0,190,191,7,4,0,0,191,196,3,28,14,6,192,193,10,
4,0,0,193,194,7,5,0,0,194,196,3,28,14,5,195,189,1,0,0,0,195,192,1,0,0,0,
196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,29,1,0,0,0,199,197,1,
0,0,0,200,201,7,6,0,0,201,31,1,0,0,0,202,203,7,7,0,0,203,33,1,0,0,0,23,39,
50,55,58,64,67,73,83,95,102,110,114,120,129,137,153,157,164,168,175,187,
195,197];


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
                         "assignment", "ifStatement", "condition", "trueOrFalse", 
                         "logicalExpression", "relationalExpression", "whileStatement", 
                         "printPlease", "concat", "atom", "exp", "dataType", 
                         "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
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
	        this.state = 34;
	        this.match(ArrayInitParser.T__0);
	        this.state = 35;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 243) !== 0)) {
	            this.state = 36;
	            this.content();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.printPlease();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.dataType();
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
	        this.state = 52;
	        this.dataType();
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0)) {
	            this.state = 54;
	            this.simbolos();
	        }

	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 57;
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
	        this.state = 60;
	        this.dataType();
	        this.state = 61;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 62;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 63;
	            this.exp(0);

	        }
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 66;
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
	        this.state = 69;
	        this.match(ArrayInitParser.ID);
	        this.state = 70;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 71;
	        this.exp(0);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 72;
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
	    var _la = 0;
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(ArrayInitParser.IF);
	        this.state = 76;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 77;
	        this.condition();
	        this.state = 78;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 79;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 243) !== 0)) {
	            this.state = 80;
	            this.content();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(ArrayInitParser.RBRACE);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 87;
	            this.match(ArrayInitParser.ELSEIF);
	            this.state = 88;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 89;
	            this.condition();
	            this.state = 90;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 91;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 243) !== 0)) {
	                this.state = 92;
	                this.content();
	                this.state = 97;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 98;
	            this.match(ArrayInitParser.RBRACE);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 105;
	            this.match(ArrayInitParser.ELSE);
	            this.state = 106;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 243) !== 0)) {
	                this.state = 107;
	                this.content();
	                this.state = 112;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 113;
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
	    this.enterRule(localctx, 12, ArrayInitParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 33:
	        case 34:
	        case 36:
	            this.state = 116;
	            this.logicalExpression();
	            break;
	        case 25:
	            this.state = 117;
	            this.match(ArrayInitParser.NOT);
	            this.state = 118;
	            this.condition();
	            break;
	        case 39:
	        case 40:
	            this.state = 119;
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
	    this.enterRule(localctx, 14, ArrayInitParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
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
	    this.enterRule(localctx, 16, ArrayInitParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.relationalExpression();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 125;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===24)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 126;
	            this.relationalExpression();
	            this.state = 131;
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
	    this.enterRule(localctx, 18, ArrayInitParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.exp(0);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8257536) !== 0)) {
	            this.state = 133;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8257536) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 134;
	            this.exp(0);
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArrayInitParser.RULE_whileStatement);
	    try {
	        localctx = new WhileSentenciaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(ArrayInitParser.WHILE);
	        this.state = 141;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 142;
	        this.condition();
	        this.state = 143;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 144;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 145;
	        this.content();
	        this.state = 146;
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
	    this.enterRule(localctx, 22, ArrayInitParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(ArrayInitParser.PRINT);
	        this.state = 149;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 150;
	            this.match(ArrayInitParser.STRING);
	            break;

	        case 2:
	            this.state = 151;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 152;
	            this.concat();
	            break;

	        }
	        this.state = 155;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 156;
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
	        this.state = 159;
	        this.atom();
	        this.state = 162; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 160;
	            this.match(ArrayInitParser.PLUS);
	            this.state = 161;
	            this.atom();
	            this.state = 164; 
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
	    this.enterRule(localctx, 26, ArrayInitParser.RULE_atom);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.match(ArrayInitParser.STRING);
	            break;
	        case 13:
	        case 33:
	        case 34:
	        case 36:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, ArrayInitParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 171;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 172;
	            this.exp(0);
	            this.state = 173;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 175;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 174;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 177;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 178;
	            this.exp(0);
	            this.state = 179;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 180;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 181;
	            this.exp(0);
	            this.state = 182;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 184;
	            this.match(ArrayInitParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 185;
	            this.match(ArrayInitParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 186;
	            this.match(ArrayInitParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 195;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 189;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 190;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 191;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 192;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 193;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 194;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
	    this.enterRule(localctx, 30, ArrayInitParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
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
	    this.enterRule(localctx, 32, ArrayInitParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
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
ArrayInitParser.RULE_condition = 6;
ArrayInitParser.RULE_trueOrFalse = 7;
ArrayInitParser.RULE_logicalExpression = 8;
ArrayInitParser.RULE_relationalExpression = 9;
ArrayInitParser.RULE_whileStatement = 10;
ArrayInitParser.RULE_printPlease = 11;
ArrayInitParser.RULE_concat = 12;
ArrayInitParser.RULE_atom = 13;
ArrayInitParser.RULE_exp = 14;
ArrayInitParser.RULE_dataType = 15;
ArrayInitParser.RULE_simbolos = 16;

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

	printPlease() {
	    return this.getTypedRuleContext(PrintPleaseContext,0);
	};

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
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
