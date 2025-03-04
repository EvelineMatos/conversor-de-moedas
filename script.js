function converterMoeda() {
    let moedaOrigem = document.getElementById("moedaOrigem").value;
    let moedaDestino = document.getElementById("moedaDestino").value;
    let valor = document.getElementById("valor").value;
    let resultadoElemento = document.getElementById("resultado");

    // Verifica se o valor foi preenchido
    if (!valor) {
        resultadoElemento.innerHTML = "Por favor, insira um valor.";
        resultadoElemento.style.color = "red";
        return;
    }

    // Verifica se a moeda de origem e destino são iguais
    if (moedaOrigem === moedaDestino) {
        resultadoElemento.innerHTML = "Selecione moedas diferentes para a conversão.";
        resultadoElemento.style.color = "orange";
        return;
    }

    // Faz a requisição para a API de conversão de moedas
    fetch(`https://api.frankfurter.app/latest?amount=${valor}&from=${moedaOrigem}&to=${moedaDestino}`)
        .then(response => response.json())
        .then(data => {
            let taxa = data.rates[moedaDestino];
            resultadoElemento.innerHTML = `Resultado: ${taxa} ${moedaDestino}`;
            resultadoElemento.style.color = "#007bff";
        })
        .catch(() => {
            resultadoElemento.innerHTML = "Erro ao obter a conversão.";
            resultadoElemento.style.color = "red";
        });
}
