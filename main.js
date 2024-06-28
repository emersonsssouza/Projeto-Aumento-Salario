function openPage() {
    window.open('indexResult.html', '_self');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}
function desvia(valueDesviar) {
    let button = valueDesviar;
    button.style.position = 'absolute';
    button.style.bottom = geraPosicao(10, 90);
    button.style.left = geraPosicao(10, 90);
}
//Contadores;
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");
const cont4 = document.getElementById("cont4");
const cont5 = document.getElementById("cont5");

let moral = 0;
const intervalId = setInterval(() => {
    moral++;
    cont1.innerHTML = moral + " %";
    if (moral === 12) {
        clearInterval(intervalId);
        moral.innerHTML = `${moral} %`
        cont1.style.color = 'blue';
    }
}, 100)

let disposicao = 0;
const intervalId2 = setInterval(() => {
    disposicao++;
    cont2.innerHTML = disposicao + " %";
    if (disposicao === 30) {
        clearInterval(intervalId2);
        disposicao.innerHTML = `${disposicao} %`;
        cont2.style.color = 'blue';
    }
}, 100)

let energia = 0;
const intervalId3 = setInterval(() => {
    energia++;
    cont3.innerHTML = energia + " %";
    if (energia === 25) {
        clearInterval(intervalId3);
        energia.innerHTML = `${energia} %`;
        cont3.style.color = 'blue';
    }
}, 100)

let animation = 0;
const intervalId4 = setInterval(() => {
    animation++;
    cont4.innerHTML = animation + " %";
    if (animation === 7) {
        clearInterval(intervalId4);
        animation.innerHTML = `${animation} %`;
        cont4.style.color = 'blue';
    }
}, 100)

let demissao = 0;
const intervalId5 = setInterval(() => {
    demissao--;
    cont5.innerHTML = demissao + " %";
    if (demissao === -10) {
        clearInterval(intervalId5);
        demissao.innerHTML = `${demissao} %`;
        cont5.style.color = 'red';
    }
}, 500)

