let resultado = []; 
let index = 0;
const resposta = window.document.getElementById('resposta');

function adicionarNoResultado() {
    if (index > 0) {
        index = 0;
        resultado = [];
        resposta.innerHTML = "";
        let adicionar = window.document.getElementById('numero-da-sequencia');
        let add = Number(adicionar.value);
        resultado.push(add);
        adicionar.focus();
        adicionar.value = null;
        console.log(add, typeof add);
    } else {
        index = 0;
        let adicionar = window.document.getElementById('numero-da-sequencia');
        let add = Number(adicionar.value);
        resultado.push(add);
        adicionar.focus();
        adicionar.value = null;
        console.log(add, typeof add);
    }
    // resgate de variáveis via DOM
}

// Usando ForEach

function callBack (valor, indice) {
    resposta.innerHTML += `<strong>${indice + 1}.</strong> ${valor} <br>`;
}

function revelarSequencia() {
    // resposta.innerHTML = `A sequência até aqui é <strong>${resultado}</strong>!`;
    resultado.sort(function(a, b) {return a-b});
    resultado.forEach(callBack);
    index++;
    console.log(resultado.sort());
}
