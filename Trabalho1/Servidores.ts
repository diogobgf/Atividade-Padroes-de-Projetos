import { FabricaPCs } from "./FabricaPCs";

class Servidores implements FabricaPCs {
    constructor(private ram: number, private hdd: number, private cpu: number, private type: string) {}
    getRam(): number {
        return this.ram;
    }
    getHdd(): number {
        return this.hdd;
    }
    getCpu(): number {
        return this.cpu;
    }
    getType(): string {
        return this.type;
    }
    toString(): string {
        return `** SERVER **\n- RAM: ${this.getRam()}GB\n- HD: ${this.getHdd()}GB\n- CPU: ${this.getCpu()}GHz`;
    }
}
export {Servidores};