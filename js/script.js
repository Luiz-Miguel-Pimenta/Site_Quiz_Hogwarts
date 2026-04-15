import { questions } from "./questions.js";

let perguntaText = document.getElementById('pergunta');
let perguntaNumero = document.getElementById('perguntaNumero');

let r1 = document.querySelector('label[for="r1"]');
let r2 = document.querySelector('label[for="r2"]');
let r3 = document.querySelector('label[for="r3"]');

let numeroAleatorio = Math.floor(Math.random() * questions.length);

const pergunta = questions[numeroAleatorio];
const opcoes = pergunta.options;

perguntaText.innerText = pergunta.textQuestion;

r1.innerText = opcoes[0].option_text;
r2.innerText = opcoes[1].option_text;
r3.innerText = opcoes[2].option_text;

perguntaNumero.innerText = `Pergunta ${numeroAleatorio + 1}`;