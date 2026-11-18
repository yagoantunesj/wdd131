const menu = document.querySelector('#menu');
const navigation = document.querySelector('nav');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open')
    menu.classList.toggle('open')
})

const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;

const lasUpdate = document.getElementById("ultimaModificacao");
const hoje = new Date();

lasUpdate.innerHTML = `Última modificação: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "short"
    }
).format(hoje)}</span>`;

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        anunciado: "2000, 2 de abril",
        tamanho: "6.3 acres",
        acabamentoexterno: "granito Namibiano Pearl",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        anunciado: "1875, 25 de junho",
        tamanho: "27 acres",
        acabamentoexterno: "calcário oolítico de textura fina e cor creme",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        anunciado: "2010, 25 de janeiro",
        tamanho: "10.63 acres",
        acabamentoexterno: "painéis de concreto pré-moldado na cor creme",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        anunciado: "2018, 7 de outubro",
        tamanho: "5.8 acres",
        acabamentoexterno: "estuque pintado aplicado manualmente e calcário Moleanos de Portugal",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        anunciado: "1968, 15 de novembro",
        tamanho: "52 acres",
        acabamentoexterno: "concreto armado revestido com mármore branco do Alabama",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        anunciado: "1981, 1 de abril",
        tamanho: "4.5 acres",
        acabamentoexterno: "mármore peruano de cor clara",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        anunciado: "1976, 3 de abril",
        tamanho: "7 acres",
        acabamentoexterno: "pedra artificial branca com adaptações ornamentais de desenhos maias antigos",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

templos.forEach((templo) => {
    document.querySelector('#galeria').innerHTML += `
    <figure>
        <h2>${templo.nomeDoTemplo}</h2>
        <figcaption>
            <p><span>Localização: </span>${templo.localizacao}</p>
            <p><span>Dedicado: </span>${templo.consagracao}</p>
            <p><span>Tamanho: </span>${templo.tamanho}</p>
        </figcaption>
        <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy">
    </figure>
    `
})

