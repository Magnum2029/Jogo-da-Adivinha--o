let numeroSecreto = Math.floor(Math.random() * 100) +1;
let tentativas = 0;
let maxTentativas = 10;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");
    const tentativasRestantes = document.getElementById("tentativas");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um numero entre 1 e 100.";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        mensagem.textContent = `Você acertou! O número secreto era ${numeroSecreto}.`;
        tentativasRestantes.textContent = "";

    } else if  (tentativas >= maxTentativas) {
        mensagem.textContent = `Você perdeu! O numero secreto era ${numeroSecreto}.`;
        tentativasRestantes.textContent = "";
        
    }
    else {
        if (palpite > numeroSecreto) {
            mensagem.textContent = "O número secreto e menor";

        }
        else {
            mensagem.textContent = "O número secreto e maior!";
        }
        tentativasRestantes.textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;
    }
}