function onLoad(){
	esconder();
}

function esconder(){
	$("#int-khan").hide("slow");
	$("#int-centauro").hide("slow");
	$("#int-centauro2").hide("slow");
	$("#int-centauro3").hide("slow");
	$("#int-centauro4").hide("slow");
}


$('.modelo').change(function() {	
  var modelo = $(".modelo").val();  
  if(modelo == "KHAN"){
	  esconder();
	  $("#int-khan").show("slow");  
  } else if(modelo == "CENTAURO"){
	  esconder();
	  $("#int-centauro").show("slow");
	  $("#int-centauro2").show("slow");
	  $("#int-centauro3").show("slow");
	  $("#int-centauro4").show("slow");  
  } else if(modelo == ""){
	  esconder();
  }
});