// Modo escuro

const botao = document.getElementById("darkMode");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Contador

let numero = 0;

const contador = document.getElementById("contador");

const animacao = setInterval(() => {

    numero += 10;

    contador.textContent = numero;

    if(numero >= 1000){
        clearInterval(animacao);
    }

}, 20);

// Quiz

function resposta(tipo){

    const resultado =
    document.getElementById("resultado");

    if(tipo === "correta"){
        resultado.innerHTML =
        "✅ Correto! O plantio direto ajuda a preservar o solo.";
        resultado.style.color = "green";
    }

    else{
        resultado.innerHTML =
        "❌ Incorreto! O desmatamento prejudica o meio ambiente.";
        resultado.style.color = "red";
    }
}