import { Veiculos } from "./Veiculos";

export class Bicicletas extends Veiculos {
    
    private _numeroMarchas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroMarchas: number) {
        super(modelo, marca, cor, numeroRodas);
        this._numeroMarchas = numeroMarchas;
    }

    public represent(): string {
        return `modelo: ${this.modelo} - marca: ${this.marca} - cor: ${this.cor} - rodas: ${this.numeroRodas} - marchas: ${this.numeroMarchas}`;
    }

 
    get numeroMarchas(): number {
        return this._numeroMarchas;
    }
    set numeroMarchas(val: number) {
        this._numeroMarchas = val;
    }
    

}