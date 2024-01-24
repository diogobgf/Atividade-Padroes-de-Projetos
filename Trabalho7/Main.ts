import { SecuritySystem } from "./SecuritySystem";


console.clear();
const base = SecuritySystem.getInstance("senha");


console.log('senha correta:');
base.acessoBaseSecreta("senha");
console.log('senha incorreta:');
base.acessoBaseSecreta("senha_incorreta Acesso Negado!!");


const outraBasePrincipal = SecuritySystem.getInstance("Nova_senha");


console.log('Nova Senha:');
outraBasePrincipal.acessoBaseSecreta("Nova_senha");
console.log('Senha Principal:');
outraBasePrincipal.acessoBaseSecreta("senha");


console.log('Base Principal Senha Principal.');
console.log('Sistema Singleton.');