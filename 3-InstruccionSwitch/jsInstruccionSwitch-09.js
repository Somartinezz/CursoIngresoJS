/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA
*/
function mostrar()
{
	/*
	var estacionIngresada;
	var destinoIngresado;
	var descuento;
	var descuento1;
	var aumento;
	var aumento1;
	var precioFinalDescuento;
	var precioFinalAumento;
	var precioBase;
	
	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	precioBase=15000;

	aumento= 0.2;
	descuento=0.1;
	aumento1=0.1
	descuento1=0.2

	precioFinalAumento =(precioBase + (precioBase/100 * aumento));
	precioFinalAumento1=(precioBase + (precioBase * aumento1));
	precioFinalDescuento=(precioBase - (precioBase * descuento));
	precioFinalDescuento1=(precioBase - (precioBase * descuento1));
	 
	 switch (estacionIngresada && destinoIngresado)// COMPARA POR IGUALDAD NO SE PUEDE HACER ESTO
	 {
	 	case "Invierno":
	 	case "Bariloche":
	 			alert("Usted tiene un precio final de " + precioFinalAumento);
	 			break;
	 
	 	case "Cataratas":
	 	case "Cordoba":

	 		alert("Usted tiene un precio final de "  + precioFinalDescuento);
	 		break;
	 	
	 	case "Mar del plata":
	 		alert("Usted tiene un precio final de " + precioFinalDescuento1)
	 		break;

	 	case "Verano":
	 	case "Bariloche":
	 		alert("Usted tiene un precio final de "+ precioFinalDescuento1 );
	 		break;

		case "Cataratas":
	 	case "Cordoba":

	 		alert("Usted tiene un precio final de "  + precioFinalAumento1);
	 		break;
	 	
	 	case "Mar del plata":
	 		alert("Usted tiene un precio final de " + precioFinalAumneto);
	 		break;
	 
	 	case "Otoño":
	 	case "Primavera":
	 	case "Bariloche":
	 	case "Cataratas":
	 	case "Mar del plata":
	 		alert("Usted tiene un precio final de "  + precioFinalAumento1);
	 		break;
	 
	 	default:
	 		alert("Cordoba tiene el precio sin descuento, con un precio final de $15000");
	 		break;
	 }
*/

function mostrar()
{
 	var estacionIngresada;
	var destinoIngresado;
	var descuento;
	var aumento;
	var precioBase;
	var precioFinal;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	precioBase=15000;
	 aumento= 0;
	 descuento=0;

	 switch(estacionIngresada)
	 {
	 	case "Invierno":

	 		switch(destinoIngresado)
	 		{
	 			case "Bariloche":
	 				aumento= 20;
	 				break;
	 			case "Cataratas":
	 			case "Cordoba":
	 				descuento= 10;
	 				break;
	 			case "Mar del plata":
	 				descuento=20;
	 				break;
	 		}
	 	break;
	 	case "Verano":

	 		switch(destinoIngresado)
	 		{
	 			case "Bariloche":
	 				descuento=20;
	 				break;
	 			case "Cataratas":
	 			case "Cordoba":
	 				aumento = 10;
	 				break;
	 			case "Mar del plata":
	 				aumento=20;
	 				break;

	 		}
	 		break;
	 		case "Otoño":
	 		case "Primavera":

	 			switch(destinoIngresado)
	 			{
	 				case "Bariloche":
	 				case "Cataratas":
	 				case "Mar del plata":
	 					aumento=10;
	 					break;
	 	
	 			}
	 			break;

	 		}
	 		precioFinal =(precioBase + (precioBase/100 * aumento)-(precioBase/100 * descuento));

	 		alert("Usted tiene un precio final de $" + precioFinal);

}
	

//FIN DE LA FUNCIÓN