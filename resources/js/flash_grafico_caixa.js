var vcaixa = [];

function montarGraficoCaixa(dados) {

	//------------------------------------------------------------
    // Inicializa as variáveis -----------------------------------
    //------------------------------------------------------------
	vcaixa = [];
	var caixas;
	if(dados != null){
		caixas = dados.caixas;
	}
    // ------------------------------------------------------------

  //------------------------------------------------------------
    // Remove dados anteriores se existirem ----------------------
    //------------------------------------------------------------
    $("#tbody-tabela-caixas").find("tr").remove(); // Remove a tabela de venda por caixa
    $('#venda-por-caixa').empty(); // Remove o gráfico de venda por caixa
    
    if (caixas != null && caixas.length > 0) {

        // ------------------------------------------------------------
        // Carregamento da tabela -------------------------------------
        // ------------------------------------------------------------
        $(caixas).each(function(i, obj) {
            var cxCaixa = obj.caixa;
            var cxValorVenda = "R$ " + valorEmReais(obj.total);

            //---------------------------------------------------------
            //----- Carrega a tabela de flash de vendas ---------------
            //---------------------------------------------------------
              var tr = $("<tr>").append($("<td class='coluna-numero-caixa'>"));
              tr.find(".coluna-numero-caixa").text(cxCaixa);
              $(tr).append($("<td class='coluna-valor-venda'>"));
              tr.find(".coluna-valor-venda").text(cxValorVenda);
              $(tr).appendTo($("#tbody-tabela-caixas"));
            //---------------------------------------------------------

            vcaixa.push({
                "caixa": "Caixa " + obj.caixa,
                "valorvenda": obj.total.toFixed(2)
            });

        });

        // ------------------------------------------------------------
        // Carrega gráfico de venda por caixa -------------------------
        // ------------------------------------------------------------
        /*
         Morris.Line({
            element: 'venda-por-caixa',
            data: vcaixa,
            xkey: 'periodo',
            ykeys: ['caixa', 'valorvenda'],
            labels: ["Caixa", "Valor"],
            smooth: false,
            parseTime: false
          });
        */
  					Morris.Bar({
  						element: 'venda-por-caixa',
  						resize: true,
  						barColors: ['#1e90ff'],
  						data: vcaixa,
  					  xkey: 'caixa',
  					  ykeys: ['valorvenda'],
  					  labels: ['Valor']
  					});

            document.getElementById("secao-caixa").style.display = 'block';

        
    }
    
}
