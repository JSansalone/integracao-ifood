function onLoadProduto(){
    atualizarToken();
    var URL = "https://pos-api.ifood.com.br/v1.0/merchants/538087/menus/categories";
    $.ajax({
        url: URL,
        headers: {
            Authorization: iFoodToken
        },
        success: function(resposta) {
            categorias = resposta;
            $("#cmb-categorias").find("option").remove();
            for(i=0;i<categorias.length;i++){
                var obj = categorias[i];
                var catExternalCode = obj.externalCode;
                var catName = obj.name;
                var op = $("<option value='"+catExternalCode+"'>").text(catName);
                $(op).appendTo($("#cmb-categorias"));
            }
        },
        error: function(erro) {
            console.log(erro);
        }
    });
}
function salvarProduto(){
    var URL = "https://pos-api.ifood.com.br/v1.0/skus";
    var fd = new FormData();    
    fd.append( 'sku', JSON.stringify({
        "merchantId": 538087,
        "externalCode": $("#txt-codigo").val(),
        "availability": "AVAILABLE",
        "name": $("#txt-descricao").val(),
        "description": $("#txt-detalhes").val(),
        "order": $("#txt-ordem").val(),
        "price": {
            "originalValue": 0,
            "promotional": false,
            "value": $("#txt-preco").val()
        }
    }));
    $.ajax({
        url: URL,
        method: "POST",
        processData: false,
        contentType: false,
        headers: {
            Authorization: iFoodToken
        },
        data: fd,
        success: function(resposta) {
            vincularProdutoCategoria();
            alert("Produto salvo com sucesso!");
            window.location.href = "produtos.html";
        },
        error: function(erro) {
            alert("Erro ao salvar produto! "+JSON.stringify(erro));
            console.log(erro);
        }
    });
}
function vincularProdutoCategoria(){
    var URL = "https://pos-api.ifood.com.br/v1.0/categories/"+$("#cmb-categorias").val()+"/skus:link";
    $.ajax({
        url: URL,
        method: "POST",
        headers: {
            Authorization: iFoodToken,
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "merchantId": "538087",
            "order": 0,
            "externalCode": $("#txt-codigo").val()
        }),
        success: function(resposta) {
            
        },
        error: function(erro) {
            alert("Erro ao vincula produto à categoria! "+JSON.stringify(erro));
            console.log(erro);
        }
    });
}