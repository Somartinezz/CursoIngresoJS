/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe ;
 var descuento;
 var total;
 
 importe = document.getElementById("txtIdImporte").value;
importe = parseInt(importe);
descuento = 0.25;

total= importe * descuento;
 
 document.getElementById("txtIdResultado").value = total;
 
}