import { Bicicletas } from "./Bicicletas";
import { Carros } from "./Carros";
import { Veiculos } from "./Veiculos";

class Fabrica {

    
    static criarArrayComSeisVeiculos(): Veiculos[] {
        const carro = new Carros('Sedan', 'Toyota', 'Azul', 4, 4);
        const bicicleta = new Bicicletas('Mountain Bike', 'Treck', 'Verde', 2, 21);

        const veiculos = [carro.clone(), carro.clone(), carro.clone(), bicicleta.clone(), bicicleta.clone(), bicicleta.clone()];

        return veiculos;
    }

    
    static clonesDeVeiculo(arrayASerClonado: Veiculos[]): Veiculos[] {
        return arrayASerClonado.map((elemento) => elemento.clone());
    }

    
    static imprimirNaTela(arrayASerImpresso: Veiculos[]) {
        arrayASerImpresso.forEach((element) => console.log(element.represent()));
    }
  
    
}

// programa
const veiculos = Fabrica.criarArrayComSeisVeiculos();

veiculos[1].cor = 'Preto';
veiculos[2].cor = 'Azul';
veiculos[3].cor = 'Cinza';
veiculos[4].cor = 'Vermelho';
veiculos[5].cor = 'Prata';

const veiculosClonados = Fabrica.clonesDeVeiculo(veiculos);

console.log('VEICULOS NO PRIMEIRO ARRAY');
Fabrica.imprimirNaTela(veiculos);

console.log('\nVEICULOS NO ARRAY CLONADO');
Fabrica.imprimirNaTela(veiculosClonados);