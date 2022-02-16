/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

// dejar de usar tanto el alert, utilizarlo una sola vez al final.

function mostrar()
{
	var estacion;
	var destino;
	var mensaje;
	var seViaja;

	mensaje= "No se viaja";
	//seViaja= false;

	estacion =document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				mensaje = "Si se viaja";
				//seViaja = true;
			}
			
			break;
		case "Verano":
			if(destino == "Cataratas" || destino == "Mar del plata")
			{
				mensaje = "Si se viaja";
				//seViaja = true;
			}
			break;
		case "Primavera":
			if(destino!= "Bariloche")
			{
				mensaje = "Si se viaja";
				//seViaja = true;
			}
			break;
		default:
			mensaje = "Si se viaja";
			//seViaja = true;
	 		break;
	 	}
	/*if(seViaja==  true){
		mensaje = "Si se viaja"; */
		alert(mensaje);
	}	
	


//FIN DE LA FUNCIÓN NO SE USA DOS SWICTH PORQUE SOLO HAY DOS COMPARACIONES