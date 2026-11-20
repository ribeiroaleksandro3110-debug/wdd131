function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) - (11.37 * Math.pow(velocidadeVento, 0.16)) + (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}
const campoTemperatura = document.querySelector("#temperatura");
const campoVento = document.querySelector("#velocidade-vento");
const campoSensacao = document.querySelector("#sensacao-termica");
if (campoTemperatura && campoVento && campoSensacao) {
    const temperatura = Number(campoTemperatura.textContent);
    const velocidadeVento = Number(campoVento.textContent);

    if (Number.isFinite(temperatura) && Number.isFinite(velocidadeVento)) {
        const resultado = calcularSensacaoTermica(
            temperatura,
            velocidadeVento
        );
        campoSensacao.textContent = resultado.toFixed(1);
    }
}

const campoAno = document.querySelector("#ano-atual");
if (campoAno) {
    campoAno.textContent = new Date().getFullYear();
}
const campoModificacao = document.querySelector("#ultima-modificacao");
if (campoModificacao) {
    const ultimaModificacao = new Date(document.lastModified);
    if (!Number.isNaN(ultimaModificacao.getTime())) {
        campoModificacao.textContent = new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(ultimaModificacao);
        campoModificacao.dateTime = ultimaModificacao.toISOString();
    } else {
        campoModificacao.textContent = "Data indisponível";
    }
}
