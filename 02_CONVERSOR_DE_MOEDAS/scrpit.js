function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor)

    var valoremREal = valorEmDolar * 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O valor inserido em real é R$" + valoremREal

    elementoValorConvertido.innerHTML = valorConvertido
}