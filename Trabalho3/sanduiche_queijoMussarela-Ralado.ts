import { Sanduba } from "./sanduba";

export class QueijoMussarelaRalado extends Sanduba {
    getNome(): string {
        return this.sanduiche.getNome() + ', queijo mussarela ralado';
    }
    getPreco(): number {
        return this.sanduiche.getPreco() + 2.89;
    }
}