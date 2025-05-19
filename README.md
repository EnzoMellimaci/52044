# Analizador

Este proyecto contiene un analizador léxico y sintáctico implementado con ANTLR4 y Node.js. Traduce una gramática EBNF simple a un intérprete básico en JavaScript.

# Instalación
1. Clona este repositorio desde la terminal:
```bash
git clone https://github.com/EnzoMellimaci/52044.git
```

2. Cambia al directorio del proyecto:
```bash
cd 52044/AnalizadorNuevo
```

3. Para abrir el proyecto en VS Code escribe esto en la terminal:
```bash
code .
```
# Ejecución
1. En caso de nunca haber ejecutado el comando npm (si ya haz ejecutado ese comando sigue por el paso 2), desde la terminal ejecuta este comando para permitir la ejecución de scripts:
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. Desde la terminal ejecuta el comando:
```bash
npm install antlr4
```

3. Luego de eso, ejecuta el analizador con el comando:
```bash
npm start
```

4. Se genera el arbol correcto y la tabla de lexemas y tokens, o se encuentra el error. Por ejemplo:
![image](https://github.com/user-attachments/assets/0095775b-5315-4c09-91fa-30d7e732f182)
5. Luego de ejecutar se obtiene el resultado:
![image](https://github.com/user-attachments/assets/4153c89e-e3fe-47c2-8a0a-655d70ed7ece)

# Estructura del Proyecto

- `index.js`: Script principal de ejecución.
- `generated/`: Archivos generados por ANTLR4.
- `CustomGramaticaVisitor.js`: Implementación del visitor con interpretación.
- `gramatica.g4`: La gramática utilizada.
- `input/`: Ejemplos de entrada (correctos e incorrectos).

