/* Pagar en una tienda
En una tienda de ropa se necesita registrar el precio de cada prenda seleccionada y almacenarlo en una única cuenta de cobro por cliente.*/

var prenda ="shirt blue";
var precio = 550;
var total_prendas=[];
var cuenta_total = [];


var btn_cargar = document.getElementById("cargar");

btn_cargar.addEventListener("click", inicio);

function inicio() {
    cargar_prenda(prenda, precio);
}


function factura_cobro() {
    console.log(total_prendas);
    console.log(cuenta_total);

    for (const key in prenda) {
        console.log(total_prendas[key]);
        console.log(cuenta_total[key]);
    }
}


function cargar_prenda(a, b) { 
    if (prenda != "") {
        total_prendas.push(a);
        cuenta_total.push(b);
        factura_cobro();
    }
}