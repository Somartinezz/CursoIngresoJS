/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= true;
	 
	while(respuesta==true)
	{
	 	numeroIngresado = prompt("ingrese un numero positivo o negativo": ");
	 	numeroIngresado = parseInt(numeroIngresado);

	 		if(sumaPositivos<-1 || sumaPositivos> 100)
	 		{
				numeroIngresado=prompt("Reingrese otro numero mayor a -1 y menor a 100: ");
	 			numeroIngresado=parseInt(numeroIngresado);
	 		}
	 		else
	 		{
	 			multiplicacionNegativos > -1 || multiplicacionNegativos < -100;
	 			numeroIngresado= prompt("Reingrese otro numero menor a -1 y mayor a -100");
	 			numeroIngresado=parseInt(numeroIngresado);
	 		}
	 		
	 	}
	 	contador++;

	 	sumaPositivos = sumaPositivos + numeroIngresado;
	 	multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
	 	
	 	respuesta = confirm("¿Desea continuar?");
	 }
	
	if(sumaPositivos || multiplicacionNegativos)
	{
		promedio= sumaPositivos / promedio;
		txtIdSuma.value=sumaPositivos;
	}
	else
	{
		promedio = multiplicacionNegativos * promedio;
		txtIdProducto.value=multiplicacionNegativos;
	}

	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN