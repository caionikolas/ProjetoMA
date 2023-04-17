var valor_acao = 49.02
setInterval(attValorAcao, 10000);

function adicionarLinha() {
    var qnt = document.getElementById("qnt").value;
    if (qnt.trim() == "") {
        alert("Por favor, preencha o campo.");
        return false;
    } else if (isNaN(qnt)) {
        alert("Por favor, digite apenas números.");
        return false;
    }
    var numero_aleatorio = Math.floor(Math.random() * 100000); // Gera um número aleatório de 5 dígitos
    var codigo_unico = "COD-" + numero_aleatorio.toString(); // Cria o código único com o número aleatório
    var funcao = document.querySelector('input[name="funcao"]:checked').value;
    var tx_corretagem = 0.00027;
    var valor_op = qnt * valor_acao ;
    var imposto = valor_op * tx_corretagem;
    if (funcao == 'Compra') {
        var valor_final = (valor_op + imposto).toFixed(2);
        op = '-'
    } else if (funcao == "Venda") {
        var valor_final = (valor_op - imposto).toFixed(2);
        op = '+'
    }
    
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // Observe que os meses começam em 0
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Seleciona a tabela e adiciona uma nova linha
    var tabela = document.querySelector("table");
    var linha = tabela.insertRow();

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
    celuladate.innerHTML = dataFormatada;
    celulaqnt.innerHTML = qnt;
    celulafuncao.innerHTML = funcao;
    celulavalor_acao.innerHTML = `$ ${valor_acao}`;
    celulatx_corretagem.innerHTML = tx_corretagem*100;
    celulavalor_op.innerHTML = `R$ ${valor_op.toFixed(2)} `;
    celulaimposto.innerHTML = imposto.toFixed(2);
    celulavalor_final.innerHTML = `R$  ${op + valor_final}`;
}

function attValorAcao() {
    // código para atualizar o valor da ação...


        
    const porcentagem = Math.floor(parseFloat((Math.random() * 15).toFixed(2))); // porcentagem aleatória entre 0 e 100
    const operacao = Math.random() < 0.5 ? '+' : '-'; // operação aleatória '+' ou '-'
    
    if (operacao === '+') {
        valor_acao += valor_acao * (porcentagem / 100); // adiciona a porcentagem ao valor
    } else {
        valor_acao -= valor_acao * (porcentagem / 100); // subtrai a porcentagem do valor
    }
    valor_acao = parseFloat((parseFloat(valor_acao)).toFixed(2))
    const spanValor = document.getElementById("valor_acao");
    spanValor.textContent = "$" + valor_acao.toFixed(2);
}
document.getElementById("valor_acao").innerHTML = '$'+valor_acao;
setInterval(minhaFuncao, 1000);