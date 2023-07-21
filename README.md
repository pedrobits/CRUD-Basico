# Aplicação Básica de CRUD - README

## Descrição
Este projeto é uma aplicação básica de CRUD (Create, Read, Update, Delete) em Node.js, que gerencia uma lista de produtos. A aplicação permite listar todos os produtos, criar novos produtos e apagar produtos existentes.

## Instalação e Execução
1. Certifique-se de ter o Node.js instalado em seu ambiente.
2. Faça o clone deste repositório em sua máquina local.
3. Navegue para a pasta raiz do projeto e instale as dependências utilizando o comando:
   ```
   npm install
   ```
4. Inicie o servidor usando o comando:
   ```
   npm start
   ```
   O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Listar Produtos
```
GET /product
```
Este endpoint retorna uma lista com todos os produtos existentes no banco de dados.

#### Resposta
```
Status: 200 OK
```
```json
{
  "erro": "não",
  "Resultado": [
    {
      "name": "Nome do Produto 1",
      "description": "Descrição do Produto 1",
      "image_url": "URL da imagem do Produto 1",
      "category": "Categoria do Produto 1"
    },
    {
      "name": "Nome do Produto 2",
      "description": "Descrição do Produto 2",
      "image_url": "URL da imagem do Produto 2",
      "category": "Categoria do Produto 2"
    },
    ...
  ]
}
```

### Criar Produto
```
POST /product/new
```
Este endpoint permite criar um novo produto no banco de dados. É necessário fornecer os seguintes campos no corpo da requisição:

- `name`: Nome do produto (obrigatório).
- `description`: Descrição do produto (obrigatório).
- `image_url`: URL da imagem do produto (obrigatório).
- `category`: Categoria do produto (obrigatório).

#### Resposta
```
Status: 200 OK
```
```json
{
  "erro": "não",
  "resultado": "Produto Incluído com sucesso.",
  "Data": [
    {
      "name": "Nome do Produto 1",
      "description": "Descrição do Produto 1",
      "image_url": "URL da imagem do Produto 1",
      "category": "Categoria do Produto 1"
    },
    {
      "name": "Nome do Produto 2",
      "description": "Descrição do Produto 2",
      "image_url": "URL da imagem do Produto 2",
      "category": "Categoria do Produto 2"
    },
    ...
  ]
}
```

### Apagar Produto
```
DELETE /product/delete
```
Este endpoint permite apagar um produto existente no banco de dados. É necessário fornecer o campo `name` no corpo da requisição com o nome do produto a ser apagado.

#### Resposta
```
Status: 200 OK
```
```json
{
  "erro": "não",
  "resultado": "Item apagado com sucesso."
}
```
ou
```
Status: 500 Internal Server Error
```
```json
{
  "erro": "sim",
  "resultado": "Não foi possível apagar este item. (Z.106)"
}
```

## Autor
PedroBits & Cia.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
