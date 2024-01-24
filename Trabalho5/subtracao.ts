import { calculadora } from "./calculadora";

export class Subtracao implements calculadora {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}