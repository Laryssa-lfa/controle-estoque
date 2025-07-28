# Controle de Estoque
Projeto inicial de uma simples API em NodeJs para o Bootcamp da SoulCode. Turma: RN5 - Full Stack (React e Node) | GP.


## Dependências do Sistema
 * NodeJs 24.2.0
 * NPM 11.4.2
 * Express 5.1.0
 * cors 2.8.5
 * Firebase 13.4.0


## Replicando o Projeto

Para clonar o projeto

```bash
  git clone https://github.com/Laryssa-lfa/controle-estoque.git
```

Inicializar o servidor

```bash
  npm run dev
```


## Referências da API

No projeto existem duas API's, uma sobre os produtos cadastrados e outra sobre os usuários cadastrados.


### **Endpoints de Produtos**

* **Buscando todos os produtos**

```bash
  GET /produtos
```

Exemplo de resposta:

```bash
[
  {
    "id": "3bg5MFQEjDZCzCjyRQYM",
    "nome": "Smartphone Xiaomi Redmi",
    "preco": 1200,
    "quantidade": 1000
  },
  {
    "id": "HYjf0UPRRIEGBtthzhwi",
    "nome": "Geladeira Brastemp",
    "quantidade": 800,
    "preco": 2500
  }
]
```


* **Buscando um produto específico**

```http
  GET /produtos/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o produto |

Exemplo de resposta:

```bash
{
  "id": "HYjf0UPRRIEGBtthzhwi",
  "nome": "Geladeira Brastemp",
  "quantidade": 800,
  "preco": 2500
}
```


* **Criando um produto**

```http
  POST /produtos
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `nome` | `string` | Nome do produto |
| `quantidade` | `number` | Quantidade em estoque do produto |
| `preco` | `number` | Valor de venda do produto |

Exemplo de resposta:

```bash
Produto Cadastrado.
```


* **Editando um produto**

```http
  PUT /produtos/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o produto |
| `nome` | `string` | Nome do produto |
| `quantidade` | `number` | Quantidade em estoque do produto |
| `preco` | `number` | Valor de venda do produto |

**OBS.:** Pode alterar um ou mais campos do produto.

Exemplo de resposta:

```bash
Produto Alterado.
```


* **Excluindo um produto**

```http
  DELETE /produtos/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o produto |

Exemplo de resposta:

```bash
Produto Excluído.
```


### **Endpoints de Usuários**

* **Buscando todos os usuários**

```bash
  GET /users
```

Exemplo de resposta:

```bash
[
  {
    "id": "DX2s4mekJBGXIhceVEXr",
    "nome": "Mary Doe",
    "email": "mary.doe@email.com",
    "idade": "40"
  },
  {
    "id": "UwbdntTHjOPbbU3aSMpO",
    "nome": "John Doe",
    "email": "jhon.doe@email.com",
    "idade": "45"
  }
]
```


* **Buscando um usuário específico**

```http
  GET /users/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o usuário |

Exemplo de resposta:

```bash
{
  "id": "DX2s4mekJBGXIhceVEXr",
  "nome": "Mary Doe",
  "email": "mary.doe@email.com",
  "idade": "40"
}
```


* **Criando um usuário**

```http
  POST /users
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `nome` | `string` | Nome do usuário |
| `email` | `string` | E-mail do usuário |
| `idade` | `number` | Idade do usuário |

Exemplo de resposta:

```bash
Usuário Cadastrado.
```


* **Editando um usuário**

```http
  PUT /users/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o usuário |
| `nome` | `string` | Nome do usuário |
| `email` | `string` | E-mail do usuário |
| `idade` | `number` | Idade do usuário |

**OBS.:** Pode alterar um ou mais campos do usuário.

Exemplo de resposta:

```bash
Usuário Alterado.
```


* **Excluindo um usuário**

```http
  DELETE /users/:id
```

| Parâmetro | Tipo     | Descrição      |
| :-------- | :------- | :------------- |
| `id` | `string` | **Obrigatório**. Id que identifica o usuário |

Exemplo de resposta:

```bash
Usuário Excluído.
```
