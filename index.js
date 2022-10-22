import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// criando novos clientes
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11223344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 4433221122;


//const contaCorrenteRicardo = new ContaCorrente();
//contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.cliente = cliente1;
//contaCorrenteRicardo.depositar(500);

const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 103;



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

conta1.depositar(500);
conta2.depositar(600);
conta1.transferir(200, conta2);

//let valor = 200;
//contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta1);
console.log(conta2);
