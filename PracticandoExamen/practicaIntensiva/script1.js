//Enunciado
/*Debes crear una pagina que te muestre las ofertas que tiene la agencia
de viajes. En un principio puedes seleccionar entre marruecos, cuyo
costo es de 600 y un viaje a india con un coste de 1000.
El campo de texto donde aparecera el precio del viaje inicialmente no
esta, se creara de forma dinamica.

Cuando seleccionamos la casilla extras aparecera informacion que tendremos
en un fichero en el servidor, se cargara asincronamente 
utilizar metodo $.ajax)
animacion que hara el borde del elemento sea 20px de ancho y tamaño 25pt*/

$(document).ready(function () {
    
    $("input[name='viaje']").click(function(){

        var radioBtn = $("input[name='viaje']:checked").val();
        console.log(radioBtn);

        var inputPrice = $("<input>",{
            type: "text",
            class: "priceset",
            value: (radioBtn === "marruecos")? "600€" : "1000€",
            readonly: true
        });

        $("#precio").empty().append(inputPrice);
    });
});