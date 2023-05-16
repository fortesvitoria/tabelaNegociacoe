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
        //separa o array nos -, faz mapeamento e no indice 1 (mes) decrementa 1.
        //o mes começa de 0, portanto 0 é janeiro, 1 é fevereiro
        //para não usar o if, usamos item - indice % 2. 0 - 2 = 0, 2-2 = 0 (nao decrementa), 1 % 2 = 1, decrementa
        let data = new Date(
            ...this._inputData.value.split('-').map((item, indice) => item - indice % 2)
        );
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        )

        console.log(negociacao);

    }

}