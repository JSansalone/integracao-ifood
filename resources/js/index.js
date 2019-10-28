function fecharModal(modal){
	var modalFechar = document.getElementById(modal)
	modalFechar.style.display = "none";
	$(modalFechar).modal('hide');
}

function habilitarDesabilitarOpcoes(posicao, descricao){
	if($('.check'+posicao).is(':checked')){
		document.getElementById('button'+posicao).disabled = false;
		document.getElementById('posicao'+posicao).hidden = false;
		
		if(descricao.includes('LP')){
			$('.descricaoConsultaPedido'+posicao).prop("disabled", false);
			$('.checkConsultaPedido'+posicao).prop("disabled", false);
		}
	}else{
		document.getElementById('button'+posicao).disabled = true;
		document.getElementById('posicao'+posicao).hidden = true;
		
		if(descricao.includes('LP')){
			$('.descricaoConsultaPedido'+posicao).prop("disabled", true);
			$('.checkConsultaPedido'+posicao).prop("disabled", true);
		}
	}
}

function setNovoNomeItem(posicao){
	
	document.getElementById("novoNomeItem").value = $('.descricaoConsultaPedido'+posicao).val();
}

function setNovoParametro(posicao){
	
	document.getElementById("novoParametro").value = $('.checkConsultaPedido'+posicao).val();
}

function setImagem(img, idPreview, novoIcone){
	
	var imagePreview = document.getElementById("imagePreview"+idPreview);
	var imageSortable = document.getElementById("imageSortable"+idPreview);
	
	$("#imageSortable"+idPreview).css("background-color",$("#imagePreview"+idPreview).attr('background-color'));
	$("#imageSortable"+idPreview).attr('src',novoIcone);
	$("#imagePreview"+idPreview).attr('src',novoIcone);
	$("#imagePreview"+idPreview).value = img;
	document.getElementById("novoIcone").value = img;
}

function mudarCor(idPreview, novaCor){
	
	var imagePreview = document.getElementById("imagePreview"+idPreview);
	var imageSortable = document.getElementById("imageSortable"+idPreview);
	
	$("#imageSortable"+idPreview).css("background-color",$(novaCor).val());
	$("#imagePreview"+idPreview).css("background-color",$(novaCor).val());
	document.getElementById("novaCor").value = $(novaCor).val();
}

$( "#sortable" ).sortable({
    start: function(event, ui) {
    },
    stop: function(event, ui) {
    	var itemOrder = $('#sortable').sortable("toArray");
    	var id = null;
    	var valores = "";

		for (var i = 0; i < itemOrder.length; i++) {
			
			id = itemOrder[i];
			
			if (id == 'posicao0') {
				var valor = i;
				$("#namePosicao0").val(valor);
				valores= valores+"#posicao0"+valor;
			} else if (id == 'posicao1') {
				var valor = i;
				$("#namePosicao1").val(valor);
				valores= valores+"#posicao1"+valor;
			} else if (id == 'posicao2') {
				var valor = i;
				$("#namePosicao2").val(valor);
				valores= valores+"#posicao2"+valor;
			} else if (id == 'posicao3') {
				var valor = i;
				$("#namePosicao3").val(valor);
				valores= valores+"#posicao3"+valor;
			} else if (id == 'posicao4') {
				var valor = i;
				$("#namePosicao4").val(valor);
				valores= valores+"#posicao4"+valor;
			} else if (id == 'posicao5') {
				var valor = i;
				$("#namePosicao5").val(valor);
				valores= valores+"#posicao5"+valor;
			} else if (id == 'posicao6') {
				var valor = i;
				$("#namePosicao6").val(valor);
				valores= valores+"#posicao6"+valor;
			} else if (id == 'posicao7') {
				var valor = i;
				$("#namePosicao7").val(valor);
				valores= valores+"#posicao7"+valor;
			} else if (id == 'posicao8') {
				var valor = i;
				$("#namePosicao8").val(valor);
				valores= valores+"#posicao8"+valor;
			} else if (id == 'posicao9') {
				var valor = i;
				$("#namePosicao9").val(valor);
				valores= valores+"#posicao9"+valor;
			} else if (id == 'posicao10') {
				var valor = i;
				$("#namePosicao10").val(valor);
				valores= valores+"#posicao10"+valor;
			} else if (id == 'posicao11') {
				var valor = i;
				$("#namePosicao11").val(valor);
				valores= valores+"#posicao11"+valor;
			}
			
		}
		document.getElementById("novaPosicao").value = valores;
    }
});

