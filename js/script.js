import { questions } from "./questions.js";

let perguntaText = document.getElementById("pergunta");
let perguntaNumero = document.getElementById("perguntaNumero");
let progresso = document.getElementsByClassName("progress-bar");
let btnAvancar = document.getElementById("avancar");

let r1 = document.querySelector('label[for="r1"]');
let r2 = document.querySelector('label[for="r2"]');
let r3 = document.querySelector('label[for="r3"]');

let numeroAtual = 0;
let questoesJaUsadas = [];

export const score = {

  G: 0,
  S: 0,
  C: 0,
  L: 0,

};

function gerarNumeroAleatorio() {

  if (questoesJaUsadas.length === questions.length) {

    localStorage.setItem("score", JSON.stringify(score));
    window.location.replace("../pages/result.html");
    questoesJaUsadas  = [];
    numeroAtual = 0;
    
  }

  let numero;

  do {
    numero = Math.floor(Math.random() * questions.length);
  } 
  while (questoesJaUsadas.includes(numero));

  questoesJaUsadas.push(numero);
  return numero;
}

function carregarPergunta() {
  const numeroAleatorio = gerarNumeroAleatorio();
  const pergunta = questions[numeroAleatorio];
  const opcoes = pergunta.options;

  perguntaText.innerText = pergunta.textQuestion;

  r1.innerText = opcoes[0].option_text;
  r2.innerText = opcoes[1].option_text;
  r3.innerText = opcoes[2].option_text;

  numeroAtual++;

  perguntaNumero.innerText = `Pergunta ${numeroAtual}`;

  const porcentagem = (numeroAtual / questions.length) * 100;
  progresso[0].style.width = porcentagem + "%";
}

carregarPergunta();

function pegarResposta() {
  const inputs = document.getElementsByClassName("resposta");

  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].checked) {
      return i;
    }

  }
    return null;

}

btnAvancar.addEventListener("click", () => {
  const respostaSelecionada = pegarResposta();

  if (respostaSelecionada === null) {
    alert("Por favor, selecione uma resposta antes de avançar.");
    return;
  }

  const pergunta = questions[questoesJaUsadas[questoesJaUsadas.length - 1]];
  const pontuacao = pergunta.options[respostaSelecionada].score;

  for (let casa in pontuacao) {
    score[casa] += pontuacao[casa];
  }

  const inputs = document.getElementsByClassName("resposta");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  console.log("Resposta:", respostaSelecionada);
  console.log("Pontuação:", pontuacao);
  console.log("Score atual:", score);

  carregarPergunta();
});

let btnReiniciar = document.getElementById("ButtonReiniciar");
+-
btnReiniciar.addEventListener("click", () => {
    localStorage.removeItem("score");
    window.location.href = "../index.html";
});