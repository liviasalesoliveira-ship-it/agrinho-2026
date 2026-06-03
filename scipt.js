const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert(
        "🌱 Um agro forte é aquele que produz alimentos e protege a natureza para o futuro!"
    );
});

const contador = document.getElementById("contador");

let numero = 0;

const animacao = setInterval(() => {
    numero += 10;

    contador.textContent = numero;

    if (numero >= 1000) {
        clearInterval(animacao);
    }
}, 20);
