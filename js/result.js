import { score } from "./script";

let resultadoCasa = document.getElementById("casaResultado");
let resultadoDescricao = document.getElementById("descricaoResultado");
let resultadoImagem = document.getElementById("imagemResultado");

let maiorValor = Math.max(score.L, score.C, score.G, score.S);

const cores = {
    "Lufa-Lufa": "#ecb939",
    "Corvinal": "#0e1a40",
    "Grifinória": "#740001",
    "Sonserina": "#1a472a"
};

const descricoes = {
    
    "Lufa-Lufa": "Lufa-Lufa se destaca por acolher alunos dedicados e justos. Diferente dos outros fundadores, Helga aceitava todos os estudantes, valorizando esforço e bondade acima de habilidades específicas.",
    "Corvinal": "Corvinal foi criada para alunos que valorizam o conhecimento. Rowena Ravenclaw acreditava que a mente brilhante e a criatividade eram as maiores qualidades de um bruxo.",
    "Grifinória": "A Grifinória foi criada para acolher alunos corajosos e destemidos. Seu fundador acreditava que o mais importante era a coragem acima de tudo, defendendo que qualquer pessoa talentosa mereciaestudar em Hogwarts.",
    "Sonserina": "Sonserina ficou conhecida por valorizar alunos ambiciosos e estratégicos. Seu fundador acreditava que a magia deveria ser ensinada principalmente a bruxos de sangue puro, o que gerou conflitos com os outros fundadores."
};

const imagens = {
    "Lufa-Lufa": "../img/Lufa-Lufa.png",
    "Corvinal": "../img/Corvinal.png",
    "Grifinória": "../img/Grifinória.png",
    "Sonserina": "../img/Sonserina.png"
};



let vencedores = [];

if (score.L === maiorValor) vencedores.push("Lufa-Lufa");
if (score.C === maiorValor) vencedores.push("Corvinal");
if (score.G === maiorValor) vencedores.push("Grifinória");
if (score.S === maiorValor) vencedores.push("Sonserina");

if (vencedores.length === 1) {
    let casa = vencedores[0];

    resultadoCasa.innerText = casa;
    resultadoCasa.style.color = cores[casa];
    resultadoDescricao.innerText = descricoes[casa];
    resultadoImagem.src = imagens[casa];

} else {
    resultadoCasa.innerText = "Empate entre: " + vencedores.join(", ");
    resultadoCasa.style.color = "#000";
    resultadoDescricao.innerText = "Houve um empate entre as casas. Faça novamente e descubra sua verdadeira casa!";
    resultadoImagem.src = "../img/Empate.png";
}