const anoAtual = new Date().getFullYear();

document.querySelector("#currentyear").textContent = anoAtual;

const ultimaModificacao = document.lastModified;

document.querySelector("#lastModified").textContent = ultimaModificacao;
