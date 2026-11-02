//ano atual
const anoAtual = new Date().getFullYear();

//inserir ano no footer
document.querySelector("#currentyear").textContent = anoAtual;

//capturar ultima modificacao
const ultimaModificacao = document.lastModified;

//exibir a data
document.querySelector("#lastModified").textContent = ultimaModificacao;
