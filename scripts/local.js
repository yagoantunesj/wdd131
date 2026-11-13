const lasUpdate = document.getElementById("ultimaModificacao");
const hoje = new Date();

let temperatura = 10;
let vento = 16;

document.querySelector('#area span').textContent = '209,029 km²'
document.querySelector('#populacao span').textContent = '28.707'
document.querySelector('#moeda span').textContent = 'BRL'
document.querySelector('#fuso span').textContent = 'UTC-3'
document.querySelector('#ccode span').textContent = '+55'
document.querySelector('#dominio span').textContent = '.br'
document.querySelector('#temperatura span').textContent = `${temperatura} °C`;
document.querySelector('#condicao span').textContent = 'Sol com algumas nuvens';
document.querySelector('#vento span').textContent = `Nordeste – ${vento} km/h`;
document.getElementById("anoatual").textContent = hoje.getFullYear();;


lasUpdate.innerHTML = `Ultima modificacao: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "short"
    }
).format(hoje)}</span>`;

function calcularSensacaoTermica(temperatura, vento, unidade) {
    return unidade === 'C'
        ? 13.12 + (0.6215 * temperatura) - (11.37 * vento ** 0.16) + (0.3965 * temperatura * vento ** 0.16)
        : 35.74 + (0.6215 * temperatura) - (35.75 * vento ** 0.16) + (0.4275 * temperatura * vento ** 0.16);
}

if (temperatura <= 10 && vento > 4.8) {
    const sensacao = calcularSensacaoTermica(temperatura, vento, 'C');

    document.querySelector('#sensacaoter span').textContent =
        `${sensacao.toFixed(1)} °C`;
} else {
    document.querySelector('#sensacaoter span').textContent = 'N/A'
}