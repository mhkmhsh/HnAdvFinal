//For the stars in the contact form
const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('click', (e) => {
    // You can handle click event here, like sending rating data to the server
    console.log('Rated:', e.target.value);
  });
});
//end of Stars

//CART JAVA 

const items = [
  { id: 1, name: 'Train Set', price: 50 },
  { id: 2, name: 'Blocks', price: 20 },
  { id: 3, name: 'Plane', price: 15 },
  { id: 4, name: 'Car', price: 30 },
  { id: 5, name: 'Item', price: 0},
  { id: 6, name: 'Item ', price: 0 },
  { id: 7, name: 'Item', price: 0},
  { id: 8, name: 'Item ', price:0 },
  { id: 9, name: 'Item', price:  0},
  { id: 10, name: 'Item', price: 0},
];

let cart = [];

function addItemToCart(itemId) {
  const item = items.find(i => i.id === itemId);
  cart.push(item);
  renderCart();
}

function renderGrid() {
  const grid = document.getElementById('itemGrid');
  items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.innerHTML = `<h3>${item.name}</h3><p>$${item.price}</p><button class="button-56" role="button" onclick="addItemToCart(${item.id})">Add to Cart</button>`;
      grid.appendChild(div);
  });
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
  });
}

function checkout() {
  alert('Checkout not implemented');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
});

// END OF CART JAVA 