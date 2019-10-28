function inicializarPermissoes(){
	
	$('.toggle').toggles({off:true, width:70, height:30, text:{on:'SIM', off:'NÃO'}});
	
	// TRANSFERENCIAS
	$('#permiteTransferenciasDownloadUpload').data('toggles').toggle($('#hdpermiteTransferenciasDownloadUpload').val() == 'true');
	$('#permiteTransferenciasRedirecionamento').data('toggles').toggle($('#hdpermiteTransferenciasRedirecionamento').val() == 'true');
	$('#permiteTransferenciasCarga').data('toggles').toggle($('#hdpermiteTransferenciasCarga').val() == 'true');
	$('#permiteTransferenciasMovimento').data('toggles').toggle($('#hdpermiteTransferenciasMovimento').val() == 'true');
	$('#permiteTransferenciasArquivos').data('toggles').toggle($('#hdpermiteTransferenciasArquivos').val() == 'true');
	// ----------------------------
	$('#permiteTransferenciasDownloadUpload').on('toggle',function(e,active){$('#hdpermiteTransferenciasDownloadUpload').val(active);console.log('ATIVO: '+active);});
	$('#permiteTransferenciasRedirecionamento').on('toggle',function(e,active){$('#hdpermiteTransferenciasRedirecionamento').val(active);console.log('ATIVO: '+active);});
	$('#permiteTransferenciasCarga').on('toggle',function(e,active){$('#hdpermiteTransferenciasCarga').val(active);console.log('ATIVO: '+active);});
	$('#permiteTransferenciasMovimento').on('toggle',function(e,active){$('#hdpermiteTransferenciasMovimento').val(active);console.log('ATIVO: '+active);});
	$('#permiteTransferenciasArquivos').on('toggle',function(e,active){$('#hdpermiteTransferenciasArquivos').val(active);console.log('ATIVO: '+active);});
	// ============================
	
	// CAIXAS
	$('#permiteCaixasCadastro').data('toggles').toggle($('#hdpermiteCaixasCadastro').val() == 'true');
	$('#permiteCaixasFinalizadores').data('toggles').toggle($('#hdpermiteCaixasFinalizadores').val() == 'true');
	$('#permiteCaixasParametros').data('toggles').toggle($('#hdpermiteCaixasParametros').val() == 'true');
	$('#permiteCaixasComunicacao').data('toggles').toggle($('#hdpermiteCaixasComunicacao').val() == 'true');
	$('#permiteCaixasMenus').data('toggles').toggle($('#hdpermiteCaixasMenus').val() == 'true');
	// ----------------------------
	$('#permiteCaixasCadastro').on('toggle',function(e,active){$('#hdpermiteCaixasCadastro').val(active);console.log('ATIVO: '+active);});
	$('#permiteCaixasFinalizadores').on('toggle',function(e,active){$('#hdpermiteCaixasFinalizadores').val(active);console.log('ATIVO: '+active);});
	$('#permiteCaixasParametros').on('toggle',function(e,active){$('#hdpermiteCaixasParametros').val(active);console.log('ATIVO: '+active);});
	$('#permiteCaixasComunicacao').on('toggle',function(e,active){$('#hdpermiteCaixasComunicacao').val(active);console.log('ATIVO: '+active);});
	$('#permiteCaixasMenus').on('toggle',function(e,active){$('#hdpermiteCaixasMenus').val(active);console.log('ATIVO: '+active);});
	// ============================
	
	// CONSULTAS
	$('#permiteConsultasProdutos').data('toggles').toggle($('#hdpermiteConsultasProdutos').val() == 'true');
	$('#permiteConsultasCupons').data('toggles').toggle($('#hdpermiteConsultasCupons').val() == 'true');
	$('#permiteConsultasFechamento').data('toggles').toggle($('#hdpermiteConsultasFechamento').val() == 'true');
	$('#permiteConsultasFlash').data('toggles').toggle($('#hdpermiteConsultasFlash').val() == 'true');
	$('#permiteConsultasClientes').data('toggles').toggle($('#hdpermiteConsultasClientes').val() == 'true');
	// ----------------------------
	$('#permiteConsultasProdutos').on('toggle',function(e,active){$('#hdpermiteConsultasProdutos').val(active);console.log('ATIVO: '+active);});
	$('#permiteConsultasCupons').on('toggle',function(e,active){$('#hdpermiteConsultasCupons').val(active);console.log('ATIVO: '+active);});
	$('#permiteConsultasFechamento').on('toggle',function(e,active){$('#hdpermiteConsultasFechamento').val(active);console.log('ATIVO: '+active);});
	$('#permiteConsultasFlash').on('toggle',function(e,active){$('#hdpermiteConsultasFlash').val(active);console.log('ATIVO: '+active);});
	$('#permiteConsultasClientes').on('toggle',function(e,active){$('#hdpermiteConsultasClientes').val(active);console.log('ATIVO: '+active);});
	// ============================
	
	// SERVIÇOS
	$('#permiteServicosAutorizadorSAT').data('toggles').toggle($('#hdpermiteServicosAutorizadorSAT').val() == 'true');
	$('#permiteServicosTerminalImpressao').data('toggles').toggle($('#hdpermiteServicosTerminalImpressao').val() == 'true');
	$('#permiteServicosPostoCombustivel').data('toggles').toggle($('#hdpermiteServicosPostoCombustivel').val() == 'true');
	$('#permiteServicosIntegracaoFlexE').data('toggles').toggle($('#hdpermiteServicosIntegracaoFlexE').val() == 'true');
	$('#permiteServicosIntegracoes').data('toggles').toggle($('#hdpermiteServicosIntegracoes').val() == 'true');
	$('#permiteServicosIntegracaoCatraca').data('toggles').toggle($('#hdpermiteServicosIntegracaoCatraca').val() == 'true');
	$('#permiteServicosTokenApi').data('toggles').toggle($('#hdpermiteServicosTokenApi').val() == 'true');
	// ----------------------------
	$('#permiteServicosAutorizadorSAT').on('toggle',function(e,active){$('#hdpermiteServicosAutorizadorSAT').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosTerminalImpressao').on('toggle',function(e,active){$('#hdpermiteServicosTerminalImpressao').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosPostoCombustivel').on('toggle',function(e,active){$('#hdpermiteServicosPostoCombustivel').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosIntegracaoFlexE').on('toggle',function(e,active){$('#hdpermiteServicosIntegracaoFlexE').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosIntegracoes').on('toggle',function(e,active){$('#hdpermiteServicosIntegracoes').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosIntegracaoCatraca').on('toggle',function(e,active){$('#hdpermiteServicosIntegracaoCatraca').val(active);console.log('ATIVO: '+active);});
	$('#permiteServicosTokenApi').on('toggle',function(e,active){$('#hdpermiteServicosTokenApi').val(active);console.log('ATIVO: '+active);});
	// ============================
	
}
