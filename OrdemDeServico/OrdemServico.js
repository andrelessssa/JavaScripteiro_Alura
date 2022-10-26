export class OrdemServico{
    aparelho;
    marca;
    modelo;
    senha;
    problemaRelatado;
    _imei;
    valor;
    

    get imei() {
        return this._imei;
    }  
    
    constructor(aparelho, marca, modelo, senha, problemaRelatado,_imei,valor){      
        this.aparelho = aparelho;
        this.marca = marca;
        this.modelo = modelo;
        this.senha = senha;
        this.problemaRelatado = problemaRelatado;
        this._imei = imei;
        this.valor = valor;
        

    }



}