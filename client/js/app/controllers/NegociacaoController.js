class NegociacaoController {

    //cria constructor para que não seja necessário buscar no dom a cada inserção de negociações
    // O _ serve para que somente o controller possa alterar os dados
    constructor() {
        //guarda o document.querySelector dentro do alias $, o bind é para manter o document no querySelector
        let $ = document.querySelector.bind(document);

        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        // a data vem como string, então é preciso transforma-la em um objeto tipo date
        let negociacao = new Negociacao(
            this._inputQuantidade.value,
            this._inputData.value,
            this._inputValor.value,
        )

        console.log(negociacao);

    }

}