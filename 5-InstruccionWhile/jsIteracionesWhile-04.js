/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero<0 || numero>9)
	{
		numero = prompt("Reingrese un número entre 0 y 10.");
		numero=parseInt(numero);

	}
	document.getElementById('txtIdNumero').value = numero;
}//FIN DE LA FUNCIÓN
//while adentro se pone parseint o un prompt se vuelve aponer