$(document).ready(function(){

	$("#microfono").click(function() {
		var nuevoMensaje = $("#input-mensaje").val();
			$("#input-mensaje").val("");
			
			if(nuevoMensaje == ""){
				return false;
			} else{
				crearMensaje(nuevoMensaje);
			}
	});

	$("#input-mensaje").keypress(function(e){
		var key = e.which;
		if(key==13){
			var nuevoMensaje = $("#input-mensaje").val();
			$("#input-mensaje").val("");
			
			if(nuevoMensaje == ""){
				return false;
			} else{
				crearMensaje(nuevoMensaje);
			}
		}
	});

	$("#laboratoria").click(function() {
		$("#h5-titulo-derecha").html("Laboratoria Perú");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/logocodeacademy.png');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="andrea">Andrea Lamas</h5>'+
			'<p class="gris">Por qué se habra cortado la luz?</p>'+
			'<p class="hora text-right gris">11:20</p>'+
			'</div>'+
			'<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="gian">Gian Marco</h5>'+
			'<p class="gris">Yo si tengo luz</p>'+
			'<p class="hora text-right gris">11:25</p>'+
			'</div>'+
			'<div class="col-lg-3 col-md-3 pull-right text-right mensaje-mio">'+
			'<p class="gris">Yo también tengo!</p>'+
			'<p class="hora text-right gris">11:27</p>'+
			'</div>'+
			'<div class="col-lg-5 col-md-5 mensaje-amigo margin-50">'+
			'<h5 class="aldo">Aldo Alfaro</h5>'+
			'<p class="gris">Suerte la de ustedes</p>'+
			''+'<p class="hora text-right gris">11:30</p>'+
			'</div>')
	});

	$("#raymi").click(function() {
		$("#h5-titulo-derecha").html("Raymi");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/aldo.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="gian">Raymi Saldomando</h5>'+
			'<p class="gris">La clase va bien!</p>'+
			'<p class="hora text-right gris">13:25</p>'+
			'</div>')
	});

	$("#mariana").click(function() {
		$("#h5-titulo-derecha").html("Mariana Costa");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/anamaria.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="aldo">Mariana Costa</h5>'+
			'<p class="gris">Nos encantó</p>'+
			'<p class="hora text-right gris">13:25</p>'+
			'</div>'+
			'<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="aldo">Mariana Costa</h5>'+
			'<p class="gris">El panel de speaker</p>'+
			'<p class="hora text-right gris">13:27</p>'+
			'</div>')
	});

	$("#ana").click(function() {
		$("#h5-titulo-derecha").html("Ana María Martinez");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/raymi.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="gian">Ana Maria Martinez</h5>'+
			'<p class="gris">Pues dale chamo</p>'+
			'<p class="hora text-right gris">09:25</p>'+
			'</div>')
	});

	$("#rodulfo").click(function() {
		$("#h5-titulo-derecha").html("Rodulfo Prieto");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/rodulfo.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="gian">Rodulfo Prieto</h5>'+
			'<p class="gris">¿Cómo van las chicas?</p>'+
			'<p class="hora text-right gris">09:25</p>'+
			'</div>')
	});

	$("#andrea").click(function() {
		$("#h5-titulo-derecha").html("Andrea Lamas");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/gian.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="andrea">Andrea Lamas</h5>'+
			'<p class="gris">Hoy me toca clase de canto</p>'+
			'<p class="hora text-right gris">20:25</p>'+
			'</div>')
	});

	$("#maria").click(function() {
		$("#h5-titulo-derecha").html("María Paulina Rovarola");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/curricula.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="aldo">María Paulina Rivarola</h5>'+
			'<p class="gris">Esto me encanta!</p>'+
			'<p class="hora text-right gris">17:25</p>'+
			'</div>')
	});

	$("#katy").click(function() {
		$("#h5-titulo-derecha").html("Katy Sánchez");
		$("#foto-derecha-cambiante").attr('src', 'assets/image/katy.jpg');
		$("#caja-contenido-mensajes").empty();
		$("#caja-contenido-mensajes").append('<div class="col-lg-5 col-md-5 mensaje-amigo">'+
			'<h5 class="gian">Katy Sánchez</h5>'+
			'<p class="gris">Tengo el salón bajo control</p>'+
			'<p class="hora text-right gris">08:25</p>'+
			'</div>')
	});
});

function crearMensaje(nuevoMensaje){
	$("#caja-contenido-mensajes").append('<div class="col-lg-12 col-md-12">'+
		'<div class="col-lg-3 col-md-3 pull-right text-right mensaje-mio">'+
		'<p class="gris">'+nuevoMensaje+'</p>'+
		'<p class="hora text-right gris">11:29</p>'+
		'</div>'+
		'</div><br><br>')
}