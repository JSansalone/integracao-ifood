$( document ).ready(function() {
	$("#diario").mask("00:00:00")
	$("#horario").mask("00:00:00")
	$("#minutos").mask("00")
	atualizaTela();
	selecionaCombo();
	
});


$("#combo-frequencia").on("click", function() {
	atualizaTela();
});

function selecionaCombo(){
	
	$("#combo-frequencia").val($("#periodoSelecionado").val());
		
	$("#combo-frequencia").click();
	
}

function atualizaTela(){
	var valor = $("#combo-frequencia").val();
	if (valor == "MINUTO") {
		$("#minutos").show();
		$("#div-horario").hide();
		$("#label-intervalo").text("Intervalo em min.")
		$("#diario").hide();
		$("#semanal").hide();
		$("#anual").hide();
				
	} else if (valor == "DIARIO") {
		$("#diario").show();
		$("#div-horario").hide();
		$("#label-intervalo").text("Hora de Execuçao")
		$("#minutos").hide();
		$("#semanal").hide();
		$("#anual").hide();
		
	} else if (valor == "SEMANAL") {
		$("#semanal").show();
		$("#div-horario").show();
		$("#label-intervalo").text("Dia da Semana")
		$("#diario").hide();
		$("#minutos").hide();
		$("#anual").hide();
		
	} else if (valor == "ANUAL") {
		$("#anual").show();
		$("#div-horario").show();
		$("#label-intervalo").text("Dia do ano")
		$("#diario").hide();
		$("#minutos").hide();
		$("#semanal").hide();
	}

}
