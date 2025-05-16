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
Desde la terminal de git bush ejecutamos el comando "npm start", y se genera el arbol correcto y la tabla de lexemas y tokens, o se encuentra el error.
![image](https://github.com/user-attachments/assets/cdec40ba-6730-45db-aca6-7e9f6c57db00)
Luego de ejecutar se obtiene el resultado:
![image](https://github.com/user-attachments/assets/631f001e-bd3d-4336-a149-729852f72051)

# Estructura del Proyecto

- `index.js`: Script principal de ejecución.
- `generated/`: Archivos generados por ANTLR4.
- `CustomGramaticaVisitor.js`: Implementación del visitor con interpretación.
- `gramatica.txt`: La gramática utilizada.
- `input/`: Ejemplos de entrada (correctos e incorrectos).

