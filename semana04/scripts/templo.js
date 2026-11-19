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
        consagracao: [2005, 7, 7],
        consagracaoStr: "7 de agosto de 2005",
        anunciado: "2000, 2 de abril",
        tamanho: "6.3 acres",
        acabamentoexterno: "granito Namibiano Pearl",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: [1888, 4, 21],
        consagracaoStr: "21 de maio de 1888",
        anunciado: "1875, 25 de junho",
        tamanho: "27 acres",
        acabamentoexterno: "calcário oolítico de textura fina e cor creme",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: [2015, 5, 7],
        consagracaoStr: "7 de junho de 2015",
        anunciado: "2010, 25 de janeiro",
        tamanho: "10.63 acres",
        acabamentoexterno: "painéis de concreto pré-moldado na cor creme",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: [2022, 4, 22],
        consagracaoStr: "22 de maio de 2022",
        anunciado: "2018, 7 de outubro",
        tamanho: "5.8 acres",
        acabamentoexterno: "estuque pintado aplicado manualmente e calcário Moleanos de Portugal",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: [1974, 10, 19],
        consagracaoStr: "19 de novembro de 1974",
        anunciado: "1968, 15 de novembro",
        tamanho: "52 acres",
        acabamentoexterno: "concreto armado revestido com mármore branco do Alabama",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: [1986, 0, 10],
        consagracaoStr: "10 de janeiro de 1986",
        anunciado: "1981, 1 de abril",
        tamanho: "4.5 acres",
        acabamentoexterno: "mármore peruano de cor clara",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: [1983, 11, 2],
        consagracaoStr: "2 de dezembro de 1983",
        anunciado: "1976, 3 de abril",
        tamanho: "7 acres",
        acabamentoexterno: "pedra artificial branca com adaptações ornamentais de desenhos maias antigos",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');

        element.classList.add("active");
    })
}

function createTempleCard(templos) {
    document.querySelector('#galeria').innerHTML = '';

    templos.forEach((templo) => {
        document.querySelector('#galeria').innerHTML += `
    <figure>
        <h2>${templo.nomeDoTemplo}</h2>
        <figcaption>
            <p><span>Localização: </span>${templo.localizacao}</p>
            <p><span>Dedicado: </span>${templo.consagracaoStr}</p>
            <p><span>Tamanho: </span>${templo.tamanho}</p>
        </figcaption>
        <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy">
    </figure>
    `
    })
}

document.querySelector('#all').addEventListener('click', () => {
    toggleActive(document.querySelector('#all'));
    createTempleCard(templos);
})

document.querySelector('#old').addEventListener('click', () => {
    toggleActive(document.querySelector('#old'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) < new Date(1950, 1, 1)));
})

document.querySelector('#new').addEventListener('click', () => {
    toggleActive(document.querySelector('#new'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) > new Date(1950, 1, 1)));
})

document.querySelector('#large').addEventListener('click', () => {
    toggleActive(document.querySelector('#large'));
    createTempleCard(templos.filter(temple => temple.area > 50000));
})

document.querySelector('#small').addEventListener('click', () => {
    toggleActive(document.querySelector('#small'));
    createTempleCard(templos.filter(temple => temple.area < 50000));
})



