/* El reto es escribir una función en JavaScript que muestre cuál es el segundo número más grande (en valor) dentro de un array de números.

Lo primero que debemos hacer ante un ejercicio de lógica es planear bien cómo lo vamos a ordenar, de esta forma nuestra solución en código será eficaz y no solo efectiva.*/

var array = [28, 27, 31, 33, 44];

valor_max(array);

function valor_max(array) {
    array.sort();
    console.log(array);
    var re_array = array.reverse();
    console.log(re_array[array.length - 1]);
    
    if (re_array[1] < re_array[2]) {
            alert("El segundo valor mas alto de la cadena es : " + re_array[2]);
        } else {
            alert("El segundo valor mas alto de la cadena es : " + re_array[1]);
        }   
}