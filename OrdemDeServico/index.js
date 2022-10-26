import { Cliente } from "./Cliente";
import { OrdemServico } from "./OrdemServico";


//nome, cpf, endereco, telefone//
const cliente1 = new Cliente("André", 11223333444, "Rua B,Sao Jorge", 82981121510);
//const cliente2 = new Cliente("AndrÉ",11223333444,"Rua B,Sao Jorge",82981121510);



//aparelho, marca, modelo, senha, problemaRelatado, _imei, valor//
const ordemServico1 = new OrdemServico("SmartPhone","iPhone","iphone 8",12345,"tela Quebrada", 11223344,"450,00");



console.log(cliente1);
