# Marvel Heroes ⚛️ 

Este projeto tem como objetivo consumir a [API da Marvel](https://developer.marvel.com/docs) para exibir informações sobre os heróis.

## Quer testar a aplicação?
-[Marvel-heroes](https://marvel-heroes-kappa.vercel.app/)


## Sobre o Projeto

O Marvel Heroes é uma aplicação web que utiliza a API da Marvel para fornecer informações detalhadas sobre heróis do universo Marvel. A aplicação oferece as seguintes funcionalidades:

- **Buscar Heróis:** Utilize a barra de pesquisa para encontrar heróis pelo nome.
- **Ordenar:** O botão "Ordenar" na página permite classificar heróis em ordem alfabética.
- **Detalhes do Herói:** Clique no nome de um herói para visualizar detalhes, incluindo descrição, imagem e quadrinhos relacionados.
- **Favoritos:** Marque um herói como favorito clicando no ícone de coração. Use o filtro "Somente Favoritos" para visualizar seus heróis favoritos.

## Requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

Além disso, será necessário obter uma chave de API da Marvel:

1. Acesse a [API da Marvel](https://developer.marvel.com/docs).
2. Faça login ou crie uma conta.
3. Na seção "Get Keys", adicione um novo link de permissão para a sua chave (sem `http://`, pode usar `*`).
4. Substitua a chave pública (publicKey) no arquivo `Utils/apiUtils.ts`.

Para mais detalhes, consulte a [documentação da API da Marvel](https://developer.marvel.com/docs).

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/marvel-heroes.git

# Acesse o diretório do projeto
cd marvel-heroes

# Instale as dependências
yarn install

