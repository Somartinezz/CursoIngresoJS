function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño =document.getElementById('txtIdMes').value ;


	switch (mesDelAño)
	{
		case "Enero": 
			alert("que comiences bien el año!!!.");
			break;
		
		case "Marzo":
			alert("a clases!!!.");
			break;
		
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;


	}



}//FIN DE LA FUNCIÓN


/* function mostrar()
{
	//tomo el mes
	var variable;
	variable = prompt("ingreseun numero del 1 al 4");
	variable=parseInt(variable);
	
switch(variable)
{
	case 1: 
		alert("Hola soy un 1");
		break;
	case 2:
		alert("Hola soy un 2");
		break;
	case 3: 
		alert("Hola soy un 3");
		break;
	case 4:
		alert("Hola soy un 4");
		break;
	default:
		alert("ingrese un numero valido");
		break;


}


}//FIN DE LA FUNCIÓN
//case : es para cortar cualquier sentencia.
//brake:termina toda sentencia iniciada
//ejemplo: 
*/