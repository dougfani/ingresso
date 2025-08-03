function comprar() {
    tipoIngresso = document.getElementById('tipo-ingresso').value;
    quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade == '' || quantidade == 0) {
        alert('Escolha a quantidade de ingressos.');
        return;
    } else if (tipoIngresso == '') {
        alert('Escolha o tipo de ingresso.');
    }

    if (tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarPista(quantidade);
    }
    document.getElementById('qtd').value = 0;
}

function comprarInferior(quantidade) {
    let qtdTotalInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdTotalInferior) {
        alert('Quantidade indisponível para tipo cadeira inferior!');
        return;
    } else {
        qtdTotalInferior = qtdTotalInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdTotalInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let qtdTotalSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdTotalSuperior) {
        alert('Quantidade indisponível para tipo cadeira superior!');
        return;
    } else {
        qtdTotalSuperior = qtdTotalSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdTotalSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarPista(quantidade) {
    let qtdTotalPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdTotalPista) {
        alert('Quantidade indisponível para tipo pista!');
        return;
    } else {
        qtdTotalPista = qtdTotalPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdTotalPista;
        alert('Compra realizada com sucesso!');
    }
}