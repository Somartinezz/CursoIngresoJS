/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño =document.getElementById('txtIdMes').value ;
//var mensaje
	
	switch (mesDelAño)
	{
		case "Julio":
		case "Agosto":	
			alert("Abrigate que hace frio."); // mensaje = "Falta para el invierno."
			break;

		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;

	}
	//alert(mensaje)
}//FIN DE LA FUNCIÓN