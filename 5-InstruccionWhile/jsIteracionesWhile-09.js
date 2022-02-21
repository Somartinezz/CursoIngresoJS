/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	

	//iniciar variables
	banderaDelPrimero= 0; //false
	respuesta=true;
	
	while(respuesta== true)
	{
		numeroIngresado = prompt("ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaDelPrimero == 0)
		{
			numeroMaximo= numeroIngresado;
			numeroMinimo= numeroIngresado;
			banderaDelPrimero = 1;
		}
		else
		{
			if(numeroIngresado< numeroMinimo)
			{
				numeroMinimo= numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
/* bandera = guarda un valor a funcion de que se haya cumplido un suceso o no: palabras, booleanos
 