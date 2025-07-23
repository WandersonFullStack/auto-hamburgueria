# Conceitos de JavaScript - Projeto Carrinho de Compras

Este projeto demonstra o uso dos principais métodos de array em JavaScript através de um sistema de carrinho de compras.

## 📚 Conceitos Explicados

### 1. **Função `showAll` - Conceito: forEach**

```javascript
products.forEach(options => {
    myCard += `<div class="card">...</div>`;
});
```

**Conceito**: O `forEach` é um método de array que executa uma função para cada elemento do array, sem retornar um novo array.

**No código**: A função `showAll` usa `forEach` para iterar sobre cada produto e construir cards HTML. Cada produto é processado individualmente e adicionado à string `myCard`.

### 2. **Evento `map` - Conceito: Array.map()**

```javascript
const discount = menuOptions.map(options => ({
    ...options,
    price: options.price * 0.9,
}));
```

**Conceito**: O método `map()` cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

**No código**: Aqui, `map` é usado para criar um novo array de produtos com 10% de desconto (multiplica o preço por 0.9). O operador spread (`...options`) copia todas as propriedades do produto original e sobrescreve apenas o preço.

### 3. **Evento `filter` - Conceito: Array.filter()**

```javascript
const vegan = menuOptions.filter(options => options.vegan === true);
```

**Conceito**: O método `filter()` cria um novo array contendo apenas os elementos que passam em um teste (retornam `true`).

**No código**: Filtra apenas os produtos que têm a propriedade `vegan` igual a `true`, criando um array só com produtos veganos.

### 4. **Função `addToCart` - Conceitos: Arrays e Manipulação**

```javascript
function addToCart(index) {
    const selectedProduct = menuOptions[index];
    productCart.push(selectedProduct);
    alert(`Produto adicionado ao carrinho: ${selectedProduct.name}`);
}
```

**Conceitos**:
- **Arrays como estrutura de dados**: `productCart` é usado como uma lista para armazenar produtos
- **push()**: Método que adiciona um elemento ao final do array
- **Índices**: Usa o índice para acessar um produto específico em `menuOptions`

### 5. **Função `updateCartTotal` - Conceito: Array.reduce()**

```javascript
const total = productCart.reduce((acc, item) => acc + item.price, 0);
```

**Conceitos**:
- **reduce()**: Método que executa uma função redutora em cada elemento do array, resultando em um único valor. Aqui soma todos os preços.
  - `acc` (acumulador): mantém o valor acumulado
  - `item`: elemento atual sendo processado
  - `0`: valor inicial do acumulador

- **Template literals**: Usa template strings (` `` `) para criar HTML dinamicamente

- **map() + join()**: Combina `map` para criar HTML de cada item e `join('')` para unir todos em uma única string

## 📋 Resumo dos Métodos de Array

| Método | Descrição | Retorna | Uso no Projeto |
|--------|-----------|---------|----------------|
| **forEach** | Itera sem retornar novo array (efeitos colaterais) | undefined | Criar HTML dos produtos |
| **map** | Transforma cada elemento, retorna novo array | Novo array | Aplicar desconto nos preços |
| **filter** | Seleciona elementos que passam no teste | Novo array filtrado | Mostrar apenas produtos veganos |
| **reduce** | Reduz array a um único valor | Valor único | Calcular total do carrinho |

## 🚀 Funcionalidades

- **Mostrar Todos**: Exibe todos os produtos disponíveis
- **Aplicar Desconto**: Aplica 10% de desconto em todos os produtos
- **Filtrar Veganos**: Mostra apenas os produtos veganos
- **Carrinho de Compras**: Adiciona produtos e calcula o total
- **Atualizar Total**: Exibe o resumo do carrinho com o valor total

## 💡 Conceitos Adicionais

- **Event Listeners**: Captura cliques nos botões
- **DOM Manipulation**: Atualiza o conteúdo HTML dinamicamente
- **Template Literals**: Cria strings HTML complexas
- **Spread Operator**: Copia objetos mantendo imutabilidade
- **toLocaleString**: Formata valores monetários em Real brasileiro

Esses são os principais conceitos de programação funcional aplicados a arrays em JavaScript!