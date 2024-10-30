let numerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let count = 1;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


exibirMensagemInicial();


function verificarChute(){
    let resp = document.querySelector('input').value;
    if (resp == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = count > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela('p', `Você descobriu o número secreto, em ${count} ${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else {
        if(resp > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        count++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*limiteNumero+1);
    let quantNumerosSorteados = numerosSorteados.length;
    if(quantNumerosSorteados == limiteNumero){
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroEscolhido)){
        return numeroEscolhido
    } else {
        numerosSorteados.push(numeroEscolhido);
        //console.log(numerosSorteados);
        return numeroEscolhido
    }
}

function limparCampo(){
    resp = document.querySelector('input');
    resp.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    count = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




