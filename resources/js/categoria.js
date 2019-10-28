function salvarCategoria(){
    atualizarToken();
    var URL = "https://pos-api.ifood.com.br/v1.0/categories";
    $.ajax({
        url: URL,
        method: "POST",
        headers: {
            Authorization: iFoodToken,
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "merchantId": "538087",
            "availability": "AVAILABLE",
            "name": $("#txt-nome").val(),
            "order": $("#txt-ordem").val(),
            "template": "PADRAO",
            "externalCode": $("#txt-codigo").val()
        }),
        success: function(resposta) {
            alert("Categoria salva com sucesso!");
            window.location.href = "categorias.html";
        },
        error: function(erro) {
            alert("Erro ao salvar categoria! "+JSON.stringify(erro));
            console.log(erro);
        }
    });
}