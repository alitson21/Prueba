/*
Envío de correos
Debes crear un sistema que permita enviar correos electrónicos masivamente
,necesita recibir la lista de destinatarios, el asunto y cuerpo del mensaje; al finalizar el envío, debe mostrar un mensaje de confirmación si todo se ejecutó correctamente.
*/

//alert("estoy desde js");

var lista_mail = [];
var asunto_mail = [];
var cuerpo_mail = [];

var btn_enviar = document.getElementById("enviar");


btn_enviar.addEventListener("click", procesar, false);

function procesar() {
    
    lista_mail = document.getElementById("mail").value;
    asunto_mail = document.getElementById("asunto").value;
    cuerpo_mail = document.getElementById("cuerpo_mail").value;
    lista_mail.split("@");
    validar(lista_mail, asunto_mail, cuerpo_mail);
}

function validar(lista_mail, asunto_mail, cuerpo_mail) {
    if (lista_mail == '') {
        alert("Por favor las Lista de destinatario esta vacia");
    }else if (asunto_mail == '') {
        alert("El Asunto del mail esta vacio");
    } else {
        enviar_mail(lista_mail, asunto_mail, cuerpo_mail);
    }
}

function enviar_mail(lista_mail, asunto_mail, cuerpo_mail) {
    let destinatarios = "";
    console.log(lista_mail);
    destinatarios = lista_mail;
    
    alert("@MAIL ENVIADO a: \n" + destinatarios + " Con el siguiente asunto : " + asunto_mail + "\n Con el siguiente texto de mail : " + cuerpo_mail + " ");
}
