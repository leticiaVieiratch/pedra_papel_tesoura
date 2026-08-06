const botoes = document.querySelectorAll("[data-escolha]");

const resultado = document.getElementById("resultado");

const jogadas = document.getElementById("jogadas");

const placarJogador = document.getElementById("jogador");

const placarPC = document.getElementById("pc");

const reset = document.getElementById("reset");

const opcoes = ["Pedra","Papel","Tesoura"];

let pontosJogador = 0;
let pontosPC = 0;

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        jogar(botao.dataset.escolha);

    });

});

function jogar(jogadaJogador){

    const jogadaPC = opcoes[Math.floor(Math.random()*3)];

    jogadas.innerHTML=
    `Você escolheu <b>${jogadaJogador}</b> <br>
     Computador escolheu <b>${jogadaPC}</b>`;

    if(jogadaJogador===jogadaPC){

        resultado.innerText="Empate!";
        resultado.style.color="orange";
        return;

    }

    if(

        (jogadaJogador==="Pedra" && jogadaPC==="Tesoura") ||

        (jogadaJogador==="Papel" && jogadaPC==="Pedra") ||

        (jogadaJogador==="Tesoura" && jogadaPC==="Papel")

    ){

        pontosJogador++;
        placarJogador.innerText=pontosJogador;

        resultado.innerText="Você venceu!";
        resultado.style.color="#00ff9d";

    }else{

        pontosPC++;
        placarPC.innerText=pontosPC;

        resultado.innerText="Você perdeu!";
        resultado.style.color="red";

    }

}

reset.addEventListener("click",()=>{

    pontosJogador=0;
    pontosPC=0;

    placarJogador.innerText=0;
    placarPC.innerText=0;

    resultado.innerText="Escolha uma opção!";
    resultado.style.color="#00ff9d";

    jogadas.innerHTML="";

});