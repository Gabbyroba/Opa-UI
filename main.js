// URL da API Oracle
const oracleApiUrl = "https://g2db51f405a4261-opadatabase.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/frases_inusitadas/";

// Função para enviar uma nova frase para a API Oracle
function enviarNovaFrase() {
    const frase = document.getElementById('get-frase-textbox').value;

    // Verifica se a frase não está vazia
    if (!frase.trim()) {
        console.error('Frase inválida. Insira uma frase.');
        return;
    }

    // Cria um objeto com a frase
    const novaFrase = { frase };

    // Envia a frase para a API Oracle
    fetch(oracleApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaFrase),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar a frase.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message); // Exibe a mensagem de sucesso
        const id_real = data.id; // Obtém o ID real atribuído pela API

        // Limpa o campo de entrada
        document.getElementById('get-frase-textbox').value = '';

        // Exibe a frase com o ID real na text-box 2
        document.getElementById('exibir-frase-textbox').value = `ID: ${id_real} - ${frase}`;
    })
    .catch(error => console.error('Erro ao enviar a frase:', error));
}

// Função para listar todas as frases da API Oracle
function listarFrases() {
    fetch(`${oracleApiUrl}`)
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            const frasesComIDs = data.items.map(item => `ID: ${item.id} - ${item.frase}`).join('\n');
            exibirFrase(frasesComIDs);
        } else {
            console.log("Nenhuma frase inusitada disponível no momento.");
        }
    })
    .catch(error => console.error('Erro ao listar frases:', error));
}

// Função para exibir frases na caixa de texto
function exibirFrase(frases) {
    const textarea = document.getElementById('exibir-frase-textbox');
    textarea.value = frases;
}

listarFrases();

// Configura o botão de envio
const botaoEnviar = document.getElementById('botao-enviar');
botaoEnviar.addEventListener('click', () => { enviarNovaFrase, listarFrases
});

// Função para deletar uma frase da API Oracle por ID
function deletarFrasePorID() {
    const idFrase = parseInt(document.getElementById('frase-id').value); // Pegar o ID da entrada

    if (!isNaN(idFrase) && idFrase >= 0) {
        fetch(`${oracleApiUrl}/${idFrase}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar a frase.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message); // Exibe a mensagem de sucesso
            listarFrases();
        })
        .catch(error => console.error('Erro ao deletar a frase:', error));
    } else {
        console.log('ID de frase inválido. Insira um número inteiro válido.');
    }
}

// Configura o botão de deletar frase
const botaoDeletarFrase = document.getElementById('botao-deletar-frase');
botaoDeletarFrase.addEventListener('click', deletarFrasePorID);

// Inicializa a lista de frases
listarFrases();

// Função para copiar o link do servidor para a área de transferência
function copyServerLink() {
    const serverLink = "ouviporai.netlify.app/"; 
    const tempTextArea = document.createElement("textarea");
    
    tempTextArea.value = serverLink;
    
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        document.execCommand("copy");
        alert("Link copiado para a área de transferência: " + serverLink);
    } catch (err) {
        console.error("Erro ao copiar o link: ", err);
    } finally {
        document.body.removeChild(tempTextArea);
    }
}

// Configura o botão de compartilhar
const botaoCompartilhar = document.getElementById("botao-compartilhar");
botaoCompartilhar.addEventListener("click", copyServerLink);