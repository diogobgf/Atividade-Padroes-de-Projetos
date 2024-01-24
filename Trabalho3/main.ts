import { Bacon } from "./sanduiche_bacon";
import { Carne } from "./sanduiche_carne";
import { FrangoAssado } from "./sanduiche_frango";
import { Pepperoni } from "./sanduiche_pepperoni";
import { QueijoMussarelaRalado } from "./sanduiche_queijoMussarela-Ralado";
import { Sanduiche } from "./sanduiche";

console.log(`
Cardápio:
- Sanduiche de carne: $2,50
- Sanduiche de frango assado: $4,50
--- adicional de bacon: $2,10
--- adicional de pepperoni: $0,99
--- adicional de queijo mussarela ralado: $2,89
`);

const sanduiche = new Sanduiche();


const deCarneBaconQueijo = new QueijoMussarelaRalado(new Bacon(new Carne(sanduiche)));
console.log(`${deCarneBaconQueijo.getNome()} custa ${deCarneBaconQueijo.getPreco()}`);


const deFrangoPepperoniQueijo = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado(sanduiche)));
console.log(`${deFrangoPepperoniQueijo.getNome()} custa ${deFrangoPepperoniQueijo.getPreco()}`);

console.log()