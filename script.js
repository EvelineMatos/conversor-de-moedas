// Função assíncrona para converter moeda
async function converterMoeda() {
    // Obtém os valores selecionados nos campos de entrada
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const valor = document.getElementById("valor").value;

    // Validação: verifica se um valor foi inserido
    if (!valor) {
        alert("Por favor, insira um valor para converter.");
        return;
    }

    try {
        // Faz a requisição para a API Frankfurter para obter a taxa de câmbio
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${valor}&from=${moedaOrigem}&to=${moedaDestino}`);
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Atualiza o resultado na interface com o valor convertido
        document.getElementById("resultado").innerText = `Resultado: ${data.rates[moedaDestino]} ${moedaDestino}`;
    } catch (error) {
        // Tratamento de erro caso a requisição falhe
        document.getElementById("resultado").innerText = "Erro ao obter a conversão. Tente novamente.";
    }
}