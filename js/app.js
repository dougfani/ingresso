// recuperar quantidade de ingresoss disponíveis
    let qtdTotalInferior = document.getElementById('qtd-inferior');
    let qtdTotalInferiorNumero = parseInt(qtdTotalInferior.textContent);
    let qtdTotalSuperior = document.getElementById('qtd-superior');
    let qtdTotalSuperiorNumero = parseInt(qtdTotalSuperior.textContent);
    let qtdTotalPista = document.getElementById('qtd-pista');
    let qtdTotalPistaNumero = parseInt(qtdTotalPista.textContent);

function comprar() {
    // recuperar dados do ingresso
    tipoIngresso = document.getElementById('tipo-ingresso').value;
    quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade == '' || quantidade == 0) {
        alert('Escolha a quantidade de ingressos.');
        return;
    } else if (tipoIngresso == '') {
        alert('Escolha o tipo de ingresso.');
    }

    if (tipoIngresso == 'inferior') {
        if (qtdTotalInferiorNumero == 0) {
            alert('Ingressos para Cadeira Inferior esgotados!');
            return;
        } else if (qtdTotalInferiorNumero < quantidade) {
            alert('Quantidade solicitada indisponível!');
            return;
        } else {
            qtdTotalInferiorNumero = qtdTotalInferiorNumero - quantidade;
            qtdTotalInferior.textContent = qtdTotalInferiorNumero;
        }
    } else if (tipoIngresso == 'superior') {
        if (qtdTotalSuperiorNumero == 0) {
            alert('Ingressos para Cadeira Superior esgotados!');
            return;
        } else if (qtdTotalSuperiorNumero < quantidade) {
            alert('Quantidade solicitada indisponível!');
            return;
        } else {
            qtdTotalSuperiorNumero = qtdTotalSuperiorNumero - quantidade;
            qtdTotalSuperior.textContent = qtdTotalSuperiorNumero;
        }
    } else if (tipoIngresso == 'pista') {
        if (qtdTotalPistaNumero == 0) {
            alert('Ingressos para Pista esgotados!');
            return;
        } else if (qtdTotalPistaNumero < quantidade) {
            alert('Quantidade solicitada indisponível!');
            return;
        } else {
            qtdTotalPistaNumero = qtdTotalPistaNumero - quantidade;
            qtdTotalPista.textContent = qtdTotalPistaNumero;
        }
    }
    document.getElementById('qtd').value = 0;
}