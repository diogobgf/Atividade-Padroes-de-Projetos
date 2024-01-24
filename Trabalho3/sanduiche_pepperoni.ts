import { Sanduba } from "./sanduba";

export class Pepperoni extends Sanduba {
    getNome(): string {
        return this.sanduiche.getNome() + ', pepperoni';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 0.99;
    }
}