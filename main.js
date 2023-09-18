const apiUrl = 'https://finalopabackend.onrender.com';
let idCounter = 0; // Contador para gerar IDs numéricos únicos

// Enviar nova frase
function enviarNovaFrase() {
    const frase = document.getElementById('get-frase-textbox').value;

    // Verifica se a frase não está vazia
    if (!frase.trim()) {
        console.error('Frase inválida. Insira uma frase.');
        return;
    }

    const id = idCounter++; // Use o valor atual do contador como ID e, em seguida, incremente

    fetch(`${apiUrl}/enviarfrases`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, frase }), // Inclui o ID no objeto enviado
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Limpa o campo de entrada
            document.getElementById('get-frase-textbox').value = '';

            listarFrases();
        })
        .catch(error => console.error('Erro ao enviar a frase:', error));
}

function confirmarPostagem() {
    const botaoEnviar = document.getElementById('botao-enviar');
    botaoEnviar.addEventListener('click', enviarNovaFrase);
}

function listarFrases() {
    fetch(`${apiUrl}/listarfrases`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                const frasesComIDs = data.map((item, index) => `ID: ${index} - ${item}`).join('\n');
                exibirFrase(frasesComIDs);
            } else {
                console.log("Nenhuma frase inusitada disponível no momento.");
            }
        })
        .catch(error => console.error('Erro ao listar frases:', error));
}


function exibirFrase(frase) {
    var textarea = document.getElementById('exibir-frase-textbox');
    textarea.value = frase;
}

confirmarPostagem();
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