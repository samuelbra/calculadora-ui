function escrever(texto) {
    document.querySelector(".calculadora-resultado").innerHTML += texto // Incremento
}

function limpar() {
    document.querySelector(".calculadora-resultado").innerHTML = ""
}

function calcular() {
    let resultado = eval(document.querySelector(".calculadora-resultado").innerHTML)
    document.querySelector(".calculadora-resultado").innerHTML = resultado
}