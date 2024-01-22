## Requisitos para rodar o código

-- ter instalado na maquina:
yarn,
react,
redux,
react-redux,
react-router-dom,
(caso yarn install não instale as dependencias de forma correta é necessário abrir o packge.json e instalar manualmente)

-- entra na API da Marvel (https://developer.marvel.com/docs);
na aba de get keys fazer login(criar conta se necessário)
na parte inferior vai ter como você adicionar novos links de permissão para a sua key
o link novo n pode conter http:// tem que o link puro (colocar um \* resolve o problema)
pegue a key e troque ela no arquivo Utils/apiUtils.ts na variavel publicKey

-- após isso ele deve permitir fazer buscas
tem o campo de herois q busca o heroi pelo nome após clicar na lupa
o botão toogle na pagina tem q ordenar e desordenar novamente
clicar no nome do heroi deve redirecionalo para a pagina de detalhes do mesmo
o coração permite manter esse heroi como seu favorito para o filtro de somente favoritos
clicar em cima de somente favoritos ativa esse filtro na pagina

-- na pagina de detalhe você deve poder visualizar a descrição do heroi caso ele tenha, a foto o nome e os quadrinhos relacionados a ele
