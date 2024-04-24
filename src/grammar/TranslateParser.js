// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TranslateVisitor from './TranslateVisitor.js';

const serializedATN = [4,1,39,226,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
1,0,1,0,1,0,5,0,45,8,0,10,0,12,0,48,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,3,1,61,8,1,1,2,1,2,1,2,3,2,66,8,2,1,2,3,2,69,8,2,1,3,1,3,1,3,
1,3,3,3,75,8,3,1,3,3,3,78,8,3,1,4,1,4,1,4,1,4,3,4,84,8,4,1,5,1,5,1,5,1,5,
1,5,1,5,5,5,92,8,5,10,5,12,5,95,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,
105,8,6,10,6,12,6,108,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,117,8,6,10,6,12,
6,120,9,6,1,6,1,6,5,6,124,8,6,10,6,12,6,127,9,6,1,6,1,6,1,6,5,6,132,8,6,
10,6,12,6,135,9,6,1,6,3,6,138,8,6,1,7,1,7,1,7,1,7,3,7,144,8,7,1,8,1,8,1,
9,1,9,1,9,5,9,151,8,9,10,9,12,9,154,9,9,1,10,1,10,1,10,5,10,159,8,10,10,
10,12,10,162,9,10,1,11,1,11,1,11,1,11,1,11,3,11,169,8,11,1,11,1,11,3,11,
173,8,11,1,12,1,12,1,12,4,12,178,8,12,11,12,12,12,179,1,13,1,13,3,13,184,
8,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,197,8,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,209,8,16,1,16,1,16,
1,16,1,16,1,16,1,16,5,16,217,8,16,10,16,12,16,220,9,16,1,17,1,17,1,18,1,
18,1,18,0,1,32,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,
8,1,0,26,27,1,0,6,7,1,0,36,37,1,0,30,35,1,0,23,24,1,0,21,22,2,0,12,12,14,
15,1,0,21,24,242,0,38,1,0,0,0,2,60,1,0,0,0,4,62,1,0,0,0,6,70,1,0,0,0,8,79,
1,0,0,0,10,85,1,0,0,0,12,98,1,0,0,0,14,143,1,0,0,0,16,145,1,0,0,0,18,147,
1,0,0,0,20,155,1,0,0,0,22,163,1,0,0,0,24,174,1,0,0,0,26,183,1,0,0,0,28,185,
1,0,0,0,30,188,1,0,0,0,32,208,1,0,0,0,34,221,1,0,0,0,36,223,1,0,0,0,38,39,
5,12,0,0,39,40,5,3,0,0,40,41,5,16,0,0,41,42,5,17,0,0,42,46,5,18,0,0,43,45,
3,2,1,0,44,43,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,
0,0,0,48,46,1,0,0,0,49,50,5,19,0,0,50,1,1,0,0,0,51,61,3,4,2,0,52,61,3,6,
3,0,53,61,3,8,4,0,54,61,3,12,6,0,55,61,3,10,5,0,56,61,3,22,11,0,57,61,3,
34,17,0,58,61,3,28,14,0,59,61,3,30,15,0,60,51,1,0,0,0,60,52,1,0,0,0,60,53,
1,0,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,60,57,1,0,0,0,60,58,1,
0,0,0,60,59,1,0,0,0,61,3,1,0,0,0,62,63,3,34,17,0,63,65,7,0,0,0,64,66,3,36,
18,0,65,64,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,69,5,20,0,0,68,67,1,0,
0,0,68,69,1,0,0,0,69,5,1,0,0,0,70,71,3,34,17,0,71,72,7,0,0,0,72,74,5,25,
0,0,73,75,3,32,16,0,74,73,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,78,5,20,
0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,7,1,0,0,0,79,80,5,26,0,0,80,81,5,25,0,
0,81,83,3,32,16,0,82,84,5,20,0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,9,1,0,0,
0,85,86,5,11,0,0,86,87,5,16,0,0,87,88,3,14,7,0,88,89,5,17,0,0,89,93,5,18,
0,0,90,92,3,2,1,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,
0,94,96,1,0,0,0,95,93,1,0,0,0,96,97,5,19,0,0,97,11,1,0,0,0,98,99,5,4,0,0,
99,100,5,16,0,0,100,101,3,14,7,0,101,102,5,17,0,0,102,106,5,18,0,0,103,105,
3,2,1,0,104,103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,
107,109,1,0,0,0,108,106,1,0,0,0,109,125,5,19,0,0,110,111,5,9,0,0,111,112,
5,16,0,0,112,113,3,14,7,0,113,114,5,17,0,0,114,118,5,18,0,0,115,117,3,2,
1,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,
121,1,0,0,0,120,118,1,0,0,0,121,122,5,19,0,0,122,124,1,0,0,0,123,110,1,0,
0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,137,1,0,0,0,127,
125,1,0,0,0,128,129,5,8,0,0,129,133,5,18,0,0,130,132,3,2,1,0,131,130,1,0,
0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,
133,1,0,0,0,136,138,5,19,0,0,137,128,1,0,0,0,137,138,1,0,0,0,138,13,1,0,
0,0,139,144,3,18,9,0,140,141,5,38,0,0,141,144,3,14,7,0,142,144,3,16,8,0,
143,139,1,0,0,0,143,140,1,0,0,0,143,142,1,0,0,0,144,15,1,0,0,0,145,146,7,
1,0,0,146,17,1,0,0,0,147,152,3,20,10,0,148,149,7,2,0,0,149,151,3,20,10,0,
150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,19,1,
0,0,0,154,152,1,0,0,0,155,160,3,32,16,0,156,157,7,3,0,0,157,159,3,32,16,
0,158,156,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,21,
1,0,0,0,162,160,1,0,0,0,163,164,5,5,0,0,164,168,5,16,0,0,165,169,5,28,0,
0,166,169,3,32,16,0,167,169,3,24,12,0,168,165,1,0,0,0,168,166,1,0,0,0,168,
167,1,0,0,0,169,170,1,0,0,0,170,172,5,17,0,0,171,173,5,20,0,0,172,171,1,
0,0,0,172,173,1,0,0,0,173,23,1,0,0,0,174,177,3,26,13,0,175,176,5,21,0,0,
176,178,3,26,13,0,177,175,1,0,0,0,178,179,1,0,0,0,179,177,1,0,0,0,179,180,
1,0,0,0,180,25,1,0,0,0,181,184,5,14,0,0,182,184,3,32,16,0,183,181,1,0,0,
0,183,182,1,0,0,0,184,27,1,0,0,0,185,186,5,26,0,0,186,187,5,1,0,0,187,29,
1,0,0,0,188,189,5,26,0,0,189,190,5,2,0,0,190,31,1,0,0,0,191,192,6,16,-1,
0,192,193,5,16,0,0,193,194,3,32,16,0,194,196,5,17,0,0,195,197,3,32,16,0,
196,195,1,0,0,0,196,197,1,0,0,0,197,209,1,0,0,0,198,199,5,16,0,0,199,200,
3,32,16,0,200,201,5,17,0,0,201,202,5,16,0,0,202,203,3,32,16,0,203,204,5,
17,0,0,204,209,1,0,0,0,205,209,5,27,0,0,206,209,5,15,0,0,207,209,5,26,0,
0,208,191,1,0,0,0,208,198,1,0,0,0,208,205,1,0,0,0,208,206,1,0,0,0,208,207,
1,0,0,0,209,218,1,0,0,0,210,211,10,5,0,0,211,212,7,4,0,0,212,217,3,32,16,
6,213,214,10,4,0,0,214,215,7,5,0,0,215,217,3,32,16,5,216,210,1,0,0,0,216,
213,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,33,1,0,0,
0,220,218,1,0,0,0,221,222,7,6,0,0,222,35,1,0,0,0,223,224,7,7,0,0,224,37,
1,0,0,0,24,46,60,65,68,74,77,83,93,106,118,125,133,137,143,152,160,168,172,
179,183,196,208,216,218];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TranslateParser extends antlr4.Parser {

    static grammarFileName = "Translate.g4";
    static literalNames = [ null, "'++'", "'--'", "'main'", "'if'", "'printf'", 
                            "'true'", "'false'", "'else'", "'elseif'", "'void'", 
                            "'while'", "'int'", "'float'", "'string'", "'char'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'='", null, null, null, null, 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'&&'", "'||'", "'!'" ];
    static symbolicNames = [ null, null, null, "MAIN", "IF", "PRINT", "TRUE", 
                             "FALSE", "ELSE", "ELSEIF", "VOID", "WHILE", 
                             "INT", "FLOAT", "STRING", "CHAR", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", 
                             "MINUS", "TIMES", "DIV", "EQUALS", "ID", "NUMBER", 
                             "STRINGL", "CHARL", "IGUAL", "DISTINTO", "MAYOR", 
                             "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", 
                             "OR", "NOT", "WS" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "condition", "trueOrFalse", "logicalExpression", 
                         "relationalExpression", "printPlease", "concat", 
                         "atom", "incre", "decre", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TranslateParser.ruleNames;
        this.literalNames = TranslateParser.literalNames;
        this.symbolicNames = TranslateParser.symbolicNames;
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
	    this.enterRule(localctx, 0, TranslateParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(TranslateParser.INT);
	        this.state = 39;
	        this.match(TranslateParser.MAIN);
	        this.state = 40;
	        this.match(TranslateParser.LPAREN);
	        this.state = 41;
	        this.match(TranslateParser.RPAREN);
	        this.state = 42;
	        this.match(TranslateParser.LBRACE);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 43;
	            this.content();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
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
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 56;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 57;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 58;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 59;
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
	    this.enterRule(localctx, 4, TranslateParser.RULE_declaration);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.dataType();
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0)) {
	            this.state = 64;
	            this.simbolos();
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 67;
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
	        this.state = 70;
	        this.dataType();
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 72;
	        this.match(TranslateParser.EQUALS);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 73;
	            this.exp(0);

	        }
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 76;
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
	        this.state = 79;
	        this.match(TranslateParser.ID);
	        this.state = 80;
	        this.match(TranslateParser.EQUALS);
	        this.state = 81;
	        this.exp(0);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 82;
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TranslateParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        localctx = new WhileSentenciaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(TranslateParser.WHILE);
	        this.state = 86;
	        this.match(TranslateParser.LPAREN);
	        this.state = 87;
	        this.condition();
	        this.state = 88;
	        this.match(TranslateParser.RPAREN);
	        this.state = 89;
	        this.match(TranslateParser.LBRACE);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 90;
	            this.content();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TranslateParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(TranslateParser.IF);
	        this.state = 99;
	        this.match(TranslateParser.LPAREN);
	        this.state = 100;
	        this.condition();
	        this.state = 101;
	        this.match(TranslateParser.RPAREN);
	        this.state = 102;
	        this.match(TranslateParser.LBRACE);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 103;
	            this.content();
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 109;
	        this.match(TranslateParser.RBRACE);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 110;
	            this.match(TranslateParser.ELSEIF);
	            this.state = 111;
	            this.match(TranslateParser.LPAREN);
	            this.state = 112;
	            this.condition();
	            this.state = 113;
	            this.match(TranslateParser.RPAREN);
	            this.state = 114;
	            this.match(TranslateParser.LBRACE);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	                this.state = 115;
	                this.content();
	                this.state = 120;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 121;
	            this.match(TranslateParser.RBRACE);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 128;
	            this.match(TranslateParser.ELSE);
	            this.state = 129;
	            this.match(TranslateParser.LBRACE);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	                this.state = 130;
	                this.content();
	                this.state = 135;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 136;
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
	    this.enterRule(localctx, 14, TranslateParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 16:
	        case 26:
	        case 27:
	            this.state = 139;
	            this.logicalExpression();
	            break;
	        case 38:
	            this.state = 140;
	            this.match(TranslateParser.NOT);
	            this.state = 141;
	            this.condition();
	            break;
	        case 6:
	        case 7:
	            this.state = 142;
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
	    this.enterRule(localctx, 16, TranslateParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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
	    this.enterRule(localctx, 18, TranslateParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.relationalExpression();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===36 || _la===37) {
	            this.state = 148;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===36 || _la===37)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 149;
	            this.relationalExpression();
	            this.state = 154;
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
	    this.enterRule(localctx, 20, TranslateParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.exp(0);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 63) !== 0)) {
	            this.state = 156;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 63) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 157;
	            this.exp(0);
	            this.state = 162;
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
	    this.enterRule(localctx, 22, TranslateParser.RULE_printPlease);
	    var _la = 0;
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(TranslateParser.PRINT);
	        this.state = 164;
	        this.match(TranslateParser.LPAREN);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 165;
	            this.match(TranslateParser.STRINGL);
	            break;

	        case 2:
	            this.state = 166;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 167;
	            this.concat();
	            break;

	        }
	        this.state = 170;
	        this.match(TranslateParser.RPAREN);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 171;
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
	    this.enterRule(localctx, 24, TranslateParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.atom();
	        this.state = 177; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 175;
	            this.match(TranslateParser.PLUS);
	            this.state = 176;
	            this.atom();
	            this.state = 179; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===21);
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
	    this.enterRule(localctx, 26, TranslateParser.RULE_atom);
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.match(TranslateParser.STRING);
	            break;
	        case 15:
	        case 16:
	        case 26:
	        case 27:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
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
	    this.enterRule(localctx, 28, TranslateParser.RULE_incre);
	    try {
	        localctx = new IncrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(TranslateParser.ID);
	        this.state = 186;
	        this.match(TranslateParser.T__0);
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
	    this.enterRule(localctx, 30, TranslateParser.RULE_decre);
	    try {
	        localctx = new DecrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(TranslateParser.ID);
	        this.state = 189;
	        this.match(TranslateParser.T__1);
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
	    this.enterRecursionRule(localctx, 32, TranslateParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 192;
	            this.match(TranslateParser.LPAREN);
	            this.state = 193;
	            this.exp(0);
	            this.state = 194;
	            this.match(TranslateParser.RPAREN);
	            this.state = 196;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 195;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 198;
	            this.match(TranslateParser.LPAREN);
	            this.state = 199;
	            this.exp(0);
	            this.state = 200;
	            this.match(TranslateParser.RPAREN);
	            this.state = 201;
	            this.match(TranslateParser.LPAREN);
	            this.state = 202;
	            this.exp(0);
	            this.state = 203;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 205;
	            this.match(TranslateParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 206;
	            this.match(TranslateParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 207;
	            this.match(TranslateParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 218;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 216;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 211;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 212;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 214;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 215;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 220;
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
	    this.enterRule(localctx, 34, TranslateParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 53248) !== 0))) {
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
	    this.enterRule(localctx, 36, TranslateParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0))) {
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
TranslateParser.T__0 = 1;
TranslateParser.T__1 = 2;
TranslateParser.MAIN = 3;
TranslateParser.IF = 4;
TranslateParser.PRINT = 5;
TranslateParser.TRUE = 6;
TranslateParser.FALSE = 7;
TranslateParser.ELSE = 8;
TranslateParser.ELSEIF = 9;
TranslateParser.VOID = 10;
TranslateParser.WHILE = 11;
TranslateParser.INT = 12;
TranslateParser.FLOAT = 13;
TranslateParser.STRING = 14;
TranslateParser.CHAR = 15;
TranslateParser.LPAREN = 16;
TranslateParser.RPAREN = 17;
TranslateParser.LBRACE = 18;
TranslateParser.RBRACE = 19;
TranslateParser.FIN = 20;
TranslateParser.PLUS = 21;
TranslateParser.MINUS = 22;
TranslateParser.TIMES = 23;
TranslateParser.DIV = 24;
TranslateParser.EQUALS = 25;
TranslateParser.ID = 26;
TranslateParser.NUMBER = 27;
TranslateParser.STRINGL = 28;
TranslateParser.CHARL = 29;
TranslateParser.IGUAL = 30;
TranslateParser.DISTINTO = 31;
TranslateParser.MAYOR = 32;
TranslateParser.MENOR = 33;
TranslateParser.MAYORIGUAL = 34;
TranslateParser.MENORIGUAL = 35;
TranslateParser.AND = 36;
TranslateParser.OR = 37;
TranslateParser.NOT = 38;
TranslateParser.WS = 39;

TranslateParser.RULE_prog = 0;
TranslateParser.RULE_content = 1;
TranslateParser.RULE_declaration = 2;
TranslateParser.RULE_declarationAndAssignament = 3;
TranslateParser.RULE_assignment = 4;
TranslateParser.RULE_whileStatement = 5;
TranslateParser.RULE_ifStatement = 6;
TranslateParser.RULE_condition = 7;
TranslateParser.RULE_trueOrFalse = 8;
TranslateParser.RULE_logicalExpression = 9;
TranslateParser.RULE_relationalExpression = 10;
TranslateParser.RULE_printPlease = 11;
TranslateParser.RULE_concat = 12;
TranslateParser.RULE_atom = 13;
TranslateParser.RULE_incre = 14;
TranslateParser.RULE_decre = 15;
TranslateParser.RULE_exp = 16;
TranslateParser.RULE_dataType = 17;
TranslateParser.RULE_simbolos = 18;

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

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
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
        this.ruleIndex = TranslateParser.RULE_whileStatement;
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
	    return this.getToken(TranslateParser.WHILE, 0);
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

	RBRACE() {
	    return this.getToken(TranslateParser.RBRACE, 0);
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
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitWhileSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.WhileSentenciaContext = WhileSentenciaContext;

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
	    return this.getToken(TranslateParser.IF, 0);
	};

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
	        return this.getTokens(TranslateParser.RPAREN);
	    } else {
	        return this.getToken(TranslateParser.RPAREN, i);
	    }
	};


	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.LBRACE);
	    } else {
	        return this.getToken(TranslateParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TranslateParser.RBRACE);
	    } else {
	        return this.getToken(TranslateParser.RBRACE, i);
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
	        return this.getTokens(TranslateParser.ELSEIF);
	    } else {
	        return this.getToken(TranslateParser.ELSEIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(TranslateParser.ELSE, 0);
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
        this.ruleIndex = TranslateParser.RULE_incre;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.IncrementoContext = IncrementoContext;

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
        this.ruleIndex = TranslateParser.RULE_decre;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitDecremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.DecrementoContext = DecrementoContext;

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
TranslateParser.WhileStatementContext = WhileStatementContext; 
TranslateParser.IfStatementContext = IfStatementContext; 
TranslateParser.ConditionContext = ConditionContext; 
TranslateParser.TrueOrFalseContext = TrueOrFalseContext; 
TranslateParser.LogicalExpressionContext = LogicalExpressionContext; 
TranslateParser.RelationalExpressionContext = RelationalExpressionContext; 
TranslateParser.PrintPleaseContext = PrintPleaseContext; 
TranslateParser.ConcatContext = ConcatContext; 
TranslateParser.AtomContext = AtomContext; 
TranslateParser.IncreContext = IncreContext; 
TranslateParser.DecreContext = DecreContext; 
TranslateParser.ExpContext = ExpContext; 
TranslateParser.DataTypeContext = DataTypeContext; 
TranslateParser.SimbolosContext = SimbolosContext; 
