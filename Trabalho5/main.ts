import readline from 'readline-sync';
import { calculadora } from "./calculadora";
import { calc } from "./calc";
import { Soma } from './soma';
import { Subtracao } from './subtracao';
import { Multiplicacao } from './multiplicacao';


console.log('\n----- CALCULADORA -----');

let operacao: string;
const num1 = readline.questionInt('Digite o primeiro nº: ');
const num2 = readline.questionInt('Digite o segundo nº: ');
let strategy: calculadora;

do {
  operacao = readline.question('Qual operação deseja? (+, - ou x): ');
  switch (operacao) {
    case '+':
      strategy = new Soma();
      break;
    case '-':
      strategy = new Subtracao();
      break;
    case 'x':
      strategy = new Multiplicacao();
      break;
    default:
      console.log('Por favor, digite uma das 3');
  }
  if (strategy !== undefined) {
    break;
  }
} while (true);

const calculadora = new calc(num1, num2, strategy);
console.log(`Resultado = ${calculadora.resultado()}`);