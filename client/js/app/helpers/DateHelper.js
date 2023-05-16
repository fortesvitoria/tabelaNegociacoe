class DateHelper {

    // a data vem como string, então é preciso transforma-la em um objeto tipo date
    //separa o array nos -, faz mapeamento e no indice 1 (mes) decrementa 1.
    //o mes começa de 0, portanto 0 é janeiro, 1 é fevereiro
    //para não usar o if, usamos item - indice % 2. 0 - 2 = 0, 2-2 = 0 (nao decrementa), 1 % 2 = 1, decrementa
    // o spread operator... o primeiro item, vai ser o primeiro parametro passado,. o segundo, será o segundo a ser passado, etc.

    dataParaTexto(data) {

        //template string `${}` para melhorar a expressão abaixo desta.
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear}`;
        // data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

    }

    textoParaData(texto) {

        //fail fast com regex - passa 4 digitos, depois 2 e mais 2
        if (!/\d{4}-\d{2}\d{2}/.test(texto)) throw new Error('Deve estar no formato YYYY-MM-DD');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }


}