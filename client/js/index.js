var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();
    //varre cada item do array, pega o valor e cria uma tr automaticamente
    var tr = document.createElement('tr');

    //cria varias tds das trs
    campos.forEach(function (campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    //incluir tr na tabela, porem tem uma coluna que não faz parte do array de campos, que é volume. 
    //cria outra variavel - volume é quantidade * valor
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    //incluir tr na tbody
    tbody.appendChild(tr);

    //limpa campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //campo da data ganha foco
    campos[0].focus;

});