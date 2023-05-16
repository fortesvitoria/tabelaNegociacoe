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

        let helper = new DateHelper();

        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        )

        console.log(negociacao);
    }

}