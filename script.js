const forEach = document.getElementById('forEach');
const card = document.querySelector('.container');
const map = document.getElementById('map');
const filter = document.getElementById('filter');
const reduce = document.getElementById('reduce');

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

forEach.addEventListener('click', () => showAll(menuOptions));

map.addEventListener('click', () => {
    const discount = menuOptions.map(options => ({
        ...options,
        price: options.price * 0.9,
    }));
    showAll(discount);
});

filter.addEventListener('click', () => {
    const vegan = menuOptions.filter(options => options.vegan === true);
    showAll(vegan);
});

const productCart = [];

function addToCart(index) {
    const selectedProduct = menuOptions[index];
    productCart.push(selectedProduct);
    console.log('Produto adicionado ao carrinho:', selectedProduct.name);
    console.log('Carrinho atual:', productCart);
    updateCartTotal();
}

function updateCartTotal() {
    const total = productCart.reduce((acc, item) => acc + item.price, 0);
    const cartDisplay = `
        <div class="card">
            <h2>Carrinho de Compras</h2>
            ${productCart.map(item => `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            `).join('')}
            <h3>Total do Carrinho:</h3>
            <p class="price">${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
    `;
    card.innerHTML = cartDisplay;
}

reduce.addEventListener('click', () => updateCartTotal());
