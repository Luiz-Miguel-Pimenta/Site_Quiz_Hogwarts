import { questions } from "./questions.js";

let perguntaText = document.getElementById("pergunta");
let perguntaNumero = document.getElementById("perguntaNumero");
let progresso = document.getElementsByClassName("progress-bar");

let r1 = document.querySelector('label[for="r1"]');
let r2 = document.querySelector('label[for="r2"]');
let r3 = document.querySelector('label[for="r3"]');

let btnAvancar = document.getElementById("avancar");

let numeroAtual = 0;
let jaUsados = [];

function gerarNumeroAleatorio() {
  if (jaUsados.length === questions.length) {
    alert("Fim do quiz!");
    jaUsados = [];
    numeroAtual = 0;
  }

  let numero;

  do {
    numero = Math.floor(Math.random() * questions.length);
  } while (jaUsados.includes(numero));

  jaUsados.push(numero);
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

btnAvancar.addEventListener("click", () => {
  carregarPergunta();
});
