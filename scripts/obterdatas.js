const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;

const lasUpdate = document.getElementById("ultimaModificacao");
const hoje = new Date();

lasUpdate.innerHTML = `Ultima modificacao: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "short"
    }
).format(hoje)}</span>`;