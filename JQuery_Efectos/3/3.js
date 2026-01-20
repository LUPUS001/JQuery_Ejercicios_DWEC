$(document).ready(function(){
    function moverCubo() {
    $("#cubo")
        .animate({left: "+=10px"}, 0.001) // Derecha
        .animate({top: "+=10px"}, 0.001)  // Abajo
        .animate({left: "-=10px"}, 0.001) // Izquierda
        .animate({top: "-=10px"}, 0.001, function(){
            // (Opcional) Llamar a la función de nuevo para que sea infinito
            moverCubo(); 
        }); // Arriba
    }

    $("#btn-start").click(function(){
        moverCubo();
    });

    $("#btn-stop").click(function(){
        // stop(true) limpia la cola de animaciones pendientes y detiene la actual
        $("#cubo").stop(true);
    });
})