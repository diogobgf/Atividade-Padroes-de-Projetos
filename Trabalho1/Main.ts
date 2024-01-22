import { Fabrica } from "./Fabrica";


const computadorPc = Fabrica.criarComputador(4, 1048, 2.5, "computador");
const computadorServidor = Fabrica.criarComputador(24, 2097, 5.2, "servidor");


console.log(computadorPc.toString());
console.log();
console.log(computadorServidor.toString());
console.log();

const  na = Fabrica.criarComputador(0, 0, 0, "Na");