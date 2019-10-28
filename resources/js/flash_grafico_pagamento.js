var vpagamentos = [];

function montarGraficoPagamento(dados) {

	//------------------------------------------------------------
    // Inicializa as variáveis -----------------------------------
    //------------------------------------------------------------
	//------------------------------------------------------------
    // Remove dados anteriores se existirem ----------------------
    //------------------------------------------------------------
    $("#tbody-tabela-forma-pagamento").find("tr").remove(); // Remove a tabela de venda por forma de pagamento
    $("#venda-por-fpagamento").unbind();
    $("#venda-por-fpagamento").empty(); // Remove o gráfico de venda por forma de pagamento
	vpagamentos = [];
	var pagamentos;
	if(dados != null){
		pagamentos = dados.pagamentos;
	}
    // ------------------------------------------------------------

	if (pagamentos != null && pagamentos.length > 0) {

        $(pagamentos).each(function(i, obj) {
            var pgDescricao = obj.descricao;
            var pgValor = "R$ " + valorEmReais(obj.total);

            var tr = $("<tr>").append($("<td class='coluna-descricao'>"));
            tr.find(".coluna-descricao").text(pgDescricao);
            $(tr).append($("<td class='coluna-valor'>"));
            tr.find(".coluna-valor").text(pgValor);
            $(tr).appendTo($("#tbody-tabela-forma-pagamento"));

            vpagamentos.push({
                label: pgDescricao,
                data: Number(obj.total.toFixed(2))
            });
        });

        // ------------------------------------------------------------
        // Carrega gráfico de venda por forma de pagamento ------------
        // ------------------------------------------------------------
        $.plot('#venda-por-fpagamento', vpagamentos, {
            series: {
                pie: {
                    show: true,
                    resize: true,
                    radius: 0.7
                }
            },
            legend: {
                position: 'left'
            }
        });

        document.getElementById("secao-pagamento").style.display = 'block';

    }
    
}

function labelFormatter(label, series) {
    return "<div style='font-size:10pt;text-align:center padding:2px;color:white;background-color:rgba(0, 0, 0, 0.5);padding:2px 2px 2px 2px;'>" + label + "</div>";
}
