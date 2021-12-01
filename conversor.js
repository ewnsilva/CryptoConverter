window.onload = cryptoConverter()
    cliqueBotao();

const btc = 364148.54;

var inputMoeda = document.getElementById("inputMoeda").innerHTML;
    inputMoeda = parseFloat(inputMoeda);

function obtendoResultado ()
{
    var resultado = inputMoeda / btc;
    document.getElementById("resultado").innerHTML
}
