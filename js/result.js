class Casa {
    constructor(nome, cor, descricao, imagem) {
        this.nome = nome;
        this.cor = cor;
        this.descricao = descricao;
        this.imagem = imagem;
    };
};

const casas = {
    "Lufa-Lufa": new Casa(
        "Lufa-Lufa", 
        "#ecb939", 
        "Lufa-Lufa se destaca por acolher alunos dedicados e justos. Diferente dos outros fundadores, Helga aceitava todos os estudantes, valorizando esforço e bondade acima de habilidades específicas.", 
        "../img/Lufa-lufa.png"
    ),
    "Corvinal": new Casa(
        "Corvinal", 
        "#0e1a40", 
        "Corvinal foi criada para alunos que valorizam o conhecimento. Rowena Ravenclaw acreditava que a mente brilhante e a criatividade eram as maiores qualidades de um bruxo.", 
        "../img/Corvinal.png"
    ),
    "Grifinória": new Casa(
        "Grifinória", 
        "#740001", 
        "A Grifinória foi criada para acolher alunos corajosos e destemidos. Seu fundador acreditava que o mais importante era a coragem acima de tudo, defendendo que qualquer pessoa talentosa merecia estudar em Hogwarts.", 
        "../img/Grifinoria.png"
    ),
    "Sonserina": new Casa(
        "Sonserina", 
        "#1a472a", 
        "Sonserina ficou conhecida por valorizar alunos ambiciosos e estratégicos. Seu fundador acreditava que a magia deveria ser ensinada principalmente a bruxos de sangue puro, o que gerou conflitos com os outros fundadores.", 
        "../img/Sonserina.png"
    )
};

let score = JSON.parse(localStorage.getItem("score")) || {L:0, C:0, G:0, S:0};

let resultadoCasa = document.getElementById("casaResultado");
let resultadoDescricao = document.getElementById("descricaoResultado");
let resultadoImagem = document.getElementById("imagemResultado");
let btnReiniciar = document.getElementById("buttonReiniciar");

const CasaVencedor = () => {
    const maiorValor = Math.max(score.L, score.C, score.G, score.S);
    const possíveisVencedores = [];

    if (score.L === maiorValor) {
        possíveisVencedores.push("Lufa-Lufa");
    }
    if (score.C === maiorValor) { 
        possíveisVencedores.push("Corvinal");
    }
    if (score.G === maiorValor) {
        possíveisVencedores.push("Grifinória");
    }
    if (score.S === maiorValor) {
        possíveisVencedores.push("Sonserina");
    }

    return possíveisVencedores[Math.floor(Math.random() * possíveisVencedores.length)];
};

const casaGanhadora = CasaVencedor();

const { cor, descricao, imagem } = casas[casaGanhadora];

resultadoCasa.innerText = casaGanhadora;
resultadoCasa.style.color = cor;
resultadoDescricao.innerText = descricao;
resultadoImagem.src = imagem;
resultadoImagem.alt = `Brasão da casa ${casaGanhadora}`;

console.log(score);

btnReiniciar.addEventListener("click", () => {
    localStorage.removeItem("score");
    window.location.href = "../index.html";
});