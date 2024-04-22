// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TranslateVisitor from './TranslateVisitor.js';

const serializedATN = [4,1,35,206,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,57,8,
1,11,1,12,1,58,1,2,1,2,1,2,3,2,64,8,2,1,2,3,2,67,8,2,1,3,1,3,1,3,1,3,3,3,
73,8,3,1,3,3,3,76,8,3,1,4,1,4,1,4,1,4,3,4,82,8,4,1,5,1,5,1,5,1,5,3,5,88,
8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,9,1,9,4,9,114,8,9,11,9,12,9,115,1,10,1,10,1,10,1,10,
1,10,1,10,3,10,124,8,10,1,11,1,11,1,11,1,11,3,11,130,8,11,1,12,1,12,1,13,
1,13,1,13,5,13,137,8,13,10,13,12,13,140,9,13,1,14,1,14,1,14,5,14,145,8,14,
10,14,12,14,148,9,14,1,15,1,15,1,15,1,15,1,15,3,15,155,8,15,1,15,1,15,3,
15,159,8,15,1,16,1,16,1,16,4,16,164,8,16,11,16,12,16,165,1,17,1,17,3,17,
170,8,17,1,18,1,18,1,18,1,18,1,18,3,18,177,8,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,189,8,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,
197,8,18,10,18,12,18,200,9,18,1,19,1,19,1,20,1,20,1,20,0,1,36,21,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,8,1,0,22,23,1,0,4,5,
1,0,32,33,1,0,26,31,1,0,19,20,1,0,17,18,2,0,8,8,10,11,1,0,17,20,216,0,42,
1,0,0,0,2,56,1,0,0,0,4,60,1,0,0,0,6,68,1,0,0,0,8,77,1,0,0,0,10,87,1,0,0,
0,12,89,1,0,0,0,14,97,1,0,0,0,16,103,1,0,0,0,18,111,1,0,0,0,20,117,1,0,0,
0,22,129,1,0,0,0,24,131,1,0,0,0,26,133,1,0,0,0,28,141,1,0,0,0,30,149,1,0,
0,0,32,160,1,0,0,0,34,169,1,0,0,0,36,188,1,0,0,0,38,201,1,0,0,0,40,203,1,
0,0,0,42,43,5,8,0,0,43,44,5,1,0,0,44,45,5,12,0,0,45,46,5,13,0,0,46,47,5,
14,0,0,47,48,3,2,1,0,48,49,5,15,0,0,49,1,1,0,0,0,50,57,3,4,2,0,51,57,3,6,
3,0,52,57,3,8,4,0,53,57,3,10,5,0,54,57,3,30,15,0,55,57,3,38,19,0,56,50,1,
0,0,0,56,51,1,0,0,0,56,52,1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,
0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,3,1,0,0,0,60,61,3,38,19,
0,61,63,7,0,0,0,62,64,3,40,20,0,63,62,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,
0,65,67,5,16,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,5,1,0,0,0,68,69,3,38,19,
0,69,70,7,0,0,0,70,72,5,21,0,0,71,73,3,36,18,0,72,71,1,0,0,0,72,73,1,0,0,
0,73,75,1,0,0,0,74,76,5,16,0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,7,1,0,0,0,
77,78,5,22,0,0,78,79,5,21,0,0,79,81,3,36,18,0,80,82,5,16,0,0,81,80,1,0,0,
0,81,82,1,0,0,0,82,9,1,0,0,0,83,88,3,14,7,0,84,88,3,18,9,0,85,88,3,20,10,
0,86,88,3,12,6,0,87,83,1,0,0,0,87,84,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,
88,11,1,0,0,0,89,90,5,2,0,0,90,91,5,12,0,0,91,92,3,22,11,0,92,93,5,13,0,
0,93,94,5,14,0,0,94,95,3,2,1,0,95,96,5,15,0,0,96,13,1,0,0,0,97,98,3,12,6,
0,98,99,5,6,0,0,99,100,5,14,0,0,100,101,3,2,1,0,101,102,5,15,0,0,102,15,
1,0,0,0,103,104,5,7,0,0,104,105,5,12,0,0,105,106,3,22,11,0,106,107,5,13,
0,0,107,108,5,14,0,0,108,109,3,2,1,0,109,110,5,15,0,0,110,17,1,0,0,0,111,
113,3,12,6,0,112,114,3,16,8,0,113,112,1,0,0,0,114,115,1,0,0,0,115,113,1,
0,0,0,115,116,1,0,0,0,116,19,1,0,0,0,117,123,3,18,9,0,118,119,5,6,0,0,119,
120,5,14,0,0,120,121,3,2,1,0,121,122,5,15,0,0,122,124,1,0,0,0,123,118,1,
0,0,0,123,124,1,0,0,0,124,21,1,0,0,0,125,130,3,26,13,0,126,127,5,34,0,0,
127,130,3,22,11,0,128,130,3,24,12,0,129,125,1,0,0,0,129,126,1,0,0,0,129,
128,1,0,0,0,130,23,1,0,0,0,131,132,7,1,0,0,132,25,1,0,0,0,133,138,3,28,14,
0,134,135,7,2,0,0,135,137,3,28,14,0,136,134,1,0,0,0,137,140,1,0,0,0,138,
136,1,0,0,0,138,139,1,0,0,0,139,27,1,0,0,0,140,138,1,0,0,0,141,146,3,36,
18,0,142,143,7,3,0,0,143,145,3,36,18,0,144,142,1,0,0,0,145,148,1,0,0,0,146,
144,1,0,0,0,146,147,1,0,0,0,147,29,1,0,0,0,148,146,1,0,0,0,149,150,5,3,0,
0,150,154,5,12,0,0,151,155,5,24,0,0,152,155,3,36,18,0,153,155,3,32,16,0,
154,151,1,0,0,0,154,152,1,0,0,0,154,153,1,0,0,0,155,156,1,0,0,0,156,158,
5,13,0,0,157,159,5,16,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,31,1,0,0,0,
160,163,3,34,17,0,161,162,5,17,0,0,162,164,3,34,17,0,163,161,1,0,0,0,164,
165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,33,1,0,0,0,167,170,5,10,
0,0,168,170,3,36,18,0,169,167,1,0,0,0,169,168,1,0,0,0,170,35,1,0,0,0,171,
172,6,18,-1,0,172,173,5,12,0,0,173,174,3,36,18,0,174,176,5,13,0,0,175,177,
3,36,18,0,176,175,1,0,0,0,176,177,1,0,0,0,177,189,1,0,0,0,178,179,5,12,0,
0,179,180,3,36,18,0,180,181,5,13,0,0,181,182,5,12,0,0,182,183,3,36,18,0,
183,184,5,13,0,0,184,189,1,0,0,0,185,189,5,23,0,0,186,189,5,11,0,0,187,189,
5,22,0,0,188,171,1,0,0,0,188,178,1,0,0,0,188,185,1,0,0,0,188,186,1,0,0,0,
188,187,1,0,0,0,189,198,1,0,0,0,190,191,10,5,0,0,191,192,7,4,0,0,192,197,
3,36,18,6,193,194,10,4,0,0,194,195,7,5,0,0,195,197,3,36,18,5,196,190,1,0,
0,0,196,193,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,
37,1,0,0,0,200,198,1,0,0,0,201,202,7,6,0,0,202,39,1,0,0,0,203,204,7,7,0,
0,204,41,1,0,0,0,21,56,58,63,66,72,75,81,87,115,123,129,138,146,154,158,
165,169,176,188,196,198];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TranslateParser extends antlr4.Parser {

    static grammarFileName = "Translate.g4";
    static literalNames = [ null, "'main'", "'if'", "'printf'", "'true'", 
                            "'false'", "'else'", "'elseif'", "'int'", "'float'", 
                            "'string'", "'char'", "'('", "')'", "'{'", "'}'", 
                            "';'", "'+'", "'-'", "'*'", "'/'", "'='", null, 
                            null, null, null, "'=='", "'!='", "'>'", "'<'", 
                            "'>='", "'<='", "'&&'", "'||'", "'!'" ];
    static symbolicNames = [ null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", 
                             "ELSE", "ELSEIF", "INT", "FLOAT", "STRING", 
                             "CHAR", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "FIN", "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", 
                             "ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", 
                             "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", 
                             "MENORIGUAL", "AND", "OR", "NOT", "WS" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "ifStatement", "ifSentence", "ifWithElse", 
                         "elseIfSintax", "ifWithElseIf", "ifWithElseIfElse", 
                         "condition", "trueOrFalse", "logicalExpression", 
                         "relationalExpression", "printPlease", "concat", 
                         "atom", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TranslateParser.ruleNames;
        this.literalNames = TranslateParser.literalNames;
        this.symbolicNames = TranslateParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 18:
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
	    this.enterRule(localctx, 0, TranslateParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(TranslateParser.INT);
	        this.state = 43;
	        this.match(TranslateParser.MAIN);
	        this.state = 44;
	        this.match(TranslateParser.LPAREN);
	        this.state = 45;
	        this.match(TranslateParser.RPAREN);
	        this.state = 46;
	        this.match(TranslateParser.LBRACE);
	        this.state = 47;
	        this.content();
	        this.state = 48;
	        this.match(TranslateParser.RBRACE);
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
	    this.enterRule(localctx, 2, TranslateParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 56;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 50;
	                this.declaration();
	                break;

	            case 2:
	                this.state = 51;
	                this.declarationAndAssignament();
	                break;

	            case 3:
	                this.state = 52;
	                this.assignment();
	                break;

	            case 4:
	                this.state = 53;
	                this.ifStatement();
	                break;

	            case 5:
	                this.state = 54;
	                this.printPlease();
	                break;

	            case 6:
	                this.state = 55;
	                this.dataType();
	                break;

	            }
	            this.state = 58; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4197644) !== 0));
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
	    this.enterRule(localctx, 4, TranslateParser.RULE_declaration);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.dataType();
	        this.state = 61;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0)) {
	            this.state = 62;
	            this.simbolos();
	        }

	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 65;
	            this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 6, TranslateParser.RULE_declarationAndAssignament);
	    var _la = 0;
	    try {
	        localctx = new DeclAndAssigContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.dataType();
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 70;
	        this.match(TranslateParser.EQUALS);
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 71;
	            this.exp(0);

	        }
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 74;
	            this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 8, TranslateParser.RULE_assignment);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(TranslateParser.ID);
	        this.state = 78;
	        this.match(TranslateParser.EQUALS);
	        this.state = 79;
	        this.exp(0);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 80;
	            this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 10, TranslateParser.RULE_ifStatement);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.ifWithElse();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.ifWithElseIf();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.ifWithElseIfElse();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
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
	    this.enterRule(localctx, 12, TranslateParser.RULE_ifSentence);
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(TranslateParser.IF);
	        this.state = 90;
	        this.match(TranslateParser.LPAREN);
	        this.state = 91;
	        this.condition();
	        this.state = 92;
	        this.match(TranslateParser.RPAREN);
	        this.state = 93;
	        this.match(TranslateParser.LBRACE);
	        this.state = 94;
	        this.content();
	        this.state = 95;
	        this.match(TranslateParser.RBRACE);
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
	    this.enterRule(localctx, 14, TranslateParser.RULE_ifWithElse);
	    try {
	        localctx = new IfConElseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.ifSentence();
	        this.state = 98;
	        this.match(TranslateParser.ELSE);
	        this.state = 99;
	        this.match(TranslateParser.LBRACE);
	        this.state = 100;
	        this.content();
	        this.state = 101;
	        this.match(TranslateParser.RBRACE);
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
	    this.enterRule(localctx, 16, TranslateParser.RULE_elseIfSintax);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(TranslateParser.ELSEIF);
	        this.state = 104;
	        this.match(TranslateParser.LPAREN);
	        this.state = 105;
	        this.condition();
	        this.state = 106;
	        this.match(TranslateParser.RPAREN);
	        this.state = 107;
	        this.match(TranslateParser.LBRACE);
	        this.state = 108;
	        this.content();
	        this.state = 109;
	        this.match(TranslateParser.RBRACE);
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
	    this.enterRule(localctx, 18, TranslateParser.RULE_ifWithElseIf);
	    var _la = 0;
	    try {
	        localctx = new IfConElseIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.ifSentence();
	        this.state = 113; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 112;
	            this.elseIfSintax();
	            this.state = 115; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
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
	    this.enterRule(localctx, 20, TranslateParser.RULE_ifWithElseIfElse);
	    var _la = 0;
	    try {
	        localctx = new IfConElseIfConElseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.ifWithElseIf();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 118;
	            this.match(TranslateParser.ELSE);
	            this.state = 119;
	            this.match(TranslateParser.LBRACE);
	            this.state = 120;
	            this.content();
	            this.state = 121;
	            this.match(TranslateParser.RBRACE);
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
	    this.enterRule(localctx, 22, TranslateParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	        case 22:
	        case 23:
	            this.state = 125;
	            this.logicalExpression();
	            break;
	        case 34:
	            this.state = 126;
	            this.match(TranslateParser.NOT);
	            this.state = 127;
	            this.condition();
	            break;
	        case 4:
	        case 5:
	            this.state = 128;
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
	    this.enterRule(localctx, 24, TranslateParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
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
	    this.enterRule(localctx, 26, TranslateParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.relationalExpression();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32 || _la===33) {
	            this.state = 134;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===32 || _la===33)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 135;
	            this.relationalExpression();
	            this.state = 140;
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
	    this.enterRule(localctx, 28, TranslateParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.exp(0);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858432) !== 0)) {
	            this.state = 142;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858432) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 143;
	            this.exp(0);
	            this.state = 148;
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
	    this.enterRule(localctx, 30, TranslateParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(TranslateParser.PRINT);
	        this.state = 150;
	        this.match(TranslateParser.LPAREN);
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 151;
	            this.match(TranslateParser.STRINGL);
	            break;

	        case 2:
	            this.state = 152;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 153;
	            this.concat();
	            break;

	        }
	        this.state = 156;
	        this.match(TranslateParser.RPAREN);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 157;
	            this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 32, TranslateParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.atom();
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 161;
	            this.match(TranslateParser.PLUS);
	            this.state = 162;
	            this.atom();
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
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
	    this.enterRule(localctx, 34, TranslateParser.RULE_atom);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.match(TranslateParser.STRING);
	            break;
	        case 11:
	        case 12:
	        case 22:
	        case 23:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
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
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, TranslateParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 172;
	            this.match(TranslateParser.LPAREN);
	            this.state = 173;
	            this.exp(0);
	            this.state = 174;
	            this.match(TranslateParser.RPAREN);
	            this.state = 176;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 175;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 178;
	            this.match(TranslateParser.LPAREN);
	            this.state = 179;
	            this.exp(0);
	            this.state = 180;
	            this.match(TranslateParser.RPAREN);
	            this.state = 181;
	            this.match(TranslateParser.LPAREN);
	            this.state = 182;
	            this.exp(0);
	            this.state = 183;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 185;
	            this.match(TranslateParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 186;
	            this.match(TranslateParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 187;
	            this.match(TranslateParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 196;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 191;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 192;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 194;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 195;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 200;
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
	    this.enterRule(localctx, 38, TranslateParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3328) !== 0))) {
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
	    this.enterRule(localctx, 40, TranslateParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
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

TranslateParser.EOF = antlr4.Token.EOF;
TranslateParser.MAIN = 1;
TranslateParser.IF = 2;
TranslateParser.PRINT = 3;
TranslateParser.TRUE = 4;
TranslateParser.FALSE = 5;
TranslateParser.ELSE = 6;
TranslateParser.ELSEIF = 7;
TranslateParser.INT = 8;
TranslateParser.FLOAT = 9;
TranslateParser.STRING = 10;
TranslateParser.CHAR = 11;
TranslateParser.LPAREN = 12;
TranslateParser.RPAREN = 13;
TranslateParser.LBRACE = 14;
TranslateParser.RBRACE = 15;
TranslateParser.FIN = 16;
TranslateParser.PLUS = 17;
TranslateParser.MINUS = 18;
TranslateParser.TIMES = 19;
TranslateParser.DIV = 20;
TranslateParser.EQUALS = 21;
TranslateParser.ID = 22;
TranslateParser.NUMBER = 23;
TranslateParser.STRINGL = 24;
TranslateParser.CHARL = 25;
TranslateParser.IGUAL = 26;
TranslateParser.DISTINTO = 27;
TranslateParser.MAYOR = 28;
TranslateParser.MENOR = 29;
TranslateParser.MAYORIGUAL = 30;
TranslateParser.MENORIGUAL = 31;
TranslateParser.AND = 32;
TranslateParser.OR = 33;
TranslateParser.NOT = 34;
TranslateParser.WS = 35;

TranslateParser.RULE_prog = 0;
TranslateParser.RULE_content = 1;
TranslateParser.RULE_declaration = 2;
TranslateParser.RULE_declarationAndAssignament = 3;
TranslateParser.RULE_assignment = 4;
TranslateParser.RULE_ifStatement = 5;
TranslateParser.RULE_ifSentence = 6;
TranslateParser.RULE_ifWithElse = 7;
TranslateParser.RULE_elseIfSintax = 8;
TranslateParser.RULE_ifWithElseIf = 9;
TranslateParser.RULE_ifWithElseIfElse = 10;
TranslateParser.RULE_condition = 11;
TranslateParser.RULE_trueOrFalse = 12;
TranslateParser.RULE_logicalExpression = 13;
TranslateParser.RULE_relationalExpression = 14;
TranslateParser.RULE_printPlease = 15;
TranslateParser.RULE_concat = 16;
TranslateParser.RULE_atom = 17;
TranslateParser.RULE_exp = 18;
TranslateParser.RULE_dataType = 19;
TranslateParser.RULE_simbolos = 20;

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
        this.ruleIndex = TranslateParser.RULE_prog;
    }

	INT() {
	    return this.getToken(TranslateParser.INT, 0);
	};

	MAIN() {
	    return this.getToken(TranslateParser.MAIN, 0);
	};

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(TranslateParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_content;
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
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_declaration;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(TranslateParser.NUMBER, 0);
	};

	simbolos() {
	    return this.getTypedRuleContext(SimbolosContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.DeclaracionContext = DeclaracionContext;

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
        this.ruleIndex = TranslateParser.RULE_declarationAndAssignament;
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
	    return this.getToken(TranslateParser.EQUALS, 0);
	};

	ID() {
	    return this.getToken(TranslateParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(TranslateParser.NUMBER, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitDeclAndAssig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.DeclAndAssigContext = DeclAndAssigContext;

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
        this.ruleIndex = TranslateParser.RULE_assignment;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(TranslateParser.EQUALS, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.AsignacionContext = AsignacionContext;

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
        this.ruleIndex = TranslateParser.RULE_ifStatement;
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
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_ifSentence;
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
	    return this.getToken(TranslateParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(TranslateParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitSentenciaIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.SentenciaIfContext = SentenciaIfContext;

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
        this.ruleIndex = TranslateParser.RULE_ifWithElse;
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
	    return this.getToken(TranslateParser.ELSE, 0);
	};

	LBRACE() {
	    return this.getToken(TranslateParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitIfConElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.IfConElseContext = IfConElseContext;

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
        this.ruleIndex = TranslateParser.RULE_elseIfSintax;
    }

	ELSEIF() {
	    return this.getToken(TranslateParser.ELSEIF, 0);
	};

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(TranslateParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_ifWithElseIf;
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
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitIfConElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.IfConElseIfContext = IfConElseIfContext;

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
        this.ruleIndex = TranslateParser.RULE_ifWithElseIfElse;
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
	    return this.getToken(TranslateParser.ELSE, 0);
	};

	LBRACE() {
	    return this.getToken(TranslateParser.LBRACE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitIfConElseIfConElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.IfConElseIfConElseContext = IfConElseIfConElseContext;

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
        this.ruleIndex = TranslateParser.RULE_condition;
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
	    return this.getToken(TranslateParser.NOT, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	trueOrFalse() {
	    return this.getTypedRuleContext(TrueOrFalseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.CondicionContext = CondicionContext;

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
        this.ruleIndex = TranslateParser.RULE_trueOrFalse;
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
	    return this.getToken(TranslateParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(TranslateParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitVerdaderoOFalso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.VerdaderoOFalsoContext = VerdaderoOFalsoContext;

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
        this.ruleIndex = TranslateParser.RULE_logicalExpression;
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
	        return this.getTokens(TranslateParser.AND);
	    } else {
	        return this.getToken(TranslateParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.OR);
	    } else {
	        return this.getToken(TranslateParser.OR, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitExpresionLogica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ExpresionLogicaContext = ExpresionLogicaContext;

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
        this.ruleIndex = TranslateParser.RULE_relationalExpression;
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
	        return this.getTokens(TranslateParser.IGUAL);
	    } else {
	        return this.getToken(TranslateParser.IGUAL, i);
	    }
	};


	DISTINTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.DISTINTO);
	    } else {
	        return this.getToken(TranslateParser.DISTINTO, i);
	    }
	};


	MAYOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.MAYOR);
	    } else {
	        return this.getToken(TranslateParser.MAYOR, i);
	    }
	};


	MENOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.MENOR);
	    } else {
	        return this.getToken(TranslateParser.MENOR, i);
	    }
	};


	MAYORIGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.MAYORIGUAL);
	    } else {
	        return this.getToken(TranslateParser.MAYORIGUAL, i);
	    }
	};


	MENORIGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.MENORIGUAL);
	    } else {
	        return this.getToken(TranslateParser.MENORIGUAL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitExpresionRelacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ExpresionRelacionalContext = ExpresionRelacionalContext;

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
        this.ruleIndex = TranslateParser.RULE_printPlease;
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
	    return this.getToken(TranslateParser.PRINT, 0);
	};

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	STRINGL() {
	    return this.getToken(TranslateParser.STRINGL, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	concat() {
	    return this.getTypedRuleContext(ConcatContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ImpresionContext = ImpresionContext;

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
        this.ruleIndex = TranslateParser.RULE_concat;
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
	        return this.getTokens(TranslateParser.PLUS);
	    } else {
	        return this.getToken(TranslateParser.PLUS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitConcatenacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ConcatenacionContext = ConcatenacionContext;

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
        this.ruleIndex = TranslateParser.RULE_atom;
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
	    return this.getToken(TranslateParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.StringContext = StringContext;

class ExppContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitExpp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ExppContext = ExppContext;

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
        this.ruleIndex = TranslateParser.RULE_exp;
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
	    return this.getToken(TranslateParser.LPAREN, 0);
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
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ParentesisContext = ParentesisContext;

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
	    return this.getToken(TranslateParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(TranslateParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitTimesDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.TimesDivContext = TimesDivContext;

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
	        return this.getTokens(TranslateParser.LPAREN);
	    } else {
	        return this.getToken(TranslateParser.LPAREN, i);
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
	        return this.getTokens(TranslateParser.RPAREN);
	    } else {
	        return this.getToken(TranslateParser.RPAREN, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitParentesisMultiply(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ParentesisMultiplyContext = ParentesisMultiplyContext;

class NumeroContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(TranslateParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.NumeroContext = NumeroContext;

class CharContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(TranslateParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.CharContext = CharContext;

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
	    return this.getToken(TranslateParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(TranslateParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitPlusSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.PlusSubtractionContext = PlusSubtractionContext;

class IdentificadorContext extends ExpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(TranslateParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.IdentificadorContext = IdentificadorContext;

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
        this.ruleIndex = TranslateParser.RULE_dataType;
    }

	INT() {
	    return this.getToken(TranslateParser.INT, 0);
	};

	STRING() {
	    return this.getToken(TranslateParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(TranslateParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_simbolos;
    }

	PLUS() {
	    return this.getToken(TranslateParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(TranslateParser.MINUS, 0);
	};

	TIMES() {
	    return this.getToken(TranslateParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(TranslateParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitSimbolos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TranslateParser.ProgContext = ProgContext; 
TranslateParser.ContentContext = ContentContext; 
TranslateParser.DeclarationContext = DeclarationContext; 
TranslateParser.DeclarationAndAssignamentContext = DeclarationAndAssignamentContext; 
TranslateParser.AssignmentContext = AssignmentContext; 
TranslateParser.IfStatementContext = IfStatementContext; 
TranslateParser.IfSentenceContext = IfSentenceContext; 
TranslateParser.IfWithElseContext = IfWithElseContext; 
TranslateParser.ElseIfSintaxContext = ElseIfSintaxContext; 
TranslateParser.IfWithElseIfContext = IfWithElseIfContext; 
TranslateParser.IfWithElseIfElseContext = IfWithElseIfElseContext; 
TranslateParser.ConditionContext = ConditionContext; 
TranslateParser.TrueOrFalseContext = TrueOrFalseContext; 
TranslateParser.LogicalExpressionContext = LogicalExpressionContext; 
TranslateParser.RelationalExpressionContext = RelationalExpressionContext; 
TranslateParser.PrintPleaseContext = PrintPleaseContext; 
TranslateParser.ConcatContext = ConcatContext; 
TranslateParser.AtomContext = AtomContext; 
TranslateParser.ExpContext = ExpContext; 
TranslateParser.DataTypeContext = DataTypeContext; 
TranslateParser.SimbolosContext = SimbolosContext; 
