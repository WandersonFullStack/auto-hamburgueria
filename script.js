const forEach = document.getElementById('forEach');
let card = document.querySelector('.container');
const map = document.getElementById('map');
const filter = document.getElementById('filter');
const reduce = document.getElementById('reduce');

// Função para mostrar todos os produtos
function showAll(products) {
    let myCard = "";
    products.forEach(options => {
        myCard +=
            `
            <div class="card">
                <img src="${options.src}" alt="${options.name}">
                <h2>${options.name}</h2>
                <div class="cart-container">
                    <button class="add-cart" onclick="addToCart(${products.indexOf(options)})">Adicionar</button>
                    <p class="price"> ${options.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </div>
        `;
    });
    card.innerHTML = myCard;
}

// Evento para mostrar todos os produtos
forEach.addEventListener('click', () => showAll(menuOptions));

// Evento para aplicar desconto aos produtos
map.addEventListener('click', () => {
    const discount = menuOptions.map(options => ({
        ...options,
        price: options.price * 0.9,
    }));
    showAll(discount);
});

// Evento para filtrar os produtos veganos
filter.addEventListener('click', () => {
    const vegan = menuOptions.filter(options => options.vegan === true);
    showAll(vegan);
});

// Array para armazenar os produtos no carrinho
const productCart = [];

// Função para adicionar um produto ao carrinho
function addToCart(index) {
    const selectedProduct = menuOptions[index];
    productCart.push(selectedProduct);
    alert(`Produto adicionado ao carrinho: ${selectedProduct.name}`);
    console.log('Carrinho atual:', productCart);
    updateCartTotal();
}

// Função para atualizar o total do carrinho
function updateCartTotal() {
    const total = productCart.reduce((acc, item) => acc + item.price, 0);
    const cartDisplay = productCart.length > 0 ? `
    <div class="cart-total">
            <h2>Carrinho de Compras</h2>
            ${productCart.map(item => `
                <div class="cart-item">
                    <img src="${item.src}" alt="${item.name}">
                    <p>${item.name}</p>
                    <p>${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            `).join('')}
            <div class="total-price">
                <h3>Total do Carrinho:</h3>
                <p class="price">${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
    </div>
    ` : 'Carrinho vazio';
    card.innerHTML = cartDisplay;
}

// Evento para atualizar o total do carrinho
reduce.addEventListener('click', () => updateCartTotal());
