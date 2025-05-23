grammar gramatica;

programa       : funcion+ EOF ;

funcion        : 'funcion' IDENTIFICADOR '(' parametros? ')' '{' instrucciones '}' ;

parametros     : IDENTIFICADOR (',' IDENTIFICADOR)* ;

instrucciones  : instruccion* ;

instruccion    : leer
               | escribir
               | asignacion ;

leer           : 'leer' '(' IDENTIFICADOR ')' ';' ;

escribir       : 'escribir' '(' expresion ')' ';' ;

asignacion     : IDENTIFICADOR '=' expresion ';' ;

expresion      : NUMERO
               | CADENA
               | IDENTIFICADOR ;

IDENTIFICADOR  : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMERO         : [0-9]+ ;
CADENA         : '"' (~["\r\n])* '"' ;

WS             : [ \t\r\n]+ -> skip ;
