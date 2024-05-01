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
		T__0=1, T__1=2, MAIN=3, IF=4, PRINT=5, TRUE=6, FALSE=7, ELSE=8, ELSEIF=9, 
		VOID=10, WHILE=11, INT=12, FLOAT=13, STRING=14, CHAR=15, LPAREN=16, RPAREN=17, 
		LBRACE=18, RBRACE=19, FIN=20, PLUS=21, MINUS=22, TIMES=23, DIV=24, EQUALS=25, 
		ID=26, NUMBER=27, STRINGL=28, CHARL=29, IGUAL=30, DISTINTO=31, MAYOR=32, 
		MENOR=33, MAYORIGUAL=34, MENORIGUAL=35, AND=36, OR=37, NOT=38, DIGIT=39, 
		RESI=40, WS=41;
	public static final int
		RULE_prog = 0, RULE_content = 1, RULE_declaration = 2, RULE_declarationAndAssignament = 3, 
		RULE_assignment = 4, RULE_whileStatement = 5, RULE_ifStatement = 6, RULE_ifContent = 7, 
		RULE_elseifContent = 8, RULE_elseContent = 9, RULE_condition = 10, RULE_trueOrFalse = 11, 
		RULE_logicalExpression = 12, RULE_relationalExpression = 13, RULE_printPlease = 14, 
		RULE_concat = 15, RULE_atom = 16, RULE_incre = 17, RULE_decre = 18, RULE_exp = 19, 
		RULE_dataType = 20, RULE_simbolos = 21;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "content", "declaration", "declarationAndAssignament", "assignment", 
			"whileStatement", "ifStatement", "ifContent", "elseifContent", "elseContent", 
			"condition", "trueOrFalse", "logicalExpression", "relationalExpression", 
			"printPlease", "concat", "atom", "incre", "decre", "exp", "dataType", 
			"simbolos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'++'", "'--'", "'main'", "'if'", "'printf'", "'true'", "'false'", 
			"'else'", "'else if'", "'void'", "'while'", "'int'", "'float'", "'string'", 
			"'char'", "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", 
			"'='", null, null, null, null, "'=='", "'!='", "'>'", "'<'", "'>='", 
			"'<='", "'&&'", "'||'", "'!'", null, "'%'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", "ELSE", "ELSEIF", 
			"VOID", "WHILE", "INT", "FLOAT", "STRING", "CHAR", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "FIN", "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", 
			"ID", "NUMBER", "STRINGL", "CHARL", "IGUAL", "DISTINTO", "MAYOR", "MENOR", 
			"MAYORIGUAL", "MENORIGUAL", "AND", "OR", "NOT", "DIGIT", "RESI", "WS"
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
			setState(44);
			match(VOID);
			setState(45);
			match(MAIN);
			setState(46);
			match(LPAREN);
			setState(47);
			match(RPAREN);
			setState(48);
			match(LBRACE);
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67164208L) != 0)) {
				{
				{
				setState(49);
				content();
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(55);
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
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_content);
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				declarationAndAssignament();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
				assignment();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(60);
				ifStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(61);
				whileStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(62);
				printPlease();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(63);
				dataType();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(64);
				incre();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(65);
				decre();
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
			setState(68);
			dataType();
			setState(69);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31457280L) != 0)) {
				{
				setState(70);
				simbolos();
				}
			}

			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(73);
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
			setState(76);
			dataType();
			setState(77);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(78);
			match(EQUALS);
			setState(80);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(79);
				exp(0);
				}
				break;
			}
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(82);
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
			setState(85);
			match(ID);
			setState(86);
			match(EQUALS);
			setState(87);
			exp(0);
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
			setState(91);
			match(WHILE);
			setState(92);
			match(LPAREN);
			setState(93);
			condition();
			setState(94);
			match(RPAREN);
			setState(95);
			match(LBRACE);
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67164208L) != 0)) {
				{
				{
				setState(96);
				content();
				}
				}
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(102);
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
			setState(104);
			match(IF);
			setState(105);
			match(LPAREN);
			setState(106);
			condition();
			setState(107);
			match(RPAREN);
			setState(108);
			match(LBRACE);
			setState(109);
			ifContent();
			setState(110);
			match(RBRACE);
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(111);
				match(ELSEIF);
				setState(112);
				match(LPAREN);
				setState(113);
				condition();
				setState(114);
				match(RPAREN);
				setState(115);
				match(LBRACE);
				setState(116);
				elseifContent();
				setState(117);
				match(RBRACE);
				}
				}
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(124);
				match(ELSE);
				setState(125);
				match(LBRACE);
				setState(126);
				elseContent();
				setState(127);
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
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67164208L) != 0)) {
				{
				{
				setState(131);
				content();
				}
				}
				setState(136);
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
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67164208L) != 0)) {
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
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67164208L) != 0)) {
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
			setState(153);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				{
				setState(149);
				logicalExpression(0);
				}
				break;
			case NOT:
				{
				setState(150);
				match(NOT);
				setState(151);
				condition();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(152);
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
			setState(155);
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
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalConParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(158);
				match(LPAREN);
				setState(159);
				logicalExpression(0);
				setState(160);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new ExpresionLogicaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(162);
				relationalExpression();
				setState(167);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(163);
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
						setState(164);
						relationalExpression();
						}
						} 
					}
					setState(169);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(181);
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
					setState(172);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(175); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(173);
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
							setState(174);
							logicalExpression(0);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(177); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					} 
				}
				setState(183);
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
			setState(196);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				_localctx = new RelacionalConParentesisContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(184);
				match(LPAREN);
				setState(185);
				relationalExpression();
				setState(186);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new ExpresionRelacionalContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(188);
				exp(0);
				setState(193);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(189);
						((ExpresionRelacionalContext)_localctx).relation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 67645734912L) != 0)) ) {
							((ExpresionRelacionalContext)_localctx).relation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(190);
						exp(0);
						}
						} 
					}
					setState(195);
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
			setState(198);
			match(PRINT);
			setState(199);
			match(LPAREN);
			setState(203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(200);
				match(STRINGL);
				}
				break;
			case 2:
				{
				setState(201);
				exp(0);
				}
				break;
			case 3:
				{
				setState(202);
				concat();
				}
				break;
			}
			setState(205);
			match(RPAREN);
			setState(206);
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
			setState(208);
			atom();
			}
			setState(211); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(209);
				match(PLUS);
				setState(210);
				atom();
				}
				}
				setState(213); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PLUS );
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
		public TerminalNode STRING() { return getToken(TranslateParser.STRING, 0); }
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
			setState(217);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(215);
				match(STRING);
				}
				break;
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				_localctx = new ExppContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
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
			setState(219);
			match(ID);
			setState(220);
			match(T__0);
			setState(221);
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
			setState(223);
			match(ID);
			setState(224);
			match(T__1);
			setState(225);
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
		int _startState = 38;
		enterRecursionRule(_localctx, 38, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(228);
				match(LPAREN);
				setState(229);
				exp(0);
				setState(230);
				match(RPAREN);
				setState(232);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
				case 1:
					{
					setState(231);
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
				setState(234);
				match(LPAREN);
				setState(235);
				exp(0);
				setState(236);
				match(RPAREN);
				setState(237);
				match(LPAREN);
				setState(238);
				exp(0);
				setState(239);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(241);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(242);
				match(CHAR);
				}
				break;
			case 5:
				{
				_localctx = new IdentificadorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(243);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(257);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(255);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
					case 1:
						{
						_localctx = new ResiudoContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(246);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(247);
						match(RESI);
						setState(248);
						exp(7);
						}
						break;
					case 2:
						{
						_localctx = new TimesDivContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(249);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(250);
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
						setState(251);
						exp(6);
						}
						break;
					case 3:
						{
						_localctx = new PlusSubtractionContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(252);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(253);
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
						setState(254);
						exp(5);
						}
						break;
					}
					} 
				}
				setState(259);
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
		enterRule(_localctx, 40, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 53248L) != 0)) ) {
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
		enterRule(_localctx, 42, RULE_simbolos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31457280L) != 0)) ) {
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
		case 19:
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
		"\u0004\u0001)\u0109\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0005\u00003\b\u0000\n\u0000\f\u00006\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001C\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002H\b\u0002\u0001\u0002\u0003\u0002"+
		"K\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"Q\b\u0003\u0001\u0003\u0003\u0003T\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004Z\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005b\b\u0005\n\u0005"+
		"\f\u0005e\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006x\b\u0006\n\u0006\f\u0006{\t\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u0082\b\u0006\u0001"+
		"\u0007\u0005\u0007\u0085\b\u0007\n\u0007\f\u0007\u0088\t\u0007\u0001\b"+
		"\u0005\b\u008b\b\b\n\b\f\b\u008e\t\b\u0001\t\u0005\t\u0091\b\t\n\t\f\t"+
		"\u0094\t\t\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u009a\b\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0005\f\u00a6\b\f\n\f\f\f\u00a9\t\f\u0003\f\u00ab\b\f\u0001\f\u0001"+
		"\f\u0001\f\u0004\f\u00b0\b\f\u000b\f\f\f\u00b1\u0005\f\u00b4\b\f\n\f\f"+
		"\f\u00b7\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u00c0\b\r\n\r\f\r\u00c3\t\r\u0003\r\u00c5\b\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00cc\b\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0004\u000f"+
		"\u00d4\b\u000f\u000b\u000f\f\u000f\u00d5\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u00da\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00e9\b\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00f5\b\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0005\u0013\u0100\b\u0013\n\u0013\f\u0013\u0103\t\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0000\u0002"+
		"\u0018&\u0016\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*\u0000\b\u0001\u0000\u001a\u001b\u0001"+
		"\u0000\u0006\u0007\u0001\u0000$%\u0001\u0000\u001e#\u0001\u0000\u0017"+
		"\u0018\u0001\u0000\u0015\u0016\u0002\u0000\f\f\u000e\u000f\u0001\u0000"+
		"\u0015\u0018\u011a\u0000,\u0001\u0000\u0000\u0000\u0002B\u0001\u0000\u0000"+
		"\u0000\u0004D\u0001\u0000\u0000\u0000\u0006L\u0001\u0000\u0000\u0000\b"+
		"U\u0001\u0000\u0000\u0000\n[\u0001\u0000\u0000\u0000\fh\u0001\u0000\u0000"+
		"\u0000\u000e\u0086\u0001\u0000\u0000\u0000\u0010\u008c\u0001\u0000\u0000"+
		"\u0000\u0012\u0092\u0001\u0000\u0000\u0000\u0014\u0099\u0001\u0000\u0000"+
		"\u0000\u0016\u009b\u0001\u0000\u0000\u0000\u0018\u00aa\u0001\u0000\u0000"+
		"\u0000\u001a\u00c4\u0001\u0000\u0000\u0000\u001c\u00c6\u0001\u0000\u0000"+
		"\u0000\u001e\u00d0\u0001\u0000\u0000\u0000 \u00d9\u0001\u0000\u0000\u0000"+
		"\"\u00db\u0001\u0000\u0000\u0000$\u00df\u0001\u0000\u0000\u0000&\u00f4"+
		"\u0001\u0000\u0000\u0000(\u0104\u0001\u0000\u0000\u0000*\u0106\u0001\u0000"+
		"\u0000\u0000,-\u0005\n\u0000\u0000-.\u0005\u0003\u0000\u0000./\u0005\u0010"+
		"\u0000\u0000/0\u0005\u0011\u0000\u000004\u0005\u0012\u0000\u000013\u0003"+
		"\u0002\u0001\u000021\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u0000"+
		"42\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000057\u0001\u0000\u0000"+
		"\u000064\u0001\u0000\u0000\u000078\u0005\u0013\u0000\u00008\u0001\u0001"+
		"\u0000\u0000\u00009C\u0003\u0004\u0002\u0000:C\u0003\u0006\u0003\u0000"+
		";C\u0003\b\u0004\u0000<C\u0003\f\u0006\u0000=C\u0003\n\u0005\u0000>C\u0003"+
		"\u001c\u000e\u0000?C\u0003(\u0014\u0000@C\u0003\"\u0011\u0000AC\u0003"+
		"$\u0012\u0000B9\u0001\u0000\u0000\u0000B:\u0001\u0000\u0000\u0000B;\u0001"+
		"\u0000\u0000\u0000B<\u0001\u0000\u0000\u0000B=\u0001\u0000\u0000\u0000"+
		"B>\u0001\u0000\u0000\u0000B?\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000"+
		"\u0000BA\u0001\u0000\u0000\u0000C\u0003\u0001\u0000\u0000\u0000DE\u0003"+
		"(\u0014\u0000EG\u0007\u0000\u0000\u0000FH\u0003*\u0015\u0000GF\u0001\u0000"+
		"\u0000\u0000GH\u0001\u0000\u0000\u0000HJ\u0001\u0000\u0000\u0000IK\u0005"+
		"\u0014\u0000\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000"+
		"K\u0005\u0001\u0000\u0000\u0000LM\u0003(\u0014\u0000MN\u0007\u0000\u0000"+
		"\u0000NP\u0005\u0019\u0000\u0000OQ\u0003&\u0013\u0000PO\u0001\u0000\u0000"+
		"\u0000PQ\u0001\u0000\u0000\u0000QS\u0001\u0000\u0000\u0000RT\u0005\u0014"+
		"\u0000\u0000SR\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000T\u0007"+
		"\u0001\u0000\u0000\u0000UV\u0005\u001a\u0000\u0000VW\u0005\u0019\u0000"+
		"\u0000WY\u0003&\u0013\u0000XZ\u0005\u0014\u0000\u0000YX\u0001\u0000\u0000"+
		"\u0000YZ\u0001\u0000\u0000\u0000Z\t\u0001\u0000\u0000\u0000[\\\u0005\u000b"+
		"\u0000\u0000\\]\u0005\u0010\u0000\u0000]^\u0003\u0014\n\u0000^_\u0005"+
		"\u0011\u0000\u0000_c\u0005\u0012\u0000\u0000`b\u0003\u0002\u0001\u0000"+
		"a`\u0001\u0000\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000df\u0001\u0000\u0000\u0000ec\u0001\u0000"+
		"\u0000\u0000fg\u0005\u0013\u0000\u0000g\u000b\u0001\u0000\u0000\u0000"+
		"hi\u0005\u0004\u0000\u0000ij\u0005\u0010\u0000\u0000jk\u0003\u0014\n\u0000"+
		"kl\u0005\u0011\u0000\u0000lm\u0005\u0012\u0000\u0000mn\u0003\u000e\u0007"+
		"\u0000ny\u0005\u0013\u0000\u0000op\u0005\t\u0000\u0000pq\u0005\u0010\u0000"+
		"\u0000qr\u0003\u0014\n\u0000rs\u0005\u0011\u0000\u0000st\u0005\u0012\u0000"+
		"\u0000tu\u0003\u0010\b\u0000uv\u0005\u0013\u0000\u0000vx\u0001\u0000\u0000"+
		"\u0000wo\u0001\u0000\u0000\u0000x{\u0001\u0000\u0000\u0000yw\u0001\u0000"+
		"\u0000\u0000yz\u0001\u0000\u0000\u0000z\u0081\u0001\u0000\u0000\u0000"+
		"{y\u0001\u0000\u0000\u0000|}\u0005\b\u0000\u0000}~\u0005\u0012\u0000\u0000"+
		"~\u007f\u0003\u0012\t\u0000\u007f\u0080\u0005\u0013\u0000\u0000\u0080"+
		"\u0082\u0001\u0000\u0000\u0000\u0081|\u0001\u0000\u0000\u0000\u0081\u0082"+
		"\u0001\u0000\u0000\u0000\u0082\r\u0001\u0000\u0000\u0000\u0083\u0085\u0003"+
		"\u0002\u0001\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0088\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001"+
		"\u0000\u0000\u0000\u0087\u000f\u0001\u0000\u0000\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u008b\u0003\u0002\u0001\u0000\u008a\u0089\u0001"+
		"\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000\u0000\u008c\u008a\u0001"+
		"\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u0011\u0001"+
		"\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0091\u0003"+
		"\u0002\u0001\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094\u0001"+
		"\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093\u0001"+
		"\u0000\u0000\u0000\u0093\u0013\u0001\u0000\u0000\u0000\u0094\u0092\u0001"+
		"\u0000\u0000\u0000\u0095\u009a\u0003\u0018\f\u0000\u0096\u0097\u0005&"+
		"\u0000\u0000\u0097\u009a\u0003\u0014\n\u0000\u0098\u009a\u0003\u0016\u000b"+
		"\u0000\u0099\u0095\u0001\u0000\u0000\u0000\u0099\u0096\u0001\u0000\u0000"+
		"\u0000\u0099\u0098\u0001\u0000\u0000\u0000\u009a\u0015\u0001\u0000\u0000"+
		"\u0000\u009b\u009c\u0007\u0001\u0000\u0000\u009c\u0017\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0006\f\uffff\uffff\u0000\u009e\u009f\u0005\u0010\u0000"+
		"\u0000\u009f\u00a0\u0003\u0018\f\u0000\u00a0\u00a1\u0005\u0011\u0000\u0000"+
		"\u00a1\u00ab\u0001\u0000\u0000\u0000\u00a2\u00a7\u0003\u001a\r\u0000\u00a3"+
		"\u00a4\u0007\u0002\u0000\u0000\u00a4\u00a6\u0003\u001a\r\u0000\u00a5\u00a3"+
		"\u0001\u0000\u0000\u0000\u00a6\u00a9\u0001\u0000\u0000\u0000\u00a7\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00ab"+
		"\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00aa\u009d"+
		"\u0001\u0000\u0000\u0000\u00aa\u00a2\u0001\u0000\u0000\u0000\u00ab\u00b5"+
		"\u0001\u0000\u0000\u0000\u00ac\u00af\n\u0003\u0000\u0000\u00ad\u00ae\u0007"+
		"\u0002\u0000\u0000\u00ae\u00b0\u0003\u0018\f\u0000\u00af\u00ad\u0001\u0000"+
		"\u0000\u0000\u00b0\u00b1\u0001\u0000\u0000\u0000\u00b1\u00af\u0001\u0000"+
		"\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000\u0000\u00b2\u00b4\u0001\u0000"+
		"\u0000\u0000\u00b3\u00ac\u0001\u0000\u0000\u0000\u00b4\u00b7\u0001\u0000"+
		"\u0000\u0000\u00b5\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000"+
		"\u0000\u0000\u00b6\u0019\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000"+
		"\u0000\u0000\u00b8\u00b9\u0005\u0010\u0000\u0000\u00b9\u00ba\u0003\u001a"+
		"\r\u0000\u00ba\u00bb\u0005\u0011\u0000\u0000\u00bb\u00c5\u0001\u0000\u0000"+
		"\u0000\u00bc\u00c1\u0003&\u0013\u0000\u00bd\u00be\u0007\u0003\u0000\u0000"+
		"\u00be\u00c0\u0003&\u0013\u0000\u00bf\u00bd\u0001\u0000\u0000\u0000\u00c0"+
		"\u00c3\u0001\u0000\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c1"+
		"\u00c2\u0001\u0000\u0000\u0000\u00c2\u00c5\u0001\u0000\u0000\u0000\u00c3"+
		"\u00c1\u0001\u0000\u0000\u0000\u00c4\u00b8\u0001\u0000\u0000\u0000\u00c4"+
		"\u00bc\u0001\u0000\u0000\u0000\u00c5\u001b\u0001\u0000\u0000\u0000\u00c6"+
		"\u00c7\u0005\u0005\u0000\u0000\u00c7\u00cb\u0005\u0010\u0000\u0000\u00c8"+
		"\u00cc\u0005\u001c\u0000\u0000\u00c9\u00cc\u0003&\u0013\u0000\u00ca\u00cc"+
		"\u0003\u001e\u000f\u0000\u00cb\u00c8\u0001\u0000\u0000\u0000\u00cb\u00c9"+
		"\u0001\u0000\u0000\u0000\u00cb\u00ca\u0001\u0000\u0000\u0000\u00cc\u00cd"+
		"\u0001\u0000\u0000\u0000\u00cd\u00ce\u0005\u0011\u0000\u0000\u00ce\u00cf"+
		"\u0005\u0014\u0000\u0000\u00cf\u001d\u0001\u0000\u0000\u0000\u00d0\u00d3"+
		"\u0003 \u0010\u0000\u00d1\u00d2\u0005\u0015\u0000\u0000\u00d2\u00d4\u0003"+
		" \u0010\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d5\u00d6\u0001\u0000"+
		"\u0000\u0000\u00d6\u001f\u0001\u0000\u0000\u0000\u00d7\u00da\u0005\u000e"+
		"\u0000\u0000\u00d8\u00da\u0003&\u0013\u0000\u00d9\u00d7\u0001\u0000\u0000"+
		"\u0000\u00d9\u00d8\u0001\u0000\u0000\u0000\u00da!\u0001\u0000\u0000\u0000"+
		"\u00db\u00dc\u0005\u001a\u0000\u0000\u00dc\u00dd\u0005\u0001\u0000\u0000"+
		"\u00dd\u00de\u0005\u0014\u0000\u0000\u00de#\u0001\u0000\u0000\u0000\u00df"+
		"\u00e0\u0005\u001a\u0000\u0000\u00e0\u00e1\u0005\u0002\u0000\u0000\u00e1"+
		"\u00e2\u0005\u0014\u0000\u0000\u00e2%\u0001\u0000\u0000\u0000\u00e3\u00e4"+
		"\u0006\u0013\uffff\uffff\u0000\u00e4\u00e5\u0005\u0010\u0000\u0000\u00e5"+
		"\u00e6\u0003&\u0013\u0000\u00e6\u00e8\u0005\u0011\u0000\u0000\u00e7\u00e9"+
		"\u0003&\u0013\u0000\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001"+
		"\u0000\u0000\u0000\u00e9\u00f5\u0001\u0000\u0000\u0000\u00ea\u00eb\u0005"+
		"\u0010\u0000\u0000\u00eb\u00ec\u0003&\u0013\u0000\u00ec\u00ed\u0005\u0011"+
		"\u0000\u0000\u00ed\u00ee\u0005\u0010\u0000\u0000\u00ee\u00ef\u0003&\u0013"+
		"\u0000\u00ef\u00f0\u0005\u0011\u0000\u0000\u00f0\u00f5\u0001\u0000\u0000"+
		"\u0000\u00f1\u00f5\u0005\u001b\u0000\u0000\u00f2\u00f5\u0005\u000f\u0000"+
		"\u0000\u00f3\u00f5\u0005\u001a\u0000\u0000\u00f4\u00e3\u0001\u0000\u0000"+
		"\u0000\u00f4\u00ea\u0001\u0000\u0000\u0000\u00f4\u00f1\u0001\u0000\u0000"+
		"\u0000\u00f4\u00f2\u0001\u0000\u0000\u0000\u00f4\u00f3\u0001\u0000\u0000"+
		"\u0000\u00f5\u0101\u0001\u0000\u0000\u0000\u00f6\u00f7\n\u0006\u0000\u0000"+
		"\u00f7\u00f8\u0005(\u0000\u0000\u00f8\u0100\u0003&\u0013\u0007\u00f9\u00fa"+
		"\n\u0005\u0000\u0000\u00fa\u00fb\u0007\u0004\u0000\u0000\u00fb\u0100\u0003"+
		"&\u0013\u0006\u00fc\u00fd\n\u0004\u0000\u0000\u00fd\u00fe\u0007\u0005"+
		"\u0000\u0000\u00fe\u0100\u0003&\u0013\u0005\u00ff\u00f6\u0001\u0000\u0000"+
		"\u0000\u00ff\u00f9\u0001\u0000\u0000\u0000\u00ff\u00fc\u0001\u0000\u0000"+
		"\u0000\u0100\u0103\u0001\u0000\u0000\u0000\u0101\u00ff\u0001\u0000\u0000"+
		"\u0000\u0101\u0102\u0001\u0000\u0000\u0000\u0102\'\u0001\u0000\u0000\u0000"+
		"\u0103\u0101\u0001\u0000\u0000\u0000\u0104\u0105\u0007\u0006\u0000\u0000"+
		"\u0105)\u0001\u0000\u0000\u0000\u0106\u0107\u0007\u0007\u0000\u0000\u0107"+
		"+\u0001\u0000\u0000\u0000\u001b4BGJPSYcy\u0081\u0086\u008c\u0092\u0099"+
		"\u00a7\u00aa\u00b1\u00b5\u00c1\u00c4\u00cb\u00d5\u00d9\u00e8\u00f4\u00ff"+
		"\u0101";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}