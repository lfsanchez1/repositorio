
$(document).ready(function(){
	//bienvenida();

	$("#btnmensaje").click(function(){
	bienvenida();
	});
});


function bienvenida(){
	
	var mensaje = 'bienvenido';
	alert(mensaje);
	alert($("#btnmensaje").val());
}



