export class Cliente{
    
    static numeroDeClientes = 0;
    nome;
    nascimento;
    _cpf;
    endereco;
    telefone;
    

    get _cpf() {
        return this._cpf;
        
    } 
    constructor(nome, nascimento, cpf,endereco, telefone ) {
        this.nome = nome;
        this.nascimento = nascimento;
        this._cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        Cliente.numeroDeClientes += 1;
        
    }

}