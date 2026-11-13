const anoAtual = new Date().getFullYear();

document.querySelector("#currentyear").textContent = anoAtual;

const ultimaModificacao = document.lastModified;

document.querySelector("#lastModified").textContent = ultimaModificacao;

const menuBotao = document.querySelector("#menu");
const navegacao = document.querySelector(".navigation");

if (menuBotao && navegacao) {
    menuBotao.setAttribute("aria-expanded", "false");
    menuBotao.addEventListener("click", () => {
        const aberto = navegacao.classList.toggle("show");
        menuBotao.classList.toggle("show", aberto);
        menuBotao.setAttribute("aria-expanded", String(aberto));
    });
}
