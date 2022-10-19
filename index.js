import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11223344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 4433221122;



const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;


contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.sacar(50);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.cliente = cliente2;

contaCorrenteAlice.depositar(400);
contaCorrenteAlice.sacar(100);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

