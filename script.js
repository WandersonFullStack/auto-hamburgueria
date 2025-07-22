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
                <p class="price"> ${options.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        `;
        card.innerHTML = myCard;
    })
}

forEach.addEventListener('click', () => showAll(menuOptions));


map.addEventListener('click', () => {
    const discount = menuOptions.map(options => ({
        ...options,
        price: options.price * 0.9,
    }));
    
    showAll(discount);
})


filter.addEventListener('click', () => {
    const vegan = menuOptions.filter(options => options.vegan === true);
    showAll(vegan);
})


reduce.addEventListener('click', () => {
    const total = menuOptions.reduce((acc, options) => acc + options.price, 0);
    myCard = `
        <div class="card">
            <h2>Total</h2>
            <p class="price"> ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
    `;
    card.innerHTML = myCard;
})