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
  { id: 1, name: 'Train Set', price: 50, image: 'Images/train1.jpg', url: 'train.html' },
  { id: 2, name: 'Blocks', price: 20, image: 'Images/wooden-buddies.png', url: 'blockfriend.html' },
  { id: 3, name: 'Plane', price: 15, image: 'Images/plane1.jpg', url: 'plane.html' },
  { id: 4, name: 'Car', price: 30, image: 'Images/car.png', url: 'car.html' },
  { id: 5, name: 'Boat', price: 25, image: 'Images/boat2.jpg', url: 'boat.html' },
  { id: 6, name: 'Camera ', price: 15, image: 'Images/camera1.jpg', url: 'camera.html' },
  
  
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
    div.className = 'grid-item col';
    div.innerHTML = `
      <div class="card" onclick="openItemPage('${item.url}')">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-text">$${item.price}</p>
          <button class="button-56" role="button" onclick="addItemToCart(${item.id}); event.stopPropagation();">Add to Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

function openItemPage(url) {
  window.open(url, '_blank');
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