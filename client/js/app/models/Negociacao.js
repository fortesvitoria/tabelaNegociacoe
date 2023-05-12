class Negociacao {

    //define atributos da classe atraves do construtor
    //O _ antes da classe significa que objeto não pode ser modificado
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //congela os valores para não serem mais alterados
        Object.freeze(this);
    }

    //metodos acessadores somente leitura
    get volume() {
        return this._quantidade * this._valor;
    }


    get data() {
        //retorna uma data imutável, cria uma cópia, isso se chama programação defensiva
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}