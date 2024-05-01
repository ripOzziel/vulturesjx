// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TranslateVisitor from './TranslateVisitor.js';

const serializedATN = [4,1,41,265,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,1,0,1,0,1,0,5,0,51,8,0,10,0,12,0,54,9,0,1,
0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,67,8,1,1,2,1,2,1,2,3,2,72,
8,2,1,2,3,2,75,8,2,1,3,1,3,1,3,1,3,3,3,81,8,3,1,3,3,3,84,8,3,1,4,1,4,1,4,
1,4,3,4,90,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,98,8,5,10,5,12,5,101,9,5,1,5,
1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,120,
8,6,10,6,12,6,123,9,6,1,6,1,6,1,6,1,6,1,6,3,6,130,8,6,1,7,5,7,133,8,7,10,
7,12,7,136,9,7,1,8,5,8,139,8,8,10,8,12,8,142,9,8,1,9,5,9,145,8,9,10,9,12,
9,148,9,9,1,10,1,10,1,10,1,10,3,10,154,8,10,1,11,1,11,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,5,12,166,8,12,10,12,12,12,169,9,12,3,12,171,8,12,1,12,
1,12,1,12,4,12,176,8,12,11,12,12,12,177,5,12,180,8,12,10,12,12,12,183,9,
12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,192,8,13,10,13,12,13,195,9,13,
3,13,197,8,13,1,14,1,14,1,14,1,14,1,14,3,14,204,8,14,1,14,1,14,1,14,1,15,
1,15,1,15,4,15,212,8,15,11,15,12,15,213,1,16,1,16,3,16,218,8,16,1,17,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,3,19,233,8,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,245,8,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,5,19,256,8,19,10,19,12,19,259,9,19,1,20,1,
20,1,21,1,21,1,21,0,2,24,38,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,0,8,1,0,26,27,1,0,6,7,1,0,36,37,1,0,30,35,1,0,23,24,1,
0,21,22,2,0,12,12,14,15,1,0,21,24,282,0,44,1,0,0,0,2,66,1,0,0,0,4,68,1,0,
0,0,6,76,1,0,0,0,8,85,1,0,0,0,10,91,1,0,0,0,12,104,1,0,0,0,14,134,1,0,0,
0,16,140,1,0,0,0,18,146,1,0,0,0,20,153,1,0,0,0,22,155,1,0,0,0,24,170,1,0,
0,0,26,196,1,0,0,0,28,198,1,0,0,0,30,208,1,0,0,0,32,217,1,0,0,0,34,219,1,
0,0,0,36,223,1,0,0,0,38,244,1,0,0,0,40,260,1,0,0,0,42,262,1,0,0,0,44,45,
5,10,0,0,45,46,5,3,0,0,46,47,5,16,0,0,47,48,5,17,0,0,48,52,5,18,0,0,49,51,
3,2,1,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,
0,0,0,54,52,1,0,0,0,55,56,5,19,0,0,56,1,1,0,0,0,57,67,3,4,2,0,58,67,3,6,
3,0,59,67,3,8,4,0,60,67,3,12,6,0,61,67,3,10,5,0,62,67,3,28,14,0,63,67,3,
40,20,0,64,67,3,34,17,0,65,67,3,36,18,0,66,57,1,0,0,0,66,58,1,0,0,0,66,59,
1,0,0,0,66,60,1,0,0,0,66,61,1,0,0,0,66,62,1,0,0,0,66,63,1,0,0,0,66,64,1,
0,0,0,66,65,1,0,0,0,67,3,1,0,0,0,68,69,3,40,20,0,69,71,7,0,0,0,70,72,3,42,
21,0,71,70,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,75,5,20,0,0,74,73,1,0,
0,0,74,75,1,0,0,0,75,5,1,0,0,0,76,77,3,40,20,0,77,78,7,0,0,0,78,80,5,25,
0,0,79,81,3,38,19,0,80,79,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,84,5,20,
0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,7,1,0,0,0,85,86,5,26,0,0,86,87,5,25,0,
0,87,89,3,38,19,0,88,90,5,20,0,0,89,88,1,0,0,0,89,90,1,0,0,0,90,9,1,0,0,
0,91,92,5,11,0,0,92,93,5,16,0,0,93,94,3,20,10,0,94,95,5,17,0,0,95,99,5,18,
0,0,96,98,3,2,1,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,
0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,19,0,0,103,11,1,0,0,0,104,105,
5,4,0,0,105,106,5,16,0,0,106,107,3,20,10,0,107,108,5,17,0,0,108,109,5,18,
0,0,109,110,3,14,7,0,110,121,5,19,0,0,111,112,5,9,0,0,112,113,5,16,0,0,113,
114,3,20,10,0,114,115,5,17,0,0,115,116,5,18,0,0,116,117,3,16,8,0,117,118,
5,19,0,0,118,120,1,0,0,0,119,111,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,
121,122,1,0,0,0,122,129,1,0,0,0,123,121,1,0,0,0,124,125,5,8,0,0,125,126,
5,18,0,0,126,127,3,18,9,0,127,128,5,19,0,0,128,130,1,0,0,0,129,124,1,0,0,
0,129,130,1,0,0,0,130,13,1,0,0,0,131,133,3,2,1,0,132,131,1,0,0,0,133,136,
1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,15,1,0,0,0,136,134,1,0,0,0,137,
139,3,2,1,0,138,137,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,
0,0,141,17,1,0,0,0,142,140,1,0,0,0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,
1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,19,1,0,0,0,148,146,1,0,0,0,149,
154,3,24,12,0,150,151,5,38,0,0,151,154,3,20,10,0,152,154,3,22,11,0,153,149,
1,0,0,0,153,150,1,0,0,0,153,152,1,0,0,0,154,21,1,0,0,0,155,156,7,1,0,0,156,
23,1,0,0,0,157,158,6,12,-1,0,158,159,5,16,0,0,159,160,3,24,12,0,160,161,
5,17,0,0,161,171,1,0,0,0,162,167,3,26,13,0,163,164,7,2,0,0,164,166,3,26,
13,0,165,163,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,
171,1,0,0,0,169,167,1,0,0,0,170,157,1,0,0,0,170,162,1,0,0,0,171,181,1,0,
0,0,172,175,10,3,0,0,173,174,7,2,0,0,174,176,3,24,12,0,175,173,1,0,0,0,176,
177,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,180,1,0,0,0,179,172,1,0,
0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,25,1,0,0,0,183,181,
1,0,0,0,184,185,5,16,0,0,185,186,3,26,13,0,186,187,5,17,0,0,187,197,1,0,
0,0,188,193,3,38,19,0,189,190,7,3,0,0,190,192,3,38,19,0,191,189,1,0,0,0,
192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,197,1,0,0,0,195,193,
1,0,0,0,196,184,1,0,0,0,196,188,1,0,0,0,197,27,1,0,0,0,198,199,5,5,0,0,199,
203,5,16,0,0,200,204,5,28,0,0,201,204,3,38,19,0,202,204,3,30,15,0,203,200,
1,0,0,0,203,201,1,0,0,0,203,202,1,0,0,0,204,205,1,0,0,0,205,206,5,17,0,0,
206,207,5,20,0,0,207,29,1,0,0,0,208,211,3,32,16,0,209,210,5,21,0,0,210,212,
3,32,16,0,211,209,1,0,0,0,212,213,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,
0,214,31,1,0,0,0,215,218,5,14,0,0,216,218,3,38,19,0,217,215,1,0,0,0,217,
216,1,0,0,0,218,33,1,0,0,0,219,220,5,26,0,0,220,221,5,1,0,0,221,222,5,20,
0,0,222,35,1,0,0,0,223,224,5,26,0,0,224,225,5,2,0,0,225,226,5,20,0,0,226,
37,1,0,0,0,227,228,6,19,-1,0,228,229,5,16,0,0,229,230,3,38,19,0,230,232,
5,17,0,0,231,233,3,38,19,0,232,231,1,0,0,0,232,233,1,0,0,0,233,245,1,0,0,
0,234,235,5,16,0,0,235,236,3,38,19,0,236,237,5,17,0,0,237,238,5,16,0,0,238,
239,3,38,19,0,239,240,5,17,0,0,240,245,1,0,0,0,241,245,5,27,0,0,242,245,
5,15,0,0,243,245,5,26,0,0,244,227,1,0,0,0,244,234,1,0,0,0,244,241,1,0,0,
0,244,242,1,0,0,0,244,243,1,0,0,0,245,257,1,0,0,0,246,247,10,6,0,0,247,248,
5,40,0,0,248,256,3,38,19,7,249,250,10,5,0,0,250,251,7,4,0,0,251,256,3,38,
19,6,252,253,10,4,0,0,253,254,7,5,0,0,254,256,3,38,19,5,255,246,1,0,0,0,
255,249,1,0,0,0,255,252,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,
1,0,0,0,258,39,1,0,0,0,259,257,1,0,0,0,260,261,7,6,0,0,261,41,1,0,0,0,262,
263,7,7,0,0,263,43,1,0,0,0,27,52,66,71,74,80,83,89,99,121,129,134,140,146,
153,167,170,177,181,193,196,203,213,217,232,244,255,257];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TranslateParser extends antlr4.Parser {

    static grammarFileName = "Translate.g4";
    static literalNames = [ null, "'++'", "'--'", "'main'", "'if'", "'printf'", 
                            "'true'", "'false'", "'else'", "'else if'", 
                            "'void'", "'while'", "'int'", "'float'", "'string'", 
                            "'char'", "'('", "')'", "'{'", "'}'", "';'", 
                            "'+'", "'-'", "'*'", "'/'", "'='", null, null, 
                            null, null, "'=='", "'!='", "'>'", "'<'", "'>='", 
                            "'<='", "'&&'", "'||'", "'!'", null, "'%'" ];
    static symbolicNames = [ null, null, null, "MAIN", "IF", "PRINT", "TRUE", 
                             "FALSE", "ELSE", "ELSEIF", "VOID", "WHILE", 
                             "INT", "FLOAT", "STRING", "CHAR", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", 
                             "MINUS", "TIMES", "DIV", "EQUALS", "ID", "NUMBER", 
                             "STRINGL", "CHARL", "IGUAL", "DISTINTO", "MAYOR", 
                             "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", 
                             "OR", "NOT", "DIGIT", "RESI", "WS" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "ifContent", "elseifContent", "elseContent", "condition", 
                         "trueOrFalse", "logicalExpression", "relationalExpression", 
                         "printPlease", "concat", "atom", "incre", "decre", 
                         "exp", "dataType", "simbolos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TranslateParser.ruleNames;
        this.literalNames = TranslateParser.literalNames;
        this.symbolicNames = TranslateParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.logicalExpression_sempred(localctx, predIndex);
    	case 19:
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
	    this.enterRule(localctx, 0, TranslateParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(TranslateParser.VOID);
	        this.state = 45;
	        this.match(TranslateParser.MAIN);
	        this.state = 46;
	        this.match(TranslateParser.LPAREN);
	        this.state = 47;
	        this.match(TranslateParser.RPAREN);
	        this.state = 48;
	        this.match(TranslateParser.LBRACE);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 49;
	            this.content();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
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
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 62;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 63;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 64;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 65;
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
	        this.state = 68;
	        this.dataType();
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0)) {
	            this.state = 70;
	            this.simbolos();
	        }

	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 73;
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
	        this.state = 76;
	        this.dataType();
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 78;
	        this.match(TranslateParser.EQUALS);
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 79;
	            this.exp(0);

	        }
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TranslateParser.RULE_assignment);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(TranslateParser.ID);
	        this.state = 86;
	        this.match(TranslateParser.EQUALS);
	        this.state = 87;
	        this.exp(0);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 88;
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
	        this.state = 91;
	        this.match(TranslateParser.WHILE);
	        this.state = 92;
	        this.match(TranslateParser.LPAREN);
	        this.state = 93;
	        this.condition();
	        this.state = 94;
	        this.match(TranslateParser.RPAREN);
	        this.state = 95;
	        this.match(TranslateParser.LBRACE);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 96;
	            this.content();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
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
	        this.state = 104;
	        this.match(TranslateParser.IF);
	        this.state = 105;
	        this.match(TranslateParser.LPAREN);
	        this.state = 106;
	        this.condition();
	        this.state = 107;
	        this.match(TranslateParser.RPAREN);
	        this.state = 108;
	        this.match(TranslateParser.LBRACE);
	        this.state = 109;
	        this.ifContent();
	        this.state = 110;
	        this.match(TranslateParser.RBRACE);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 111;
	            this.match(TranslateParser.ELSEIF);
	            this.state = 112;
	            this.match(TranslateParser.LPAREN);
	            this.state = 113;
	            this.condition();
	            this.state = 114;
	            this.match(TranslateParser.RPAREN);
	            this.state = 115;
	            this.match(TranslateParser.LBRACE);
	            this.state = 116;
	            this.elseifContent();
	            this.state = 117;
	            this.match(TranslateParser.RBRACE);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 124;
	            this.match(TranslateParser.ELSE);
	            this.state = 125;
	            this.match(TranslateParser.LBRACE);
	            this.state = 126;
	            this.elseContent();
	            this.state = 127;
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



	ifContent() {
	    let localctx = new IfContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TranslateParser.RULE_ifContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 131;
	            this.content();
	            this.state = 136;
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
	    this.enterRule(localctx, 16, TranslateParser.RULE_elseifContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 137;
	            this.content();
	            this.state = 142;
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
	    this.enterRule(localctx, 18, TranslateParser.RULE_elseContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67164208) !== 0)) {
	            this.state = 143;
	            this.content();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TranslateParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 16:
	        case 26:
	        case 27:
	            this.state = 149;
	            this.logicalExpression(0);
	            break;
	        case 38:
	            this.state = 150;
	            this.match(TranslateParser.NOT);
	            this.state = 151;
	            this.condition();
	            break;
	        case 6:
	        case 7:
	            this.state = 152;
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
	    this.enterRule(localctx, 22, TranslateParser.RULE_trueOrFalse);
	    var _la = 0;
	    try {
	        localctx = new VerdaderoOFalsoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
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


	logicalExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, TranslateParser.RULE_logicalExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalConParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 158;
	            this.match(TranslateParser.LPAREN);
	            this.state = 159;
	            this.logicalExpression(0);
	            this.state = 160;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionLogicaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.relationalExpression();
	            this.state = 167;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 163;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===36 || _la===37)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 164;
	                    this.relationalExpression(); 
	                }
	                this.state = 169;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicLogicalContext(this, new LogicalExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_logicalExpression);
	                this.state = 172;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 175; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 173;
	                		localctx.logic = this._input.LT(1);
	                		_la = this._input.LA(1);
	                		if(!(_la===36 || _la===37)) {
	                		    localctx.logic = this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		this.state = 174;
	                		this.logicalExpression(0);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 177; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 183;
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
	    this.enterRule(localctx, 26, TranslateParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RelacionalConParentesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.match(TranslateParser.LPAREN);
	            this.state = 185;
	            this.relationalExpression();
	            this.state = 186;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionRelacionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 188;
	            this.exp(0);
	            this.state = 193;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 189;
	                    localctx.relation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 63) !== 0))) {
	                        localctx.relation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 190;
	                    this.exp(0); 
	                }
	                this.state = 195;
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
	    this.enterRule(localctx, 28, TranslateParser.RULE_printPlease);
	    try {
	        localctx = new ImpresionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(TranslateParser.PRINT);
	        this.state = 199;
	        this.match(TranslateParser.LPAREN);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 200;
	            this.match(TranslateParser.STRINGL);
	            break;

	        case 2:
	            this.state = 201;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 202;
	            this.concat();
	            break;

	        }
	        this.state = 205;
	        this.match(TranslateParser.RPAREN);
	        this.state = 206;
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
	    this.enterRule(localctx, 30, TranslateParser.RULE_concat);
	    var _la = 0;
	    try {
	        localctx = new ConcatenacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.atom();
	        this.state = 211; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 209;
	            this.match(TranslateParser.PLUS);
	            this.state = 210;
	            this.atom();
	            this.state = 213; 
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
	    this.enterRule(localctx, 32, TranslateParser.RULE_atom);
	    try {
	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.match(TranslateParser.STRING);
	            break;
	        case 15:
	        case 16:
	        case 26:
	        case 27:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
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
	    this.enterRule(localctx, 34, TranslateParser.RULE_incre);
	    try {
	        localctx = new IncrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(TranslateParser.ID);
	        this.state = 220;
	        this.match(TranslateParser.T__0);
	        this.state = 221;
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



	decre() {
	    let localctx = new DecreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TranslateParser.RULE_decre);
	    try {
	        localctx = new DecrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(TranslateParser.ID);
	        this.state = 224;
	        this.match(TranslateParser.T__1);
	        this.state = 225;
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


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, TranslateParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 228;
	            this.match(TranslateParser.LPAREN);
	            this.state = 229;
	            this.exp(0);
	            this.state = 230;
	            this.match(TranslateParser.RPAREN);
	            this.state = 232;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 231;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 234;
	            this.match(TranslateParser.LPAREN);
	            this.state = 235;
	            this.exp(0);
	            this.state = 236;
	            this.match(TranslateParser.RPAREN);
	            this.state = 237;
	            this.match(TranslateParser.LPAREN);
	            this.state = 238;
	            this.exp(0);
	            this.state = 239;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 241;
	            this.match(TranslateParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 242;
	            this.match(TranslateParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 243;
	            this.match(TranslateParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 257;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 255;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ResiudoContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 247;
	                    this.match(TranslateParser.RESI);
	                    this.state = 248;
	                    this.exp(7);
	                    break;

	                case 2:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 250;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 251;
	                    this.exp(6);
	                    break;

	                case 3:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 252;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 253;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 254;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 259;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	    this.enterRule(localctx, 40, TranslateParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
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
	    this.enterRule(localctx, 42, TranslateParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
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
TranslateParser.DIGIT = 39;
TranslateParser.RESI = 40;
TranslateParser.WS = 41;

TranslateParser.RULE_prog = 0;
TranslateParser.RULE_content = 1;
TranslateParser.RULE_declaration = 2;
TranslateParser.RULE_declarationAndAssignament = 3;
TranslateParser.RULE_assignment = 4;
TranslateParser.RULE_whileStatement = 5;
TranslateParser.RULE_ifStatement = 6;
TranslateParser.RULE_ifContent = 7;
TranslateParser.RULE_elseifContent = 8;
TranslateParser.RULE_elseContent = 9;
TranslateParser.RULE_condition = 10;
TranslateParser.RULE_trueOrFalse = 11;
TranslateParser.RULE_logicalExpression = 12;
TranslateParser.RULE_relationalExpression = 13;
TranslateParser.RULE_printPlease = 14;
TranslateParser.RULE_concat = 15;
TranslateParser.RULE_atom = 16;
TranslateParser.RULE_incre = 17;
TranslateParser.RULE_decre = 18;
TranslateParser.RULE_exp = 19;
TranslateParser.RULE_dataType = 20;
TranslateParser.RULE_simbolos = 21;

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

	VOID() {
	    return this.getToken(TranslateParser.VOID, 0);
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


	ifContent() {
	    return this.getTypedRuleContext(IfContentContext,0);
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
	    return this.getToken(TranslateParser.ELSE, 0);
	};

	elseContent() {
	    return this.getTypedRuleContext(ElseContentContext,0);
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
        this.ruleIndex = TranslateParser.RULE_ifContent;
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
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_elseifContent;
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
	    if ( visitor instanceof TranslateVisitor ) {
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
        this.ruleIndex = TranslateParser.RULE_elseContent;
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
	    if ( visitor instanceof TranslateVisitor ) {
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
	        return visitor.visitLogicLogical(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.LogicLogicalContext = LogicLogicalContext;

class LogicalConParentesisContext extends LogicalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	logicalExpression() {
	    return this.getTypedRuleContext(LogicalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitLogicalConParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.LogicalConParentesisContext = LogicalConParentesisContext;

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


class RelacionalConParentesisContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(TranslateParser.LPAREN, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(TranslateParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitRelacionalConParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.RelacionalConParentesisContext = RelacionalConParentesisContext;

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

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
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

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
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
	    return this.getToken(TranslateParser.RESI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitResiudo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.ResiudoContext = ResiudoContext;

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
TranslateParser.IfContentContext = IfContentContext; 
TranslateParser.ElseifContentContext = ElseifContentContext; 
TranslateParser.ElseContentContext = ElseContentContext; 
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
