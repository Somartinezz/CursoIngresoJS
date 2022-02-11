/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe ;
 var aumento;
 var total;
 
 importe = document.getElementById("txtIdSueldo").value;
importe = parseInt(importe);
aumento = 1.1;

total= importe * aumento;
 
 document.getElementById("txtIdResultado").value = total;





//var importe;// el uno representa al 2000 
//var porcentaje; 
//var total;
//var resultado;
//importe = 2000;


//porcentaje= importe * 25/ 100; //eficaz
//porcentaje= importe * 0.25; //eficiente
	//total = importe - porcentaje;
	/forma 2/
	//total = importe -(importe * 0.25);
	
	//resutlado = document.getElementById("txtIdResultado").value;	
	
	//forma tres
		
	//total = importe * 1.1 -> 1 + 0.1 
	//total = importe * 0.75; //-> 1-0.25 
}