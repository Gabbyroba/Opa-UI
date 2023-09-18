// URL da API
const apiUrl = 'https://finalopabackend.onrender.com';

// Função para enviar uma nova frase
function enviarNovaFrase() {
    const frase = document.getElementById('get-frase-textbox').value;

    // Verifica se a frase não está vazia
    if (!frase.trim()) {
        console.error('Frase inválida. Insira uma frase.');
        return;
    }

    // Gera um ID único para a frase (pode ser feito de forma mais robusta)
    const id = Date.now(); // Use a data e hora atual como ID

    // Cria um objeto com o ID e a frase
    const novaFrase = { id, frase };

    // Envia a frase para a API
    fetch(`${apiUrl}/enviarfrases`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaFrase),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Exibe a resposta da API no console

            // Limpa o campo de entrada
            document.getElementById('get-frase-textbox').value = '';

            // Atualiza a lista de frases
            listarFrases();
        })
        .catch(error => console.error('Erro ao enviar a frase:', error));
}

// Função para listar frases
function listarFrases() {
    fetch(`${apiUrl}/listarfrases`)
        .then(response => response.json())
        .then(data => {
            // Verifica se a resposta contém frases
            if (Array.isArray(data)) {
                // Formata as frases para exibição
                const frasesFormatadas = data.map((frase, index) => `ID: ${frase.id} - ${frase.frase}`).join('\n');
                
                // Exibe as frases na caixa de texto
                exibirFrase(frasesFormatadas);
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

// Configura o botão de envio
const botaoEnviar = document.getElementById('botao-enviar');
botaoEnviar.addEventListener('click', enviarNovaFrase);

// Inicializa a lista de frases
listarFrases();

// Função para deletar uma frase pelo ID
function deletarFrasePorID() {
    const idFrase = parseInt(document.getElementById('frase-id').value); // Pegar o ID da entrada

    if (!isNaN(idFrase) && idFrase >= 0) {
        fetch(`${apiUrl}/${idFrase}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                listarFrases();
            })
            .catch(error => console.error('Erro ao deletar a frase:', error));
    } else {
        console.log('ID de frase inválido. Insira um número inteiro válido.');
    }
}

const botaoDeletarFrase = document.getElementById('botao-deletar-frase');
botaoDeletarFrase.addEventListener('click', () => {
    deletarFrasePorID();
    listarFrases();
});

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

const botaoCompartilhar = document.getElementById("botao-compartilhar");
botaoCompartilhar.addEventListener("click", copyServerLink);