import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import gramaticaLexer from "./generated/gramaticaLexer.js";
import gramaticaParser from "./generated/gramaticaParser.js";
import { CustomGramaticaListener } from "./CustomGramaticaListener.js";
import { CustomGramaticaVisitor } from "./CustomGramaticaVisitor.js";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new gramaticaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new gramaticaParser(tokenStream);
    let tree = parser.programa();  // Según tu gramática, la regla inicial es 'programa'

    const chars = new antlr4.InputStream(input);
    const lexer2 = new gramaticaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer2);

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");

        // Mostrar tokens
        tokenStream.fill();
        for (const token of tokenStream.tokens) {
            if (token.type !== -1) {
                const tokenName = lexer2.symbolicNames[token.type];
                console.log(`Token: ${tokenName}, Lexema: ${token.text}`);
            }
        }
        console.log(`Árbol de derivación: ${tree.toStringTree(parser.ruleNames)}`);

        const visitor = new CustomGramaticaVisitor();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
main();
