// Variáveis para os elementos HTML
const getFraseTextbox = document.getElementById("get-frase-textbox");
const exibirFraseTextbox = document.getElementById("exibir-frase-textbox");
const botaoEnviar = document.getElementById("botao-enviar");
const fraseIdInput = document.getElementById("frase-id");
const botaoDeletarFrase = document.getElementById("botao-deletar-frase");

// URL da API Oracle
const apiUrl = "https://g2db51f405a4261-opadbo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/frases_inusitadas/";

// Variável para armazenar as frases formatadas
let frasesFormatadas = [];

// Função para listar todas as frases da API Oracle
async function listarFrasesDaAPI() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
        });

        if (response.status === 200) {
            const data = await response.json();

            // Formate as frases no formato "Id 0000 - 'Frase de exemplo'"
            frasesFormatadas = data.items.map((item) => {
                return `Id ${item.id.toString().padStart(5, '0')} - "${item.frase}"`;
            });

            // Atualize a caixa de texto para exibir as frases formatadas
            exibirFraseTextbox.value = frasesFormatadas.join('\n');
        } else {
            console.error("Erro ao listar frases:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao listar frases:", error);
    }
}


// Função para enviar uma nova frase para a API Oracle
async function enviarFraseParaAPI() {
    const novaFrase = {
        id: Date.now(), // Gerando um ID único
        frase: getFraseTextbox.value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaFrase),
        });

        if (response.status === 201) {
            // Envio bem-sucedido, limpa o campo de entrada após enviar a frase
            getFraseTextbox.value = "";
            // Chama a função para listar todas as frases novamente para atualizar a exibição
            listarFrasesDaAPI();
        } else {
            console.error("Erro ao enviar frase:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao enviar frase:", error);
    }
}

// Função para deletar uma frase da API por ID
async function deletarFrasePorIdNaAPI() {
    const id = fraseIdInput.value;

    try {
        const response = await fetch(apiUrl + id, {
            method: "DELETE",
        });

        if (response.status === 204 || response.status === 200) {
            // Remove a frase da lista de frases formatadas
            frasesFormatadas = frasesFormatadas.filter((frase) => !frase.includes(`Id ${id.toString().padStart(5, '0')} -`));

            // Atualiza a caixa de texto de exibição com a lista atualizada
            exibirFraseTextbox.value = frasesFormatadas.join('\n');

            // Limpe o campo de ID
            fraseIdInput.value = "";
        } else {
            console.error("Erro ao deletar frase:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao deletar frase:", error);
    }
}

// Adiciona event listeners para os botões
botaoEnviar.addEventListener("click", enviarFraseParaAPI);
botaoDeletarFrase.addEventListener("click", deletarFrasePorIdNaAPI);

// Chama a função listarFrasesDaAPI para exibir todas as frases ao carregar a página
listarFrasesDaAPI();