import { Computadores } from "./Computadores";
import { Servidores } from "./Servidores";

// Factory Method
class Fabrica {
    static criarComputador(ram: number, hdd: number, cpu: number, type: string) {
        try {
            if (type === "computador") {
                return new Computadores(ram, hdd, cpu, type);
            } else if (type === "servidor") {
                return new Servidores(ram, hdd, cpu, type);
            } else {
                throw new Error('Tipo de computador invalido!')
            }
        } catch (e) {
            console.log('ERRO:', e.message);
            return null;
        }
    }
}
export {Fabrica};