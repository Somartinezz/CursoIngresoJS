/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	var nombreDelAlumno;

	nombreDelAlumno = prompt("ingrese su nombre!"); //asignacion 
	
 	document.getElementById('txtIdNombre').value =	nombreDelAlumno 
	
	alert(nombreDelAlumno);
	
}