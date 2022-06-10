document.getElementById("converter").onclick = valorConvertido;

function valorConvertido(){
    
    var inputMoeda = document.getElementById("inputMoeda").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const btc = 364148.54;

    if(inputMoeda === ''){
        window.alert("Insira o valor a ser convertido.")
    }else {
        inputMoeda = inputMoeda / btc;
        
        const title = document.createElement("h3")
        title.innerText = "Resultado:"
        const date = document.createElement("span")
        date.classList.add("date")
        date.innerText = "Data de cotação: 02 de Novembro de 2021, 12:59 (Brasília)"
        
        const money = document.createElement("p")
        money.innerText = inputMoeda + " BTC"
        
        resultado.appendChild(title)
        resultado.appendChild(money)
        resultado.appendChild(date)
    }
}