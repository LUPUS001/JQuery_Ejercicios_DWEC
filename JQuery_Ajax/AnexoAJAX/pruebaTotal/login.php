<?php
    // Recibimos los datos
    $u = $_GET['usuario']; // Usamos GET porque el ejercicio pide $.get
    $c = $_GET['clave'];

    // Verificamos (Pepe / hola)
    if($u == "pepe" && $c == "hola"){
        echo "usuario correcto";
    } else {
        echo "usuario incorrecto";
    }
?>