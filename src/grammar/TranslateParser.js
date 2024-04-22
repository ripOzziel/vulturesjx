// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TranslateVisitor from './TranslateVisitor.js';

const serializedATN = [4,1,33,154,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,4,1,47,8,1,11,1,12,1,48,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,
6,1,6,3,6,79,8,6,1,7,1,7,1,8,1,8,1,8,5,8,86,8,8,10,8,12,8,89,9,8,1,9,1,9,
1,9,5,9,94,8,9,10,9,12,9,97,9,9,1,10,1,10,1,10,1,10,1,10,3,10,104,8,10,1,
10,1,10,1,10,1,11,1,11,1,11,4,11,112,8,11,11,11,12,11,113,1,12,1,12,3,12,
118,8,12,1,13,1,13,1,13,1,13,1,13,3,13,125,8,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,137,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,
145,8,13,10,13,12,13,148,9,13,1,14,1,14,1,15,1,15,1,15,0,1,26,16,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,0,7,1,0,4,5,1,0,30,31,1,0,24,29,1,0,17,
18,1,0,15,16,2,0,6,6,8,9,1,0,15,18,158,0,32,1,0,0,0,2,46,1,0,0,0,4,50,1,
0,0,0,6,54,1,0,0,0,8,60,1,0,0,0,10,65,1,0,0,0,12,78,1,0,0,0,14,80,1,0,0,
0,16,82,1,0,0,0,18,90,1,0,0,0,20,98,1,0,0,0,22,108,1,0,0,0,24,117,1,0,0,
0,26,136,1,0,0,0,28,149,1,0,0,0,30,151,1,0,0,0,32,33,5,6,0,0,33,34,5,1,0,
0,34,35,5,10,0,0,35,36,5,11,0,0,36,37,5,12,0,0,37,38,3,2,1,0,38,39,5,13,
0,0,39,1,1,0,0,0,40,47,3,4,2,0,41,47,3,6,3,0,42,47,3,8,4,0,43,47,3,10,5,
0,44,47,3,20,10,0,45,47,3,28,14,0,46,40,1,0,0,0,46,41,1,0,0,0,46,42,1,0,
0,0,46,43,1,0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,
0,48,49,1,0,0,0,49,3,1,0,0,0,50,51,3,28,14,0,51,52,5,20,0,0,52,53,5,14,0,
0,53,5,1,0,0,0,54,55,3,28,14,0,55,56,5,20,0,0,56,57,5,19,0,0,57,58,3,26,
13,0,58,59,5,14,0,0,59,7,1,0,0,0,60,61,5,20,0,0,61,62,5,19,0,0,62,63,3,26,
13,0,63,64,5,14,0,0,64,9,1,0,0,0,65,66,5,2,0,0,66,67,5,10,0,0,67,68,3,12,
6,0,68,69,5,11,0,0,69,70,5,12,0,0,70,71,3,2,1,0,71,72,5,13,0,0,72,73,5,14,
0,0,73,11,1,0,0,0,74,79,3,16,8,0,75,76,5,32,0,0,76,79,3,12,6,0,77,79,3,14,
7,0,78,74,1,0,0,0,78,75,1,0,0,0,78,77,1,0,0,0,79,13,1,0,0,0,80,81,7,0,0,
0,81,15,1,0,0,0,82,87,3,18,9,0,83,84,7,1,0,0,84,86,3,18,9,0,85,83,1,0,0,
0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,17,1,0,0,0,89,87,1,0,0,0,
90,95,3,26,13,0,91,92,7,2,0,0,92,94,3,26,13,0,93,91,1,0,0,0,94,97,1,0,0,
0,95,93,1,0,0,0,95,96,1,0,0,0,96,19,1,0,0,0,97,95,1,0,0,0,98,99,5,3,0,0,
99,103,5,10,0,0,100,104,5,22,0,0,101,104,3,26,13,0,102,104,3,22,11,0,103,
100,1,0,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,105,1,0,0,0,105,106,5,11,
0,0,106,107,5,14,0,0,107,21,1,0,0,0,108,111,3,24,12,0,109,110,5,15,0,0,110,
112,3,24,12,0,111,109,1,0,0,0,112,113,1,0,0,0,113,111,1,0,0,0,113,114,1,
0,0,0,114,23,1,0,0,0,115,118,5,22,0,0,116,118,3,26,13,0,117,115,1,0,0,0,
117,116,1,0,0,0,118,25,1,0,0,0,119,120,6,13,-1,0,120,121,5,10,0,0,121,122,
3,26,13,0,122,124,5,11,0,0,123,125,3,26,13,0,124,123,1,0,0,0,124,125,1,0,
0,0,125,137,1,0,0,0,126,127,5,10,0,0,127,128,3,26,13,0,128,129,5,11,0,0,
129,130,5,10,0,0,130,131,3,26,13,0,131,132,5,11,0,0,132,137,1,0,0,0,133,
137,5,21,0,0,134,137,5,9,0,0,135,137,5,20,0,0,136,119,1,0,0,0,136,126,1,
0,0,0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,146,1,0,0,0,138,
139,10,5,0,0,139,140,7,3,0,0,140,145,3,26,13,6,141,142,10,4,0,0,142,143,
7,4,0,0,143,145,3,26,13,5,144,138,1,0,0,0,144,141,1,0,0,0,145,148,1,0,0,
0,146,144,1,0,0,0,146,147,1,0,0,0,147,27,1,0,0,0,148,146,1,0,0,0,149,150,
7,5,0,0,150,29,1,0,0,0,151,152,7,6,0,0,152,31,1,0,0,0,12,46,48,78,87,95,
103,113,117,124,136,144,146];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TranslateParser extends antlr4.Parser {

    static grammarFileName = "Translate.g4";
    static literalNames = [ null, "'main'", "'if'", "'printf'", "'true'", 
                            "'false'", "'int'", "'float'", "'string'", "'char'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'='", null, null, null, null, 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'&&'", "'||'", "'!'" ];
    static symbolicNames = [ null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", 
                             "INT", "FLOAT", "STRING", "CHAR", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", 
                             "MINUS", "TIMES", "DIV", "EQUALS", "ID", "NUMBER", 
                             "STRINGL", "CHARL", "IGUAL", "DISTINTO", "MAYOR", 
                             "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", 
                             "OR", "NOT", "WS" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "ifSentence", "condition", "trueOrFalse", 
                         "logicalExpression", "relationalExpression", "printPlease", 
                         "concat", "atom", "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TranslateParser.ruleNames;
        this.literalNames = TranslateParser.literalNames;
        this.symbolicNames = TranslateParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
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
	        this.state = 32;
	        this.match(TranslateParser.INT);
	        this.state = 33;
	        this.match(TranslateParser.MAIN);
	        this.state = 34;
	        this.match(TranslateParser.LPAREN);
	        this.state = 35;
	        this.match(TranslateParser.RPAREN);
	        this.state = 36;
	        this.match(TranslateParser.LBRACE);
	        this.state = 37;
	        this.content();
	        this.state = 38;
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
	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 40;
	                this.declaration();
	                break;

	            case 2:
	                this.state = 41;
	                this.declarationAndAssignament();
	                break;

	            case 3:
	                this.state = 42;
	                this.assignment();
	                break;

	            case 4:
	                this.state = 43;
	                this.ifSentence();
	                break;

	            case 5:
	                this.state = 44;
	                this.printPlease();
	                break;

	            case 6:
	                this.state = 45;
	                this.dataType();
	                break;

	            }
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1049420) !== 0));
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
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.dataType();

	        this.state = 51;
	        this.match(TranslateParser.ID);
	        this.state = 52;
	        this.match(TranslateParser.FIN);
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
	    try {
	        localctx = new DeclAndAssigContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.dataType();
	        this.state = 55;
	        this.match(TranslateParser.ID);
	        this.state = 56;
	        this.match(TranslateParser.EQUALS);
	        this.state = 57;
	        this.exp(0);
	        this.state = 58;
	        this.match(TranslateParser.FIN);
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
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(TranslateParser.ID);
	        this.state = 61;
	        this.match(TranslateParser.EQUALS);
	        this.state = 62;
	        this.exp(0);
	        this.state = 63;
	        this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 10, TranslateParser.RULE_ifSentence);
	    try {
	        localctx = new SentenciaIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(TranslateParser.IF);
	        this.state = 66;
	        this.match(TranslateParser.LPAREN);
	        this.state = 67;
	        this.condition();
	        this.state = 68;
	        this.match(TranslateParser.RPAREN);
	        this.state = 69;
	        this.match(TranslateParser.LBRACE);
	        this.state = 70;
	        this.content();
	        this.state = 71;
	        this.match(TranslateParser.RBRACE);
	        this.state = 72;
	        this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 12, TranslateParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	        case 20:
	        case 21:
	            this.state = 74;
	            this.logicalExpression();
	            break;
	        case 32:
	            this.state = 75;
	            this.match(TranslateParser.NOT);
	            this.state = 76;
	            this.condition();
	            break;
	        case 4:
	        case 5:
	            this.state = 77;
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
	    this.enterRule(localctx, 14, TranslateParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
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
	    this.enterRule(localctx, 16, TranslateParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionLogicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.relationalExpression();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30 || _la===31) {
	            this.state = 83;
	            localctx.logic = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===30 || _la===31)) {
	                localctx.logic = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 84;
	            this.relationalExpression();
	            this.state = 89;
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
	    this.enterRule(localctx, 18, TranslateParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        localctx = new ExpresionRelacionalContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.exp(0);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1056964608) !== 0)) {
	            this.state = 91;
	            localctx.relation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1056964608) !== 0))) {
	                localctx.relation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 92;
	            this.exp(0);
	            this.state = 97;
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
	    this.enterRule(localctx, 20, TranslateParser.RULE_printPlease);
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(TranslateParser.PRINT);
	        this.state = 99;
	        this.match(TranslateParser.LPAREN);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 100;
	            this.match(TranslateParser.STRINGL);
	            break;

	        case 2:
	            this.state = 101;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 102;
	            this.concat();
	            break;

	        }
	        this.state = 105;
	        this.match(TranslateParser.RPAREN);
	        this.state = 106;
	        this.match(TranslateParser.FIN);
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
	    this.enterRule(localctx, 22, TranslateParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.atom();
	        this.state = 111; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 109;
	            this.match(TranslateParser.PLUS);
	            this.state = 110;
	            this.atom();
	            this.state = 113; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
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
	    this.enterRule(localctx, 24, TranslateParser.RULE_atom);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.match(TranslateParser.STRINGL);
	            break;
	        case 9:
	        case 10:
	        case 20:
	        case 21:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, TranslateParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 120;
	            this.match(TranslateParser.LPAREN);
	            this.state = 121;
	            this.exp(0);
	            this.state = 122;
	            this.match(TranslateParser.RPAREN);
	            this.state = 124;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 123;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            this.match(TranslateParser.LPAREN);
	            this.state = 127;
	            this.exp(0);
	            this.state = 128;
	            this.match(TranslateParser.RPAREN);
	            this.state = 129;
	            this.match(TranslateParser.LPAREN);
	            this.state = 130;
	            this.exp(0);
	            this.state = 131;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 133;
	            this.match(TranslateParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 134;
	            this.match(TranslateParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 135;
	            this.match(TranslateParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 144;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 138;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 139;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 140;
	                    this.exp(6);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 141;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 142;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 143;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 148;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	    this.enterRule(localctx, 28, TranslateParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 832) !== 0))) {
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
	    this.enterRule(localctx, 30, TranslateParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
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
TranslateParser.INT = 6;
TranslateParser.FLOAT = 7;
TranslateParser.STRING = 8;
TranslateParser.CHAR = 9;
TranslateParser.LPAREN = 10;
TranslateParser.RPAREN = 11;
TranslateParser.LBRACE = 12;
TranslateParser.RBRACE = 13;
TranslateParser.FIN = 14;
TranslateParser.PLUS = 15;
TranslateParser.MINUS = 16;
TranslateParser.TIMES = 17;
TranslateParser.DIV = 18;
TranslateParser.EQUALS = 19;
TranslateParser.ID = 20;
TranslateParser.NUMBER = 21;
TranslateParser.STRINGL = 22;
TranslateParser.CHARL = 23;
TranslateParser.IGUAL = 24;
TranslateParser.DISTINTO = 25;
TranslateParser.MAYOR = 26;
TranslateParser.MENOR = 27;
TranslateParser.MAYORIGUAL = 28;
TranslateParser.MENORIGUAL = 29;
TranslateParser.AND = 30;
TranslateParser.OR = 31;
TranslateParser.NOT = 32;
TranslateParser.WS = 33;

TranslateParser.RULE_prog = 0;
TranslateParser.RULE_content = 1;
TranslateParser.RULE_declaration = 2;
TranslateParser.RULE_declarationAndAssignament = 3;
TranslateParser.RULE_assignment = 4;
TranslateParser.RULE_ifSentence = 5;
TranslateParser.RULE_condition = 6;
TranslateParser.RULE_trueOrFalse = 7;
TranslateParser.RULE_logicalExpression = 8;
TranslateParser.RULE_relationalExpression = 9;
TranslateParser.RULE_printPlease = 10;
TranslateParser.RULE_concat = 11;
TranslateParser.RULE_atom = 12;
TranslateParser.RULE_exp = 13;
TranslateParser.RULE_dataType = 14;
TranslateParser.RULE_simbolos = 15;

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

	ifSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfSentenceContext);
	    } else {
	        return this.getTypedRuleContext(IfSentenceContext,i);
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

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	ID() {
	    return this.getToken(TranslateParser.ID, 0);
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

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
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

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
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

	STRINGL() {
	    return this.getToken(TranslateParser.STRINGL, 0);
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
TranslateParser.IfSentenceContext = IfSentenceContext; 
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
