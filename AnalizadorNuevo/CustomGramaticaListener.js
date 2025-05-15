import gramaticaListener from "./generated/gramaticaListener.js";

export class CustomGramaticaListener extends gramaticaListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}