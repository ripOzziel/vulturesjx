// Generated from /home/ozzy/Escritorio/clean-proyect/grammar/CoomonC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CoomonC extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MAIN=1, IF=2, PRINT=3, TRUE=4, FALSE=5, INT=6, FLOAT=7, STRING=8, CHAR=9, 
		LPAREN=10, RPAREN=11, LBRACE=12, RBRACE=13, FIN=14, PLUS=15, MINUS=16, 
		TIMES=17, DIV=18, EQUALS=19, ID=20, NUMBER=21, STRINGL=22, CHARL=23, IGUAL=24, 
		DISTINTO=25, MAYOR=26, MENOR=27, MAYORIGUAL=28, MENORIGUAL=29, AND=30, 
		OR=31, NOT=32, WS=33;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MAIN", "IF", "PRINT", "TRUE", "FALSE", "INT", "FLOAT", "STRING", "CHAR", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", "TIMES", 
			"DIV", "EQUALS", "ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", "DISTINTO", 
			"MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", "OR", "NOT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'main'", "'if'", "'printf'", "'true'", "'false'", "'int'", "'float'", 
			"'string'", "'char'", "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", 
			"'*'", "'/'", "'='", null, null, null, null, "'=='", "'!='", "'>'", "'<'", 
			"'>='", "'<='", "'&&'", "'||'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", "INT", "FLOAT", "STRING", 
			"CHAR", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", 
			"TIMES", "DIV", "EQUALS", "ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", 
			"DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", "OR", 
			"NOT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CoomonC(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CoomonC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000!\u00bf\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0005\u0013\u008a\b\u0013"+
		"\n\u0013\f\u0013\u008d\t\u0013\u0001\u0014\u0004\u0014\u0090\b\u0014\u000b"+
		"\u0014\f\u0014\u0091\u0001\u0015\u0001\u0015\u0005\u0015\u0096\b\u0015"+
		"\n\u0015\f\u0015\u0099\t\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001f\u0001\u001f\u0001 \u0004 \u00ba\b \u000b \f \u00bb"+
		"\u0001 \u0001 \u0001\u0097\u0000!\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c"+
		"9\u001d;\u001e=\u001f? A!\u0001\u0000\u0004\u0003\u0000AZ^^az\u0003\u0000"+
		"09AZaz\u0001\u000009\u0003\u0000\t\n\r\r  \u00c2\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u0000"+
		"1\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005\u0001"+
		"\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001\u0000\u0000"+
		"\u0000\u0000;\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000\u0000\u0000"+
		"?\u0001\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0001C\u0001"+
		"\u0000\u0000\u0000\u0003H\u0001\u0000\u0000\u0000\u0005K\u0001\u0000\u0000"+
		"\u0000\u0007R\u0001\u0000\u0000\u0000\tW\u0001\u0000\u0000\u0000\u000b"+
		"]\u0001\u0000\u0000\u0000\ra\u0001\u0000\u0000\u0000\u000fg\u0001\u0000"+
		"\u0000\u0000\u0011n\u0001\u0000\u0000\u0000\u0013s\u0001\u0000\u0000\u0000"+
		"\u0015u\u0001\u0000\u0000\u0000\u0017w\u0001\u0000\u0000\u0000\u0019y"+
		"\u0001\u0000\u0000\u0000\u001b{\u0001\u0000\u0000\u0000\u001d}\u0001\u0000"+
		"\u0000\u0000\u001f\u007f\u0001\u0000\u0000\u0000!\u0081\u0001\u0000\u0000"+
		"\u0000#\u0083\u0001\u0000\u0000\u0000%\u0085\u0001\u0000\u0000\u0000\'"+
		"\u0087\u0001\u0000\u0000\u0000)\u008f\u0001\u0000\u0000\u0000+\u0093\u0001"+
		"\u0000\u0000\u0000-\u009c\u0001\u0000\u0000\u0000/\u00a0\u0001\u0000\u0000"+
		"\u00001\u00a3\u0001\u0000\u0000\u00003\u00a6\u0001\u0000\u0000\u00005"+
		"\u00a8\u0001\u0000\u0000\u00007\u00aa\u0001\u0000\u0000\u00009\u00ad\u0001"+
		"\u0000\u0000\u0000;\u00b0\u0001\u0000\u0000\u0000=\u00b3\u0001\u0000\u0000"+
		"\u0000?\u00b6\u0001\u0000\u0000\u0000A\u00b9\u0001\u0000\u0000\u0000C"+
		"D\u0005m\u0000\u0000DE\u0005a\u0000\u0000EF\u0005i\u0000\u0000FG\u0005"+
		"n\u0000\u0000G\u0002\u0001\u0000\u0000\u0000HI\u0005i\u0000\u0000IJ\u0005"+
		"f\u0000\u0000J\u0004\u0001\u0000\u0000\u0000KL\u0005p\u0000\u0000LM\u0005"+
		"r\u0000\u0000MN\u0005i\u0000\u0000NO\u0005n\u0000\u0000OP\u0005t\u0000"+
		"\u0000PQ\u0005f\u0000\u0000Q\u0006\u0001\u0000\u0000\u0000RS\u0005t\u0000"+
		"\u0000ST\u0005r\u0000\u0000TU\u0005u\u0000\u0000UV\u0005e\u0000\u0000"+
		"V\b\u0001\u0000\u0000\u0000WX\u0005f\u0000\u0000XY\u0005a\u0000\u0000"+
		"YZ\u0005l\u0000\u0000Z[\u0005s\u0000\u0000[\\\u0005e\u0000\u0000\\\n\u0001"+
		"\u0000\u0000\u0000]^\u0005i\u0000\u0000^_\u0005n\u0000\u0000_`\u0005t"+
		"\u0000\u0000`\f\u0001\u0000\u0000\u0000ab\u0005f\u0000\u0000bc\u0005l"+
		"\u0000\u0000cd\u0005o\u0000\u0000de\u0005a\u0000\u0000ef\u0005t\u0000"+
		"\u0000f\u000e\u0001\u0000\u0000\u0000gh\u0005s\u0000\u0000hi\u0005t\u0000"+
		"\u0000ij\u0005r\u0000\u0000jk\u0005i\u0000\u0000kl\u0005n\u0000\u0000"+
		"lm\u0005g\u0000\u0000m\u0010\u0001\u0000\u0000\u0000no\u0005c\u0000\u0000"+
		"op\u0005h\u0000\u0000pq\u0005a\u0000\u0000qr\u0005r\u0000\u0000r\u0012"+
		"\u0001\u0000\u0000\u0000st\u0005(\u0000\u0000t\u0014\u0001\u0000\u0000"+
		"\u0000uv\u0005)\u0000\u0000v\u0016\u0001\u0000\u0000\u0000wx\u0005{\u0000"+
		"\u0000x\u0018\u0001\u0000\u0000\u0000yz\u0005}\u0000\u0000z\u001a\u0001"+
		"\u0000\u0000\u0000{|\u0005;\u0000\u0000|\u001c\u0001\u0000\u0000\u0000"+
		"}~\u0005+\u0000\u0000~\u001e\u0001\u0000\u0000\u0000\u007f\u0080\u0005"+
		"-\u0000\u0000\u0080 \u0001\u0000\u0000\u0000\u0081\u0082\u0005*\u0000"+
		"\u0000\u0082\"\u0001\u0000\u0000\u0000\u0083\u0084\u0005/\u0000\u0000"+
		"\u0084$\u0001\u0000\u0000\u0000\u0085\u0086\u0005=\u0000\u0000\u0086&"+
		"\u0001\u0000\u0000\u0000\u0087\u008b\u0007\u0000\u0000\u0000\u0088\u008a"+
		"\u0007\u0001\u0000\u0000\u0089\u0088\u0001\u0000\u0000\u0000\u008a\u008d"+
		"\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000\u0000\u008b\u008c"+
		"\u0001\u0000\u0000\u0000\u008c(\u0001\u0000\u0000\u0000\u008d\u008b\u0001"+
		"\u0000\u0000\u0000\u008e\u0090\u0007\u0002\u0000\u0000\u008f\u008e\u0001"+
		"\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u008f\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092*\u0001\u0000"+
		"\u0000\u0000\u0093\u0097\u0005\"\u0000\u0000\u0094\u0096\t\u0000\u0000"+
		"\u0000\u0095\u0094\u0001\u0000\u0000\u0000\u0096\u0099\u0001\u0000\u0000"+
		"\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0097\u0095\u0001\u0000\u0000"+
		"\u0000\u0098\u009a\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000"+
		"\u0000\u009a\u009b\u0005\"\u0000\u0000\u009b,\u0001\u0000\u0000\u0000"+
		"\u009c\u009d\u0005\'\u0000\u0000\u009d\u009e\t\u0000\u0000\u0000\u009e"+
		"\u009f\u0005\'\u0000\u0000\u009f.\u0001\u0000\u0000\u0000\u00a0\u00a1"+
		"\u0005=\u0000\u0000\u00a1\u00a2\u0005=\u0000\u0000\u00a20\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a4\u0005!\u0000\u0000\u00a4\u00a5\u0005=\u0000\u0000"+
		"\u00a52\u0001\u0000\u0000\u0000\u00a6\u00a7\u0005>\u0000\u0000\u00a74"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005<\u0000\u0000\u00a96\u0001\u0000"+
		"\u0000\u0000\u00aa\u00ab\u0005>\u0000\u0000\u00ab\u00ac\u0005=\u0000\u0000"+
		"\u00ac8\u0001\u0000\u0000\u0000\u00ad\u00ae\u0005<\u0000\u0000\u00ae\u00af"+
		"\u0005=\u0000\u0000\u00af:\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005&"+
		"\u0000\u0000\u00b1\u00b2\u0005&\u0000\u0000\u00b2<\u0001\u0000\u0000\u0000"+
		"\u00b3\u00b4\u0005|\u0000\u0000\u00b4\u00b5\u0005|\u0000\u0000\u00b5>"+
		"\u0001\u0000\u0000\u0000\u00b6\u00b7\u0005!\u0000\u0000\u00b7@\u0001\u0000"+
		"\u0000\u0000\u00b8\u00ba\u0007\u0003\u0000\u0000\u00b9\u00b8\u0001\u0000"+
		"\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb\u00b9\u0001\u0000"+
		"\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000"+
		"\u0000\u0000\u00bd\u00be\u0006 \u0000\u0000\u00beB\u0001\u0000\u0000\u0000"+
		"\u0005\u0000\u008b\u0091\u0097\u00bb\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}