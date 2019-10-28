var categorias;
var produtos;
function onLoadProdutos(){
    atualizarToken();
    buscarCategorias();
}
function buscarCategorias(){
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
            $("#div-produtos").find("div").remove();
            for(i=0;i<categorias.length;i++){
                var obj = categorias[i];
                var catId = obj.id;
                var catName = obj.name;
                var div = $("<div class='row' id='div-row-"+catId+"'>").append($("<h2 class='nome-categoria'>"));
                div.find(".nome-categoria").text(catName);
                $(div).appendTo($("#div-produtos"));
                var tbl = document.createElement("table");
                tbl.setAttribute("id", "#tabela-produtos-"+catId);
                tbl.setAttribute("cellpadding", "0");
                tbl.setAttribute("cellspacing", "0");
                tbl.setAttribute("border", "0");
                tbl.classList.add("table");
                tbl.classList.add("table-striped");
                tbl.classList.add("table-bordered");
                tbl.classList.add("datatables");
                var thd = document.createElement("thead");
                var thd_tr = document.createElement("tr");
                var thd_tr_td = document.createElement("td");
                thd_tr_td.appendChild(document.createTextNode("Código"));
                thd_tr.appendChild(thd_tr_td);
                thd_tr_td = document.createElement("td");
                thd_tr_td.appendChild(document.createTextNode("Descrição"));
                thd_tr.appendChild(thd_tr_td);
                thd_tr_td = document.createElement("td");
                thd_tr_td.appendChild(document.createTextNode("Detalhes"));
                thd_tr.appendChild(thd_tr_td);
                thd_tr_td = document.createElement("td");
                thd_tr_td.appendChild(document.createTextNode("Preço"));
                thd_tr.appendChild(thd_tr_td);
                thd.appendChild(thd_tr);
                var tbd = document.createElement("tbody");
                tbd.setAttribute("id", "tbody-tabela-produtos-"+catId)
                tbl.appendChild(thd);
                tbl.appendChild(tbd);
                $(tbl).appendTo(div);
                buscarProdutos(catId);
            }
        },
        error: function(erro) {
            alert("Erro ao listar produtos! "+erro);
            console.log(erro);
        }
    });
}
function buscarProdutos(idCategoria){
    var URL = "https://pos-api.ifood.com.br/v1.0/merchants/538087/menus/categories/"+idCategoria;
    $.ajax({
        url: URL,
        headers: {
            Authorization: iFoodToken
        },
        data: {

        },
        success: function(resposta) {
            produtos = resposta;
            $("#tbody-tabela-produtos-"+idCategoria).find("tr").remove(); // Remove a tabela de venda por caixa
            if(produtos.skus != null){
                for(i=0;i<produtos.skus.length;i++){
                    var obj = produtos.skus[i];
                    var prdId = obj.id;
                    var prdCodigo = obj.externalCode;
                    var prdDescricao = obj.name;
                    var prdDetalhes = obj.description;
                    var prdPreco = obj.price.value;
                    var tr = $("<tr>").append($("<td class='coluna-codigo'>"));
                    tr.find(".coluna-codigo").text(prdCodigo);
                    $(tr).append($("<td class='coluna-nome'>"));
                    tr.find(".coluna-nome").text(prdDescricao);
                    $(tr).append($("<td class='coluna-detalhes'>"));
                    tr.find(".coluna-detalhes").text(prdDetalhes);
                    $(tr).append($("<td class='coluna-preco'>"));
                    tr.find(".coluna-preco").text(prdPreco);
                    var idTbody = "#tbody-tabela-produtos-"+idCategoria;
                    $(tr).appendTo($(idTbody));
                }
            }else{
                var tbl = document.getElementById("#tabela-produtos-"+idCategoria);
                tbl.parentNode.removeChild(tbl);
                var lblSemProdutos = $("<label>");
                lblSemProdutos.text("Nenhum produto cadastrado");
                $(lblSemProdutos).appendTo("#div-row-"+idCategoria);
            }
        },
        error: function(erro) {
            console.log(erro);
        }
    });
}