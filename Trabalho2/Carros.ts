import { Veiculos } from "./Veiculos";

export class Carros extends Veiculos {
    

    private _numeroPortas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas);
        this._numeroPortas = numeroPortas;
    }
    
    public represent(): string {
        return `modelo: ${this.modelo} - marca: ${this.marca} - cor: ${this.cor} - rodas: ${this.numeroRodas} - portas: ${this.numeroPortas}`;
        
    }
   
   
    get numeroPortas() {
      return this._numeroPortas
    }    
    set numeroPortas(val: number) {
      this._numeroPortas = val
    }
    
    
    
}