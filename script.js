function saibaMais() {
    document.getElementById("sobre")
    .scrollIntoView({
        behavior: "smooth"
    });
}

function animarNumero(id, valorFinal) {
    let numero = 0;

    let intervalo = setInterval(() => {

        numero++;

        document.getElementById(id).innerText = numero;

        if(numero >= valorFinal){
            clearInterval(intervalo);
        }

    }, 30);
}

window.onload = () => {
    animarNumero("num1", 45);
    animarNumero("num2", 70);
    animarNumero("num3", 90);
};