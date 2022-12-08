function gerar(){
    let frutas = ["Maça", "Banana", "Uva", "Abacaxi"];
    let lista = document.getElementById('lista');
    for(var i = 0; i < frutas.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(frutas[i]));
        lista.appendChild(item);
    }
}

var visibilidade = true; 
function exibir() {
    document.getElementById("quadrados").style.display = "block";
}
function ocultar() {
    document.getElementById("quadrados").style.display = "none";
}
function ocultarExibir() { 

    if (visibilidade) {
        document.getElementById("quadrados").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("quadrados").style.display = "block";
        visibilidade = true;
    }
}