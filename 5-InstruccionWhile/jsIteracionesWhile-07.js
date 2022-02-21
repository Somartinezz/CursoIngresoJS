/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaNumeros;
	contador=0;
	sumaPositivos=0;
	respuesta=true;
	 
	while(respuesta==true)//por cada numero
	{
	 	numeroIngresado = prompt("ingrese un numero : ");
	 	numeroIngresado = parseInt(numeroIngresado);
	 	while(isNaN(numeroIngresado) || numeroIngresado<-100 || numeroIngresado>100)//valida el ingreso
	 	{
	 		numeroIngresado=prompt("Reingrese un numero entre -100 y 100: ");
	 		numeroIngresado= parseInt(numeroIngresado);
	 	}
	 	contador++;

	 	acumulador = acumulador + numeroIngresado;
	 	
	 	respuesta = confirm("¿Desea continuar?")
	 }
	
	promedio=acumulador/contador
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN
/* confirm= metodo de entrada donde va a mostrar literal un cancelar o un aceotar, que muestra true o false
para respuestade si o no.
isNaN= pregunta si es un numero

*/