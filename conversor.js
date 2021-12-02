document.getElementById("converter").onclick = valorConvertido;

function valorConvertido(){
    
    var inputMoeda = document.getElementById("inputMoeda").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const btc = 364148.54;

    if(isNaN(inputMoeda)){
        window.alert("Somente números.") 
        }else if(inputMoeda === ''){
        window.alert("Insira o valor a ser convertido.")
        }
    inputMoeda = parseFloat(inputMoeda) / btc;
    resultado.innerHTML = inputMoeda + " BTC"
    return
    }