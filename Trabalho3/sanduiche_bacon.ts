import { Sanduba } from "./sanduba";

export class Bacon extends Sanduba {
    getNome(): string {
        return this.sanduiche.getNome() + ', bacon';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 2.1;
    }
}