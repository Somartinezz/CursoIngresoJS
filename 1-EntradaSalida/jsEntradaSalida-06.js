/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var ingresarNumero1;
	ingresarNumero1 = prompt("ingrese numero uno");

	document.getElementById('txtIdNumero').value=
	ingresarNumero1 ;
	var ingresarNumero2
	ingresarNumero2 = prompt("ingrese numero dos");

	document.getElementById('txtIdNumero').value=
	ingresarNumero2 ;
	alert(ingresarNumero1);
	alert(ingresarNumero2);
}