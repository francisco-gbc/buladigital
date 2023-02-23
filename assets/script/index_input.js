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