import { Sanduba } from "./sanduba"

export class FrangoAssado extends Sanduba {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Frango Assado'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 4.5;
    }

}