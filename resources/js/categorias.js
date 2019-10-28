var categorias;
function onLoadCategorias(){
    atualizarToken();
    var URL = "https://pos-api.ifood.com.br/v1.0/merchants/538087/menus/categories";
    $.ajax({
        url: URL,
        headers: {
            Authorization: iFoodToken
        },
        data: {

        },
        success: function(resposta) {
            categorias = resposta;
            $("#tbody-tabela-categorias").find("tr").remove(); // Remove a tabela de venda por caixa
            for(i=0;i<categorias.length;i++){
                var obj = categorias[i];
                var catId = obj.id;
                var catExternalCode = obj.externalCode;
                var catName = obj.name;
                var tr = $("<tr>").append($("<td class='coluna-id'>"));
                tr.find(".coluna-id").text(catId);
                $(tr).append($("<td class='coluna-codigo'>"));
                tr.find(".coluna-codigo").text(catExternalCode);
                $(tr).append($("<td class='coluna-nome'>"));
                tr.find(".coluna-nome").text(catName);
                $(tr).appendTo($("#tbody-tabela-categorias"));
            }
        },
        error: function(erro) {
            console.log(erro);
        }
    });
}