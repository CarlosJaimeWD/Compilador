const reservedWordsArr = ["int", "var", "bool", "float"]
const tokenArr = ["=", "!=", "=="]

function analyze () {
    var code = document.getElementById("codeInput").textContent
    //console.log(code);
    
    var arrayCode = code.split(" ")
    var lexicArr = []
    var ere = 133

    //console.log(arrayCode);

    arrayCode.forEach( function(value, i) {        
        if (reservedWordsArr.includes(value)) {
            arrayCode[i] = "<span class='reservedWord'>" + value + "</span>"
            lexicArr.push("<p class='reservedWord'>" + value + ": Palabra reservada</p>")
        } else if (tokenArr.includes(value)) {
            arrayCode[i] = "<span class='token'>" + value + "</span>"
            lexicArr.push("<p class='token'>" + value + ": Token</br>")
        } else if (value.includes('"') || value.includes("'")) {
            arrayCode[i] = "<span class='string'>" + value + "</span>"
            lexicArr.push("<p class='string'>" + value + ": String</br>")
        } else if (!isNaN(value)) {
            arrayCode[i] = "<span class='number'>" + value + "</span>"
            lexicArr.push("<p class='number'>" + value + ": Numero</br>")
        } else {
            arrayCode[i] = "<span class='identifier'>" + value + "</span>"
            lexicArr.push("<p class='identifier'>" + value + ": Identificador</br>")
        }
    });

    lexicArr.push("<p class='exit'>FIN</p>")

    //console.log(arrayCode2);

    var codeInputStr = arrayCode.toString()
    var codeInput = codeInputStr.replace(/,/g, " ")

    var codeOutputStr = lexicArr.toString()
    var codeOutput = codeOutputStr.replace(/,/g, " ")

    document.getElementById("codeInput").innerHTML = codeInput
    document.getElementById("codeOutput").innerHTML = codeOutput
    //jit compiler?
    /*var el = document.getElementById("codeInput")
    el.focus()
    document.execCommand('selectAll', false, null);
    document.getSelection().collapseToEnd();*/
}

function breakLine (event) {
    if (event.which == 13 || event.keyCode == 13) {
        var codeCounter = document.querySelector(".codeInputCounter")
        var currentCounter = document.querySelector(".codeInputCounter p:last-child").innerHTML
            
        codeCounter.innerHTML = codeCounter.innerHTML + "<p>" + (parseInt(currentCounter)+1) + "</p>"
    }
}