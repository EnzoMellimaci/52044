import { Parser } from "antlr4";
import gramaticaVisitor from "./generated/gramaticaVisitor.js";

export class CustomGramaticaVisitor extends gramaticaVisitor {
    constructor() {
        super();
        this.memory = new Map(); // Memoria para almacenar variables
    }

    // Visita el nodo principal del programa
    visitPrograma(ctx) {
        return this.visitChildren(ctx); // Visita todas las funciones
    }

    // Visita una función
    visitFuncion(ctx) {
        const nombre = ctx.IDENTIFICADOR().getText();
        console.log(`\nEjecutando función: ${nombre}`);
        return this.visit(ctx.instrucciones());
    }

    // Visita el conjunto de instrucciones
    visitInstrucciones(ctx) {
        for (const instr of ctx.instruccion()) {
            this.visit(instr);
        }
    }

    // Visita una instrucción de lectura
    visitLeer(ctx) {
        const id = ctx.IDENTIFICADOR().getText();
        // Simulación: asignar un valor fijo o preguntar al usuario.
        const valor = 42; // Por ahora, asignamos un valor fijo
        this.memory.set(id, valor);
        console.log(`(Simulado) leer(${id}) => ${valor}`);
    }

    // Visita una instrucción de escritura
    visitEscribir(ctx) {
        const valor = this.visit(ctx.expresion());
        console.log(`Salida: ${valor}`);
    }

    // Visita una instrucción de asignación
    visitAsignacion(ctx) {
        const id = ctx.IDENTIFICADOR().getText();
        const valor = this.visit(ctx.expresion());
        this.memory.set(id, valor);
        return valor;
    }

    // Visita una expresión (puede ser número, cadena o variable)
    visitExpresion(ctx) {
        if (ctx.NUMERO()) {
            return parseInt(ctx.NUMERO().getText());
        } else if (ctx.CADENA()) {
            return ctx.CADENA().getText().slice(1, -1); // Quitar comillas
        } else if (ctx.IDENTIFICADOR()) {
            const id = ctx.IDENTIFICADOR().getText();
            return this.memory.get(id) ?? 0;
        }
    }
}
