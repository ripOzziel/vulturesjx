// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,45,261,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,2,1,2,1,2,3,2,69,8,2,1,2,3,2,
72,8,2,1,3,1,3,1,3,1,3,3,3,78,8,3,1,3,3,3,81,8,3,1,4,1,4,1,4,1,4,3,4,87,
8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,95,8,5,10,5,12,5,98,9,5,1,5,1,5,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,117,8,6,10,6,12,
6,120,9,6,1,6,1,6,1,6,1,6,1,6,3,6,127,8,6,1,7,5,7,130,8,7,10,7,12,7,133,
9,7,1,8,5,8,136,8,8,10,8,12,8,139,9,8,1,9,5,9,142,8,9,10,9,12,9,145,9,9,
1,10,1,10,1,10,1,10,3,10,151,8,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,5,12,163,8,12,10,12,12,12,166,9,12,3,12,168,8,12,1,12,1,12,1,12,
4,12,173,8,12,11,12,12,12,174,5,12,177,8,12,10,12,12,12,180,9,12,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,5,13,189,8,13,10,13,12,13,192,9,13,3,13,194,
8,13,1,14,1,14,1,14,1,14,1,14,3,14,201,8,14,1,14,1,14,3,14,205,8,14,1,15,
1,15,1,15,4,15,210,8,15,11,15,12,15,211,1,16,1,16,3,16,216,8,16,1,17,1,17,
1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,3,19,229,8,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,241,8,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,5,19,252,8,19,10,19,12,19,255,9,19,1,20,1,20,1,21,1,
21,1,21,0,2,24,38,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,0,8,1,0,36,37,1,0,42,43,1,0,25,26,1,0,19,24,1,0,7,8,1,0,5,6,1,0,
33,35,1,0,5,8,279,0,44,1,0,0,0,2,63,1,0,0,0,4,65,1,0,0,0,6,73,1,0,0,0,8,
82,1,0,0,0,10,88,1,0,0,0,12,101,1,0,0,0,14,131,1,0,0,0,16,137,1,0,0,0,18,
143,1,0,0,0,20,150,1,0,0,0,22,152,1,0,0,0,24,167,1,0,0,0,26,193,1,0,0,0,
28,195,1,0,0,0,30,206,1,0,0,0,32,215,1,0,0,0,34,217,1,0,0,0,36,220,1,0,0,
0,38,240,1,0,0,0,40,256,1,0,0,0,42,258,1,0,0,0,44,45,5,1,0,0,45,49,5,17,
0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,
0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,18,0,0,53,1,1,0,0,0,54,64,3,4,2,0,
55,64,3,6,3,0,56,64,3,8,4,0,57,64,3,12,6,0,58,64,3,10,5,0,59,64,3,28,14,
0,60,64,3,40,20,0,61,64,3,34,17,0,62,64,3,36,18,0,63,54,1,0,0,0,63,55,1,
0,0,0,63,56,1,0,0,0,63,57,1,0,0,0,63,58,1,0,0,0,63,59,1,0,0,0,63,60,1,0,
0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,3,1,0,0,0,65,66,3,40,20,0,66,68,7,0,0,
0,67,69,3,42,21,0,68,67,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,72,5,4,0,
0,71,70,1,0,0,0,71,72,1,0,0,0,72,5,1,0,0,0,73,74,3,40,20,0,74,75,7,0,0,0,
75,77,5,9,0,0,76,78,3,38,19,0,77,76,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,
79,81,5,4,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,7,1,0,0,0,82,83,5,36,0,0,83,
84,5,9,0,0,84,86,3,38,19,0,85,87,5,4,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,
9,1,0,0,0,88,89,5,32,0,0,89,90,5,15,0,0,90,91,3,20,10,0,91,92,5,16,0,0,92,
96,5,17,0,0,93,95,3,2,1,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,
1,0,0,0,97,99,1,0,0,0,98,96,1,0,0,0,99,100,5,18,0,0,100,11,1,0,0,0,101,102,
5,29,0,0,102,103,5,15,0,0,103,104,3,20,10,0,104,105,5,16,0,0,105,106,5,17,
0,0,106,107,3,14,7,0,107,118,5,18,0,0,108,109,5,31,0,0,109,110,5,15,0,0,
110,111,3,20,10,0,111,112,5,16,0,0,112,113,5,17,0,0,113,114,3,16,8,0,114,
115,5,18,0,0,115,117,1,0,0,0,116,108,1,0,0,0,117,120,1,0,0,0,118,116,1,0,
0,0,118,119,1,0,0,0,119,126,1,0,0,0,120,118,1,0,0,0,121,122,5,30,0,0,122,
123,5,17,0,0,123,124,3,18,9,0,124,125,5,18,0,0,125,127,1,0,0,0,126,121,1,
0,0,0,126,127,1,0,0,0,127,13,1,0,0,0,128,130,3,2,1,0,129,128,1,0,0,0,130,
133,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,15,1,0,0,0,133,131,1,0,0,
0,134,136,3,2,1,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,
1,0,0,0,138,17,1,0,0,0,139,137,1,0,0,0,140,142,3,2,1,0,141,140,1,0,0,0,142,
145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,19,1,0,0,0,145,143,1,0,0,
0,146,151,3,24,12,0,147,148,5,27,0,0,148,151,3,20,10,0,149,151,3,22,11,0,
150,146,1,0,0,0,150,147,1,0,0,0,150,149,1,0,0,0,151,21,1,0,0,0,152,153,7,
1,0,0,153,23,1,0,0,0,154,155,6,12,-1,0,155,156,5,15,0,0,156,157,3,24,12,
0,157,158,5,16,0,0,158,168,1,0,0,0,159,164,3,26,13,0,160,161,7,2,0,0,161,
163,3,26,13,0,162,160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,
0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,167,154,1,0,0,0,167,159,1,0,0,0,168,
178,1,0,0,0,169,172,10,3,0,0,170,171,7,2,0,0,171,173,3,24,12,0,172,170,1,
0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,176,
169,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,25,1,0,0,
0,180,178,1,0,0,0,181,182,5,15,0,0,182,183,3,26,13,0,183,184,5,16,0,0,184,
194,1,0,0,0,185,190,3,38,19,0,186,187,7,3,0,0,187,189,3,38,19,0,188,186,
1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,194,1,0,0,0,
192,190,1,0,0,0,193,181,1,0,0,0,193,185,1,0,0,0,194,27,1,0,0,0,195,196,5,
28,0,0,196,200,5,15,0,0,197,201,5,38,0,0,198,201,3,38,19,0,199,201,3,30,
15,0,200,197,1,0,0,0,200,198,1,0,0,0,200,199,1,0,0,0,201,202,1,0,0,0,202,
204,5,16,0,0,203,205,5,4,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,29,1,0,
0,0,206,209,3,32,16,0,207,208,5,5,0,0,208,210,3,32,16,0,209,207,1,0,0,0,
210,211,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,31,1,0,0,0,213,216,5,
38,0,0,214,216,3,38,19,0,215,213,1,0,0,0,215,214,1,0,0,0,216,33,1,0,0,0,
217,218,5,36,0,0,218,219,5,2,0,0,219,35,1,0,0,0,220,221,5,36,0,0,221,222,
5,3,0,0,222,37,1,0,0,0,223,224,6,19,-1,0,224,225,5,15,0,0,225,226,3,38,19,
0,226,228,5,16,0,0,227,229,3,38,19,0,228,227,1,0,0,0,228,229,1,0,0,0,229,
241,1,0,0,0,230,231,5,15,0,0,231,232,3,38,19,0,232,233,5,16,0,0,233,234,
5,15,0,0,234,235,3,38,19,0,235,236,5,16,0,0,236,241,1,0,0,0,237,241,5,37,
0,0,238,241,5,39,0,0,239,241,5,36,0,0,240,223,1,0,0,0,240,230,1,0,0,0,240,
237,1,0,0,0,240,238,1,0,0,0,240,239,1,0,0,0,241,253,1,0,0,0,242,243,10,6,
0,0,243,244,5,45,0,0,244,252,3,38,19,7,245,246,10,5,0,0,246,247,7,4,0,0,
247,252,3,38,19,6,248,249,10,4,0,0,249,250,7,5,0,0,250,252,3,38,19,5,251,
242,1,0,0,0,251,245,1,0,0,0,251,248,1,0,0,0,252,255,1,0,0,0,253,251,1,0,
0,0,253,254,1,0,0,0,254,39,1,0,0,0,255,253,1,0,0,0,256,257,7,6,0,0,257,41,
1,0,0,0,258,259,7,7,0,0,259,43,1,0,0,0,28,49,63,68,71,77,80,86,96,118,126,
131,137,143,150,164,167,174,178,190,193,200,204,211,215,228,240,251,253];


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
                            "'false'", null, "'%'" ];
    static symbolicNames = [ null, null, null, null, "FIN", "PLUS", "MINUS", 
                             "TIMES", "DIV", "EQUALS", "GATO", "DOLLAR", 
                             "DOBLEPUNTO", "ANDPERSON", "COMMA", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "IGUAL", "DISTINTO", 
                             "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", 
                             "AND", "OR", "NOT", "PRINT", "IF", "ELSE", 
                             "ELSEIF", "WHILE", "NUM", "VUL", "V", "ID", 
                             "NUMBER", "STRING", "CHAR", "WS", "SALTO", 
                             "TRUE", "FALSE", "DIGIT", "RESI" ];
    static ruleNames = [ "prog", "content", "declaration", "declarationAndAssignament", 
                         "assignment", "whileStatement", "ifStatement", 
                         "ifContent", "elseifContent", "elseContent", "condition", 
                         "trueOrFalse", "logicalExpression", "relationalExpression", 
                         "printPlease", "concat", "atom", "incre", "decre", 
                         "exp", "dataType", "simbolos" ];

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
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(ArrayInitParser.T__0);
	        this.state = 45;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 46;
	            this.content();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.declarationAndAssignament();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.assignment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.printPlease();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 60;
	            this.dataType();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 61;
	            this.incre();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 62;
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
	        this.state = 65;
	        this.dataType();
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0)) {
	            this.state = 67;
	            this.simbolos();
	        }

	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 70;
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
	        this.state = 73;
	        this.dataType();
	        this.state = 74;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 75;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 76;
	            this.exp(0);

	        }
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ArrayInitParser.RULE_assignment);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(ArrayInitParser.ID);
	        this.state = 83;
	        this.match(ArrayInitParser.EQUALS);
	        this.state = 84;
	        this.exp(0);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ArrayInitParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        localctx = new WhileSentenciaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(ArrayInitParser.WHILE);
	        this.state = 89;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 90;
	        this.condition();
	        this.state = 91;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 92;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 93;
	            this.content();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
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
	        this.state = 101;
	        this.match(ArrayInitParser.IF);
	        this.state = 102;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 103;
	        this.condition();
	        this.state = 104;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 105;
	        this.match(ArrayInitParser.LBRACE);
	        this.state = 106;
	        this.ifContent();
	        this.state = 107;
	        this.match(ArrayInitParser.RBRACE);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 108;
	            this.match(ArrayInitParser.ELSEIF);
	            this.state = 109;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 110;
	            this.condition();
	            this.state = 111;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 112;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 113;
	            this.elseifContent();
	            this.state = 114;
	            this.match(ArrayInitParser.RBRACE);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 121;
	            this.match(ArrayInitParser.ELSE);
	            this.state = 122;
	            this.match(ArrayInitParser.LBRACE);
	            this.state = 123;
	            this.elseContent();
	            this.state = 124;
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
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
	            this.state = 128;
	            this.content();
	            this.state = 133;
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
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
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



	elseContent() {
	    let localctx = new ElseContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ArrayInitParser.RULE_elseContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 499) !== 0)) {
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArrayInitParser.RULE_condition);
	    try {
	        localctx = new CondicionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 36:
	        case 37:
	        case 39:
	            this.state = 146;
	            this.logicalExpression(0);
	            break;
	        case 27:
	            this.state = 147;
	            this.match(ArrayInitParser.NOT);
	            this.state = 148;
	            this.condition();
	            break;
	        case 42:
	        case 43:
	            this.state = 149;
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
	        this.state = 152;
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
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalConParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 155;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 156;
	            this.logicalExpression(0);
	            this.state = 157;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionLogicaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            this.relationalExpression();
	            this.state = 164;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 160;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===25 || _la===26)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 161;
	                    this.relationalExpression(); 
	                }
	                this.state = 166;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 178;
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
	                this.state = 169;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 172; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 170;
	                		localctx.logic = this._input.LT(1);
	                		_la = this._input.LA(1);
	                		if(!(_la===25 || _la===26)) {
	                		    localctx.logic = this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		this.state = 171;
	                		this.logicalExpression(0);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 174; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 180;
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
	        this.state = 193;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RelacionalConParentesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 182;
	            this.relationalExpression();
	            this.state = 183;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExpresionRelacionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.exp(0);
	            this.state = 190;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 186;
	                    localctx.relation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	                        localctx.relation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 187;
	                    this.exp(0); 
	                }
	                this.state = 192;
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
	        this.state = 195;
	        this.match(ArrayInitParser.PRINT);
	        this.state = 196;
	        this.match(ArrayInitParser.LPAREN);
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 197;
	            this.match(ArrayInitParser.STRING);
	            break;

	        case 2:
	            this.state = 198;
	            this.exp(0);
	            break;

	        case 3:
	            this.state = 199;
	            this.concat();
	            break;

	        }
	        this.state = 202;
	        this.match(ArrayInitParser.RPAREN);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 203;
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
	        this.state = 206;
	        this.atom();
	        this.state = 209; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 207;
	            this.match(ArrayInitParser.PLUS);
	            this.state = 208;
	            this.atom();
	            this.state = 211; 
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
	    this.enterRule(localctx, 32, ArrayInitParser.RULE_atom);
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(ArrayInitParser.STRING);
	            break;
	        case 15:
	        case 36:
	        case 37:
	        case 39:
	            localctx = new ExppContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
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
	    try {
	        localctx = new IncrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(ArrayInitParser.ID);
	        this.state = 218;
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
	    this.enterRule(localctx, 36, ArrayInitParser.RULE_decre);
	    try {
	        localctx = new DecrementoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(ArrayInitParser.ID);
	        this.state = 221;
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
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, ArrayInitParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 224;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 225;
	            this.exp(0);
	            this.state = 226;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 228;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 227;
	                this.exp(0);

	            }
	            break;

	        case 2:
	            localctx = new ParentesisMultiplyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 230;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 231;
	            this.exp(0);
	            this.state = 232;
	            this.match(ArrayInitParser.RPAREN);
	            this.state = 233;
	            this.match(ArrayInitParser.LPAREN);
	            this.state = 234;
	            this.exp(0);
	            this.state = 235;
	            this.match(ArrayInitParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 237;
	            this.match(ArrayInitParser.NUMBER);
	            break;

	        case 4:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 238;
	            this.match(ArrayInitParser.CHAR);
	            break;

	        case 5:
	            localctx = new IdentificadorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 239;
	            this.match(ArrayInitParser.ID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 253;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 251;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ResiudoContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 243;
	                    this.match(ArrayInitParser.RESI);
	                    this.state = 244;
	                    this.exp(7);
	                    break;

	                case 2:
	                    localctx = new TimesDivContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 246;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 247;
	                    this.exp(6);
	                    break;

	                case 3:
	                    localctx = new PlusSubtractionContext(this, new ExpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_exp);
	                    this.state = 248;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 249;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 250;
	                    this.exp(5);
	                    break;

	                } 
	            }
	            this.state = 255;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
	        this.state = 256;
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
	    this.enterRule(localctx, 42, ArrayInitParser.RULE_simbolos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
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
ArrayInitParser.DIGIT = 44;
ArrayInitParser.RESI = 45;

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
ArrayInitParser.ExpContext = ExpContext; 
ArrayInitParser.DataTypeContext = DataTypeContext; 
ArrayInitParser.SimbolosContext = SimbolosContext; 
