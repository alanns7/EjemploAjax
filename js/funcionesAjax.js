//ajax nos comunicsa con un servidor (php) o con un api
function MostrarError()
{
	/*var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});*/

$.ajax({url:"Noexiste.php"}).then(function(respuesta){//a donde va a ir,

alert("Primero: "+ respuesta);
console.info("Primero",respuesta);

$("#principal").html(respuesta);
$("#informe").html("Correcto!!!");


},function(error){//cuando vuelve, este es el error

alert("Segundo: "+ error);
console.info("Segundo",error);

$("#principal").html(":(");
$("#informe").html(error.responseText);



});//devuelve retornos o callbacks, devuelve un error o un correcto, ajax va al php y vuelve. Dentro del then recibe dos callbacks,

}
function MostrarSinParametros()
{
	/*var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);


	});*/

$.ajax({url:"nexoTexto.php"}).then(function(respuesta){

		$("#principal").html(respuesta);



},function(error){





});

}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}//que mostrar = grilla foto o video. Lo mismo que escriboi en data lo voy a pasar en nexo.php por post
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}