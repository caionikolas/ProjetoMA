const lista = [];
function adicionarLinha() {
    var codigo_unico = document.getElementById("cod").value;
    const regex = /^[A-Za-z]{4}[0-9]{1,2}$/;


    if (!regex.test(codigo_unico)) {
        alert('A string não segue a formatação adequada.');
        return;
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] == codigo_unico) {
              alert("Código já existente!");
              return; // encerra a função
            }
          }
    }


    var qnt = document.getElementById("qnt").value;
    if (qnt.trim() == "") {
        alert("Por favor, preencha o campo 'Quantidade' vazio.");
        return false;
    }
    var valor_acao = document.getElementById("ativo").value;
    var funcao = document.querySelector('input[name="funcao"]:checked').value;
    
    var tx_corretagem = document.getElementById("tx").value;
    alert(tx_corretagem)
    var valor_op = qnt * valor_acao;
    var imposto = 2;

    if (funcao == "Compra") {
        var valor_final = (valor_op + imposto).toFixed(2);
        op = '▲';
    } else if (funcao == "Venda") {
        var valor_final = (valor_op - imposto).toFixed(2);
        op = '▼';
    }

    // Seleciona a tabela e adiciona uma nova linha abaixo da última linha
    var data = document.getElementById("data").value
    if (data.trim() == "") {
        alert("Por favor, preencha a data.");
        return false;
    }
    data = moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
    var tabela = document.querySelector("table");
    var linha = tabela.insertRow();
    lista.push(codigo_unico);
    // Adiciona as células na nova linha
    var celulaCod = linha.insertCell();
    var celuladate = linha.insertCell();
    var celulaqnt = linha.insertCell();
    var celulavalor_acao = linha.insertCell();
    var celulafuncao = linha.insertCell();
    var celulatx_corretagem = linha.insertCell();
    var celulavalor_op = linha.insertCell();
    var celulaimposto = linha.insertCell();
    var celulavalor_final = linha.insertCell();

    // Define o valor das células
    celulaCod.innerHTML = codigo_unico;
    celuladate.innerHTML = data;
    celulaqnt.innerHTML = qnt;
    celulafuncao.innerHTML = funcao;
    celulavalor_acao.innerHTML = `$ ${valor_acao}`;
    celulatx_corretagem.innerHTML = tx_corretagem;
    celulavalor_op.innerHTML = `R$ ${valor_op.toFixed(2)} `;
    celulaimposto.innerHTML = imposto.toFixed(2);
    celulavalor_final.innerHTML = `R$  ${valor_final}`;

    
}
