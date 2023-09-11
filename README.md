# Ouvi Por Aí - Um web app pra compartilhar frases inusitadas fora de contexto. 

Este é o README para o projeto "Ouvi Por Aí", um aplicativo web que permite aos usuários compartilhar frases ou informações interessantes que ouviram por aí. O projeto é composto por código JavaScript (JS), HTML e pelo framework TailwindCSS,  está hospedado no Netlify. Abaixo, você encontrará informações detalhadas sobre como o projeto funciona, como configurá-lo e como contribuir para o desenvolvimento.

## Visão Geral do Projeto

O "Ouvi Por Aí" é uma aplicação web simples que permite aos usuários:

- Enviar frases ou informações interessantes que ouviram.
- Visualizar frases compartilhadas por outros usuários.
- Deletar frases específicas pelo ID.
- Copiar o link do servidor para a área de transferência para compartilhar com outras pessoas.

## Funcionalidades Principais

### 1. Enviar uma Nova Frase

Os usuários podem inserir uma frase ou informação interessante na caixa de texto fornecida e clicar no botão "Enviar" para compartilhá-la. A frase é enviada para o servidor por meio de uma solicitação POST.

### 2. Visualizar Frases Compartilhadas

As frases compartilhadas por outros usuários são exibidas na caixa de texto de exibição. As frases são recuperadas do servidor por meio de uma solicitação GET e exibidas na interface do usuário.

### 3. Deletar Frases por ID

Os usuários podem especificar o ID de uma frase que desejam excluir e clicar no botão "Deletar Frase". A frase correspondente é então excluída do servidor por meio de uma solicitação DELETE.

### 4. Copiar o Link do Servidor

Existe um botão "Compartilhar" que permite aos usuários copiar o link do servidor para a área de transferência. Isso facilita o compartilhamento do aplicativo com outras pessoas.

## Configuração do Projeto

Para configurar e executar este projeto em sua máquina local, siga estas etapas:

1. Clone o repositório do GitHub em seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/Gabbyroba/Opa-UI.git
   ```

2. Abra o arquivo `index.html` em seu navegador ou hospede-o em um servidor da web local para testar a funcionalidade.

3. Certifique-se de que você tenha acesso à internet, pois o aplicativo faz chamadas à API hospedada no Netlify.

## Contribuindo

Se você deseja contribuir para este projeto, siga estas diretrizes:

1. Fork o repositório para sua própria conta.

2. Clone o fork em seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/seu-usuario/Opa-UI.git
   ```

3. Crie uma nova branch para sua contribuição:

   ```bash
   git checkout -b minha-contribuicao
   ```

4. Faça as alterações desejadas e teste-as localmente.

5. Commit suas alterações com mensagens claras e descritivas:

   ```bash
   git commit -m "Adiciona funcionalidade X" 
   ```

6. Envie suas alterações para o seu fork no GitHub:

   ```bash
   git push origin minha-contribuicao
   ```

7. Crie um Pull Request (PR) para o repositório principal. Certifique-se de descrever suas alterações de forma clara e concisa.

8. Aguarde a revisão e aprovação do PR.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- JavaScript (JS) para a lógica do aplicativo.
- HTML para a estrutura da página.
- CSS para o estilo da página.
- Hospedagem no Netlify.

## URL do Aplicativo

O aplicativo está disponível em [https://ouviporai.netlify.app/](https://ouviporai.netlify.app/).

Aproveite o "Ouvi Por Aí" para compartilhar e descobrir frases interessantes! Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue no repositório do GitHub ou entrar em contato com os desenvolvedores.

**Agradecemos por contribuir para o projeto "Ouvi Por Aí"!**
