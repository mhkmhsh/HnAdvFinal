//For the stars in the contact form
const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('click', (e) => {
    // You can handle click event here, like sending rating data to the server
    console.log('Rated:', e.target.value);
  });
});