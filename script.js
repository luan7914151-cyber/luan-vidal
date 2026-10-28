const chapas = [
    { numero: 10, nome: "Inovação", propostas: "Mais atividades culturais e esportivas", votos: 0 },
    { numero: 20, nome: "Futuro", propostas: "Melhorias na biblioteca e nos laboratórios", votos: 0 },
    { numero: 30, nome: "Progresso", propostas: "Mais projetos de sustentabilidade", votos: 0 }
];

const formulario = document.getElementById("formEleitor");
const campoNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const areaVotacao = document.getElementById("area-votacao");
const listaChapas = document.getElementById("chapas");
const eleitorAtual = document.getElementById("eleitor-atual");

function renderizarChapas() {
    listaChapas.innerHTML = chapas.map((chapa) => `
        <article class="chapa">
            <div class="numero">${chapa.numero}</div>
            <div class="dados-chapa">
                <h3>${chapa.nome}</h3>
                <p>${chapa.propostas}</p>
            </div>
            <button class="botao botao-principal votar" type="button" data-numero="${chapa.numero}">
                Votar
            </button>
        </article>
    `).join("");

    document.querySelectorAll(".votar").forEach((botao) => {
        botao.addEventListener("click", () => registrarVoto(Number(botao.dataset.numero)));
    });
}

function registrarVoto(numero) {
    const chapa = chapas.find((item) => item.numero === numero);
    if (!chapa) {
        return;
    }

    chapa.votos += 1;
    mensagem.textContent = `Voto registrado para a chapa ${chapa.nome}.`;
}

function iniciarVotacao(event) {
    event.preventDefault();
    const nome = campoNome.value.trim();

    if (nome === "") {
        mensagem.textContent = "Digite seu nome para continuar.";
        campoNome.focus();
        return;
    }

    eleitorAtual.textContent = nome;
    mensagem.textContent = `Olá, ${nome}! Escolha uma chapa.`;
    areaVotacao.hidden = false;
    campoNome.disabled = true;
    formulario.querySelector("button").disabled = true;
}

formulario.addEventListener("submit", iniciarVotacao);
renderizarChapas();
