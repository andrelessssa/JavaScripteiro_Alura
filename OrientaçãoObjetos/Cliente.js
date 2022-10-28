export class Cliente{
    static numeroDeClientes = 0;
    nome;
    _cpf;


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }
    }



    get cpf() {
        return this._cpf;
    }
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
        Cliente.numeroDeClientes += 1;
    }

}