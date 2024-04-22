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
		MAIN=1, IF=2, PRINT=3, TRUE=4, FALSE=5, ELSE=6, ELSEIF=7, INT=8, FLOAT=9, 
		STRING=10, CHAR=11, LPAREN=12, RPAREN=13, LBRACE=14, RBRACE=15, FIN=16, 
		PLUS=17, MINUS=18, TIMES=19, DIV=20, EQUALS=21, ID=22, NUMBER=23, STRINGL=24, 
		CHARL=25, IGUAL=26, DISTINTO=27, MAYOR=28, MENOR=29, MAYORIGUAL=30, MENORIGUAL=31, 
		AND=32, OR=33, NOT=34, WS=35;
	public static final int
		RULE_prog = 0, RULE_content = 1, RULE_declaration = 2, RULE_declarationAndAssignament = 3, 
		RULE_assignment = 4, RULE_ifStatement = 5, RULE_ifSentence = 6, RULE_ifWithElse = 7, 
		RULE_elseIfSintax = 8, RULE_ifWithElseIf = 9, RULE_ifWithElseIfElse = 10, 
		RULE_condition = 11, RULE_trueOrFalse = 12, RULE_logicalExpression = 13, 
		RULE_relationalExpression = 14, RULE_printPlease = 15, RULE_concat = 16, 
		RULE_atom = 17, RULE_exp = 18, RULE_dataType = 19, RULE_simbolos = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "content", "declaration", "declarationAndAssignament", "assignment", 
			"ifStatement", "ifSentence", "ifWithElse", "elseIfSintax", "ifWithElseIf", 
			"ifWithElseIfElse", "condition", "trueOrFalse", "logicalExpression", 
			"relationalExpression", "printPlease", "concat", "atom", "exp", "dataType", 
			"simbolos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'main'", "'if'", "'printf'", "'true'", "'false'", "'else'", "'elseif'", 
			"'int'", "'float'", "'string'", "'char'", "'('", "')'", "'{'", "'}'", 
			"';'", "'+'", "'-'", "'*'", "'/'", "'='", null, null, null, null, "'=='", 
			"'!='", "'>'", "'<'", "'>='", "'<='", "'&&'", "'||'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MAIN", "IF", "PRINT", "TRUE", "FALSE", "ELSE", "ELSEIF", "INT", 
			"FLOAT", "STRING", "CHAR", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "FIN", 
			"PLUS", "MINUS", "TIMES", "DIV", "EQUALS", "ID", "NUMBER", "STRINGL", 
			"CHARL", "IGUAL", "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", 
			"AND", "OR", "NOT", "WS"
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
		public TerminalNode INT() { return getToken(TranslateParser.INT, 0); }
		public TerminalNode MAIN() { return getToken(TranslateParser.MAIN, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(INT);
			setState(43);
			match(MAIN);
			setState(44);
			match(LPAREN);
			setState(45);
			match(RPAREN);
			setState(46);
			match(LBRACE);
			setState(47);
			content();
			setState(48);
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
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public List<DeclarationAndAssignamentContext> declarationAndAssignament() {
			return getRuleContexts(DeclarationAndAssignamentContext.class);
		}
		public DeclarationAndAssignamentContext declarationAndAssignament(int i) {
			return getRuleContext(DeclarationAndAssignamentContext.class,i);
		}
		public List<AssignmentContext> assignment() {
			return getRuleContexts(AssignmentContext.class);
		}
		public AssignmentContext assignment(int i) {
			return getRuleContext(AssignmentContext.class,i);
		}
		public List<IfStatementContext> ifStatement() {
			return getRuleContexts(IfStatementContext.class);
		}
		public IfStatementContext ifStatement(int i) {
			return getRuleContext(IfStatementContext.class,i);
		}
		public List<PrintPleaseContext> printPlease() {
			return getRuleContexts(PrintPleaseContext.class);
		}
		public PrintPleaseContext printPlease(int i) {
			return getRuleContext(PrintPleaseContext.class,i);
		}
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_content);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(56);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(50);
					declaration();
					}
					break;
				case 2:
					{
					setState(51);
					declarationAndAssignament();
					}
					break;
				case 3:
					{
					setState(52);
					assignment();
					}
					break;
				case 4:
					{
					setState(53);
					ifStatement();
					}
					break;
				case 5:
					{
					setState(54);
					printPlease();
					}
					break;
				case 6:
					{
					setState(55);
					dataType();
					}
					break;
				}
				}
				setState(58); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 4197644L) != 0) );
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
			setState(60);
			dataType();
			setState(61);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966080L) != 0)) {
				{
				setState(62);
				simbolos();
				}
			}

			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(65);
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
			setState(70);
			match(EQUALS);
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(71);
				exp(0);
				}
				break;
			}
			setState(75);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(74);
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
			setState(77);
			match(ID);
			setState(78);
			match(EQUALS);
			setState(79);
			exp(0);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(80);
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
	public static class IfStatementContext extends ParserRuleContext {
		public IfWithElseContext ifWithElse() {
			return getRuleContext(IfWithElseContext.class,0);
		}
		public IfWithElseIfContext ifWithElseIf() {
			return getRuleContext(IfWithElseIfContext.class,0);
		}
		public IfWithElseIfElseContext ifWithElseIfElse() {
			return getRuleContext(IfWithElseIfElseContext.class,0);
		}
		public IfSentenceContext ifSentence() {
			return getRuleContext(IfSentenceContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ifStatement);
		try {
			setState(87);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				ifWithElse();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(84);
				ifWithElseIf();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(85);
				ifWithElseIfElse();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(86);
				ifSentence();
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
	public static class IfSentenceContext extends ParserRuleContext {
		public IfSentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifSentence; }
	 
		public IfSentenceContext() { }
		public void copyFrom(IfSentenceContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaIfContext extends IfSentenceContext {
		public TerminalNode IF() { return getToken(TranslateParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public SentenciaIfContext(IfSentenceContext ctx) { copyFrom(ctx); }
	}

	public final IfSentenceContext ifSentence() throws RecognitionException {
		IfSentenceContext _localctx = new IfSentenceContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ifSentence);
		try {
			_localctx = new SentenciaIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(IF);
			setState(90);
			match(LPAREN);
			setState(91);
			condition();
			setState(92);
			match(RPAREN);
			setState(93);
			match(LBRACE);
			setState(94);
			content();
			setState(95);
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
	public static class IfWithElseContext extends ParserRuleContext {
		public IfWithElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifWithElse; }
	 
		public IfWithElseContext() { }
		public void copyFrom(IfWithElseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfConElseContext extends IfWithElseContext {
		public IfSentenceContext ifSentence() {
			return getRuleContext(IfSentenceContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(TranslateParser.ELSE, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public IfConElseContext(IfWithElseContext ctx) { copyFrom(ctx); }
	}

	public final IfWithElseContext ifWithElse() throws RecognitionException {
		IfWithElseContext _localctx = new IfWithElseContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifWithElse);
		try {
			_localctx = new IfConElseContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			ifSentence();
			setState(98);
			match(ELSE);
			setState(99);
			match(LBRACE);
			setState(100);
			content();
			setState(101);
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
	public static class ElseIfSintaxContext extends ParserRuleContext {
		public TerminalNode ELSEIF() { return getToken(TranslateParser.ELSEIF, 0); }
		public TerminalNode LPAREN() { return getToken(TranslateParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TranslateParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public ElseIfSintaxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfSintax; }
	}

	public final ElseIfSintaxContext elseIfSintax() throws RecognitionException {
		ElseIfSintaxContext _localctx = new ElseIfSintaxContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_elseIfSintax);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(ELSEIF);
			setState(104);
			match(LPAREN);
			setState(105);
			condition();
			setState(106);
			match(RPAREN);
			setState(107);
			match(LBRACE);
			setState(108);
			content();
			setState(109);
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
	public static class IfWithElseIfContext extends ParserRuleContext {
		public IfWithElseIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifWithElseIf; }
	 
		public IfWithElseIfContext() { }
		public void copyFrom(IfWithElseIfContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfConElseIfContext extends IfWithElseIfContext {
		public IfSentenceContext ifSentence() {
			return getRuleContext(IfSentenceContext.class,0);
		}
		public List<ElseIfSintaxContext> elseIfSintax() {
			return getRuleContexts(ElseIfSintaxContext.class);
		}
		public ElseIfSintaxContext elseIfSintax(int i) {
			return getRuleContext(ElseIfSintaxContext.class,i);
		}
		public IfConElseIfContext(IfWithElseIfContext ctx) { copyFrom(ctx); }
	}

	public final IfWithElseIfContext ifWithElseIf() throws RecognitionException {
		IfWithElseIfContext _localctx = new IfWithElseIfContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ifWithElseIf);
		int _la;
		try {
			_localctx = new IfConElseIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			ifSentence();
			setState(113); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(112);
				elseIfSintax();
				}
				}
				setState(115); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ELSEIF );
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
	public static class IfWithElseIfElseContext extends ParserRuleContext {
		public IfWithElseIfElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifWithElseIfElse; }
	 
		public IfWithElseIfElseContext() { }
		public void copyFrom(IfWithElseIfElseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfConElseIfConElseContext extends IfWithElseIfElseContext {
		public IfWithElseIfContext ifWithElseIf() {
			return getRuleContext(IfWithElseIfContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(TranslateParser.ELSE, 0); }
		public TerminalNode LBRACE() { return getToken(TranslateParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(TranslateParser.RBRACE, 0); }
		public IfConElseIfConElseContext(IfWithElseIfElseContext ctx) { copyFrom(ctx); }
	}

	public final IfWithElseIfElseContext ifWithElseIfElse() throws RecognitionException {
		IfWithElseIfElseContext _localctx = new IfWithElseIfElseContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ifWithElseIfElse);
		int _la;
		try {
			_localctx = new IfConElseIfConElseContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			ifWithElseIf();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(118);
				match(ELSE);
				setState(119);
				match(LBRACE);
				setState(120);
				content();
				setState(121);
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
		enterRule(_localctx, 22, RULE_condition);
		try {
			_localctx = new CondicionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				{
				setState(125);
				logicalExpression();
				}
				break;
			case NOT:
				{
				setState(126);
				match(NOT);
				setState(127);
				condition();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(128);
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
		enterRule(_localctx, 24, RULE_trueOrFalse);
		int _la;
		try {
			_localctx = new VerdaderoOFalsoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
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

	public final LogicalExpressionContext logicalExpression() throws RecognitionException {
		LogicalExpressionContext _localctx = new LogicalExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_logicalExpression);
		int _la;
		try {
			_localctx = new ExpresionLogicaContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			relationalExpression();
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND || _la==OR) {
				{
				{
				setState(134);
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
				setState(135);
				relationalExpression();
				}
				}
				setState(140);
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
		enterRule(_localctx, 28, RULE_relationalExpression);
		int _la;
		try {
			_localctx = new ExpresionRelacionalContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(141);
			exp(0);
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4227858432L) != 0)) {
				{
				{
				setState(142);
				((ExpresionRelacionalContext)_localctx).relation = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4227858432L) != 0)) ) {
					((ExpresionRelacionalContext)_localctx).relation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(143);
				exp(0);
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
		public TerminalNode STRINGL() { return getToken(TranslateParser.STRINGL, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ConcatContext concat() {
			return getRuleContext(ConcatContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public ImpresionContext(PrintPleaseContext ctx) { copyFrom(ctx); }
	}

	public final PrintPleaseContext printPlease() throws RecognitionException {
		PrintPleaseContext _localctx = new PrintPleaseContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_printPlease);
		int _la;
		try {
			_localctx = new ImpresionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(PRINT);
			setState(150);
			match(LPAREN);
			setState(154);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(151);
				match(STRINGL);
				}
				break;
			case 2:
				{
				setState(152);
				exp(0);
				}
				break;
			case 3:
				{
				setState(153);
				concat();
				}
				break;
			}
			setState(156);
			match(RPAREN);
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(157);
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
		enterRule(_localctx, 32, RULE_concat);
		int _la;
		try {
			_localctx = new ConcatenacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(160);
			atom();
			}
			setState(163); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(161);
				match(PLUS);
				setState(162);
				atom();
				}
				}
				setState(165); 
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
		enterRule(_localctx, 34, RULE_atom);
		try {
			setState(169);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(167);
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
				setState(168);
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
		int _startState = 36;
		enterRecursionRule(_localctx, 36, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(172);
				match(LPAREN);
				setState(173);
				exp(0);
				setState(174);
				match(RPAREN);
				setState(176);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(175);
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
				setState(178);
				match(LPAREN);
				setState(179);
				exp(0);
				setState(180);
				match(RPAREN);
				setState(181);
				match(LPAREN);
				setState(182);
				exp(0);
				setState(183);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(185);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(186);
				match(CHAR);
				}
				break;
			case 5:
				{
				_localctx = new IdentificadorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(187);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(198);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(196);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new TimesDivContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(190);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(191);
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
						setState(192);
						exp(6);
						}
						break;
					case 2:
						{
						_localctx = new PlusSubtractionContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(193);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(194);
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
						setState(195);
						exp(5);
						}
						break;
					}
					} 
				}
				setState(200);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
		enterRule(_localctx, 38, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3328L) != 0)) ) {
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
		enterRule(_localctx, 40, RULE_simbolos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966080L) != 0)) ) {
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
		case 18:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001#\u00ce\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0004\u00019\b\u0001\u000b\u0001\f\u0001:\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u0002@\b\u0002\u0001\u0002\u0003\u0002C\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003I\b\u0003\u0001\u0003"+
		"\u0003\u0003L\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004R\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0003\u0005X\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0004\tr\b"+
		"\t\u000b\t\f\ts\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003"+
		"\n|\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u0082"+
		"\b\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0005\r\u0089\b\r\n\r"+
		"\f\r\u008c\t\r\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u0091\b"+
		"\u000e\n\u000e\f\u000e\u0094\t\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0003\u000f\u009b\b\u000f\u0001\u000f\u0001\u000f"+
		"\u0003\u000f\u009f\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0004\u0010"+
		"\u00a4\b\u0010\u000b\u0010\f\u0010\u00a5\u0001\u0011\u0001\u0011\u0003"+
		"\u0011\u00aa\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0003\u0012\u00b1\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0003\u0012\u00bd\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u00c5\b\u0012\n\u0012\f\u0012"+
		"\u00c8\t\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0000\u0001$\u0015\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014"+
		"\u0016\u0018\u001a\u001c\u001e \"$&(\u0000\b\u0001\u0000\u0016\u0017\u0001"+
		"\u0000\u0004\u0005\u0001\u0000 !\u0001\u0000\u001a\u001f\u0001\u0000\u0013"+
		"\u0014\u0001\u0000\u0011\u0012\u0002\u0000\b\b\n\u000b\u0001\u0000\u0011"+
		"\u0014\u00d8\u0000*\u0001\u0000\u0000\u0000\u00028\u0001\u0000\u0000\u0000"+
		"\u0004<\u0001\u0000\u0000\u0000\u0006D\u0001\u0000\u0000\u0000\bM\u0001"+
		"\u0000\u0000\u0000\nW\u0001\u0000\u0000\u0000\fY\u0001\u0000\u0000\u0000"+
		"\u000ea\u0001\u0000\u0000\u0000\u0010g\u0001\u0000\u0000\u0000\u0012o"+
		"\u0001\u0000\u0000\u0000\u0014u\u0001\u0000\u0000\u0000\u0016\u0081\u0001"+
		"\u0000\u0000\u0000\u0018\u0083\u0001\u0000\u0000\u0000\u001a\u0085\u0001"+
		"\u0000\u0000\u0000\u001c\u008d\u0001\u0000\u0000\u0000\u001e\u0095\u0001"+
		"\u0000\u0000\u0000 \u00a0\u0001\u0000\u0000\u0000\"\u00a9\u0001\u0000"+
		"\u0000\u0000$\u00bc\u0001\u0000\u0000\u0000&\u00c9\u0001\u0000\u0000\u0000"+
		"(\u00cb\u0001\u0000\u0000\u0000*+\u0005\b\u0000\u0000+,\u0005\u0001\u0000"+
		"\u0000,-\u0005\f\u0000\u0000-.\u0005\r\u0000\u0000./\u0005\u000e\u0000"+
		"\u0000/0\u0003\u0002\u0001\u000001\u0005\u000f\u0000\u00001\u0001\u0001"+
		"\u0000\u0000\u000029\u0003\u0004\u0002\u000039\u0003\u0006\u0003\u0000"+
		"49\u0003\b\u0004\u000059\u0003\n\u0005\u000069\u0003\u001e\u000f\u0000"+
		"79\u0003&\u0013\u000082\u0001\u0000\u0000\u000083\u0001\u0000\u0000\u0000"+
		"84\u0001\u0000\u0000\u000085\u0001\u0000\u0000\u000086\u0001\u0000\u0000"+
		"\u000087\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:8\u0001\u0000"+
		"\u0000\u0000:;\u0001\u0000\u0000\u0000;\u0003\u0001\u0000\u0000\u0000"+
		"<=\u0003&\u0013\u0000=?\u0007\u0000\u0000\u0000>@\u0003(\u0014\u0000?"+
		">\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@B\u0001\u0000\u0000"+
		"\u0000AC\u0005\u0010\u0000\u0000BA\u0001\u0000\u0000\u0000BC\u0001\u0000"+
		"\u0000\u0000C\u0005\u0001\u0000\u0000\u0000DE\u0003&\u0013\u0000EF\u0007"+
		"\u0000\u0000\u0000FH\u0005\u0015\u0000\u0000GI\u0003$\u0012\u0000HG\u0001"+
		"\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IK\u0001\u0000\u0000\u0000"+
		"JL\u0005\u0010\u0000\u0000KJ\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000"+
		"\u0000L\u0007\u0001\u0000\u0000\u0000MN\u0005\u0016\u0000\u0000NO\u0005"+
		"\u0015\u0000\u0000OQ\u0003$\u0012\u0000PR\u0005\u0010\u0000\u0000QP\u0001"+
		"\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000R\t\u0001\u0000\u0000\u0000"+
		"SX\u0003\u000e\u0007\u0000TX\u0003\u0012\t\u0000UX\u0003\u0014\n\u0000"+
		"VX\u0003\f\u0006\u0000WS\u0001\u0000\u0000\u0000WT\u0001\u0000\u0000\u0000"+
		"WU\u0001\u0000\u0000\u0000WV\u0001\u0000\u0000\u0000X\u000b\u0001\u0000"+
		"\u0000\u0000YZ\u0005\u0002\u0000\u0000Z[\u0005\f\u0000\u0000[\\\u0003"+
		"\u0016\u000b\u0000\\]\u0005\r\u0000\u0000]^\u0005\u000e\u0000\u0000^_"+
		"\u0003\u0002\u0001\u0000_`\u0005\u000f\u0000\u0000`\r\u0001\u0000\u0000"+
		"\u0000ab\u0003\f\u0006\u0000bc\u0005\u0006\u0000\u0000cd\u0005\u000e\u0000"+
		"\u0000de\u0003\u0002\u0001\u0000ef\u0005\u000f\u0000\u0000f\u000f\u0001"+
		"\u0000\u0000\u0000gh\u0005\u0007\u0000\u0000hi\u0005\f\u0000\u0000ij\u0003"+
		"\u0016\u000b\u0000jk\u0005\r\u0000\u0000kl\u0005\u000e\u0000\u0000lm\u0003"+
		"\u0002\u0001\u0000mn\u0005\u000f\u0000\u0000n\u0011\u0001\u0000\u0000"+
		"\u0000oq\u0003\f\u0006\u0000pr\u0003\u0010\b\u0000qp\u0001\u0000\u0000"+
		"\u0000rs\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001\u0000"+
		"\u0000\u0000t\u0013\u0001\u0000\u0000\u0000u{\u0003\u0012\t\u0000vw\u0005"+
		"\u0006\u0000\u0000wx\u0005\u000e\u0000\u0000xy\u0003\u0002\u0001\u0000"+
		"yz\u0005\u000f\u0000\u0000z|\u0001\u0000\u0000\u0000{v\u0001\u0000\u0000"+
		"\u0000{|\u0001\u0000\u0000\u0000|\u0015\u0001\u0000\u0000\u0000}\u0082"+
		"\u0003\u001a\r\u0000~\u007f\u0005\"\u0000\u0000\u007f\u0082\u0003\u0016"+
		"\u000b\u0000\u0080\u0082\u0003\u0018\f\u0000\u0081}\u0001\u0000\u0000"+
		"\u0000\u0081~\u0001\u0000\u0000\u0000\u0081\u0080\u0001\u0000\u0000\u0000"+
		"\u0082\u0017\u0001\u0000\u0000\u0000\u0083\u0084\u0007\u0001\u0000\u0000"+
		"\u0084\u0019\u0001\u0000\u0000\u0000\u0085\u008a\u0003\u001c\u000e\u0000"+
		"\u0086\u0087\u0007\u0002\u0000\u0000\u0087\u0089\u0003\u001c\u000e\u0000"+
		"\u0088\u0086\u0001\u0000\u0000\u0000\u0089\u008c\u0001\u0000\u0000\u0000"+
		"\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000"+
		"\u008b\u001b\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000"+
		"\u008d\u0092\u0003$\u0012\u0000\u008e\u008f\u0007\u0003\u0000\u0000\u008f"+
		"\u0091\u0003$\u0012\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0094"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u001d\u0001\u0000\u0000\u0000\u0094\u0092"+
		"\u0001\u0000\u0000\u0000\u0095\u0096\u0005\u0003\u0000\u0000\u0096\u009a"+
		"\u0005\f\u0000\u0000\u0097\u009b\u0005\u0018\u0000\u0000\u0098\u009b\u0003"+
		"$\u0012\u0000\u0099\u009b\u0003 \u0010\u0000\u009a\u0097\u0001\u0000\u0000"+
		"\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u0099\u0001\u0000\u0000"+
		"\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009e\u0005\r\u0000\u0000"+
		"\u009d\u009f\u0005\u0010\u0000\u0000\u009e\u009d\u0001\u0000\u0000\u0000"+
		"\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u001f\u0001\u0000\u0000\u0000"+
		"\u00a0\u00a3\u0003\"\u0011\u0000\u00a1\u00a2\u0005\u0011\u0000\u0000\u00a2"+
		"\u00a4\u0003\"\u0011\u0000\u00a3\u00a1\u0001\u0000\u0000\u0000\u00a4\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a6"+
		"\u0001\u0000\u0000\u0000\u00a6!\u0001\u0000\u0000\u0000\u00a7\u00aa\u0005"+
		"\n\u0000\u0000\u00a8\u00aa\u0003$\u0012\u0000\u00a9\u00a7\u0001\u0000"+
		"\u0000\u0000\u00a9\u00a8\u0001\u0000\u0000\u0000\u00aa#\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ac\u0006\u0012\uffff\uffff\u0000\u00ac\u00ad\u0005\f\u0000"+
		"\u0000\u00ad\u00ae\u0003$\u0012\u0000\u00ae\u00b0\u0005\r\u0000\u0000"+
		"\u00af\u00b1\u0003$\u0012\u0000\u00b0\u00af\u0001\u0000\u0000\u0000\u00b0"+
		"\u00b1\u0001\u0000\u0000\u0000\u00b1\u00bd\u0001\u0000\u0000\u0000\u00b2"+
		"\u00b3\u0005\f\u0000\u0000\u00b3\u00b4\u0003$\u0012\u0000\u00b4\u00b5"+
		"\u0005\r\u0000\u0000\u00b5\u00b6\u0005\f\u0000\u0000\u00b6\u00b7\u0003"+
		"$\u0012\u0000\u00b7\u00b8\u0005\r\u0000\u0000\u00b8\u00bd\u0001\u0000"+
		"\u0000\u0000\u00b9\u00bd\u0005\u0017\u0000\u0000\u00ba\u00bd\u0005\u000b"+
		"\u0000\u0000\u00bb\u00bd\u0005\u0016\u0000\u0000\u00bc\u00ab\u0001\u0000"+
		"\u0000\u0000\u00bc\u00b2\u0001\u0000\u0000\u0000\u00bc\u00b9\u0001\u0000"+
		"\u0000\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bc\u00bb\u0001\u0000"+
		"\u0000\u0000\u00bd\u00c6\u0001\u0000\u0000\u0000\u00be\u00bf\n\u0005\u0000"+
		"\u0000\u00bf\u00c0\u0007\u0004\u0000\u0000\u00c0\u00c5\u0003$\u0012\u0006"+
		"\u00c1\u00c2\n\u0004\u0000\u0000\u00c2\u00c3\u0007\u0005\u0000\u0000\u00c3"+
		"\u00c5\u0003$\u0012\u0005\u00c4\u00be\u0001\u0000\u0000\u0000\u00c4\u00c1"+
		"\u0001\u0000\u0000\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000\u00c6\u00c4"+
		"\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7%\u0001"+
		"\u0000\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00ca\u0007"+
		"\u0006\u0000\u0000\u00ca\'\u0001\u0000\u0000\u0000\u00cb\u00cc\u0007\u0007"+
		"\u0000\u0000\u00cc)\u0001\u0000\u0000\u0000\u00158:?BHKQWs{\u0081\u008a"+
		"\u0092\u009a\u009e\u00a5\u00a9\u00b0\u00bc\u00c4\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}