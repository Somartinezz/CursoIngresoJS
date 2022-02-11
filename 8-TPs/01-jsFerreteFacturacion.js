/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
		var ingresePrecio;
		var ingresePrecio2;
		var ingresePrecio3;
		var suma;

		ingresePrecio = document.getElementById('txtIdPrecioUno').value;
		ingresePrecio = parseInt(ingresePrecio);
		
		ingresePrecio2 = document.getElementById('txtIdPrecioDos').value;
		ingresePrecio2 = parseInt (ingresePrecio2);
		
		ingresePrecio3 = document.getElementById('txtIdPrecioTres').value;
		ingresePrecio3 = parseInt (ingresePrecio3);
		 
		suma= ingresePrecio + ingresePrecio2 + ingresePrecio3;

		 alert(suma);
		

}
function Promedio () 
{
	var ingresePrecio;
		var ingresePrecio2;
		var ingresePrecio3;
		var promedio;

		
		ingresePrecio = document.getElementById('txtIdPrecioUno').value;
		ingresePrecio = parseInt(ingresePrecio);
		
		ingresePrecio2 = document.getElementById('txtIdPrecioDos').value;
		ingresePrecio2 = parseInt (ingresePrecio2);
		
		ingresePrecio3 = document.getElementById('txtIdPrecioTres').value;
		ingresePrecio3 = parseInt (ingresePrecio3);

		promedio= (ingresePrecio + ingresePrecio2 + ingresePrecio3) / 3;

		alert(promedio);

}
function PrecioFinal () 
{
	var ingresePrecio;
		var ingresePrecio2;
		var ingresePrecio3;
		var total;
		var iva;
		
		ingresePrecio = document.getElementById('txtIdPrecioUno').value;
		ingresePrecio = parseInt(ingresePrecio);
		
		ingresePrecio2 = document.getElementById('txtIdPrecioDos').value;
		ingresePrecio2 = parseInt (ingresePrecio2);
		
		ingresePrecio3 = document.getElementById('txtIdPrecioTres').value;
		ingresePrecio3 = parseInt (ingresePrecio3);
		iva= 0.21;

		total = (ingresePrecio + ingresePrecio2 + ingresePrecio3) + (ingresePrecio + ingresePrecio2 + ingresePrecio3)* iva;
		alert(total);
}