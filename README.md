# Ouvi Por Aí - Compartilhando Frases Inusitadas

E aí, pessoal! Sejam bem-vindos ao projeto **Ouvi Por Aí**. Este é um web app onde você pode compartilhar aquelas frases e informações surpreendentes que você ouve por aí, sem contexto algum. Vamos dar uma olhada em como esse projeto funciona e como você pode começar a usá-lo e contribuir para o desenvolvimento.

## Visão Geral do Projeto

O **Ouvi Por Aí** é uma aplicação web simples que permite aos usuários:

- Enviar frases ou informações interessantes que ouviram.
- Visualizar frases compartilhadas por outros usuários.
- Deletar frases específicas pelo ID.
- Copiar o link do servidor para a área de transferência para compartilhar com outras pessoas.

## Funcionalidades Principais

### 1. Enviar uma Nova Frase

Basta digitar aquela frase engraçada, inusitada ou intrigante na caixa de texto e clicar em "Enviar". A frase será compartilhada com todos os outros usuários. Elas são enviadas para o servidor por meio de uma solicitação POST.

### 2. Visualizar Frases Compartilhadas

As frases compartilhadas por outros usuários são exibidas na caixa de texto de exibição. É uma coleção de pérolas engraçadas e surpreendentes! As frases são recuperadas do servidor por meio de uma solicitação GET e aparecem na tela para sua diversão.

### 3. Deletar Frases por ID

Se por acaso você desejar remover uma frase específica, basta informar o ID dela e clicar em "Deletar Frase". A frase será magicamente apagada do servidor por meio de uma solicitação DELETE.

### 4. Copiar o Link do Servidor

Quer compartilhar essa diversão com amigos? Clique no botão "Compartilhar" e o link do servidor será copiado para a sua área de transferência. Facilitando assim o compartilhamento com quem você quiser.

## Configuração do Projeto

Para configurar e executar este projeto em sua máquina local, siga estas etapas simples:

1. Faça um clone deste repositório para sua máquina:

   ```bash
   git clone https://github.com/Gabbyroba/Opa-UI.git
   ```

2. Abra o arquivo `index.html` em seu navegador ou, se preferir, hospede-o em um servidor da web local para testar todas as funcionalidades.

3. Lembre-se de estar conectado à internet, já que o aplicativo faz chamadas à API que está hospedada no Netlify.

## Contribuindo

Se você tem ideias brilhantes para tornar o **Ouvi Por Aí** ainda melhor, adoraríamos que você contribuísse para o projeto! Aqui estão os passos:

1. Faça um fork deste repositório para a sua própria conta.

2. Clone o fork em seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/seu-usuario/Opa-UI.git
   ```

3. Crie uma nova branch para a sua contribuição:

   ```bash
   git checkout -b minha-contribuicao
   ```

4. Faça as alterações que deseja e teste-as localmente.

5. Faça commits com mensagens claras e descritivas:

   ```bash
   git commit -m "Adiciona funcionalidade X" 
   ```

6. Envie suas alterações para o seu fork no GitHub:

   ```bash
   git push origin minha-contribuicao
   ```

7. Crie um Pull Request (PR) para o repositório principal. Certifique-se de descrever suas alterações de forma clara e concisa.

8. Aguarde a revisão e aprovação do PR.

## Oracle REST API - Frases Inusitadas

A URL REST [Oracle REST](https://g2db51f405a4261-opadbo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/frases_inusitadas/) é a interface de programação de aplicativos (API) que conecta o aplicativo "Ouvi Por Aí" à base de dados onde são armazenadas as frases inusitadas. Esta API permite que o aplicativo realize operações como listar, adicionar e deletar frases no banco de dados de forma segura e organizada.

### Banco de Dados Autônomo na Nuvem

Este banco de dados está hospedado em um ambiente de banco de dados autônomo na nuvem, o que significa que ele opera de forma independente e não requer gerenciamento manual extensivo. Ele é executado em infraestrutura gerenciada pela Oracle, proporcionando escalabilidade e alta disponibilidade.

### Tabela "frases_inusitadas"

A tabela "frases_inusitadas" é a estrutura de armazenamento onde todas as frases compartilhadas pelos usuários do aplicativo são registradas. Cada registro na tabela contém informações como o ID da frase e o texto da própria frase. Essa estrutura organizada permite ao aplicativo acessar e manipular as frases de forma eficiente.

Em resumo, a URL REST da Oracle é o ponto de acesso que permite ao aplicativo "Ouvi Por Aí" interagir com uma tabela SQL chamada "frases_inusitadas" em um banco de dados autônomo na nuvem. Isso garante que todas as frases compartilhadas pelos usuários sejam armazenadas e gerenciadas de maneira confiável e segura.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- JavaScript (JS) para a lógica do aplicativo.
- HTML para a estrutura da página.
- CSS com o framework TailwindCSS para estilizar a página.
- Hospedagem no Netlify.

## URL do Aplicativo

Você pode acessar o aplicativo no seguinte link: [Ouvi Por Aí](https://ouviporai.netlify.app/)

Divirta-se compartilhando e explorando frases inusitadas! Se tiver alguma dúvida ou sugestão, fique à vontade para me contatar. 🗨️🎉
