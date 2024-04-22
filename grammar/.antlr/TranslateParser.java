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
		MAIN=1, IF=2, PRINT=3, TRUE=4, FALSE=5, INT=6, FLOAT=7, STRING=8, CHAR=9, 
		LPAREN=10, RPAREN=11, LBRACE=12, RBRACE=13, FIN=14, PLUS=15, MINUS=16, 
		TIMES=17, DIV=18, EQUALS=19, ID=20, NUMBER=21, STRINGL=22, CHARL=23, IGUAL=24, 
		DISTINTO=25, MAYOR=26, MENOR=27, MAYORIGUAL=28, MENORIGUAL=29, AND=30, 
		OR=31, NOT=32, WS=33;
	public static final int
		RULE_prog = 0, RULE_content = 1, RULE_declaration = 2, RULE_declarationAndAssignament = 3, 
		RULE_assignment = 4, RULE_ifSentence = 5, RULE_condition = 6, RULE_trueOrFalse = 7, 
		RULE_logicalExpression = 8, RULE_relationalExpression = 9, RULE_printPlease = 10, 
		RULE_concat = 11, RULE_atom = 12, RULE_exp = 13, RULE_dataType = 14, RULE_simbolos = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "content", "declaration", "declarationAndAssignament", "assignment", 
			"ifSentence", "condition", "trueOrFalse", "logicalExpression", "relationalExpression", 
			"printPlease", "concat", "atom", "exp", "dataType", "simbolos"
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
			setState(32);
			match(INT);
			setState(33);
			match(MAIN);
			setState(34);
			match(LPAREN);
			setState(35);
			match(RPAREN);
			setState(36);
			match(LBRACE);
			setState(37);
			content();
			setState(38);
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
		public List<IfSentenceContext> ifSentence() {
			return getRuleContexts(IfSentenceContext.class);
		}
		public IfSentenceContext ifSentence(int i) {
			return getRuleContext(IfSentenceContext.class,i);
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
			setState(46); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(46);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(40);
					declaration();
					}
					break;
				case 2:
					{
					setState(41);
					declarationAndAssignament();
					}
					break;
				case 3:
					{
					setState(42);
					assignment();
					}
					break;
				case 4:
					{
					setState(43);
					ifSentence();
					}
					break;
				case 5:
					{
					setState(44);
					printPlease();
					}
					break;
				case 6:
					{
					setState(45);
					dataType();
					}
					break;
				}
				}
				setState(48); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1049420L) != 0) );
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
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public DeclaracionContext(DeclarationContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		try {
			_localctx = new DeclaracionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			dataType();
			{
			setState(51);
			match(ID);
			}
			setState(52);
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
		public TerminalNode ID() { return getToken(TranslateParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(TranslateParser.EQUALS, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public DeclAndAssigContext(DeclarationAndAssignamentContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationAndAssignamentContext declarationAndAssignament() throws RecognitionException {
		DeclarationAndAssignamentContext _localctx = new DeclarationAndAssignamentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declarationAndAssignament);
		try {
			_localctx = new DeclAndAssigContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			dataType();
			setState(55);
			match(ID);
			setState(56);
			match(EQUALS);
			setState(57);
			exp(0);
			setState(58);
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
		try {
			_localctx = new AsignacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(ID);
			setState(61);
			match(EQUALS);
			setState(62);
			exp(0);
			setState(63);
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
		public TerminalNode FIN() { return getToken(TranslateParser.FIN, 0); }
		public SentenciaIfContext(IfSentenceContext ctx) { copyFrom(ctx); }
	}

	public final IfSentenceContext ifSentence() throws RecognitionException {
		IfSentenceContext _localctx = new IfSentenceContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ifSentence);
		try {
			_localctx = new SentenciaIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(IF);
			setState(66);
			match(LPAREN);
			setState(67);
			condition();
			setState(68);
			match(RPAREN);
			setState(69);
			match(LBRACE);
			setState(70);
			content();
			setState(71);
			match(RBRACE);
			setState(72);
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
		enterRule(_localctx, 12, RULE_condition);
		try {
			_localctx = new CondicionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case LPAREN:
			case ID:
			case NUMBER:
				{
				setState(74);
				logicalExpression();
				}
				break;
			case NOT:
				{
				setState(75);
				match(NOT);
				setState(76);
				condition();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(77);
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
		enterRule(_localctx, 14, RULE_trueOrFalse);
		int _la;
		try {
			_localctx = new VerdaderoOFalsoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
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
		enterRule(_localctx, 16, RULE_logicalExpression);
		int _la;
		try {
			_localctx = new ExpresionLogicaContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			relationalExpression();
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND || _la==OR) {
				{
				{
				setState(83);
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
				setState(84);
				relationalExpression();
				}
				}
				setState(89);
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
		enterRule(_localctx, 18, RULE_relationalExpression);
		int _la;
		try {
			_localctx = new ExpresionRelacionalContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(90);
			exp(0);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1056964608L) != 0)) {
				{
				{
				setState(91);
				((ExpresionRelacionalContext)_localctx).relation = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1056964608L) != 0)) ) {
					((ExpresionRelacionalContext)_localctx).relation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(92);
				exp(0);
				}
				}
				setState(97);
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
		enterRule(_localctx, 20, RULE_printPlease);
		try {
			_localctx = new ImpresionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(PRINT);
			setState(99);
			match(LPAREN);
			setState(103);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(100);
				match(STRINGL);
				}
				break;
			case 2:
				{
				setState(101);
				exp(0);
				}
				break;
			case 3:
				{
				setState(102);
				concat();
				}
				break;
			}
			setState(105);
			match(RPAREN);
			setState(106);
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
		enterRule(_localctx, 22, RULE_concat);
		int _la;
		try {
			_localctx = new ConcatenacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(108);
			atom();
			}
			setState(111); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(109);
				match(PLUS);
				setState(110);
				atom();
				}
				}
				setState(113); 
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
		enterRule(_localctx, 24, RULE_atom);
		try {
			setState(117);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRINGL:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(115);
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
				setState(116);
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
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(120);
				match(LPAREN);
				setState(121);
				exp(0);
				setState(122);
				match(RPAREN);
				setState(124);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(123);
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
				setState(126);
				match(LPAREN);
				setState(127);
				exp(0);
				setState(128);
				match(RPAREN);
				setState(129);
				match(LPAREN);
				setState(130);
				exp(0);
				setState(131);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(133);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(134);
				match(CHAR);
				}
				break;
			case 5:
				{
				_localctx = new IdentificadorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(135);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(146);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(144);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new TimesDivContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(138);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(139);
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
						setState(140);
						exp(6);
						}
						break;
					case 2:
						{
						_localctx = new PlusSubtractionContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(141);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(142);
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
						setState(143);
						exp(5);
						}
						break;
					}
					} 
				}
				setState(148);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		enterRule(_localctx, 28, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 832L) != 0)) ) {
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
		enterRule(_localctx, 30, RULE_simbolos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 491520L) != 0)) ) {
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
		case 13:
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
		"\u0004\u0001!\u009a\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0004\u0001/\b\u0001\u000b\u0001\f\u00010\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006O\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0005\bV\b\b\n\b\f\bY\t\b\u0001"+
		"\t\u0001\t\u0001\t\u0005\t^\b\t\n\t\f\ta\t\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0003\nh\b\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0004\u000bp\b\u000b\u000b\u000b\f\u000bq\u0001\f\u0001\f"+
		"\u0003\fv\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r}\b\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0003\r\u0089\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u0091\b\r\n\r\f\r\u0094\t\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0000\u0001\u001a\u0010\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0000\u0007\u0001"+
		"\u0000\u0004\u0005\u0001\u0000\u001e\u001f\u0001\u0000\u0018\u001d\u0001"+
		"\u0000\u0011\u0012\u0001\u0000\u000f\u0010\u0002\u0000\u0006\u0006\b\t"+
		"\u0001\u0000\u000f\u0012\u009e\u0000 \u0001\u0000\u0000\u0000\u0002.\u0001"+
		"\u0000\u0000\u0000\u00042\u0001\u0000\u0000\u0000\u00066\u0001\u0000\u0000"+
		"\u0000\b<\u0001\u0000\u0000\u0000\nA\u0001\u0000\u0000\u0000\fN\u0001"+
		"\u0000\u0000\u0000\u000eP\u0001\u0000\u0000\u0000\u0010R\u0001\u0000\u0000"+
		"\u0000\u0012Z\u0001\u0000\u0000\u0000\u0014b\u0001\u0000\u0000\u0000\u0016"+
		"l\u0001\u0000\u0000\u0000\u0018u\u0001\u0000\u0000\u0000\u001a\u0088\u0001"+
		"\u0000\u0000\u0000\u001c\u0095\u0001\u0000\u0000\u0000\u001e\u0097\u0001"+
		"\u0000\u0000\u0000 !\u0005\u0006\u0000\u0000!\"\u0005\u0001\u0000\u0000"+
		"\"#\u0005\n\u0000\u0000#$\u0005\u000b\u0000\u0000$%\u0005\f\u0000\u0000"+
		"%&\u0003\u0002\u0001\u0000&\'\u0005\r\u0000\u0000\'\u0001\u0001\u0000"+
		"\u0000\u0000(/\u0003\u0004\u0002\u0000)/\u0003\u0006\u0003\u0000*/\u0003"+
		"\b\u0004\u0000+/\u0003\n\u0005\u0000,/\u0003\u0014\n\u0000-/\u0003\u001c"+
		"\u000e\u0000.(\u0001\u0000\u0000\u0000.)\u0001\u0000\u0000\u0000.*\u0001"+
		"\u0000\u0000\u0000.+\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000"+
		".-\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u00000.\u0001\u0000\u0000"+
		"\u000001\u0001\u0000\u0000\u00001\u0003\u0001\u0000\u0000\u000023\u0003"+
		"\u001c\u000e\u000034\u0005\u0014\u0000\u000045\u0005\u000e\u0000\u0000"+
		"5\u0005\u0001\u0000\u0000\u000067\u0003\u001c\u000e\u000078\u0005\u0014"+
		"\u0000\u000089\u0005\u0013\u0000\u00009:\u0003\u001a\r\u0000:;\u0005\u000e"+
		"\u0000\u0000;\u0007\u0001\u0000\u0000\u0000<=\u0005\u0014\u0000\u0000"+
		"=>\u0005\u0013\u0000\u0000>?\u0003\u001a\r\u0000?@\u0005\u000e\u0000\u0000"+
		"@\t\u0001\u0000\u0000\u0000AB\u0005\u0002\u0000\u0000BC\u0005\n\u0000"+
		"\u0000CD\u0003\f\u0006\u0000DE\u0005\u000b\u0000\u0000EF\u0005\f\u0000"+
		"\u0000FG\u0003\u0002\u0001\u0000GH\u0005\r\u0000\u0000HI\u0005\u000e\u0000"+
		"\u0000I\u000b\u0001\u0000\u0000\u0000JO\u0003\u0010\b\u0000KL\u0005 \u0000"+
		"\u0000LO\u0003\f\u0006\u0000MO\u0003\u000e\u0007\u0000NJ\u0001\u0000\u0000"+
		"\u0000NK\u0001\u0000\u0000\u0000NM\u0001\u0000\u0000\u0000O\r\u0001\u0000"+
		"\u0000\u0000PQ\u0007\u0000\u0000\u0000Q\u000f\u0001\u0000\u0000\u0000"+
		"RW\u0003\u0012\t\u0000ST\u0007\u0001\u0000\u0000TV\u0003\u0012\t\u0000"+
		"US\u0001\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000"+
		"\u0000WX\u0001\u0000\u0000\u0000X\u0011\u0001\u0000\u0000\u0000YW\u0001"+
		"\u0000\u0000\u0000Z_\u0003\u001a\r\u0000[\\\u0007\u0002\u0000\u0000\\"+
		"^\u0003\u001a\r\u0000][\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000\u0000"+
		"_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`\u0013\u0001\u0000"+
		"\u0000\u0000a_\u0001\u0000\u0000\u0000bc\u0005\u0003\u0000\u0000cg\u0005"+
		"\n\u0000\u0000dh\u0005\u0016\u0000\u0000eh\u0003\u001a\r\u0000fh\u0003"+
		"\u0016\u000b\u0000gd\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000"+
		"gf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ij\u0005\u000b\u0000"+
		"\u0000jk\u0005\u000e\u0000\u0000k\u0015\u0001\u0000\u0000\u0000lo\u0003"+
		"\u0018\f\u0000mn\u0005\u000f\u0000\u0000np\u0003\u0018\f\u0000om\u0001"+
		"\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000"+
		"qr\u0001\u0000\u0000\u0000r\u0017\u0001\u0000\u0000\u0000sv\u0005\u0016"+
		"\u0000\u0000tv\u0003\u001a\r\u0000us\u0001\u0000\u0000\u0000ut\u0001\u0000"+
		"\u0000\u0000v\u0019\u0001\u0000\u0000\u0000wx\u0006\r\uffff\uffff\u0000"+
		"xy\u0005\n\u0000\u0000yz\u0003\u001a\r\u0000z|\u0005\u000b\u0000\u0000"+
		"{}\u0003\u001a\r\u0000|{\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000"+
		"}\u0089\u0001\u0000\u0000\u0000~\u007f\u0005\n\u0000\u0000\u007f\u0080"+
		"\u0003\u001a\r\u0000\u0080\u0081\u0005\u000b\u0000\u0000\u0081\u0082\u0005"+
		"\n\u0000\u0000\u0082\u0083\u0003\u001a\r\u0000\u0083\u0084\u0005\u000b"+
		"\u0000\u0000\u0084\u0089\u0001\u0000\u0000\u0000\u0085\u0089\u0005\u0015"+
		"\u0000\u0000\u0086\u0089\u0005\t\u0000\u0000\u0087\u0089\u0005\u0014\u0000"+
		"\u0000\u0088w\u0001\u0000\u0000\u0000\u0088~\u0001\u0000\u0000\u0000\u0088"+
		"\u0085\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088"+
		"\u0087\u0001\u0000\u0000\u0000\u0089\u0092\u0001\u0000\u0000\u0000\u008a"+
		"\u008b\n\u0005\u0000\u0000\u008b\u008c\u0007\u0003\u0000\u0000\u008c\u0091"+
		"\u0003\u001a\r\u0006\u008d\u008e\n\u0004\u0000\u0000\u008e\u008f\u0007"+
		"\u0004\u0000\u0000\u008f\u0091\u0003\u001a\r\u0005\u0090\u008a\u0001\u0000"+
		"\u0000\u0000\u0090\u008d\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000"+
		"\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000"+
		"\u0000\u0000\u0093\u001b\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000"+
		"\u0000\u0000\u0095\u0096\u0007\u0005\u0000\u0000\u0096\u001d\u0001\u0000"+
		"\u0000\u0000\u0097\u0098\u0007\u0006\u0000\u0000\u0098\u001f\u0001\u0000"+
		"\u0000\u0000\f.0NW_gqu|\u0088\u0090\u0092";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}