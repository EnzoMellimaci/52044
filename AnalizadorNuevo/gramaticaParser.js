// Generated from gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
const serializedATN = [4,1,14,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,40,8,2,10,2,12,
2,43,9,2,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,1,4,3,4,54,8,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,11,13,71,0,19,1,0,0,0,2,25,1,0,0,0,4,
36,1,0,0,0,6,47,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,12,61,1,0,0,0,14,67,1,
0,0,0,16,72,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,
0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,
26,27,5,11,0,0,27,29,5,2,0,0,28,30,3,4,2,0,29,28,1,0,0,0,29,30,1,0,0,0,30,
31,1,0,0,0,31,32,5,3,0,0,32,33,5,4,0,0,33,34,3,6,3,0,34,35,5,5,0,0,35,3,
1,0,0,0,36,41,5,11,0,0,37,38,5,6,0,0,38,40,5,11,0,0,39,37,1,0,0,0,40,43,
1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,46,3,8,
4,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,
49,47,1,0,0,0,50,54,3,10,5,0,51,54,3,12,6,0,52,54,3,14,7,0,53,50,1,0,0,0,
53,51,1,0,0,0,53,52,1,0,0,0,54,9,1,0,0,0,55,56,5,7,0,0,56,57,5,2,0,0,57,
58,5,11,0,0,58,59,5,3,0,0,59,60,5,8,0,0,60,11,1,0,0,0,61,62,5,9,0,0,62,63,
5,2,0,0,63,64,3,16,8,0,64,65,5,3,0,0,65,66,5,8,0,0,66,13,1,0,0,0,67,68,5,
11,0,0,68,69,5,10,0,0,69,70,3,16,8,0,70,71,5,8,0,0,71,15,1,0,0,0,72,73,7,
0,0,0,73,17,1,0,0,0,5,21,29,41,47,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'funcion'", "'('", "')'", "'{'", "'}'", 
                            "','", "'leer'", "';'", "'escribir'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "IDENTIFICADOR", "NUMERO", 
                             "CADENA", "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "instruccion", "leer", "escribir", "asignacion", 
                         "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.funcion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 23;
	        this.match(gramaticaParser.EOF);
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



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(gramaticaParser.T__0);
	        this.state = 26;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 27;
	        this.match(gramaticaParser.T__1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 28;
	            this.parametros();
	        }

	        this.state = 31;
	        this.match(gramaticaParser.T__2);
	        this.state = 32;
	        this.match(gramaticaParser.T__3);
	        this.state = 33;
	        this.instrucciones();
	        this.state = 34;
	        this.match(gramaticaParser.T__4);
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



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 37;
	            this.match(gramaticaParser.T__5);
	            this.state = 38;
	            this.match(gramaticaParser.IDENTIFICADOR);
	            this.state = 43;
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



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2688) !== 0)) {
	            this.state = 44;
	            this.instruccion();
	            this.state = 49;
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



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_instruccion);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.leer();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.escribir();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.asignacion();
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



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(gramaticaParser.T__6);
	        this.state = 56;
	        this.match(gramaticaParser.T__1);
	        this.state = 57;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 58;
	        this.match(gramaticaParser.T__2);
	        this.state = 59;
	        this.match(gramaticaParser.T__7);
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



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(gramaticaParser.T__8);
	        this.state = 62;
	        this.match(gramaticaParser.T__1);
	        this.state = 63;
	        this.expresion();
	        this.state = 64;
	        this.match(gramaticaParser.T__2);
	        this.state = 65;
	        this.match(gramaticaParser.T__7);
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramaticaParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 68;
	        this.match(gramaticaParser.T__9);
	        this.state = 69;
	        this.expresion();
	        this.state = 70;
	        this.match(gramaticaParser.T__7);
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



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gramaticaParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
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

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.T__0 = 1;
gramaticaParser.T__1 = 2;
gramaticaParser.T__2 = 3;
gramaticaParser.T__3 = 4;
gramaticaParser.T__4 = 5;
gramaticaParser.T__5 = 6;
gramaticaParser.T__6 = 7;
gramaticaParser.T__7 = 8;
gramaticaParser.T__8 = 9;
gramaticaParser.T__9 = 10;
gramaticaParser.IDENTIFICADOR = 11;
gramaticaParser.NUMERO = 12;
gramaticaParser.CADENA = 13;
gramaticaParser.WS = 14;

gramaticaParser.RULE_programa = 0;
gramaticaParser.RULE_funcion = 1;
gramaticaParser.RULE_parametros = 2;
gramaticaParser.RULE_instrucciones = 3;
gramaticaParser.RULE_instruccion = 4;
gramaticaParser.RULE_leer = 5;
gramaticaParser.RULE_escribir = 6;
gramaticaParser.RULE_asignacion = 7;
gramaticaParser.RULE_expresion = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(gramaticaParser.EOF, 0);
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_funcion;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitFuncion(this);
		}
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_parametros;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(gramaticaParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitParametros(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instruccion;
    }

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	escribir() {
	    return this.getTypedRuleContext(EscribirContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_leer;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitLeer(this);
		}
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitEscribir(this);
		}
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitAsignacion(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_expresion;
    }

	NUMERO() {
	    return this.getToken(gramaticaParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(gramaticaParser.CADENA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitExpresion(this);
		}
	}


}




gramaticaParser.ProgramaContext = ProgramaContext; 
gramaticaParser.FuncionContext = FuncionContext; 
gramaticaParser.ParametrosContext = ParametrosContext; 
gramaticaParser.InstruccionesContext = InstruccionesContext; 
gramaticaParser.InstruccionContext = InstruccionContext; 
gramaticaParser.LeerContext = LeerContext; 
gramaticaParser.EscribirContext = EscribirContext; 
gramaticaParser.AsignacionContext = AsignacionContext; 
gramaticaParser.ExpresionContext = ExpresionContext; 
