/*
	Util.JS
	Último update: 01/01/2017
*/
toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": true,
	  "progressBar": true,
	  "positionClass": "toast-bottom-center",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "3000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
}

function getEnderecoServidor() {
    //var storage = window.localStorage;
    //var value = storage.getItem(key); // Pass a key name to get its value.
    //storage.setItem(key, value) // Pass a key name and its value to add or update that key.
    //storage.removeItem(key) // Pass a key name to remove that key from storage.
    var storage = window.localStorage;
    var enderecoServidor = storage.getItem("endereco-servidor"); // Pass a key name to get its value.
    return enderecoServidor;
}

function setEnderecoServidor(enderecoServidor) {
    var storage = window.localStorage;
    storage.setItem("endereco-servidor", enderecoServidor);
}
function guardarUsuario(usuario){
    var storage = window.localStorage;
    storage.setItem("usuario", JSON.stringify(usuario));
}
function getUsuario(){
    var storage = window.localStorage;
    var usuario = JSON.parse(storage.getItem("usuario")); // Pass a key name to get its value.
    return usuario;
}
function myToast(tipo, mensagem) {
	if(tipo == "success") {
		toastr.success(mensagem);
	} else if(tipo == "warning") {
		toastr.warning(mensagem);
	} else if(tipo == "info") {
		toastr.info(mensagem);
	} else if(tipo == "error") {
		toastr.error(mensagem);
	}
}

function myToastNoHide(tipo, mensagem) {
	myToast(tipo, mensagem);
}

function toastSuccess(mensagem) {
    myToast("success", mensagem);
}

function toastInfo(mensagem) {
    myToast("info", mensagem);
}

function toastInfoNoHide(mensagem) {
    myToastNoHide("info", mensagem);
}

function toastError(mensagem) {
    myToast("error", mensagem);
}

function toastWarning(mensagem) {
    myToast("warning", mensagem);
}

function validarCNPJ(cnpj) {
	
	if(cnpj == null) return false;
	
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;

    return true;

}

function servidorGZCloud(cnpj){
    return cnpj+".gzcloud.com.br";
}

function enderecoFormatado(){
    var endereco = getEnderecoServidor();
    if(validarCNPJ(endereco)){
        return endereco+".gzcloud.com.br";
    }else{
        return endereco;
    }
}

function getDiasSemana(tipo){
	if(tipo == "cp") { // CP = RETORNA DIAS COMPLETO
		return ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	} else if(tipo == "sc") { // SC = RETORNA DIAS SUPER CURTO
		return ["D", "S", "T", "Q", "Q", "S", "S"];
	} else if(tipo == "ct") { // CT = RETORNA DIAS CURTO
		return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	}
}

function getNomeMeses(tipo){
	if(tipo == 'cp') {
		return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	} else if(tipo == 'ct') {
		return ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
	}
}

function guardarMeta(meta){
    var storage = window.localStorage;
    storage.setItem("meta", JSON.stringify(meta));
}

function obterMeta(){
    var storage = window.localStorage;
    var meta = JSON.parse(storage.getItem("meta"));
    return meta;
}

function guardarInicializacao(loja, tipo){
    var storage = window.localStorage;
    storage.setItem("loja-init", JSON.stringify(loja));
	storage.setItem("tipo-init", JSON.stringify(tipo));
}

function obterInicializacao(obj){
    var storage = window.localStorage;
	if(obj == "loja"){
		return JSON.parse(storage.getItem("loja-init"));
	} else if(obj == "tipo"){
	    return JSON.parse(storage.getItem("tipo-init"));
	}
}

function obterDataAtual(){
	var data = new Date();
	return String(("0" + data.getDate()).slice(-2)) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) + "/" + String(data.getFullYear());
}

function obterDias(quantidade){
	return moment().subtract('days', quantidade).format('DD/MM/YYYY');
}

function valorEmReais(valor){
	return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

function checarVazio(valor){
    return !valor || !/[^\s]+/.test(valor);
}

function checarNegativo(valor){
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode == 8)) {
        return false;
    }
}

$(function(){
	$("#txt-servidor").text(enderecoFormatado());
});

function guardarComanda(com){
    var storage = window.localStorage;
    storage.setItem("comanda", JSON.stringify(com));
}

function obterComanda(){
    var storage = window.localStorage;
	return JSON.parse(storage.getItem("comanda"));
}

function ValidaData(data){
      reg = /[^\d\/\.]/gi;                  // Mascara = dd/mm/aaaa | dd.mm.aaaa
      var valida = data.replace(reg,'');    // aplica mascara e valida só numeros
      if (valida && valida.length == 10) {  // é válida, então ;)
        var ano = data.substr(6),
          mes = data.substr(3,2),
          dia = data.substr(0,2),
          M30 = ['04','06','09','11'],
          v_mes = /(0[1-9])|(1[0-2])/.test(mes),
          v_ano = /(19[1-9]\d)|(20\d\d)|2100/.test(ano),
          rexpr = new RegExp(mes),
          fev29 = ano % 4? 28: 29;

        if (v_mes && v_ano) {
          if (mes == '02') return (dia >= 1 && dia <= fev29);
          else if (rexpr.test(M30)) return /((0[1-9])|([1-2]\d)|30)/.test(dia);
          else return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
        }
      }
      return false                           // se inválida :(
}

function ValidaHora(hora) {
	var patt = new RegExp("^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$");
	return patt.test(hora);
//	var valida = data.replace(reg, ''); // aplica mascara e valida só numeros
//	if (valida && valida.length == 5) { // é válida, então ;)
//		var hora = data.substr(0, 2), minuto = data.substr(3);
//		return hora >= 0 && hora <= 23 && minuto <= 0 && minuto >= 59;
//	}
//	return false // se inválida :(
}

function mascaraData(){
	var data = $("#txt-data-inicial").val();
	if (data.length == 8) {
		var dia = data.substring(0, 2);
		var mes = data.substring(2,4);
		var ano = data.substring(4, data.length);
		var mascarado = dia + "/" + mes + "/" + ano;
		$("#txt-data-inicial").val(mascarado);
	}
	
	var data = $("#txt-data-inicial").val();
	if(!ValidaData(data) && data.length > 0){
		alert("Data inválida!");
		$("#txt-data-inicial").val("");
		$("#txt-data-inicial").focus();
	}
}

function mascaraData(id){
	var data = $("#"+id).val();
	if (data.length == 8) {
		var dia = data.substring(0, 2);
		var mes = data.substring(2,4);
		var ano = data.substring(4, data.length);
		var mascarado = dia + "/" + mes + "/" + ano;
		$("#"+id).val(mascarado);
	}
	
	var data = $("#"+id).val();
	if(!ValidaData(data) && data.length > 0){
		alert("Data inválida!");
		$("#"+id).val("");
		$("#"+id).focus();
	}
}

function mascaraHora(id){
	var dataHora = $("#"+id).val();
	if (dataHora.length == 5) {
		var hora = dataHora.substring(0, 2);
		var minuto = dataHora.substring(3,5);
		var mascarado = hora + ":" + minuto;
		$("#"+id).val(mascarado);
	}
	var dataHora = $("#"+id).val();
	if(!ValidaHora(dataHora) && dataHora.length > 0){
		alert("Hora inválida!");
		$("#"+id).val("");
		$("#"+id).focus();
	}
}

