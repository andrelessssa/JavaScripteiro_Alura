export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    cliente;
    saldo = 0 ;



    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }
    }
    get cliente() {
        return this.cliente;
    }

    constructor(agencia, cliente) {

        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;

    }



    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        else {
            this.saldo += valor;
        }
    }
    transferir(valor, conta) {

        conta.cidade = "Sao Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
