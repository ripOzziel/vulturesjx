// Generated from /home/ozzy/Escritorio/clean-proyect/grammar/ArrayInit.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ArrayInitParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, FIN=2, PLUS=3, MINUS=4, TIMES=5, DIV=6, EQUALS=7, GATO=8, DOLLAR=9, 
		DOBLEPUNTO=10, ANDPERSON=11, COMMA=12, LPAREN=13, RPAREN=14, LBRACE=15, 
		RBRACE=16, IGUAL=17, DISTINTO=18, MAYOR=19, MENOR=20, MAYORIGUAL=21, MENORIGUAL=22, 
		AND=23, OR=24, NOT=25, PRINT=26, IF=27, ELSE=28, ELSEIF=29, NUM=30, VUL=31, 
		V=32, ID=33, NUMBER=34, STRING=35, CHAR=36, WS=37, SALTO=38, TRUE=39, 
		FALSE=40, WHILE=41;
	public static final int
		RULE_prog = 0, RULE_content = 1, RULE_declaration = 2, RULE_declarationAndAssignament = 3, 
		RULE_assignment = 4, RULE_ifStatement = 5, RULE_ifSentence = 6, RULE_ifWithElse = 7, 
		RULE_elseIfSintax = 8, RULE_ifWithElseIf = 9, RULE_ifWithElseIfElse = 10, 
		RULE_condition = 11, RULE_trueOrFalse = 12, RULE_logicalExpression = 13, 
		RULE_relationalExpression = 14, RULE_whileStatement = 15, RULE_printPlease = 16, 
		RULE_concat = 17, RULE_atom = 18, RULE_exp = 19, RULE_dataType = 20, RULE_simbolos = 21;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "content", "declaration", "declarationAndAssignament", "assignment", 
			"ifStatement", "ifSentence", "ifWithElse", "elseIfSintax", "ifWithElseIf", 
			"ifWithElseIfElse", "condition", "trueOrFalse", "logicalExpression", 
			"relationalExpression", "whileStatement", "printPlease", "concat", "atom", 
			"exp", "dataType", "simbolos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'hiram'", "';'", "'+'", "'-'", "'*'", "'/'", "'='", "'#'", "'$'", 
			"':'", "'&'", "','", "'('", "')'", "'{'", "'}'", "'=='", "'!='", "'>'", 
			"'<'", "'>='", "'<='", "'&&'", "'||'", "'!'", "'printPlease'", "'if'", 
			"'else'", "'elseif'", "'num'", "'vul'", "'v'", null, null, null, null, 
			null, "'\\n'", "'true'", "'false'", "'mien'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "FIN", "PLUS", "MINUS", "TIMES", "DIV", "EQUALS", "GATO", 
			"DOLLAR", "DOBLEPUNTO", "ANDPERSON", "COMMA", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "IGUAL", "DISTINTO", "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", 
			"AND", "OR", "NOT", "PRINT", "IF", "ELSE", "ELSEIF", "NUM", "VUL", "V", 
			"ID", "NUMBER", "STRING", "CHAR", "WS", "SALTO", "TRUE", "FALSE", "WHILE"
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
	public String getGrammarFileName() { return "ArrayInit.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ArrayInitParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
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
			setState(44);
			match(T__0);
			setState(45);
			match(LBRACE);
			setState(46);
			content();
			setState(47);
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
			setState(55); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(55);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(49);
					declaration();
					}
					break;
				case 2:
					{
					setState(50);
					declarationAndAssignament();
					}
					break;
				case 3:
					{
					setState(51);
					assignment();
					}
					break;
				case 4:
					{
					setState(52);
					ifStatement();
					}
					break;
				case 5:
					{
					setState(53);
					printPlease();
					}
					break;
				case 6:
					{
					setState(54);
					dataType();
					}
					break;
				}
				}
				setState(57); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 16307453952L) != 0) );
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
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(ArrayInitParser.NUMBER, 0); }
		public SimbolosContext simbolos() {
			return getRuleContext(SimbolosContext.class,0);
		}
		public TerminalNode FIN() { return getToken(ArrayInitParser.FIN, 0); }
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
			setState(59);
			dataType();
			setState(60);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 120L) != 0)) {
				{
				setState(61);
				simbolos();
				}
			}

			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(64);
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
		public TerminalNode EQUALS() { return getToken(ArrayInitParser.EQUALS, 0); }
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(ArrayInitParser.NUMBER, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FIN() { return getToken(ArrayInitParser.FIN, 0); }
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
			setState(67);
			dataType();
			setState(68);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(69);
			match(EQUALS);
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(70);
				exp(0);
				}
				break;
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
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(ArrayInitParser.EQUALS, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FIN() { return getToken(ArrayInitParser.FIN, 0); }
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
			setState(76);
			match(ID);
			setState(77);
			match(EQUALS);
			setState(78);
			exp(0);
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
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				ifWithElse();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
				ifWithElseIf();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(84);
				ifWithElseIfElse();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(85);
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
		public TerminalNode IF() { return getToken(ArrayInitParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(ArrayInitParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ArrayInitParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
		public SentenciaIfContext(IfSentenceContext ctx) { copyFrom(ctx); }
	}

	public final IfSentenceContext ifSentence() throws RecognitionException {
		IfSentenceContext _localctx = new IfSentenceContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ifSentence);
		try {
			_localctx = new SentenciaIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(IF);
			setState(89);
			match(LPAREN);
			setState(90);
			condition();
			setState(91);
			match(RPAREN);
			setState(92);
			match(LBRACE);
			setState(93);
			content();
			setState(94);
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
		public TerminalNode ELSE() { return getToken(ArrayInitParser.ELSE, 0); }
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
		public IfConElseContext(IfWithElseContext ctx) { copyFrom(ctx); }
	}

	public final IfWithElseContext ifWithElse() throws RecognitionException {
		IfWithElseContext _localctx = new IfWithElseContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifWithElse);
		try {
			_localctx = new IfConElseContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			ifSentence();
			setState(97);
			match(ELSE);
			setState(98);
			match(LBRACE);
			setState(99);
			content();
			setState(100);
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
		public TerminalNode ELSEIF() { return getToken(ArrayInitParser.ELSEIF, 0); }
		public TerminalNode LPAREN() { return getToken(ArrayInitParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ArrayInitParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
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
			setState(102);
			match(ELSEIF);
			setState(103);
			match(LPAREN);
			setState(104);
			condition();
			setState(105);
			match(RPAREN);
			setState(106);
			match(LBRACE);
			setState(107);
			content();
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
			setState(110);
			ifSentence();
			setState(112); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(111);
				elseIfSintax();
				}
				}
				setState(114); 
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
		public TerminalNode ELSE() { return getToken(ArrayInitParser.ELSE, 0); }
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
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
			setState(116);
			ifWithElseIf();
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(117);
				match(ELSE);
				setState(118);
				match(LBRACE);
				setState(119);
				content();
				setState(120);
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
		public TerminalNode NOT() { return getToken(ArrayInitParser.NOT, 0); }
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
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
			case ID:
			case NUMBER:
			case CHAR:
				{
				setState(124);
				logicalExpression();
				}
				break;
			case NOT:
				{
				setState(125);
				match(NOT);
				setState(126);
				condition();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(127);
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
		public TerminalNode TRUE() { return getToken(ArrayInitParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ArrayInitParser.FALSE, 0); }
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
			setState(130);
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
		public List<TerminalNode> AND() { return getTokens(ArrayInitParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(ArrayInitParser.AND, i);
		}
		public List<TerminalNode> OR() { return getTokens(ArrayInitParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(ArrayInitParser.OR, i);
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
			setState(132);
			relationalExpression();
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND || _la==OR) {
				{
				{
				setState(133);
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
				setState(134);
				relationalExpression();
				}
				}
				setState(139);
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
		public List<TerminalNode> IGUAL() { return getTokens(ArrayInitParser.IGUAL); }
		public TerminalNode IGUAL(int i) {
			return getToken(ArrayInitParser.IGUAL, i);
		}
		public List<TerminalNode> DISTINTO() { return getTokens(ArrayInitParser.DISTINTO); }
		public TerminalNode DISTINTO(int i) {
			return getToken(ArrayInitParser.DISTINTO, i);
		}
		public List<TerminalNode> MAYOR() { return getTokens(ArrayInitParser.MAYOR); }
		public TerminalNode MAYOR(int i) {
			return getToken(ArrayInitParser.MAYOR, i);
		}
		public List<TerminalNode> MENOR() { return getTokens(ArrayInitParser.MENOR); }
		public TerminalNode MENOR(int i) {
			return getToken(ArrayInitParser.MENOR, i);
		}
		public List<TerminalNode> MAYORIGUAL() { return getTokens(ArrayInitParser.MAYORIGUAL); }
		public TerminalNode MAYORIGUAL(int i) {
			return getToken(ArrayInitParser.MAYORIGUAL, i);
		}
		public List<TerminalNode> MENORIGUAL() { return getTokens(ArrayInitParser.MENORIGUAL); }
		public TerminalNode MENORIGUAL(int i) {
			return getToken(ArrayInitParser.MENORIGUAL, i);
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
			setState(140);
			exp(0);
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8257536L) != 0)) {
				{
				{
				setState(141);
				((ExpresionRelacionalContext)_localctx).relation = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8257536L) != 0)) ) {
					((ExpresionRelacionalContext)_localctx).relation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(142);
				exp(0);
				}
				}
				setState(147);
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
		public TerminalNode WHILE() { return getToken(ArrayInitParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(ArrayInitParser.LPAREN, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ArrayInitParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(ArrayInitParser.LBRACE, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(ArrayInitParser.RBRACE, 0); }
		public WhileSentenciaContext(WhileStatementContext ctx) { copyFrom(ctx); }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_whileStatement);
		try {
			_localctx = new WhileSentenciaContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(WHILE);
			setState(149);
			match(LPAREN);
			setState(150);
			condition();
			setState(151);
			match(RPAREN);
			setState(152);
			match(LBRACE);
			setState(153);
			content();
			setState(154);
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
		public TerminalNode PRINT() { return getToken(ArrayInitParser.PRINT, 0); }
		public TerminalNode LPAREN() { return getToken(ArrayInitParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ArrayInitParser.RPAREN, 0); }
		public TerminalNode STRING() { return getToken(ArrayInitParser.STRING, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ConcatContext concat() {
			return getRuleContext(ConcatContext.class,0);
		}
		public TerminalNode FIN() { return getToken(ArrayInitParser.FIN, 0); }
		public ImpresionContext(PrintPleaseContext ctx) { copyFrom(ctx); }
	}

	public final PrintPleaseContext printPlease() throws RecognitionException {
		PrintPleaseContext _localctx = new PrintPleaseContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_printPlease);
		int _la;
		try {
			_localctx = new ImpresionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(PRINT);
			setState(157);
			match(LPAREN);
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(158);
				match(STRING);
				}
				break;
			case 2:
				{
				setState(159);
				exp(0);
				}
				break;
			case 3:
				{
				setState(160);
				concat();
				}
				break;
			}
			setState(163);
			match(RPAREN);
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FIN) {
				{
				setState(164);
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
		public List<TerminalNode> PLUS() { return getTokens(ArrayInitParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(ArrayInitParser.PLUS, i);
		}
		public ConcatenacionContext(ConcatContext ctx) { copyFrom(ctx); }
	}

	public final ConcatContext concat() throws RecognitionException {
		ConcatContext _localctx = new ConcatContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_concat);
		int _la;
		try {
			_localctx = new ConcatenacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(167);
			atom();
			}
			setState(170); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(168);
				match(PLUS);
				setState(169);
				atom();
				}
				}
				setState(172); 
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
		public TerminalNode STRING() { return getToken(ArrayInitParser.STRING, 0); }
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
		enterRule(_localctx, 36, RULE_atom);
		try {
			setState(176);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				match(STRING);
				}
				break;
			case LPAREN:
			case ID:
			case NUMBER:
			case CHAR:
				_localctx = new ExppContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
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
		public TerminalNode LPAREN() { return getToken(ArrayInitParser.LPAREN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ArrayInitParser.RPAREN, 0); }
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
		public TerminalNode TIMES() { return getToken(ArrayInitParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(ArrayInitParser.DIV, 0); }
		public TimesDivContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisMultiplyContext extends ExpContext {
		public List<TerminalNode> LPAREN() { return getTokens(ArrayInitParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(ArrayInitParser.LPAREN, i);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(ArrayInitParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(ArrayInitParser.RPAREN, i);
		}
		public ParentesisMultiplyContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ExpContext {
		public TerminalNode NUMBER() { return getToken(ArrayInitParser.NUMBER, 0); }
		public NumeroContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CharContext extends ExpContext {
		public TerminalNode CHAR() { return getToken(ArrayInitParser.CHAR, 0); }
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
		public TerminalNode PLUS() { return getToken(ArrayInitParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(ArrayInitParser.MINUS, 0); }
		public PlusSubtractionContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ExpContext {
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
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
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(179);
				match(LPAREN);
				setState(180);
				exp(0);
				setState(181);
				match(RPAREN);
				setState(183);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(182);
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
				setState(185);
				match(LPAREN);
				setState(186);
				exp(0);
				setState(187);
				match(RPAREN);
				setState(188);
				match(LPAREN);
				setState(189);
				exp(0);
				setState(190);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(192);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(193);
				match(CHAR);
				}
				break;
			case 5:
				{
				_localctx = new IdentificadorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(194);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(205);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(203);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new TimesDivContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(197);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(198);
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
						setState(199);
						exp(6);
						}
						break;
					case 2:
						{
						_localctx = new PlusSubtractionContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(200);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(201);
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
						setState(202);
						exp(5);
						}
						break;
					}
					} 
				}
				setState(207);
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
		public TerminalNode NUM() { return getToken(ArrayInitParser.NUM, 0); }
		public TerminalNode VUL() { return getToken(ArrayInitParser.VUL, 0); }
		public TerminalNode V() { return getToken(ArrayInitParser.V, 0); }
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
			setState(208);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7516192768L) != 0)) ) {
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
		public TerminalNode PLUS() { return getToken(ArrayInitParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(ArrayInitParser.MINUS, 0); }
		public TerminalNode TIMES() { return getToken(ArrayInitParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(ArrayInitParser.DIV, 0); }
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
			setState(210);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 120L) != 0)) ) {
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
		case 19:
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
		"\u0004\u0001)\u00d5\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0004\u0001"+
		"8\b\u0001\u000b\u0001\f\u00019\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u0002?\b\u0002\u0001\u0002\u0003\u0002B\b\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003H\b\u0003\u0001\u0003\u0003\u0003"+
		"K\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"Q\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"W\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0004\tq\b\t\u000b\t\f\tr\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n{\b\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u0081\b\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0005\r\u0088\b\r\n\r\f\r\u008b\t\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0005\u000e\u0090\b\u000e\n\u000e\f\u000e\u0093"+
		"\t\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0003\u0010\u00a2\b\u0010\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u00a6\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0004\u0011\u00ab"+
		"\b\u0011\u000b\u0011\f\u0011\u00ac\u0001\u0012\u0001\u0012\u0003\u0012"+
		"\u00b1\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0003\u0013\u00b8\b\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0003\u0013\u00c4\b\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0005\u0013\u00cc\b\u0013\n\u0013\f\u0013\u00cf"+
		"\t\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0000"+
		"\u0001&\u0016\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*\u0000\b\u0001\u0000!\"\u0001\u0000\'("+
		"\u0001\u0000\u0017\u0018\u0001\u0000\u0011\u0016\u0001\u0000\u0005\u0006"+
		"\u0001\u0000\u0003\u0004\u0001\u0000\u001e \u0001\u0000\u0003\u0006\u00de"+
		"\u0000,\u0001\u0000\u0000\u0000\u00027\u0001\u0000\u0000\u0000\u0004;"+
		"\u0001\u0000\u0000\u0000\u0006C\u0001\u0000\u0000\u0000\bL\u0001\u0000"+
		"\u0000\u0000\nV\u0001\u0000\u0000\u0000\fX\u0001\u0000\u0000\u0000\u000e"+
		"`\u0001\u0000\u0000\u0000\u0010f\u0001\u0000\u0000\u0000\u0012n\u0001"+
		"\u0000\u0000\u0000\u0014t\u0001\u0000\u0000\u0000\u0016\u0080\u0001\u0000"+
		"\u0000\u0000\u0018\u0082\u0001\u0000\u0000\u0000\u001a\u0084\u0001\u0000"+
		"\u0000\u0000\u001c\u008c\u0001\u0000\u0000\u0000\u001e\u0094\u0001\u0000"+
		"\u0000\u0000 \u009c\u0001\u0000\u0000\u0000\"\u00a7\u0001\u0000\u0000"+
		"\u0000$\u00b0\u0001\u0000\u0000\u0000&\u00c3\u0001\u0000\u0000\u0000("+
		"\u00d0\u0001\u0000\u0000\u0000*\u00d2\u0001\u0000\u0000\u0000,-\u0005"+
		"\u0001\u0000\u0000-.\u0005\u000f\u0000\u0000./\u0003\u0002\u0001\u0000"+
		"/0\u0005\u0010\u0000\u00000\u0001\u0001\u0000\u0000\u000018\u0003\u0004"+
		"\u0002\u000028\u0003\u0006\u0003\u000038\u0003\b\u0004\u000048\u0003\n"+
		"\u0005\u000058\u0003 \u0010\u000068\u0003(\u0014\u000071\u0001\u0000\u0000"+
		"\u000072\u0001\u0000\u0000\u000073\u0001\u0000\u0000\u000074\u0001\u0000"+
		"\u0000\u000075\u0001\u0000\u0000\u000076\u0001\u0000\u0000\u000089\u0001"+
		"\u0000\u0000\u000097\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000"+
		":\u0003\u0001\u0000\u0000\u0000;<\u0003(\u0014\u0000<>\u0007\u0000\u0000"+
		"\u0000=?\u0003*\u0015\u0000>=\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000"+
		"\u0000?A\u0001\u0000\u0000\u0000@B\u0005\u0002\u0000\u0000A@\u0001\u0000"+
		"\u0000\u0000AB\u0001\u0000\u0000\u0000B\u0005\u0001\u0000\u0000\u0000"+
		"CD\u0003(\u0014\u0000DE\u0007\u0000\u0000\u0000EG\u0005\u0007\u0000\u0000"+
		"FH\u0003&\u0013\u0000GF\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HJ\u0001\u0000\u0000\u0000IK\u0005\u0002\u0000\u0000JI\u0001\u0000\u0000"+
		"\u0000JK\u0001\u0000\u0000\u0000K\u0007\u0001\u0000\u0000\u0000LM\u0005"+
		"!\u0000\u0000MN\u0005\u0007\u0000\u0000NP\u0003&\u0013\u0000OQ\u0005\u0002"+
		"\u0000\u0000PO\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000Q\t\u0001"+
		"\u0000\u0000\u0000RW\u0003\u000e\u0007\u0000SW\u0003\u0012\t\u0000TW\u0003"+
		"\u0014\n\u0000UW\u0003\f\u0006\u0000VR\u0001\u0000\u0000\u0000VS\u0001"+
		"\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VU\u0001\u0000\u0000\u0000"+
		"W\u000b\u0001\u0000\u0000\u0000XY\u0005\u001b\u0000\u0000YZ\u0005\r\u0000"+
		"\u0000Z[\u0003\u0016\u000b\u0000[\\\u0005\u000e\u0000\u0000\\]\u0005\u000f"+
		"\u0000\u0000]^\u0003\u0002\u0001\u0000^_\u0005\u0010\u0000\u0000_\r\u0001"+
		"\u0000\u0000\u0000`a\u0003\f\u0006\u0000ab\u0005\u001c\u0000\u0000bc\u0005"+
		"\u000f\u0000\u0000cd\u0003\u0002\u0001\u0000de\u0005\u0010\u0000\u0000"+
		"e\u000f\u0001\u0000\u0000\u0000fg\u0005\u001d\u0000\u0000gh\u0005\r\u0000"+
		"\u0000hi\u0003\u0016\u000b\u0000ij\u0005\u000e\u0000\u0000jk\u0005\u000f"+
		"\u0000\u0000kl\u0003\u0002\u0001\u0000lm\u0005\u0010\u0000\u0000m\u0011"+
		"\u0001\u0000\u0000\u0000np\u0003\f\u0006\u0000oq\u0003\u0010\b\u0000p"+
		"o\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000"+
		"\u0000rs\u0001\u0000\u0000\u0000s\u0013\u0001\u0000\u0000\u0000tz\u0003"+
		"\u0012\t\u0000uv\u0005\u001c\u0000\u0000vw\u0005\u000f\u0000\u0000wx\u0003"+
		"\u0002\u0001\u0000xy\u0005\u0010\u0000\u0000y{\u0001\u0000\u0000\u0000"+
		"zu\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{\u0015\u0001\u0000"+
		"\u0000\u0000|\u0081\u0003\u001a\r\u0000}~\u0005\u0019\u0000\u0000~\u0081"+
		"\u0003\u0016\u000b\u0000\u007f\u0081\u0003\u0018\f\u0000\u0080|\u0001"+
		"\u0000\u0000\u0000\u0080}\u0001\u0000\u0000\u0000\u0080\u007f\u0001\u0000"+
		"\u0000\u0000\u0081\u0017\u0001\u0000\u0000\u0000\u0082\u0083\u0007\u0001"+
		"\u0000\u0000\u0083\u0019\u0001\u0000\u0000\u0000\u0084\u0089\u0003\u001c"+
		"\u000e\u0000\u0085\u0086\u0007\u0002\u0000\u0000\u0086\u0088\u0003\u001c"+
		"\u000e\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0088\u008b\u0001\u0000"+
		"\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000"+
		"\u0000\u0000\u008a\u001b\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000"+
		"\u0000\u0000\u008c\u0091\u0003&\u0013\u0000\u008d\u008e\u0007\u0003\u0000"+
		"\u0000\u008e\u0090\u0003&\u0013\u0000\u008f\u008d\u0001\u0000\u0000\u0000"+
		"\u0090\u0093\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u001d\u0001\u0000\u0000\u0000"+
		"\u0093\u0091\u0001\u0000\u0000\u0000\u0094\u0095\u0005)\u0000\u0000\u0095"+
		"\u0096\u0005\r\u0000\u0000\u0096\u0097\u0003\u0016\u000b\u0000\u0097\u0098"+
		"\u0005\u000e\u0000\u0000\u0098\u0099\u0005\u000f\u0000\u0000\u0099\u009a"+
		"\u0003\u0002\u0001\u0000\u009a\u009b\u0005\u0010\u0000\u0000\u009b\u001f"+
		"\u0001\u0000\u0000\u0000\u009c\u009d\u0005\u001a\u0000\u0000\u009d\u00a1"+
		"\u0005\r\u0000\u0000\u009e\u00a2\u0005#\u0000\u0000\u009f\u00a2\u0003"+
		"&\u0013\u0000\u00a0\u00a2\u0003\"\u0011\u0000\u00a1\u009e\u0001\u0000"+
		"\u0000\u0000\u00a1\u009f\u0001\u0000\u0000\u0000\u00a1\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a5\u0005\u000e"+
		"\u0000\u0000\u00a4\u00a6\u0005\u0002\u0000\u0000\u00a5\u00a4\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0001\u0000\u0000\u0000\u00a6!\u0001\u0000\u0000"+
		"\u0000\u00a7\u00aa\u0003$\u0012\u0000\u00a8\u00a9\u0005\u0003\u0000\u0000"+
		"\u00a9\u00ab\u0003$\u0012\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00ab"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000\u0000\u0000\u00ac"+
		"\u00ad\u0001\u0000\u0000\u0000\u00ad#\u0001\u0000\u0000\u0000\u00ae\u00b1"+
		"\u0005#\u0000\u0000\u00af\u00b1\u0003&\u0013\u0000\u00b0\u00ae\u0001\u0000"+
		"\u0000\u0000\u00b0\u00af\u0001\u0000\u0000\u0000\u00b1%\u0001\u0000\u0000"+
		"\u0000\u00b2\u00b3\u0006\u0013\uffff\uffff\u0000\u00b3\u00b4\u0005\r\u0000"+
		"\u0000\u00b4\u00b5\u0003&\u0013\u0000\u00b5\u00b7\u0005\u000e\u0000\u0000"+
		"\u00b6\u00b8\u0003&\u0013\u0000\u00b7\u00b6\u0001\u0000\u0000\u0000\u00b7"+
		"\u00b8\u0001\u0000\u0000\u0000\u00b8\u00c4\u0001\u0000\u0000\u0000\u00b9"+
		"\u00ba\u0005\r\u0000\u0000\u00ba\u00bb\u0003&\u0013\u0000\u00bb\u00bc"+
		"\u0005\u000e\u0000\u0000\u00bc\u00bd\u0005\r\u0000\u0000\u00bd\u00be\u0003"+
		"&\u0013\u0000\u00be\u00bf\u0005\u000e\u0000\u0000\u00bf\u00c4\u0001\u0000"+
		"\u0000\u0000\u00c0\u00c4\u0005\"\u0000\u0000\u00c1\u00c4\u0005$\u0000"+
		"\u0000\u00c2\u00c4\u0005!\u0000\u0000\u00c3\u00b2\u0001\u0000\u0000\u0000"+
		"\u00c3\u00b9\u0001\u0000\u0000\u0000\u00c3\u00c0\u0001\u0000\u0000\u0000"+
		"\u00c3\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c2\u0001\u0000\u0000\u0000"+
		"\u00c4\u00cd\u0001\u0000\u0000\u0000\u00c5\u00c6\n\u0005\u0000\u0000\u00c6"+
		"\u00c7\u0007\u0004\u0000\u0000\u00c7\u00cc\u0003&\u0013\u0006\u00c8\u00c9"+
		"\n\u0004\u0000\u0000\u00c9\u00ca\u0007\u0005\u0000\u0000\u00ca\u00cc\u0003"+
		"&\u0013\u0005\u00cb\u00c5\u0001\u0000\u0000\u0000\u00cb\u00c8\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cf\u0001\u0000\u0000\u0000\u00cd\u00cb\u0001\u0000"+
		"\u0000\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000\u00ce\'\u0001\u0000\u0000"+
		"\u0000\u00cf\u00cd\u0001\u0000\u0000\u0000\u00d0\u00d1\u0007\u0006\u0000"+
		"\u0000\u00d1)\u0001\u0000\u0000\u0000\u00d2\u00d3\u0007\u0007\u0000\u0000"+
		"\u00d3+\u0001\u0000\u0000\u0000\u001579>AGJPVrz\u0080\u0089\u0091\u00a1"+
		"\u00a5\u00ac\u00b0\u00b7\u00c3\u00cb\u00cd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}