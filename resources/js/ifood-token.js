var iFoodToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJkMjRlYzk2Ni01MDdmLTQ1M2YtYmEyNS0yNGQxN2UzMjFhMGIiLCJ1c2VyX25hbWUiOiJQT1MtMjUxNjU0NTQiLCJwcm9maWxlcyI6Ilt7XCJpZFwiOlwiMjFcIixcIm5hbWVcIjpcIlBPU1wifV0iLCJpc3MiOiJpRm9vZCIsImNsaWVudF9pZCI6Imd6c2lzdGVtYXMiLCJhdXRob3JpdGllcyI6WyJST0xFX0NMSUVOVCIsIlJPTEVfVFJVU1RFRF9DTElFTlQiXSwibXVzdF9jaGFuZ2VfcGFzc3dvcmQiOnRydWUsImF1ZCI6WyJraXRjaGVuIiwib2F1dGgtc2VydmVyIl0sInVzZXJfbWV0YWRhdGEiOjEwMTIwNDQsImJhY2tvZmZpY2VzIjoiW3tcImlkXCI6XCIxXCIsXCJuYW1lXCI6XCJPUEJSXCIsXCJkb21haW5cIjpcImlmb29kLmNvbS5iclwifV0iLCJwZXJtaXNzaW9ucyI6W10sInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sInRlbmFudElkIjoiNThkOTIyMTAtNDc2Mi0xMWU2LWJlYjgtOWU3MTEyOGNhZTc3IiwibWVyY2hhbnRzIjoiW3tcIm1lcmNoYW50VXVpZFwiOlwiYjZmNDM2ZjgtYzg3Zi00ODEzLTg3YTYtZjY5NzVlZmM2OTMyXCIsXCJtZXJjaGFudElkXCI6NTM4MDg3fV0iLCJleHAiOjE1NzE0MTE3NjQsImlhdCI6MTU3MTQwODE2NH0.GX4IgE6_wHESybJamzGWWozWyyLLxlIzD-oTbzi9YQrvlLOkygNSZXmZzLER5QLRD-XdIt2zoi5ImVcXBFz8I41lx3YHizdzj4gMdTq3GHcyJu4t6skr5plvfonn8b5CtVobTeX8Neo9EX32NKtN40Pe7JC1iX95jYzTxychzC8";

function atualizarToken(){
    var URL = "https://pos-api.ifood.com.br/oauth/token";
    var fd = new FormData();    
    fd.append("username", "POS-25165454");
    fd.append("password", "POS-25165454");
    fd.append("client_id", "gzsistemas");
    fd.append("client_secret", "GsPBvvYkr");
    fd.append("grant_type", "password");
    $.ajax({
        url: URL,
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        processData: false,
        contentType: false,
        data: fd,
        success: function(resposta) {
            iFoodToken = "Bearer "+resposta.access_token;
        },
        error: function(erro) {
            console.log(JSON.stringify(erro));
        }
    });
}