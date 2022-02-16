function mostrar()
{
	var destinoIngresado;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch (destinoIngresado)
	{	
		case "Ushuaia":
		case "Bariloche":
			alert("Hace frío.");
			break;
		case "Cataratas":
			alert("Hace calor.");
			break;
		default:
			alert("Hace calor y frío.")
			break;
	}
}//FIN DE LA FUNCIÓN