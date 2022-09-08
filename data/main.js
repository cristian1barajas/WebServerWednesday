var contador = 0;
var myButton = document.getElementById("mi_boton");
var myText = document.getElementById("mi_numero");

myButton.onclick = function() {
    contador++;
    myText.innerHTML = contador;
}