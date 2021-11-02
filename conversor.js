const btc = 349767.80
var inputMoeda = prompt("Insira o valor a ser convertido:")
inputMoeda = parseFloat(inputMoeda)

var valorConvertido = inputMoeda / btc
console.log("Valor convertido:" + valorConvertido)