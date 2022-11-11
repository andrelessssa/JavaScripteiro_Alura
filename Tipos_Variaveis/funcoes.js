function imprimetexto(texto) {
    console.log(texto);
}

imprimetexto("oi ");

function soma() {
    return 2 + 2;
}
console.log(soma());

function soma2(num1, num2) {
    return num1 + num2;
}
console.log(soma2(7, 8));

///////

function cliente(nome, tel,cpf) {
   return  `Nome: ${nome} <br> ,Tel: ${tel}/n ,CPF: ${cpf}`;
}
console.log(cliente("andre", 9999888, 11112222));

function cliente2(nome, idade) {
   // if (idade < 17) {
   //     return `${nome}  voce é de menor`
   // } else
    //    return `${nome} voce é de maior`
return idade < 17 ? `${nome} voce é de menor` : `${nome} voce é de maior`;
}

console.log(cliente2('andre', 15));