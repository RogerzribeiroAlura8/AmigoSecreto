Projeto: Sorteio de Amigo Secreto

Este projeto foi criado para facilitar o sorteio de amigos secretos utilizando uma interface HTML simples. A ideia central era inserir nomes em uma lista e sortear um deles aleatoriamente, garantindo uma experiência prática e eficiente. O projeto foi desenvolvido utilizando HTML, JavaScript e Visual Studio Code, com integração ao GitHub para compartilhamento e versionamento.
🔍 Funcionalidades
    1. Adicionar Participantes:
        ◦ Permite inserir nomes de participantes na lista.
        ◦ Garante que o nome seja válido.
        ◦ Exibir  mensagem “Por favor, insira um nome válido”.
    2. Sorteio de Nome:
        ◦ Seleciona aleatoriamente um nome da lista de participantes.
        ◦ Exibe o nome sorteado de forma clara.
    3. Mensagens de Erro:
        ◦ Mostra alertas úteis, como:
            ▪ Por favor, insira um nome válido.
🛠️ Tecnologias Utilizadas
    • HTML5
    • CSS3
    • JavaScript
    • Visual Studio Code
    • Git e GitHub
🚀 Desenvolvimento e Solução Implementada
Inicialmente, o projeto estava solucionando pares de amigos secretos devido a uma lógica errada na função de sorteio, que utilizava uma abordagem destinada à criação de pares. Após identificar o problema, ajustamos o código para selecionar apenas um nome por sorteio, solucionando o comportamento incorreto. As mudanças foram feitas na função sortearAmigo().
Antes: A função gerava duplas de participantes, mesmo quando apenas um nome deveria ser sorteado. Depois: Com a nova lógica, a função utiliza Math.random() para selecionar um único nome da lista.
Comandos Utilizados para Integração com o GitHub
Os comandos para iniciar a integração foram executados no terminal do VS Code. Seguem abaixo os comandos utilizados:
bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/RogerzribeiroAlura8/AmigoSecreto/tree/main
git push -u origin main
🌐 Publicação
Depois que o projeto foi concluído e funcionando corretamente, foi publicado no GitHub. Tive algumas dificuldades para compartilhar o projeto. No entanto, após revisar a aula, consegui entender.
Link para Acessar o Projeto:
RogerzribeiroAlura8/AmigoSecreto 



