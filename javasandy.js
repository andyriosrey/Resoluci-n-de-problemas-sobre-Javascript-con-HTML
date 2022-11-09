function convertirgradosCentigradosAGradosFarenheit() {

    var celsio = document.getElementById('celsios').value;

    var FAREN = (celsio * 1.8) + 32;
    document.getElementById('farenheit').innerHTML = FAREN;
    document.getElementById('transf')

    if (FAREN >= 212){

        transf.innerHTML = 
        "<li> Punto de ebullición del agua </li>" 

    }
    else if (FAREN >= 98.6 && FAREN < 212){

        transf.innerHTML = 
        "<li> Temperatura del cuerpo humano </li>"

    }
    else if (FAREN >= 77 && FAREN <= 98.6){

        transf.innerHTML = 
        "<li> Temperatura ambiente </li>"

    }
    else if (FAREN >= 32 && FAREN <= 77){

        transf.innerHTML = 
        "<li> Punto de congelación del agua </li>"

    }
    else if (FAREN >= -459.58 && FAREN < 32){

        transf.innerHTML = 
        "<li> Cero absoluto </li>"

    }



}
function calcularPorcentajes(){

    var val = document.getElementById('val').value;
    var calc = 0
    

    if(val < 500){

        calc = val * 1.5;

    }else{

        calc = val * 0.93;

    }

    document.getElementById("calc").innerHTML = 
    "<h3> El numero tras el calculo da igual a: "+calc+"</h3>";
}

function generarTablaHTML(){
var fi = 
    document.getElementById('filas').value;
var col = 
    document.getElementById('columnas').value;

var numOrdenados = 
    document.getElementById('ord');

var genTabla = "<table border = 10px solid white>";

var i, j

var numerosDe = fi * col

    for(i = 0 ; i < fi ; i++){

genTabla += 
    "<tr>";

    for(j = 0 ; j < col ; j++){

genTabla += 
    "<td = background-color: black;>"+numerosDe--+"</td>";

    }
genTabla += 
    "</tr>";
    }   
genTabla += 
    "</table border>";

    numOrdenados.innerHTML = genTabla;
}