# Analizador

Este proyecto contiene un analizador léxico y sintáctico implementado con ANTLR4 y Node.js. Traduce una gramática EBNF simple a un intérprete básico en JavaScript.

# Instalación
1. Clona este repositorio desde la terminal:
git clone https://github.com/EnzoMellimaci/52044.git
2. Cambia al directorio del proyecto:
cd 52044/AnalizadorNuevo
3. Para abrir el proyecto en VS Code escribe esto en la terminal:
code .

# Ejecución
1. Desde de la terminal ejecuta el comando: 
npm install antlr4
2. Luego de eso, ejecuta el analizador con el comando: 
npm start
3. Se genera el arbol correcto y la tabla de lexemas y tokens, o se encuentra el error.
![image](https://github.com/user-attachments/assets/0095775b-5315-4c09-91fa-30d7e732f182)
4. Luego de ejecutar se obtiene el resultado:
![image](https://github.com/user-attachments/assets/4153c89e-e3fe-47c2-8a0a-655d70ed7ece)

# Estructura del Proyecto

- `index.js`: Script principal de ejecución.
- `generated/`: Archivos generados por ANTLR4.
- `CustomGramaticaVisitor.js`: Implementación del visitor con interpretación.
- `gramatica.txt`: La gramática utilizada.
- `input/`: Ejemplos de entrada (correctos e incorrectos).

