export class SecuritySystem {

    
    private static instance: SecuritySystem;
    private senhaBaseSecreta: string;

    
    private constructor(senhaCriada: string) {
        this.senhaBaseSecreta = senhaCriada;
    }


    public static getInstance(senhaCriada: string): SecuritySystem {
        if (this.instance == null) {
            this.instance = new SecuritySystem (senhaCriada);
        }
        return this.instance;
    }
    public mostrarSenha(): void {
        console.log(`> Mostrar senha da base: ${this.senhaBaseSecreta}`);
    }

    
    public acessoBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log(`A senha digitada foi ${senhaInserida}. Acesso PERMITIDO.`);
        } else {
            console.log(`A senha digitada foi ${senhaInserida}. Acesso NEGADO. (a senha correta é ${this.senhaBaseSecreta})`);
        }
    }

}