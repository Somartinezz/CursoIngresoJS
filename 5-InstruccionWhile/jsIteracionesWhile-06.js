function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese un número.");
		numeroIngresado=parseInt(numeroIngresado);
		
		acumulador= acumulador + numeroIngresado;

	}
	promedio = acumulador / contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value= promedio;


}//FIN DE LA FUNCIÓN