// Generated from /home/ozzy/Escritorio/clean-proyect/grammar/Translate.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TranslateParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, MAIN=6, IF=7, PRINT=8, TRUE=9, 
		FALSE=10, ELSE=11, ELSEIF=12, VOID=13, WHILE=14, INT=15, FLOAT=16, STRING=17, 
		CHAR=18, LPAREN=19, RPAREN=20, LBRACE=21, RBRACE=22, FIN=23, PLUS=24, 
		MINUS=25, TIMES=26, DIV=27, EQUALS=28, ID=29, NUMBER=30, STRINGL=31, CHARL=32, 
		IGUAL=33, DISTINTO=34, MAYOR=35, MENOR=36, MAYORIGUAL=37, MENORIGUAL=38, 
		AND=39, OR=40, NOT=41, DIGIT=42, RESI=43, WS=44;
	public static final int
		RULE_prog = 0, RULE_content = 1, RULE_declaration = 2, RULE_declarationAndAssignament = 3, 
		RULE_assignment = 4, RULE_whileStatement = 5, RULE_ifStatement = 6, RULE_ifContent = 7, 
		RULE_elseifContent = 8, RULE_elseContent = 9, RULE_condition = 10, RULE_trueOrFalse = 11, 
		RULE_logicalExpression = 12, RULE_relationalExpression = 13, RULE_printPlease = 14, 
		RULE_concat = 15, RULE_atom = 16, RULE_incre = 17, RULE_decre = 18, RULE_masi = 19, 
		RULE_menosi = 20, RULE_exp = 21, RULE_dataType = 22, RULE_simbolos = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "content", "declaration", "declarationAndAssignament", "assignment", 
			"whileStatement", "ifStatement", "ifContent", "elseifContent", "elseContent", 
			"condition", "trueOrFalse", "logicalExpression", "relationalExpression", 
			"printPlease", "concat", "atom", "incre", "decre", "masi", "menosi", 
			"exp", "dataType", "simbolos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'++'", "'--'", "'+='", "'-='", "'main'", "'if'", "'printf'", 
			"'true'", "'false'", "'else'", "'else if'", "'void'", "'while'", "'int'", 
			"'float'", "'string'", "'char'", "'('", "')'", "'{'", "'}'", "';'", "'+'", 
			"'-'", "'*'", "'/'", "'='", null, null, null, null, "'=='", "'!='", "'>'", 
			"'<'", "'>='", "'<='", "'&&'", "'||'", "'!'", null, "'%'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", 
			"ELSE", "ELSEIF", "VOID", "WHILE", "INT", "FLOAT", "STRING", "CHAR", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", "TIMES", 
			"DIV", "EQUALS", "ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", "DISTINTO", 
			"MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", "AND", "OR", "NOT", "DIGIT", 
			"RESI", "WS"
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

	@Override
	public String getGrammarFileName() { return "Translate.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TranslateParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode VOID() { return getToken(TranslateParser.VOID, 0); }
		public TerminalNode MAIN() { return getToken(TranslateParser.MAIN, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public List<ContentContext> content() {
			return getRuleContexts(ContentContext.class);
		}
		public ContentContext content(int i) {
			return getRuleContext(ContentContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(VOID);
			setState(49);
			match(MAIN);
			setState(50);
			match(LPAREN);
			setState(51);
			match(RPAREN);
			setState(52);
			match(LBRACE);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 537313664L) != 0)) {
				{
				{
				setState(53);
				content();
				}
				}
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(59);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContentContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public DeclarationAndAssignamentContext declarationAndAssignament() {
			return getRuleContext(DeclarationAndAssignamentContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public PrintPleaseContext printPlease() {
			return getRuleContext(PrintPleaseContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public IncreContext incre() {
			return getRuleContext(IncreContext.class,0);
		}
		public DecreContext decre() {
			return getRuleContext(DecreContext.class,0);
		}
		public MasiContext masi() {
			return getRuleContext(MasiContext.class,0);
		}
		public MenosiContext menosi() {
			return getRuleContext(MenosiContext.class,0);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_content);
		try {
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(61);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				declarationAndAssignament();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(63);
				assignment();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(64);
				ifStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(65);
				whileStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(66);
				printPlease();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(67);
				dataType();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(68);
				incre();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(69);
				decre();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(70);
				masi();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(71);
				menosi();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationContext extends ParserRuleContext {
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	 
		public DeclarationContext() { }
		public void copyFrom(DeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends DeclarationContext {
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(TranslateParser.NUMBER, 0); }
		public SimbolosContext simbolos() {
			return getRuleContext(SimbolosContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public DeclaracionContext(DeclarationContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		int _la;
		try {
			_localctx = new DeclaracionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			dataType();
			setState(75);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 251658240L) != 0)) {
				{
				setState(76);
				simbolos();
				}
			}

			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(79);
				match(FIN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationAndAssignamentContext extends ParserRuleContext {
		public DeclarationAndAssignamentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationAndAssignament; }
	 
		public DeclarationAndAssignamentContext() { }
		public void copyFrom(DeclarationAndAssignamentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclAndAssigContext extends DeclarationAndAssignamentContext {
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(TranslateParser.EQUALS, 0); }
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(TranslateParser.NUMBER, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public DeclAndAssigContext(DeclarationAndAssignamentContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationAndAssignamentContext declarationAndAssignament() throws RecognitionException {
		DeclarationAndAssignamentContext _localctx = new DeclarationAndAssignamentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declarationAndAssignament);
		int _la;
		try {
			_localctx = new DeclAndAssigContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			dataType();
			setState(83);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(84);
			match(EQUALS);
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(85);
				exp(0);
				}
				break;
			}
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(88);
				match(FIN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends ParserRuleContext {
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	 
		public AssignmentContext() { }
		public void copyFrom(AssignmentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionContext extends AssignmentContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(TranslateParser.EQUALS, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public AsignacionContext(AssignmentContext ctx) { copyFrom(ctx); }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assignment);
		int _la;
		try {
			_localctx = new AsignacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(ID);
			setState(92);
			match(EQUALS);
			setState(93);
			exp(0);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(94);
				match(FIN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStatementContext extends ParserRuleContext {
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	 
		public WhileStatementContext() { }
		public void copyFrom(WhileStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WhileSentenciaContext extends WhileStatementContext {
		public TerminalNode WHILE() { return getToken(TranslateParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public List<ContentContext> content() {
			return getRuleContexts(ContentContext.class);
		}
		public ContentContext content(int i) {
			return getRuleContext(ContentContext.class,i);
		}
		public WhileSentenciaContext(WhileStatementContext ctx) { copyFrom(ctx); }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_whileStatement);
		int _la;
		try {
			_localctx = new WhileSentenciaContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(WHILE);
			setState(98);
			match(LPAREN);
			setState(99);
			condition();
			setState(100);
			match(RPAREN);
			setState(101);
			match(LBRACE);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 537313664L) != 0)) {
				{
				{
				setState(102);
				content();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	 
		public IfStatementContext() { }
		public void copyFrom(IfStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaIfContext extends IfStatementContext {
		public TerminalNode IF() { return getToken(TranslateParser.IF, 0); }
		public List<TerminalNode> LPAREN() { return getTokens(TranslateParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(TranslateParser.LPAREN, i);
		}
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(TranslateParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(TranslateParser.RPAREN, i);
		}
		public List<TerminalNode> LBRACE() { return getTokens(TranslateParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(TranslateParser.LBRACE, i);
		}
		public IfContentContext ifContent() {
			return getRuleContext(IfContentContext.class,0);
		}
		public List<TerminalNode> RBRACE() { return getTokens(TranslateParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(TranslateParser.RBRACE, i);
		}
		public List<TerminalNode> ELSEIF() { return getTokens(TranslateParser.ELSEIF); }
		public TerminalNode ELSEIF(int i) {
			return getToken(TranslateParser.ELSEIF, i);
		}
		public List<ElseifContentContext> elseifContent() {
			return getRuleContexts(ElseifContentContext.class);
		}
		public ElseifContentContext elseifContent(int i) {
			return getRuleContext(ElseifContentContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(TranslateParser.ELSE, 0); }
		public ElseContentContext elseContent() {
			return getRuleContext(ElseContentContext.class,0);
		}
		public SentenciaIfContext(IfStatementContext ctx) { copyFrom(ctx); }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ifStatement);
		int _la;
		try {
			_localctx = new SentenciaIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(IF);
			setState(111);
			match(LPAREN);
			setState(112);
			condition();
			setState(113);
			match(RPAREN);
			setState(114);
			match(LBRACE);
			setState(115);
			ifContent();
			setState(116);
			match(RBRACE);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(117);
				match(ELSEIF);
				setState(118);
				match(LPAREN);
				setState(119);
				condition();
				setState(120);
				match(RPAREN);
				setState(121);
				match(LBRACE);
				setState(122);
				elseifContent();
				setState(123);
				match(RBRACE);
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(130);
				match(ELSE);
				setState(131);
				match(LBRACE);
				setState(132);
				elseContent();
				setState(133);
				match(RBRACE);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfContentContext extends ParserRuleContext {
		public List<ContentContext> content() {
			return getRuleContexts(ContentContext.class);
		}
		public ContentContext content(int i) {
			return getRuleContext(ContentContext.class,i);
		}
		public IfContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifContent; }
	}

	public final IfContentContext ifContent() throws RecognitionException {
		IfContentContext _localctx = new IfContentContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifContent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 537313664L) != 0)) {
				{
				{
				setState(137);
				content();
				}
				}
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseifContentContext extends ParserRuleContext {
		public List<ContentContext> content() {
			return getRuleContexts(ContentContext.class);
		}
		public ContentContext content(int i) {
			return getRuleContext(ContentContext.class,i);
		}
		public ElseifContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseifContent; }
	}

	public final ElseifContentContext elseifContent() throws RecognitionException {
		ElseifContentContext _localctx = new ElseifContentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_elseifContent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 537313664L) != 0)) {
				{
				{
				setState(143);
				content();
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseContentContext extends ParserRuleContext {
		public List<ContentContext> content() {
			return getRuleContexts(ContentContext.class);
		}
		public ContentContext content(int i) {
			return getRuleContext(ContentContext.class,i);
		}
		public ElseContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseContent; }
	}

	public final ElseContentContext elseContent() throws RecognitionException {
		ElseContentContext _localctx = new ElseContentContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_elseContent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 537313664L) != 0)) {
				{
				{
				setState(149);
				content();
				}
				}
				setState(154);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	 
		public ConditionContext() { }
		public void copyFrom(ConditionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ConditionContext {
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public TerminalNode NOT() { return getToken(TranslateParser.NOT, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TrueOrFalseContext trueOrFalse() {
			return getRuleContext(TrueOrFalseContext.class,0);
		}
		public CondicionContext(ConditionContext ctx) { copyFrom(ctx); }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condition);
		try {
			_localctx = new CondicionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				{
				setState(155);
				logicalExpression(0);
				}
				break;
			case NOT:
				{
				setState(156);
				match(NOT);
				setState(157);
				condition();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(158);
				trueOrFalse();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TrueOrFalseContext extends ParserRuleContext {
		public TrueOrFalseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trueOrFalse; }
	 
		public TrueOrFalseContext() { }
		public void copyFrom(TrueOrFalseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class VerdaderoOFalsoContext extends TrueOrFalseContext {
		public TerminalNode TRUE() { return getToken(TranslateParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(TranslateParser.FALSE, 0); }
		public VerdaderoOFalsoContext(TrueOrFalseContext ctx) { copyFrom(ctx); }
	}

	public final TrueOrFalseContext trueOrFalse() throws RecognitionException {
		TrueOrFalseContext _localctx = new TrueOrFalseContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_trueOrFalse);
		int _la;
		try {
			_localctx = new VerdaderoOFalsoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicalExpressionContext extends ParserRuleContext {
		public LogicalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalExpression; }
	 
		public LogicalExpressionContext() { }
		public void copyFrom(LogicalExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionLogicaContext extends LogicalExpressionContext {
		public Token logic;
		public List<RelationalExpressionContext> relationalExpression() {
			return getRuleContexts(RelationalExpressionContext.class);
		}
		public RelationalExpressionContext relationalExpression(int i) {
			return getRuleContext(RelationalExpressionContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(TranslateParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(TranslateParser.AND, i);
		}
		public List<TerminalNode> OR() { return getTokens(TranslateParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(TranslateParser.OR, i);
		}
		public ExpresionLogicaContext(LogicalExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicLogicalContext extends LogicalExpressionContext {
		public Token logic;
		public List<LogicalExpressionContext> logicalExpression() {
			return getRuleContexts(LogicalExpressionContext.class);
		}
		public LogicalExpressionContext logicalExpression(int i) {
			return getRuleContext(LogicalExpressionContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(TranslateParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(TranslateParser.AND, i);
		}
		public List<TerminalNode> OR() { return getTokens(TranslateParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(TranslateParser.OR, i);
		}
		public LogicLogicalContext(LogicalExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicalConParentesisContext extends LogicalExpressionContext {
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public LogicalConParentesisContext(LogicalExpressionContext ctx) { copyFrom(ctx); }
	}

	public final LogicalExpressionContext logicalExpression() throws RecognitionException {
		return logicalExpression(0);
	}

	private LogicalExpressionContext logicalExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalExpressionContext _localctx = new LogicalExpressionContext(_ctx, _parentState);
		LogicalExpressionContext _prevctx = _localctx;
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_logicalExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalConParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(164);
				match(LPAREN);
				setState(165);
				logicalExpression(0);
				setState(166);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new ExpresionLogicaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(168);
				relationalExpression();
				setState(173);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(169);
						((ExpresionLogicaContext)_localctx).logic = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==AND || _la==OR) ) {
							((ExpresionLogicaContext)_localctx).logic = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(170);
						relationalExpression();
						}
						} 
					}
					setState(175);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(187);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicLogicalContext(new LogicalExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_logicalExpression);
					setState(178);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(181); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(179);
							((LogicLogicalContext)_localctx).logic = _input.LT(1);
							_la = _input.LA(1);
							if ( !(_la==AND || _la==OR) ) {
								((LogicLogicalContext)_localctx).logic = (Token)_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							setState(180);
							logicalExpression(0);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(183); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					} 
				}
				setState(189);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelationalExpressionContext extends ParserRuleContext {
		public RelationalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalExpression; }
	 
		public RelationalExpressionContext() { }
		public void copyFrom(RelationalExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RelacionalConParentesisContext extends RelationalExpressionContext {
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public RelationalExpressionContext relationalExpression() {
			return getRuleContext(RelationalExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public RelacionalConParentesisContext(RelationalExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionRelacionalContext extends RelationalExpressionContext {
		public Token relation;
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public List<TerminalNode> IGUAL() { return getTokens(TranslateParser.IGUAL); }
		public TerminalNode IGUAL(int i) {
			return getToken(TranslateParser.IGUAL, i);
		}
		public List<TerminalNode> DISTINTO() { return getTokens(TranslateParser.DISTINTO); }
		public TerminalNode DISTINTO(int i) {
			return getToken(TranslateParser.DISTINTO, i);
		}
		public List<TerminalNode> MAYOR() { return getTokens(TranslateParser.MAYOR); }
		public TerminalNode MAYOR(int i) {
			return getToken(TranslateParser.MAYOR, i);
		}
		public List<TerminalNode> MENOR() { return getTokens(TranslateParser.MENOR); }
		public TerminalNode MENOR(int i) {
			return getToken(TranslateParser.MENOR, i);
		}
		public List<TerminalNode> MAYORIGUAL() { return getTokens(TranslateParser.MAYORIGUAL); }
		public TerminalNode MAYORIGUAL(int i) {
			return getToken(TranslateParser.MAYORIGUAL, i);
		}
		public List<TerminalNode> MENORIGUAL() { return getTokens(TranslateParser.MENORIGUAL); }
		public TerminalNode MENORIGUAL(int i) {
			return getToken(TranslateParser.MENORIGUAL, i);
		}
		public ExpresionRelacionalContext(RelationalExpressionContext ctx) { copyFrom(ctx); }
	}

	public final RelationalExpressionContext relationalExpression() throws RecognitionException {
		RelationalExpressionContext _localctx = new RelationalExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_relationalExpression);
		int _la;
		try {
			int _alt;
			setState(202);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				_localctx = new RelacionalConParentesisContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(190);
				match(LPAREN);
				setState(191);
				relationalExpression();
				setState(192);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new ExpresionRelacionalContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(194);
				exp(0);
				setState(199);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(195);
						((ExpresionRelacionalContext)_localctx).relation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 541165879296L) != 0)) ) {
							((ExpresionRelacionalContext)_localctx).relation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(196);
						exp(0);
						}
						} 
					}
					setState(201);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintPleaseContext extends ParserRuleContext {
		public PrintPleaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printPlease; }
	 
		public PrintPleaseContext() { }
		public void copyFrom(PrintPleaseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends PrintPleaseContext {
		public TerminalNode PRINT() { return getToken(TranslateParser.PRINT, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public TerminalNode STRINGL() { return getToken(TranslateParser.STRINGL, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ConcatContext concat() {
			return getRuleContext(ConcatContext.class,0);
		}
		public ImpresionContext(PrintPleaseContext ctx) { copyFrom(ctx); }
	}

	public final PrintPleaseContext printPlease() throws RecognitionException {
		PrintPleaseContext _localctx = new PrintPleaseContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_printPlease);
		try {
			_localctx = new ImpresionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(PRINT);
			setState(205);
			match(LPAREN);
			setState(209);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(206);
				match(STRINGL);
				}
				break;
			case 2:
				{
				setState(207);
				exp(0);
				}
				break;
			case 3:
				{
				setState(208);
				concat();
				}
				break;
			}
			setState(211);
			match(RPAREN);
			setState(212);
			match(FIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatContext extends ParserRuleContext {
		public ConcatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concat; }
	 
		public ConcatContext() { }
		public void copyFrom(ConcatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenacionContext extends ConcatContext {
		public List<AtomContext> atom() {
			return getRuleContexts(AtomContext.class);
		}
		public AtomContext atom(int i) {
			return getRuleContext(AtomContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(TranslateParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(TranslateParser.PLUS, i);
		}
		public ConcatenacionContext(ConcatContext ctx) { copyFrom(ctx); }
	}

	public final ConcatContext concat() throws RecognitionException {
		ConcatContext _localctx = new ConcatContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_concat);
		int _la;
		try {
			_localctx = new ConcatenacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(214);
			atom();
			}
			setState(217); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(215);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==PLUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(216);
				atom();
				}
				}
				setState(219); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 || _la==PLUS );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtomContext extends ParserRuleContext {
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	 
		public AtomContext() { }
		public void copyFrom(AtomContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends AtomContext {
		public TerminalNode STRINGL() { return getToken(TranslateParser.STRINGL, 0); }
		public StringContext(AtomContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExppContext extends AtomContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ExppContext(AtomContext ctx) { copyFrom(ctx); }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_atom);
		try {
			setState(223);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRINGL:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(221);
				match(STRINGL);
				}
				break;
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				_localctx = new ExppContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(222);
				exp(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncreContext extends ParserRuleContext {
		public IncreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incre; }
	 
		public IncreContext() { }
		public void copyFrom(IncreContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends IncreContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public IncrementoContext(IncreContext ctx) { copyFrom(ctx); }
	}

	public final IncreContext incre() throws RecognitionException {
		IncreContext _localctx = new IncreContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_incre);
		try {
			_localctx = new IncrementoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			match(ID);
			setState(226);
			match(T__1);
			setState(227);
			match(FIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DecreContext extends ParserRuleContext {
		public DecreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decre; }
	 
		public DecreContext() { }
		public void copyFrom(DecreContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecrementoContext extends DecreContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public DecrementoContext(DecreContext ctx) { copyFrom(ctx); }
	}

	public final DecreContext decre() throws RecognitionException {
		DecreContext _localctx = new DecreContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_decre);
		try {
			_localctx = new DecrementoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(ID);
			setState(230);
			match(T__2);
			setState(231);
			match(FIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MasiContext extends ParserRuleContext {
		public MasiContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_masi; }
	 
		public MasiContext() { }
		public void copyFrom(MasiContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MasigualContext extends MasiContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public MasigualContext(MasiContext ctx) { copyFrom(ctx); }
	}

	public final MasiContext masi() throws RecognitionException {
		MasiContext _localctx = new MasiContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_masi);
		try {
			_localctx = new MasigualContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(ID);
			setState(234);
			match(T__3);
			setState(235);
			atom();
			setState(236);
			match(FIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MenosiContext extends ParserRuleContext {
		public MenosiContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_menosi; }
	 
		public MenosiContext() { }
		public void copyFrom(MenosiContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MenosigualContext extends MenosiContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public MenosigualContext(MenosiContext ctx) { copyFrom(ctx); }
	}

	public final MenosiContext menosi() throws RecognitionException {
		MenosiContext _localctx = new MenosiContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_menosi);
		try {
			_localctx = new MenosigualContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(ID);
			setState(239);
			match(T__4);
			setState(240);
			atom();
			setState(241);
			match(FIN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ParserRuleContext {
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	 
		public ExpContext() { }
		public void copyFrom(ExpContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisContext extends ExpContext {
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public ParentesisContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimesDivContext extends ExpContext {
		public Token operation;
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode TIMES() { return getToken(TranslateParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(TranslateParser.DIV, 0); }
		public TimesDivContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisMultiplyContext extends ExpContext {
		public List<TerminalNode> LPAREN() { return getTokens(TranslateParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(TranslateParser.LPAREN, i);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(TranslateParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(TranslateParser.RPAREN, i);
		}
		public ParentesisMultiplyContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ResiudoContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode RESI() { return getToken(TranslateParser.RESI, 0); }
		public ResiudoContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ExpContext {
		public TerminalNode NUMBER() { return getToken(TranslateParser.NUMBER, 0); }
		public NumeroContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CharContext extends ExpContext {
		public TerminalNode CHAR() { return getToken(TranslateParser.CHAR, 0); }
		public CharContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PlusSubtractionContext extends ExpContext {
		public Token operation;
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(TranslateParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(TranslateParser.MINUS, 0); }
		public PlusSubtractionContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ExpContext {
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public IdentificadorContext(ExpContext ctx) { copyFrom(ctx); }
	}

	public final ExpContext exp() throws RecognitionException {
		return exp(0);
	}

	private ExpContext exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpContext _localctx = new ExpContext(_ctx, _parentState);
		ExpContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(244);
				match(LPAREN);
				setState(245);
				exp(0);
				setState(246);
				match(RPAREN);
				setState(248);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
				case 1:
					{
					setState(247);
					exp(0);
					}
					break;
				}
				}
				break;
			case 2:
				{
				_localctx = new ParentesisMultiplyContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(250);
				match(LPAREN);
				setState(251);
				exp(0);
				setState(252);
				match(RPAREN);
				setState(253);
				match(LPAREN);
				setState(254);
				exp(0);
				setState(255);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(257);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(258);
				match(CHAR);
				}
				break;
			case 5:
				{
				_localctx = new IdentificadorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(259);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(273);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(271);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
					case 1:
						{
						_localctx = new ResiudoContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(262);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(263);
						match(RESI);
						setState(264);
						exp(7);
						}
						break;
					case 2:
						{
						_localctx = new TimesDivContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(265);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(266);
						((TimesDivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==TIMES || _la==DIV) ) {
							((TimesDivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(267);
						exp(6);
						}
						break;
					case 3:
						{
						_localctx = new PlusSubtractionContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(268);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(269);
						((PlusSubtractionContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((PlusSubtractionContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(270);
						exp(5);
						}
						break;
					}
					} 
				}
				setState(275);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DataTypeContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(TranslateParser.INT, 0); }
		public TerminalNode STRING() { return getToken(TranslateParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(TranslateParser.CHAR, 0); }
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 425984L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SimbolosContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(TranslateParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(TranslateParser.MINUS, 0); }
		public TerminalNode TIMES() { return getToken(TranslateParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(TranslateParser.DIV, 0); }
		public SimbolosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simbolos; }
	}

	public final SimbolosContext simbolos() throws RecognitionException {
		SimbolosContext _localctx = new SimbolosContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_simbolos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 251658240L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 12:
			return logicalExpression_sempred((LogicalExpressionContext)_localctx, predIndex);
		case 21:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean logicalExpression_sempred(LogicalExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001,\u0119\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u00007\b\u0000"+
		"\n\u0000\f\u0000:\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001I\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002N\b\u0002\u0001\u0002\u0003\u0002"+
		"Q\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"W\b\u0003\u0001\u0003\u0003\u0003Z\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004`\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005h\b\u0005\n\u0005"+
		"\f\u0005k\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006~\b\u0006\n\u0006\f\u0006\u0081\t\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u0088\b\u0006"+
		"\u0001\u0007\u0005\u0007\u008b\b\u0007\n\u0007\f\u0007\u008e\t\u0007\u0001"+
		"\b\u0005\b\u0091\b\b\n\b\f\b\u0094\t\b\u0001\t\u0005\t\u0097\b\t\n\t\f"+
		"\t\u009a\t\t\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u00a0\b\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0005\f\u00ac\b\f\n\f\f\f\u00af\t\f\u0003\f\u00b1\b\f\u0001\f\u0001"+
		"\f\u0001\f\u0004\f\u00b6\b\f\u000b\f\f\f\u00b7\u0005\f\u00ba\b\f\n\f\f"+
		"\f\u00bd\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u00c6\b\r\n\r\f\r\u00c9\t\r\u0003\r\u00cb\b\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00d2\b\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0004\u000f"+
		"\u00da\b\u000f\u000b\u000f\f\u000f\u00db\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u00e0\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u00f9\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u0105\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0005"+
		"\u0015\u0110\b\u0015\n\u0015\f\u0015\u0113\t\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0000\u0002\u0018*\u0018\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,.\u0000\t\u0001\u0000\u001d\u001e\u0001\u0000\t\n\u0001\u0000"+
		"\'(\u0001\u0000!&\u0002\u0000\u0001\u0001\u0018\u0018\u0001\u0000\u001a"+
		"\u001b\u0001\u0000\u0018\u0019\u0002\u0000\u000f\u000f\u0011\u0012\u0001"+
		"\u0000\u0018\u001b\u012a\u00000\u0001\u0000\u0000\u0000\u0002H\u0001\u0000"+
		"\u0000\u0000\u0004J\u0001\u0000\u0000\u0000\u0006R\u0001\u0000\u0000\u0000"+
		"\b[\u0001\u0000\u0000\u0000\na\u0001\u0000\u0000\u0000\fn\u0001\u0000"+
		"\u0000\u0000\u000e\u008c\u0001\u0000\u0000\u0000\u0010\u0092\u0001\u0000"+
		"\u0000\u0000\u0012\u0098\u0001\u0000\u0000\u0000\u0014\u009f\u0001\u0000"+
		"\u0000\u0000\u0016\u00a1\u0001\u0000\u0000\u0000\u0018\u00b0\u0001\u0000"+
		"\u0000\u0000\u001a\u00ca\u0001\u0000\u0000\u0000\u001c\u00cc\u0001\u0000"+
		"\u0000\u0000\u001e\u00d6\u0001\u0000\u0000\u0000 \u00df\u0001\u0000\u0000"+
		"\u0000\"\u00e1\u0001\u0000\u0000\u0000$\u00e5\u0001\u0000\u0000\u0000"+
		"&\u00e9\u0001\u0000\u0000\u0000(\u00ee\u0001\u0000\u0000\u0000*\u0104"+
		"\u0001\u0000\u0000\u0000,\u0114\u0001\u0000\u0000\u0000.\u0116\u0001\u0000"+
		"\u0000\u000001\u0005\r\u0000\u000012\u0005\u0006\u0000\u000023\u0005\u0013"+
		"\u0000\u000034\u0005\u0014\u0000\u000048\u0005\u0015\u0000\u000057\u0003"+
		"\u0002\u0001\u000065\u0001\u0000\u0000\u00007:\u0001\u0000\u0000\u0000"+
		"86\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009;\u0001\u0000\u0000"+
		"\u0000:8\u0001\u0000\u0000\u0000;<\u0005\u0016\u0000\u0000<\u0001\u0001"+
		"\u0000\u0000\u0000=I\u0003\u0004\u0002\u0000>I\u0003\u0006\u0003\u0000"+
		"?I\u0003\b\u0004\u0000@I\u0003\f\u0006\u0000AI\u0003\n\u0005\u0000BI\u0003"+
		"\u001c\u000e\u0000CI\u0003,\u0016\u0000DI\u0003\"\u0011\u0000EI\u0003"+
		"$\u0012\u0000FI\u0003&\u0013\u0000GI\u0003(\u0014\u0000H=\u0001\u0000"+
		"\u0000\u0000H>\u0001\u0000\u0000\u0000H?\u0001\u0000\u0000\u0000H@\u0001"+
		"\u0000\u0000\u0000HA\u0001\u0000\u0000\u0000HB\u0001\u0000\u0000\u0000"+
		"HC\u0001\u0000\u0000\u0000HD\u0001\u0000\u0000\u0000HE\u0001\u0000\u0000"+
		"\u0000HF\u0001\u0000\u0000\u0000HG\u0001\u0000\u0000\u0000I\u0003\u0001"+
		"\u0000\u0000\u0000JK\u0003,\u0016\u0000KM\u0007\u0000\u0000\u0000LN\u0003"+
		".\u0017\u0000ML\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NP\u0001"+
		"\u0000\u0000\u0000OQ\u0005\u0017\u0000\u0000PO\u0001\u0000\u0000\u0000"+
		"PQ\u0001\u0000\u0000\u0000Q\u0005\u0001\u0000\u0000\u0000RS\u0003,\u0016"+
		"\u0000ST\u0007\u0000\u0000\u0000TV\u0005\u001c\u0000\u0000UW\u0003*\u0015"+
		"\u0000VU\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000WY\u0001\u0000"+
		"\u0000\u0000XZ\u0005\u0017\u0000\u0000YX\u0001\u0000\u0000\u0000YZ\u0001"+
		"\u0000\u0000\u0000Z\u0007\u0001\u0000\u0000\u0000[\\\u0005\u001d\u0000"+
		"\u0000\\]\u0005\u001c\u0000\u0000]_\u0003*\u0015\u0000^`\u0005\u0017\u0000"+
		"\u0000_^\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`\t\u0001\u0000"+
		"\u0000\u0000ab\u0005\u000e\u0000\u0000bc\u0005\u0013\u0000\u0000cd\u0003"+
		"\u0014\n\u0000de\u0005\u0014\u0000\u0000ei\u0005\u0015\u0000\u0000fh\u0003"+
		"\u0002\u0001\u0000gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000"+
		"ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000"+
		"\u0000ki\u0001\u0000\u0000\u0000lm\u0005\u0016\u0000\u0000m\u000b\u0001"+
		"\u0000\u0000\u0000no\u0005\u0007\u0000\u0000op\u0005\u0013\u0000\u0000"+
		"pq\u0003\u0014\n\u0000qr\u0005\u0014\u0000\u0000rs\u0005\u0015\u0000\u0000"+
		"st\u0003\u000e\u0007\u0000t\u007f\u0005\u0016\u0000\u0000uv\u0005\f\u0000"+
		"\u0000vw\u0005\u0013\u0000\u0000wx\u0003\u0014\n\u0000xy\u0005\u0014\u0000"+
		"\u0000yz\u0005\u0015\u0000\u0000z{\u0003\u0010\b\u0000{|\u0005\u0016\u0000"+
		"\u0000|~\u0001\u0000\u0000\u0000}u\u0001\u0000\u0000\u0000~\u0081\u0001"+
		"\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000"+
		"\u0000\u0000\u0080\u0087\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0005\u000b\u0000\u0000\u0083\u0084\u0005\u0015"+
		"\u0000\u0000\u0084\u0085\u0003\u0012\t\u0000\u0085\u0086\u0005\u0016\u0000"+
		"\u0000\u0086\u0088\u0001\u0000\u0000\u0000\u0087\u0082\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\r\u0001\u0000\u0000\u0000"+
		"\u0089\u008b\u0003\u0002\u0001\u0000\u008a\u0089\u0001\u0000\u0000\u0000"+
		"\u008b\u008e\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000"+
		"\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u000f\u0001\u0000\u0000\u0000"+
		"\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0091\u0003\u0002\u0001\u0000"+
		"\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000\u0000\u0000"+
		"\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000"+
		"\u0093\u0011\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000"+
		"\u0095\u0097\u0003\u0002\u0001\u0000\u0096\u0095\u0001\u0000\u0000\u0000"+
		"\u0097\u009a\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000"+
		"\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u0013\u0001\u0000\u0000\u0000"+
		"\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u00a0\u0003\u0018\f\u0000\u009c"+
		"\u009d\u0005)\u0000\u0000\u009d\u00a0\u0003\u0014\n\u0000\u009e\u00a0"+
		"\u0003\u0016\u000b\u0000\u009f\u009b\u0001\u0000\u0000\u0000\u009f\u009c"+
		"\u0001\u0000\u0000\u0000\u009f\u009e\u0001\u0000\u0000\u0000\u00a0\u0015"+
		"\u0001\u0000\u0000\u0000\u00a1\u00a2\u0007\u0001\u0000\u0000\u00a2\u0017"+
		"\u0001\u0000\u0000\u0000\u00a3\u00a4\u0006\f\uffff\uffff\u0000\u00a4\u00a5"+
		"\u0005\u0013\u0000\u0000\u00a5\u00a6\u0003\u0018\f\u0000\u00a6\u00a7\u0005"+
		"\u0014\u0000\u0000\u00a7\u00b1\u0001\u0000\u0000\u0000\u00a8\u00ad\u0003"+
		"\u001a\r\u0000\u00a9\u00aa\u0007\u0002\u0000\u0000\u00aa\u00ac\u0003\u001a"+
		"\r\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ac\u00af\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ad\u00ae\u0001\u0000\u0000"+
		"\u0000\u00ae\u00b1\u0001\u0000\u0000\u0000\u00af\u00ad\u0001\u0000\u0000"+
		"\u0000\u00b0\u00a3\u0001\u0000\u0000\u0000\u00b0\u00a8\u0001\u0000\u0000"+
		"\u0000\u00b1\u00bb\u0001\u0000\u0000\u0000\u00b2\u00b5\n\u0003\u0000\u0000"+
		"\u00b3\u00b4\u0007\u0002\u0000\u0000\u00b4\u00b6\u0003\u0018\f\u0000\u00b5"+
		"\u00b3\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000\u00b7"+
		"\u00b5\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000\u0000\u00b8"+
		"\u00ba\u0001\u0000\u0000\u0000\u00b9\u00b2\u0001\u0000\u0000\u0000\u00ba"+
		"\u00bd\u0001\u0000\u0000\u0000\u00bb\u00b9\u0001\u0000\u0000\u0000\u00bb"+
		"\u00bc\u0001\u0000\u0000\u0000\u00bc\u0019\u0001\u0000\u0000\u0000\u00bd"+
		"\u00bb\u0001\u0000\u0000\u0000\u00be\u00bf\u0005\u0013\u0000\u0000\u00bf"+
		"\u00c0\u0003\u001a\r\u0000\u00c0\u00c1\u0005\u0014\u0000\u0000\u00c1\u00cb"+
		"\u0001\u0000\u0000\u0000\u00c2\u00c7\u0003*\u0015\u0000\u00c3\u00c4\u0007"+
		"\u0003\u0000\u0000\u00c4\u00c6\u0003*\u0015\u0000\u00c5\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c9\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c8\u00cb\u0001\u0000"+
		"\u0000\u0000\u00c9\u00c7\u0001\u0000\u0000\u0000\u00ca\u00be\u0001\u0000"+
		"\u0000\u0000\u00ca\u00c2\u0001\u0000\u0000\u0000\u00cb\u001b\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0005\b\u0000\u0000\u00cd\u00d1\u0005\u0013\u0000"+
		"\u0000\u00ce\u00d2\u0005\u001f\u0000\u0000\u00cf\u00d2\u0003*\u0015\u0000"+
		"\u00d0\u00d2\u0003\u001e\u000f\u0000\u00d1\u00ce\u0001\u0000\u0000\u0000"+
		"\u00d1\u00cf\u0001\u0000\u0000\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000"+
		"\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d3\u00d4\u0005\u0014\u0000\u0000"+
		"\u00d4\u00d5\u0005\u0017\u0000\u0000\u00d5\u001d\u0001\u0000\u0000\u0000"+
		"\u00d6\u00d9\u0003 \u0010\u0000\u00d7\u00d8\u0007\u0004\u0000\u0000\u00d8"+
		"\u00da\u0003 \u0010\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00da\u00db"+
		"\u0001\u0000\u0000\u0000\u00db\u00d9\u0001\u0000\u0000\u0000\u00db\u00dc"+
		"\u0001\u0000\u0000\u0000\u00dc\u001f\u0001\u0000\u0000\u0000\u00dd\u00e0"+
		"\u0005\u001f\u0000\u0000\u00de\u00e0\u0003*\u0015\u0000\u00df\u00dd\u0001"+
		"\u0000\u0000\u0000\u00df\u00de\u0001\u0000\u0000\u0000\u00e0!\u0001\u0000"+
		"\u0000\u0000\u00e1\u00e2\u0005\u001d\u0000\u0000\u00e2\u00e3\u0005\u0002"+
		"\u0000\u0000\u00e3\u00e4\u0005\u0017\u0000\u0000\u00e4#\u0001\u0000\u0000"+
		"\u0000\u00e5\u00e6\u0005\u001d\u0000\u0000\u00e6\u00e7\u0005\u0003\u0000"+
		"\u0000\u00e7\u00e8\u0005\u0017\u0000\u0000\u00e8%\u0001\u0000\u0000\u0000"+
		"\u00e9\u00ea\u0005\u001d\u0000\u0000\u00ea\u00eb\u0005\u0004\u0000\u0000"+
		"\u00eb\u00ec\u0003 \u0010\u0000\u00ec\u00ed\u0005\u0017\u0000\u0000\u00ed"+
		"\'\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005\u001d\u0000\u0000\u00ef\u00f0"+
		"\u0005\u0005\u0000\u0000\u00f0\u00f1\u0003 \u0010\u0000\u00f1\u00f2\u0005"+
		"\u0017\u0000\u0000\u00f2)\u0001\u0000\u0000\u0000\u00f3\u00f4\u0006\u0015"+
		"\uffff\uffff\u0000\u00f4\u00f5\u0005\u0013\u0000\u0000\u00f5\u00f6\u0003"+
		"*\u0015\u0000\u00f6\u00f8\u0005\u0014\u0000\u0000\u00f7\u00f9\u0003*\u0015"+
		"\u0000\u00f8\u00f7\u0001\u0000\u0000\u0000\u00f8\u00f9\u0001\u0000\u0000"+
		"\u0000\u00f9\u0105\u0001\u0000\u0000\u0000\u00fa\u00fb\u0005\u0013\u0000"+
		"\u0000\u00fb\u00fc\u0003*\u0015\u0000\u00fc\u00fd\u0005\u0014\u0000\u0000"+
		"\u00fd\u00fe\u0005\u0013\u0000\u0000\u00fe\u00ff\u0003*\u0015\u0000\u00ff"+
		"\u0100\u0005\u0014\u0000\u0000\u0100\u0105\u0001\u0000\u0000\u0000\u0101"+
		"\u0105\u0005\u001e\u0000\u0000\u0102\u0105\u0005\u0012\u0000\u0000\u0103"+
		"\u0105\u0005\u001d\u0000\u0000\u0104\u00f3\u0001\u0000\u0000\u0000\u0104"+
		"\u00fa\u0001\u0000\u0000\u0000\u0104\u0101\u0001\u0000\u0000\u0000\u0104"+
		"\u0102\u0001\u0000\u0000\u0000\u0104\u0103\u0001\u0000\u0000\u0000\u0105"+
		"\u0111\u0001\u0000\u0000\u0000\u0106\u0107\n\u0006\u0000\u0000\u0107\u0108"+
		"\u0005+\u0000\u0000\u0108\u0110\u0003*\u0015\u0007\u0109\u010a\n\u0005"+
		"\u0000\u0000\u010a\u010b\u0007\u0005\u0000\u0000\u010b\u0110\u0003*\u0015"+
		"\u0006\u010c\u010d\n\u0004\u0000\u0000\u010d\u010e\u0007\u0006\u0000\u0000"+
		"\u010e\u0110\u0003*\u0015\u0005\u010f\u0106\u0001\u0000\u0000\u0000\u010f"+
		"\u0109\u0001\u0000\u0000\u0000\u010f\u010c\u0001\u0000\u0000\u0000\u0110"+
		"\u0113\u0001\u0000\u0000\u0000\u0111\u010f\u0001\u0000\u0000\u0000\u0111"+
		"\u0112\u0001\u0000\u0000\u0000\u0112+\u0001\u0000\u0000\u0000\u0113\u0111"+
		"\u0001\u0000\u0000\u0000\u0114\u0115\u0007\u0007\u0000\u0000\u0115-\u0001"+
		"\u0000\u0000\u0000\u0116\u0117\u0007\b\u0000\u0000\u0117/\u0001\u0000"+
		"\u0000\u0000\u001b8HMPVY_i\u007f\u0087\u008c\u0092\u0098\u009f\u00ad\u00b0"+
		"\u00b7\u00bb\u00c7\u00ca\u00d1\u00db\u00df\u00f8\u0104\u010f\u0111";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}