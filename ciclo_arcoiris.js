// Cambiar color del cuadro con el click de un boton.

var btninicio = document.getElementById('btninicio');
var btnfinal = document.getElementById('btnfinal');
/*var caja = document.getElementById('fondo');
var ck = ["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#9400d3"];
var i;*/


function aviso(){

	alert("En este juego aprenderas los colores del arcoiris \n de manera didactica.");
}

btninicio.addEventListener("click",cambiocolor,false);

function cambiocolor(){

	
	alert("Este es el btninicio");

	/*for (i = 0; i < ck.length; i++) {
		caja.style.backgroundColor + ck[i];
		//ck[i].style.backgroundColor = caja;
	}*/

	}

btnfinal.addEventListener("click",parar);

function parar(){

	alert("Este es el btnfinal");
}
