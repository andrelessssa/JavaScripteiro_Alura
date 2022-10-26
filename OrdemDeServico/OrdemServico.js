export class OrdemServico{
    aparelho;
    marca;
    modelo;
    senha;
    problemaRelatado;
    _imei;
    valor;
    

    get _imei() {
        return this._imei;
    }  
    
    constructor(aparelho, marca, modelo, senha, problemaRelatado,_imei,valor){      
        this.aparelho = aparelho;
        this.marca = marca;
        this.modelo = modelo;
        this.senha = senha;
        this.problemaRelatado = problemaRelatado;
        this.valor = valor;
        this._imei = _imei;

    }



}