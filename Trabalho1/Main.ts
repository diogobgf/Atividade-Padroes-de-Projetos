import { Fabrica } from "./Fabrica";


const computadorPC = Fabrica.criarComputador(4, 1048, 2.5, "computador");
const computadorServidor = Fabrica.criarComputador(24, 2097, 5.2, "servidor");

console.log(computadorPC?.toString());
console.log(computadorServidor?.toString());

const  na = Fabrica.criarComputador(0, 0, 0, "Na");