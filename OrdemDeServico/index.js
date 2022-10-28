import {Cliente} from './cliente.js';
import { OrdemServico } from "./OrdemServico.js";


//nome, nascimento, cpf,endereco, telefone//
const cliente1 = new Cliente("André", 25081984, 10933998844, "Rua B,Sao Jorge", "82981121510" );
const cliente2 = new Cliente("Guilherme",1309283,10938444990,"Rua C, Benedito", "82981121510" );
const cliente3 = new Cliente("José",1309283,10938444990,"Rua D, Benedito", "82981121510" );


//aparelho, marca, modelo, senha, problemaRelatado, _imei, valor//
const ordemServico1 = new OrdemServico("SmartPhone","iPhone","iphone 8",12345,"tela Quebrada", 11223344,"450,00");


console.log(cliente3)
console.log(Cliente.numeroDeClientes);

