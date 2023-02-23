//Show hide -- Plus e Minus

var btn1 = document.querySelector('#show_hide_1');
var container1 = document.querySelector('.info_hide_1');

var btn2 = document.querySelector('#show_hide_2');
var container2 = document.querySelector('.info_hide_2');

var btn3 = document.querySelector('#show_hide_3');
var container3 = document.querySelector('.info_hide_3');

const mode_plus_1 = document.getElementById('plus_1');

const mode_plus_2 = document.getElementById('plus_2');

const mode_plus_3 = document.getElementById('plus_3');

btn1.addEventListener('click', function () {

    if (container1.style.display === 'block') {
        container1.style.display = 'none';

        mode_plus_1.classList.remove('fa-circle-minus');
        mode_plus_1.classList.add('fa-circle-plus');
    }

    else {
        container1.style.display = 'block';


        mode_plus_1.classList.remove('fa-circle-plus');
        mode_plus_1.classList.add('fa-circle-minus');
    }

});

btn2.addEventListener('click', function () {

    if (container2.style.display === 'block') {
        container2.style.display = 'none';

        mode_plus_2.classList.remove('fa-circle-minus');
        mode_plus_2.classList.add('fa-circle-plus');
    }
    else {
        container2.style.display = 'block';

        mode_plus_2.classList.remove('fa-circle-plus');
        mode_plus_2.classList.add('fa-circle-minus');
    }

});

btn3.addEventListener('click', function () {

    if (container3.style.display === 'block') {
        container3.style.display = 'none';

        mode_plus_3.classList.remove('fa-circle-minus');
        mode_plus_3.classList.add('fa-circle-plus');
    }
    else {
        container3.style.display = 'block';

        mode_plus_3.classList.remove('fa-circle-plus');
        mode_plus_3.classList.add('fa-circle-minus');
    }

});


//Tema escuro

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('corpo');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-lightbulb');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-lightbulb');
    form.classList.remove('dark');
});

//Trocar Prati/nav para branco

var imgAtual = "../../assets/img/logo/logo_prati_branco.svg";
var imgAnterior = "../../assets/img/logo/logo_prati.svg";

function trocar() {
    document.getElementById("logo").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
};


//Redirecionar valor do input

function armazenarValor() {
    var valor = document.getElementById("valor").value;
    localStorage.setItem("valor", valor);

    window.location = "../../medicamentos.html";
}

//Enter = Button

var input1 = document.getElementById("valor");
var button1 = document.getElementById("pesquisar");

input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button1.click();
    }
});