// Generated from ./grammar/Translate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TranslateVisitor from './TranslateVisitor.js';

const serializedATN = [4,1,44,281,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,1,0,1,0,5,0,55,8,0,
10,0,12,0,58,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
73,8,1,1,2,1,2,1,2,3,2,78,8,2,1,2,3,2,81,8,2,1,3,1,3,1,3,1,3,3,3,87,8,3,
1,3,3,3,90,8,3,1,4,1,4,1,4,1,4,3,4,96,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,104,
8,5,10,5,12,5,107,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,5,6,126,8,6,10,6,12,6,129,9,6,1,6,1,6,1,6,1,6,1,6,3,6,
136,8,6,1,7,5,7,139,8,7,10,7,12,7,142,9,7,1,8,5,8,145,8,8,10,8,12,8,148,
9,8,1,9,5,9,151,8,9,10,9,12,9,154,9,9,1,10,1,10,1,10,1,10,3,10,160,8,10,
1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,172,8,12,10,12,12,
12,175,9,12,3,12,177,8,12,1,12,1,12,1,12,4,12,182,8,12,11,12,12,12,183,5,
12,186,8,12,10,12,12,12,189,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,
198,8,13,10,13,12,13,201,9,13,3,13,203,8,13,1,14,1,14,1,14,1,14,1,14,3,14,
210,8,14,1,14,1,14,1,14,1,15,1,15,1,15,4,15,218,8,15,11,15,12,15,219,1,16,
1,16,3,16,224,8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,3,21,249,8,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,261,8,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,272,8,21,10,21,12,21,275,9,21,1,
22,1,22,1,23,1,23,1,23,0,2,24,42,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,0,9,1,0,29,30,1,0,9,10,1,0,39,40,1,0,33,38,
2,0,1,1,24,24,1,0,26,27,1,0,24,25,2,0,15,15,17,18,1,0,24,27,298,0,48,1,0,
0,0,2,72,1,0,0,0,4,74,1,0,0,0,6,82,1,0,0,0,8,91,1,0,0,0,10,97,1,0,0,0,12,
110,1,0,0,0,14,140,1,0,0,0,16,146,1,0,0,0,18,152,1,0,0,0,20,159,1,0,0,0,
22,161,1,0,0,0,24,176,1,0,0,0,26,202,1,0,0,0,28,204,1,0,0,0,30,214,1,0,0,
0,32,223,1,0,0,0,34,225,1,0,0,0,36,229,1,0,0,0,38,233,1,0,0,0,40,238,1,0,
0,0,42,260,1,0,0,0,44,276,1,0,0,0,46,278,1,0,0,0,48,49,5,13,0,0,49,50,5,
6,0,0,50,51,5,19,0,0,51,52,5,20,0,0,52,56,5,21,0,0,53,55,3,2,1,0,54,53,1,
0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,59,1,0,0,0,58,56,1,0,
0,0,59,60,5,22,0,0,60,1,1,0,0,0,61,73,3,4,2,0,62,73,3,6,3,0,63,73,3,8,4,
0,64,73,3,12,6,0,65,73,3,10,5,0,66,73,3,28,14,0,67,73,3,44,22,0,68,73,3,
34,17,0,69,73,3,36,18,0,70,73,3,38,19,0,71,73,3,40,20,0,72,61,1,0,0,0,72,
62,1,0,0,0,72,63,1,0,0,0,72,64,1,0,0,0,72,65,1,0,0,0,72,66,1,0,0,0,72,67,
1,0,0,0,72,68,1,0,0,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,3,1,0,
0,0,74,75,3,44,22,0,75,77,7,0,0,0,76,78,3,46,23,0,77,76,1,0,0,0,77,78,1,
0,0,0,78,80,1,0,0,0,79,81,5,23,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,5,1,0,
0,0,82,83,3,44,22,0,83,84,7,0,0,0,84,86,5,28,0,0,85,87,3,42,21,0,86,85,1,
0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,90,5,23,0,0,89,88,1,0,0,0,89,90,1,0,
0,0,90,7,1,0,0,0,91,92,5,29,0,0,92,93,5,28,0,0,93,95,3,42,21,0,94,96,5,23,
0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,9,1,0,0,0,97,98,5,14,0,0,98,99,5,19,0,
0,99,100,3,20,10,0,100,101,5,20,0,0,101,105,5,21,0,0,102,104,3,2,1,0,103,
102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,108,1,0,
0,0,107,105,1,0,0,0,108,109,5,22,0,0,109,11,1,0,0,0,110,111,5,7,0,0,111,
112,5,19,0,0,112,113,3,20,10,0,113,114,5,20,0,0,114,115,5,21,0,0,115,116,
3,14,7,0,116,127,5,22,0,0,117,118,5,12,0,0,118,119,5,19,0,0,119,120,3,20,
10,0,120,121,5,20,0,0,121,122,5,21,0,0,122,123,3,16,8,0,123,124,5,22,0,0,
124,126,1,0,0,0,125,117,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,
1,0,0,0,128,135,1,0,0,0,129,127,1,0,0,0,130,131,5,11,0,0,131,132,5,21,0,
0,132,133,3,18,9,0,133,134,5,22,0,0,134,136,1,0,0,0,135,130,1,0,0,0,135,
136,1,0,0,0,136,13,1,0,0,0,137,139,3,2,1,0,138,137,1,0,0,0,139,142,1,0,0,
0,140,138,1,0,0,0,140,141,1,0,0,0,141,15,1,0,0,0,142,140,1,0,0,0,143,145,
3,2,1,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,
147,17,1,0,0,0,148,146,1,0,0,0,149,151,3,2,1,0,150,149,1,0,0,0,151,154,1,
0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,19,1,0,0,0,154,152,1,0,0,0,155,
160,3,24,12,0,156,157,5,41,0,0,157,160,3,20,10,0,158,160,3,22,11,0,159,155,
1,0,0,0,159,156,1,0,0,0,159,158,1,0,0,0,160,21,1,0,0,0,161,162,7,1,0,0,162,
23,1,0,0,0,163,164,6,12,-1,0,164,165,5,19,0,0,165,166,3,24,12,0,166,167,
5,20,0,0,167,177,1,0,0,0,168,173,3,26,13,0,169,170,7,2,0,0,170,172,3,26,
13,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,
177,1,0,0,0,175,173,1,0,0,0,176,163,1,0,0,0,176,168,1,0,0,0,177,187,1,0,
0,0,178,181,10,3,0,0,179,180,7,2,0,0,180,182,3,24,12,0,181,179,1,0,0,0,182,
183,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,178,1,0,
0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,25,1,0,0,0,189,187,
1,0,0,0,190,191,5,19,0,0,191,192,3,26,13,0,192,193,5,20,0,0,193,203,1,0,
0,0,194,199,3,42,21,0,195,196,7,3,0,0,196,198,3,42,21,0,197,195,1,0,0,0,
198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,203,1,0,0,0,201,199,
1,0,0,0,202,190,1,0,0,0,202,194,1,0,0,0,203,27,1,0,0,0,204,205,5,8,0,0,205,
209,5,19,0,0,206,210,5,31,0,0,207,210,3,42,21,0,208,210,3,30,15,0,209,206,
1,0,0,0,209,207,1,0,0,0,209,208,1,0,0,0,210,211,1,0,0,0,211,212,5,20,0,0,
212,213,5,23,0,0,213,29,1,0,0,0,214,217,3,32,16,0,215,216,7,4,0,0,216,218,
3,32,16,0,217,215,1,0,0,0,218,219,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,
0,220,31,1,0,0,0,221,224,5,31,0,0,222,224,3,42,21,0,223,221,1,0,0,0,223,
222,1,0,0,0,224,33,1,0,0,0,225,226,5,29,0,0,226,227,5,2,0,0,227,228,5,23,
0,0,228,35,1,0,0,0,229,230,5,29,0,0,230,231,5,3,0,0,231,232,5,23,0,0,232,
37,1,0,0,0,233,234,5,29,0,0,234,235,5,4,0,0,235,236,3,32,16,0,236,237,5,
23,0,0,237,39,1,0,0,0,238,239,5,29,0,0,239,240,5,5,0,0,240,241,3,32,16,0,
241,242,5,23,0,0,242,41,1,0,0,0,243,244,6,21,-1,0,244,245,5,19,0,0,245,246,
3,42,21,0,246,248,5,20,0,0,247,249,3,42,21,0,248,247,1,0,0,0,248,249,1,0,
0,0,249,261,1,0,0,0,250,251,5,19,0,0,251,252,3,42,21,0,252,253,5,20,0,0,
253,254,5,19,0,0,254,255,3,42,21,0,255,256,5,20,0,0,256,261,1,0,0,0,257,
261,5,30,0,0,258,261,5,18,0,0,259,261,5,29,0,0,260,243,1,0,0,0,260,250,1,
0,0,0,260,257,1,0,0,0,260,258,1,0,0,0,260,259,1,0,0,0,261,273,1,0,0,0,262,
263,10,6,0,0,263,264,5,43,0,0,264,272,3,42,21,7,265,266,10,5,0,0,266,267,
7,5,0,0,267,272,3,42,21,6,268,269,10,4,0,0,269,270,7,6,0,0,270,272,3,42,
21,5,271,262,1,0,0,0,271,265,1,0,0,0,271,268,1,0,0,0,272,275,1,0,0,0,273,
271,1,0,0,0,273,274,1,0,0,0,274,43,1,0,0,0,275,273,1,0,0,0,276,277,7,7,0,
0,277,45,1,0,0,0,278,279,7,8,0,0,279,47,1,0,0,0,27,56,72,77,80,86,89,95,
105,127,135,140,146,152,159,173,176,183,187,199,202,209,219,223,248,260,
271,273];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TranslateParser extends antlr4.Parser {

    static grammarFileName = "Translate.g4";
    static literalNames = [ null, "','", "'++'", "'--'", "'+='", "'-='", 
                            "'main'", "'if'", "'printf'", "'true'", "'false'", 
                            "'else'", "'else if'", "'void'", "'while'", 
                            "'int'", "'float'", "'string'", "'char'", "'('", 
                            "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", 
                            "'/'", "'='", null, null, null, null, "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='", "'&&'", 
                            "'||'", "'!'", null, "'%'" ];
    static symbolicNames = [ null, null, null, null, null, null, "MAIN", 
                             "IF", "PRINT", "TRUE", "FALSE", "ELSE", "ELSEIF", 
                             "VOID", "WHILE", "INT", "FLOAT", "STRING", 
                             "CHAR", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "FIN", "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", 
                             "ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", 
                             "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", 
                             "MENORIGUAL", "AND", "OR", "NOT", "DIGIT", 
                             "RESI", "WS" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "ifContent", "elseifContent", "elseContent", "condition", 
                         "trueOrFalse", "logicalExpression", "relationalExpression", 
                         "printPlease", "concat", "atom", "incre", "decre", 
                         "masi", "menosi", "exp", "dataType", "simbolos" ];

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
	    this.enterRule(localctx, 0, TranslateParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(TranslateParser.VOID);
	        this.state = 49;
	        this.match(TranslateParser.MAIN);
	        this.state = 50;
	        this.match(TranslateParser.LPAREN);
	        this.state = 51;
	        this.match(TranslateParser.RPAREN);
	        this.state = 52;
	        this.match(TranslateParser.LBRACE);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 537313664) !== 0)) {
	            this.state = 53;
	            this.content();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
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
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 63;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 65;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 66;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 67;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 68;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 69;
	            this.decre();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 70;
	            this.masi();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 71;
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
	    this.enterRule(localctx, 4, TranslateParser.RULE_declaration);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.dataType();
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 251658240) !== 0)) {
	            this.state = 76;
	            this.simbolos();
	        }

	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 79;
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
	        this.state = 82;
	        this.dataType();
	        this.state = 83;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 84;
	        this.match(TranslateParser.EQUALS);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 85;
	            this.exp(0);

	        }
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TranslateParser.RULE_assignment);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(TranslateParser.ID);
	        this.state = 92;
	        this.match(TranslateParser.EQUALS);
	        this.state = 93;
	        this.exp(0);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 94;
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
	        this.state = 97;
	        this.match(TranslateParser.WHILE);
	        this.state = 98;
	        this.match(TranslateParser.LPAREN);
	        this.state = 99;
	        this.condition();
	        this.state = 100;
	        this.match(TranslateParser.RPAREN);
	        this.state = 101;
	        this.match(TranslateParser.LBRACE);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 537313664) !== 0)) {
	            this.state = 102;
	            this.content();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	        this.state = 110;
	        this.match(TranslateParser.IF);
	        this.state = 111;
	        this.match(TranslateParser.LPAREN);
	        this.state = 112;
	        this.condition();
	        this.state = 113;
	        this.match(TranslateParser.RPAREN);
	        this.state = 114;
	        this.match(TranslateParser.LBRACE);
	        this.state = 115;
	        this.ifContent();
	        this.state = 116;
	        this.match(TranslateParser.RBRACE);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 117;
	            this.match(TranslateParser.ELSEIF);
	            this.state = 118;
	            this.match(TranslateParser.LPAREN);
	            this.state = 119;
	            this.condition();
	            this.state = 120;
	            this.match(TranslateParser.RPAREN);
	            this.state = 121;
	            this.match(TranslateParser.LBRACE);
	            this.state = 122;
	            this.elseifContent();
	            this.state = 123;
	            this.match(TranslateParser.RBRACE);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 130;
	            this.match(TranslateParser.ELSE);
	            this.state = 131;
	            this.match(TranslateParser.LBRACE);
	            this.state = 132;
	            this.elseContent();
	            this.state = 133;
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
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 537313664) !== 0)) {
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



	elseifContent() {
	    let localctx = new ElseifContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TranslateParser.RULE_elseifContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 537313664) !== 0)) {
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



	elseContent() {
	    let localctx = new ElseContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TranslateParser.RULE_elseContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 537313664) !== 0)) {
	            this.state = 149;
	            this.content();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TranslateParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	        case 19:
	        case 29:
	        case 30:
	            this.state = 155;
	            this.logicalExpression(0);
	            break;
	        case 41:
	            this.state = 156;
	            this.match(TranslateParser.NOT);
	            this.state = 157;
	            this.condition();
	            break;
	        case 9:
	        case 10:
	            this.state = 158;
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
	        this.state = 161;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
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
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalConParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 164;
	            this.match(TranslateParser.LPAREN);
	            this.state = 165;
	            this.logicalExpression(0);
	            this.state = 166;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionLogicaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 168;
	            this.relationalExpression();
	            this.state = 173;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 169;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===39 || _la===40)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 170;
	                    this.relationalExpression(); 
	                }
	                this.state = 175;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 187;
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
	                this.state = 178;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 181; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 179;
	                		localctx.logic = this._input.LT(1);
	                		_la = this._input.LA(1);
	                		if(!(_la===39 || _la===40)) {
	                		    localctx.logic = this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		this.state = 180;
	                		this.logicalExpression(0);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 183; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 189;
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
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RelacionalConParentesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.match(TranslateParser.LPAREN);
	            this.state = 191;
	            this.relationalExpression();
	            this.state = 192;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionRelacionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.exp(0);
	            this.state = 199;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 195;
	                    localctx.relation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 63) !== 0))) {
	                        localctx.relation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 196;
	                    this.exp(0); 
	                }
	                this.state = 201;
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
	        this.state = 204;
	        this.match(TranslateParser.PRINT);
	        this.state = 205;
	        this.match(TranslateParser.LPAREN);
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 206;
	            this.match(TranslateParser.STRINGL);
	            break;

	        case 2:
	            this.state = 207;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 208;
	            this.concat();
	            break;

	        }
	        this.state = 211;
	        this.match(TranslateParser.RPAREN);
	        this.state = 212;
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
	        this.state = 214;
	        this.atom();
	        this.state = 217; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 215;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 216;
	            this.atom();
	            this.state = 219; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===24);
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
	        this.state = 223;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(TranslateParser.STRINGL);
	            break;
	        case 18:
	        case 19:
	        case 29:
	        case 30:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
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
	        this.state = 225;
	        this.match(TranslateParser.ID);
	        this.state = 226;
	        this.match(TranslateParser.T__1);
	        this.state = 227;
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
	        this.state = 229;
	        this.match(TranslateParser.ID);
	        this.state = 230;
	        this.match(TranslateParser.T__2);
	        this.state = 231;
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



	masi() {
	    let localctx = new MasiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TranslateParser.RULE_masi);
	    try {
	        localctx = new MasigualContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(TranslateParser.ID);
	        this.state = 234;
	        this.match(TranslateParser.T__3);
	        this.state = 235;
	        this.atom();
	        this.state = 236;
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



	menosi() {
	    let localctx = new MenosiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TranslateParser.RULE_menosi);
	    try {
	        localctx = new MenosigualContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(TranslateParser.ID);
	        this.state = 239;
	        this.match(TranslateParser.T__4);
	        this.state = 240;
	        this.atom();
	        this.state = 241;
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
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, TranslateParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 244;
	            this.match(TranslateParser.LPAREN);
	            this.state = 245;
	            this.exp(0);
	            this.state = 246;
	            this.match(TranslateParser.RPAREN);
	            this.state = 248;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 247;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 250;
	            this.match(TranslateParser.LPAREN);
	            this.state = 251;
	            this.exp(0);
	            this.state = 252;
	            this.match(TranslateParser.RPAREN);
	            this.state = 253;
	            this.match(TranslateParser.LPAREN);
	            this.state = 254;
	            this.exp(0);
	            this.state = 255;
	            this.match(TranslateParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 257;
	            this.match(TranslateParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 258;
	            this.match(TranslateParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 259;
	            this.match(TranslateParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 271;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ResiudoContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 262;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 263;
	                    this.match(TranslateParser.RESI);
	                    this.state = 264;
	                    this.exp(7);
	                    break;

	                case 2:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 265;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 266;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===26 || _la===27)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 267;
	                    this.exp(6);
	                    break;

	                case 3:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TranslateParser.RULE_exp);
	                    this.state = 268;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 269;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 270;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 275;
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
	    this.enterRule(localctx, 44, TranslateParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 425984) !== 0))) {
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
	    this.enterRule(localctx, 46, TranslateParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 251658240) !== 0))) {
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
TranslateParser.T__2 = 3;
TranslateParser.T__3 = 4;
TranslateParser.T__4 = 5;
TranslateParser.MAIN = 6;
TranslateParser.IF = 7;
TranslateParser.PRINT = 8;
TranslateParser.TRUE = 9;
TranslateParser.FALSE = 10;
TranslateParser.ELSE = 11;
TranslateParser.ELSEIF = 12;
TranslateParser.VOID = 13;
TranslateParser.WHILE = 14;
TranslateParser.INT = 15;
TranslateParser.FLOAT = 16;
TranslateParser.STRING = 17;
TranslateParser.CHAR = 18;
TranslateParser.LPAREN = 19;
TranslateParser.RPAREN = 20;
TranslateParser.LBRACE = 21;
TranslateParser.RBRACE = 22;
TranslateParser.FIN = 23;
TranslateParser.PLUS = 24;
TranslateParser.MINUS = 25;
TranslateParser.TIMES = 26;
TranslateParser.DIV = 27;
TranslateParser.EQUALS = 28;
TranslateParser.ID = 29;
TranslateParser.NUMBER = 30;
TranslateParser.STRINGL = 31;
TranslateParser.CHARL = 32;
TranslateParser.IGUAL = 33;
TranslateParser.DISTINTO = 34;
TranslateParser.MAYOR = 35;
TranslateParser.MENOR = 36;
TranslateParser.MAYORIGUAL = 37;
TranslateParser.MENORIGUAL = 38;
TranslateParser.AND = 39;
TranslateParser.OR = 40;
TranslateParser.NOT = 41;
TranslateParser.DIGIT = 42;
TranslateParser.RESI = 43;
TranslateParser.WS = 44;

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
TranslateParser.RULE_masi = 19;
TranslateParser.RULE_menosi = 20;
TranslateParser.RULE_exp = 21;
TranslateParser.RULE_dataType = 22;
TranslateParser.RULE_simbolos = 23;

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

	masi() {
	    return this.getTypedRuleContext(MasiContext,0);
	};

	menosi() {
	    return this.getTypedRuleContext(MenosiContext,0);
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
        this.ruleIndex = TranslateParser.RULE_masi;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitMasigual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.MasigualContext = MasigualContext;

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
        this.ruleIndex = TranslateParser.RULE_menosi;
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
	    return this.getToken(TranslateParser.ID, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	FIN() {
	    return this.getToken(TranslateParser.FIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TranslateVisitor ) {
	        return visitor.visitMenosigual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TranslateParser.MenosigualContext = MenosigualContext;

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
TranslateParser.MasiContext = MasiContext; 
TranslateParser.MenosiContext = MenosiContext; 
TranslateParser.ExpContext = ExpContext; 
TranslateParser.DataTypeContext = DataTypeContext; 
TranslateParser.SimbolosContext = SimbolosContext; 
