# Analizador

Este proyecto contiene un analizador léxico y sintáctico implementado con ANTLR4 y Node.js. Traduce una gramática EBNF simple a un intérprete básico en JavaScript.

# Estructura del Proyecto

- `index.js`: Script principal de ejecución.
- `generated/`: Archivos generados por ANTLR4.
- `CustomGramaticaVisitor.js`: Implementación del visitor con interpretación.
- `gramatica.txt`: La gramática utilizada.
- `input/`: Ejemplos de entrada (correctos e incorrectos).

# Ejecución
Desde la terminal de git bush ejecutamos el comando "npm start", y se genera el arbol correcto y la tabla de lexemas y tokens, o se encuentra el error.
![image](https://github.com/user-attachments/assets/e8587c6c-1872-4bc4-a9b4-22686689a095)
