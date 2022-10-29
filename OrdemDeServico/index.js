import {Cliente} from './cliente.js';
import { OrdemServico } from "./OrdemServico.js";


//nome, nascimento, cpf,endereco, telefone//
const cliente1 = new Cliente("André", 25081984, 10933998844, "Rua B,Sao Jorge", "82981121510" );
const cliente2 = new Cliente("Guilherme",1309283,10938444990,"Rua C, Benedito", "82981121510" );
const cliente3 = new Cliente("José",1309283,10938444990,"Rua D, Benedito", "82981121510" );

//const clientes = [Cliente, ]

//aparelho, marca, modelo, senha, problemaRelatado, _imei, valor//
const ordemServico1 = new OrdemServico("SmartPhone","iPhone","iphone 8",12345,"tela Quebrada", 11223344,"450,00");
const ordemServico2 = new OrdemServico("Notebook","Samsung","NP-329",12345,"Nao liga", 11223344,"250,00");


console.log(`o cliente é o Sr(a) ${cliente3.nome}`);
console.log(`Você tem ${Cliente.numeroDeClientes} clientes`);
console.log(`Você tem ${OrdemServico.quantidadeDeOrdens} ordem de serviços`);