function onLoad(){
	$(window).load(function() {
		
		if( !$('.check0').is(':checked')){
			$('#button0').attr('disabled','disabled');
			document.getElementById("posicao0").hidden = true;
		}
		
		if( !$('.check1').is(':checked')){
			$('#button1').attr('disabled','disabled');
			document.getElementById("posicao1").hidden = true;
		}
		
		if( !$('.check2').is(':checked')){
			$("#button2").attr('disabled','disabled');
			document.getElementById("posicao2").hidden = true;
		}
		
		if( !$('.check3').is(':checked')){
			$("#button3").attr('disabled','disabled');
			document.getElementById("posicao3").hidden = true;
		}
		
		if( !$('.check4').is(':checked')){
			$("#button4").attr('disabled','disabled');
			document.getElementById("posicao4").hidden = true;
		}
		
		if( !$('.check5').is(':checked')){
			$("#button5").attr('disabled','disabled');
			document.getElementById("posicao5").hidden = true;
			$('.cadastrodeProduto').attr('disabled','disabled');
			$('.checkcadastrodeProduto').attr('disabled','disabled');
		}
		
		if( !$('.check6').is(':checked')){
			$("#button6").attr('disabled','disabled');
			document.getElementById("posicao6").hidden = true;
			$('.descricaoConsultaPedido6').attr('disabled','disabled');
			$('.checkConsultaPedido6').attr('disabled','disabled');
		}
		
		if( !$('.check7').is(':checked')){
			$("#button7").attr('disabled','disabled');
			document.getElementById("posicao7").hidden = true;
			$('.descricaoConsultaPedido7').attr('disabled','disabled');
			$('.checkConsultaPedido7').attr('disabled','disabled');
		}
		if( !$('.check8').is(':checked')){
			$("#button8").attr('disabled','disabled');
			document.getElementById("posicao8").hidden = true;
			$('.descricaoConsultaPedido8').attr('disabled','disabled');
			$('.checkConsultaPedido8').attr('disabled','disabled');
		}
		if( !$('.check9').is(':checked')){
			$("#button9").attr('disabled','disabled');
			document.getElementById("posicao9").hidden = true;
			$('.descricaoConsultaPedido9').attr('disabled','disabled');
			$('.checkConsultaPedido9').attr('disabled','disabled');
		}
		if( !$('.check9').is(':checked')){
			$("#button9").attr('disabled','disabled');
			document.getElementById("posicao9").hidden = true;
			$('.descricaoConsultaPedido9').attr('disabled','disabled');
			$('.checkConsultaPedido9').attr('disabled','disabled');
		}
		if( !$('.check10').is(':checked')){
			$("#button10").attr('disabled','disabled');
			document.getElementById("posicao10").hidden = true;
			$('.descricaoConsultaPedido10').attr('disabled','disabled');
			$('.checkConsultaPedido10').attr('disabled','disabled');
		}
		if( !$('.check11').is(':checked')){
			$("#button11").attr('disabled','disabled');
			document.getElementById("posicao11").hidden = true;
		}
		
		var itemOrder = $('#sortable').sortable("toArray");
		var valor = ["", "", "", ""];
		var valores2 = ["", "", "", ""];
		
		for (var i = 0; i < itemOrder.length; i++) {
			
			var pa = document.getElementById("imageSortable"+i);
			var namePa = $(pa).attr("name");
			var hiddenPa = $( "#posicao"+i).is( ":hidden" );
			var corPa = $("#nameCor"+i).val();
			var srcPa = $("#nameIcone"+i).val();
			valor = [namePa, hiddenPa, srcPa, corPa];
			valores2[i] = valor;
			
		}
		var valores = ["", "", "", ""];
		var v = [ "", "", "", ""];
		for (var i = 0; i < valores2.length; i++) {
			
			v = valores2[i];
			
			if(v[0] == '0'){
				valores[0] = valores2[i];
			}else if(v[0] == '1'){
				valores[1] = valores2[i];
			}else if(v[0] == '2'){
				valores[2] = valores2[i];
			}else if(v[0] == '3'){
				valores[3] = valores2[i];
			}else if(v[0] == '4'){
				valores[4] = valores2[i];
			}else if(v[0] == '5'){
				valores[5] = valores2[i];
			}else if(v[0] == '6'){
				valores[6] = valores2[i];
			}else if(v[0] == '7'){
				valores[7] = valores2[i];
			}else if(v[0] == '8'){
				valores[8] = valores2[i];
			}else if(v[0] == '9'){
				valores[9] = valores2[i];
			}else if(v[0] == '10'){
				valores[10] = valores2[i];
			}else if(v[0] == '11'){
				valores[11] = valores2[i];
			}
		}
		
		
		var valor = ["", "", "", ""];
		
		$("#sortable li").each(function() {
			$(this).remove();
		});
		
		for (var i = 0; i < valores.length; i++) {
			
			valor = valores[i];
			
			if(valor[1]){
				$("#sortable").append('<li id="posicao'+i+'" hidden><a class="item image-1"><img name="'+valor[0]+'" src="'+"/gzservicos/resources/img/"+valor[2]+'" class="imgicon" id="imageSortable'+i+'" style="background-color: '+valor[3]+';"/></a></li>');
			}else{
				$("#sortable").append('<li id="posicao'+i+'"><a  class="item image-1"><img name="'+valor[0]+'" src="'+"/gzservicos/resources/img/"+valor[2]+'" class="imgicon" id="imageSortable'+i+'" style="background-color: '+valor[3]+';"/></a></li>');
			}
		}
	})
}

