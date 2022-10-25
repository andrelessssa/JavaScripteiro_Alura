import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// criando novos clientes
const cliente1 = new Cliente("Ricardo", 112233445566);
const cliente2 = new Cliente("Alice", 4433221122);
const cliente3 = new Cliente("André", 1122334477);



// criando novas CONTAS 
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);
const conta3 = new ContaCorrente(1003, cliente3);


conta1.depositar(500);



console.log(conta1);
console.log(ContaCorrente.numeroDeContas );
