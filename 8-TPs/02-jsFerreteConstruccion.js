// Martinez Sofia DIV D TP N°2
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var cantidadDeAlambre;
	var perimetroDelTerreno;
	var mensaje;

	largo = txtIdLargo.value;
	largo = parseInt(largo);

	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);

	perimetroDelTerreno = (largo + ancho) * 2;

	cantidadDeAlambre = perimetroDelTerreno * 3;

	mensaje = "Se deben comprar " + cantidadDeAlambre + " metros ";

	alert(mensaje);

}

function Circulo () 
{
	var radio;
	var perimetroDelTerreno;
	var cantidadDeAlambre;	
	var mensaje;

	radio= document.getElementById('txtIdRadio').value;
	radio= parseInt(radio);
	
	perimetroDelTerreno= 2 * Math.PI * radio;
	
	cantidadDeAlambre = perimetroDelTerreno * 3;
	
	mensaje = "Se deben comprar " + cantidadDeAlambre.toFixed(2) + " metros ";
	
	alert(mensaje);
	
}

function Materiales () 
{
	var largo;
	var ancho;
	var areaDelTerreno;
	var cantidadDeCemento;
	var cantidadDeCal;
	var mensaje;

	largo= document.getElementById('txtIdLargo').value;
	ancho= document.getElementById('txtIdAncho').value;

	largo=parseInt(largo);
	ancho= parseInt(ancho);

	areaDelTerreno= largo * ancho;

	cantidadDeCemento= areaDelTerreno * 2;
	cantidadDeCal= areaDelTerreno * 3;
	
	mensaje "Se necesitan " + cantidadCemento + " bolsas de cemento" " y " + cantidadCal + " de cal.";
	alert(mensaje);
}