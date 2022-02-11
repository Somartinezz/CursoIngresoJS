function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

	if(edad > 18 && estadoCivilIngresado == "Soltero" )
	{
		alert("Es soltero y no es menor");

	}
}//FIN DE LA FUNCION