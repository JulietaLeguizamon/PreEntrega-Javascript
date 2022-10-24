let nombre = prompt("Ingresa tu nombre");
function saludar(){
   alert ("Hola" + nombre);
}
function calcular(){
    var valorFinal
    let total = parseInt(prompt("Ingresa el total de tu compra"));
    let descuento = parseInt(prompt("Ingresa el valor de tu descuento"));

    valorFinal = total - descuento;
    alert( nombre + "Tu precio con descuento es de :" + valorFinal);

}

if(nombre === ""){

}
else{
    saludar();
    calcular();
}

 