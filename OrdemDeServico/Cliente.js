export class Cliente{
    nome;
    nascimento;
    endereco;
    telefone;
    _cpf;

    get _cpf() {
        return this._cpf;
        
    } 
    constructor(nome, cpf, endereco, telefone) {
        this.nome = nome;
        this._cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    
    }



}