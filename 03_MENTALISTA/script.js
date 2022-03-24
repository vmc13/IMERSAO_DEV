var numSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    if (chute == numSecreto) {
        resultado.innerHTML = "Você acertou!"
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número entre 0 e 10."
    } else {
        resultado.innerHTML = "Você errou, o número secreto era: " + numSecreto
    }
}