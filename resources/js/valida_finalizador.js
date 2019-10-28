
$(document).ready(function () {
	var tipo = $('#txt-tipo');
	tipo.change(function () {
        if (tipo.val() == 'CREDITOPARCELADO') {
            $('#parcela1').show();
            $('#parcela2').show();
            $('#labelParcelaMin').show();
            $('#labelParcelaMax').show();
        }
        else {
        	 $('#parcela1').hide();
        	 $('#parcela2').hide();
        	 $('#labelParcelaMax').hide();
        	 $('#labelParcelaMin').hide();
        }
    });
});

$(document).ready(function(){
	var tipo = $('#txt-tipo');
	$("#Editar").ready(function(){
        if (tipo.val() == 'CREDITOPARCELADO') {
            $('#parcela1').show();
            $('#parcela2').show();
            $('#labelParcelaMin').show();
            $('#labelParcelaMax').show();
        }
	});
 });

function parcelaminima() {
	min = document.getElementById("minimoparcela").value;
	if (min >= 1) {
		document.getElementById("maximoparcela").value = "0";
		document.getElementById("maximoparcela").disabled = true;
	} else {
		document.getElementById("maximoparcela").disabled = false;
	}
//	if (document.getElementById("maximoparcela").value > 1 || document.getElementById("minimoparcela").value > 1) {
//		document.getElementById("btn-Salvar").disabled = false;
//	}else {
//		document.getElementById("btn-Salvar").disabled = true;
//		alert("Insira um n° de parcelas maior que 1!");
//	}
}
function parcelamaxima(){
	max = document.getElementById("maximoparcela").value;
	val = 2;
	if (max >= 1) {
		document.getElementById("minimoparcela").value = "2";
		document.getElementById("minimoparcela").disabled = true;			
	}else {
		document.getElementById("minimoparcela").value = "0";
		document.getElementById("minimoparcela").disabled = false;	
	}
//	if (document.getElementById("maximoparcela").value > 1 || document.getElementById("minimoparcela").value > 1) {
//		document.getElementById("btn-Salvar").disabled = false;
//	}else {
//		document.getElementById("btn-Salvar").disabled = true;
//		alert("Insira um n° de parcelas maior que 1!");
//	}
}
