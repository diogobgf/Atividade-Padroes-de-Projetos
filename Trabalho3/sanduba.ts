//importando interface
import { ISanduba } from "./isanduba";

export class Sanduiche implements ISanduba {
    private nome: string = 'Sanduíche'
    private preco: number = 0.0;
    
    getPreco(): number {
        return this.preco;
    }
    getNome(): string {
        return this.nome;
    }

}