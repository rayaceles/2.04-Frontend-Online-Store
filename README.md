# Bem vindo ao repositório do projeto de Front-End Online Store!

Esse foi um projeto desenvovido em grupo na Trybe, trata-se de um frontend para uma loja de departamentos virtual, baseado em um consumo de API.

Além do código desenvolvido em si, também foram utilizadas ferramentas de metodologias ágeis para o bom andamento do projeto.

Obs.: O CSS não foi desenvolvido aqui.

Os projeto será revisado.

## Sumário

- [Habilidades](#habilidades)
- [O que foi desenvolvido](#sobre)
- [Documentação da API do Mercado Livre](#documentação-da-api-do-mercado-livre)
- [Uso do Trello como ferramenta kanban](#uso-do-trello-como-ferramenta-kanban)
- [Descrição](#descrição)

## Habilidades

* Utilizados _Métodos Ágeis - Kanban (Trello) / Scrum_ para distribuição e execução das atividades.
* Utilizado _Javascript_ para como linguagem a aplicação.
* Utilizado consumo de _API - Mercado Livre_ como fonte de busca da aplição.

---

## Sobre

Neste projeto foi criada uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_.
Desenvolvemos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - Finalizar a compra (simulada) dos itens selecionados.

---

## Documentação da API do Mercado Livre

Essa página _web_ consome os dados da API do _Mercado Livre_ para realizar a busca de itens para a loja online. Para realizar essas buscas, são consultados os seguintes _endpoints_:

* todas as requisições abaixo são do tipo `GET`.
- Para listar as categorias disponíveis:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
- Para buscar detalhes de um item especifico:
  - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

## Uso do Trello como ferramenta kanban

Para organizar as atividades da equipe e dividir as tarefas através de um modelo de kanban.

[Trello](https://trello.com/).

---

## Descrição

1. Implementado o módulo de acesso à api do Mercado Livre
2. Implementada uma página de listagem de produtos
3. Implementada a página do carrinho de compras
4. Lista das categorias de produtos disponíveis via API na página principal
5. Busca por termos, com os dados resumidos, associados a esses termos
6. Busca por categoria e apresentando somente os produtos daquela categoria
7. Redirecionamento de tela com a exibição detalhada ao clicar na exibição resumida de um produto
8. Adicionar produtos no carrinho a partir da tela de listagem de produtos
9. Adicionar um produto ao carrinho a partir da tela de exibição detalhada
10. Visualizar lista de produtos do carrinho e permissão para alterar a quantidade
11. Permissão para avaliação e comentário sobre um produto na tela de exibição detalhada
12. Finalização da compra com um resumo dela, a partir do preenchimento dos dados e escolhendo a forma de pagamento
13. Quantidade de produtos no carrinho aparecendo ao lado do link para o carrinho, em todas as telas em que ele aparece
14. Quantidade de produtos para ao carrinho limitada pela quantidade disponível em estoque
15. Visualização de quais produtos tem o frete grátis

Por fazer:
16. Layout responsivo
17. Seletor para ordenação crescente e decrescente para por preço

---
