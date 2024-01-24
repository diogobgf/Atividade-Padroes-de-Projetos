import { Sanduba } from "./sanduba"

export class Carne extends Sanduba {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Carne'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 2.5;
    }

}