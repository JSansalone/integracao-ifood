/*
	Login.JS - Precisa de verificação caso seja primeiro acesso.
	Último update: 12/04/2017
*/

/*
 * DECLARAÇÃO DE FUNÇÕES
 */
function emailDefinido() {
    return $("#txt-email").val();
}
function login() {
    if(!emailDefinido()) {
        toastWarning("Email ou senha não encontrados!");
        return;
    }
    if(!$("#txt-usuario").val() || !$("#txt-senha").val()){
        toastError("Login inválido!");
		var teste = "";
		$("#txt-email").val(teste);
		$("#txt-senha").val(teste);
        return;
    }
    setEnderecoServidor($("#txt-cnpj").val());
    toastInfoNoHide("Aguarde... Fazendo login.");
    $.ajax({
        url: "http://"+enderecoFormatado()+"/services/login",
        headers: {
            "Accept":"application/json"
        },
        data: {
            usuario: $("#txt-usuario").val(),
            senha: $("#txt-senha").val()
        },
        success: function (resposta) {
            $.toast().reset("all");
            var isOk = resposta.ok;
            if(isOk) {
                var usuario = resposta.extra.usuario;
                guardarUsuario(usuario);
                window.location.replace("dash.html");
            }else{
                toastError("Login inválido!");
            }
        },
        error: function (erro) {
            $.toast().reset("all");
            toastError("Não foi possível estabelecer conexão com o servidor!");
        }
    });
}
function onLoad() {
    /*$("#txt-cnpj").val(getEnderecoServidor());
    //if(!$("#txt-cnpj").val()) {
    //    toastWarning("CNPJ / Servidor não definido!");
    //}
    var usuario = getUsuario();
    $("#txt-usuario").val(usuario.nomeUsuario);*/
}

function abrePainel() {
	bootbox.prompt({
	size: "small",
	title: "Email solicitante",	
	inputType: 'email',
	message: "Digite o email da conta que deseja recuperar",
	callback: function(result){
		/* Colocar aqui todo o código para adicionar na comanda os dados escolhidos... */
		//alert(result);
		if(result == null || result == ""){
			toastWarning("Email não digitado!");			
		} else{
			toastSuccess("Email enviado para: " + result);
			window.location.replace("login_recupera.html");
		}
		
	  }	
	});
}

function teste(){
	window.location.replace("login_recupera.html");
}
/*
 * FIM DA DECLARAÇÃO DE FUNÇÕES
 */

/*
 * COMANDOS EXECUTADOS AO CARREGAR O SCRIPT
 */
$("#btn-login").click(function (e) {
    login();
});

$("#btn-senha").click(function (e){
	teste();
});



