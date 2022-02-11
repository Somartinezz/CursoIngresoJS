/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaEnFahrenheit;
	var temeperaturaEnCentigrados;
	var mensaje;
	
	temperaturaEnFahrenheit = document.getElementById('txtIdTemperatura').value;
	temperaturaEnFahrenheit = parseInt(temperaturaEnFahrenheit);
	
	temeperaturaEnCentigrados = (temperaturaEnFahrenheit-32)* 5/9;
	
	mensaje= temperaturaEnFahrenheit + " Fahrenheit son " +temeperaturaEnCentigrados.toFixed(2) + " centígrados";
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temperaturaEnFahrenheit;
	var temeperaturaEnCentigrados;
	var mensaje;

	temeperaturaEnCentigrados= document.getElementById('txtIdTemperatura').value;
	temeperaturaEnCentigrados=parseInt(temeperaturaEnCentigrados);
	
	temperaturaEnFahrenheit	=(temeperaturaEnCentigrados*9/5)+32;
	
	mensaje=temeperaturaEnCentigrados+ " Centigrados son " + temperaturaEnFahrenheit.toFixed(2);
	alert(mensaje);
}