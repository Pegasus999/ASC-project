/*!
 * Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const books = [
  {
    id: 1,
    name: "aladdin",
    price: 40,
  },
  {
    id: 2,
    name: "alice's adventure in wonderland",
    price: 18,
  },
  {
    id: 3,
    name: "Animal Farm",
    price: 80,
  },
  {
    id: 4,
    name: "The diary of a young girl",
    price: 25,
  },
  {
    id: 5,
    name: "one thousand and one nights",
    price: 25,
  },
  {
    id: 6,
    name: "The secret",
    price: 40,
  },
  {
    id: 7,
    name: "Lord of the rings",
    price: 18,
  },
  {
    id: 8,
    name: "The old man and the sea",
    price: 280,
  },
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

for (const item of cart) {
  const book = books.find((book) => book.id === item);
  if (book) {
    const row = document.createElement("div");

    row.innerHTML = `
         <div
            class="cart-item d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <img src="./js/assets/${item}.jpg" alt="Book Image" id="bookImage" />
              <span id="bookTitle" class="ms-3">${book.name}</span>
            </div>
            <span id="bookPrice">${book.price} $</span>
          </div>
   `;
    document.getElementById("cartItems").appendChild(row);
  }
}

const total = cart.reduce((acc, item) => {
  const book = books.find((book) => book.id === item);
  return acc + book.price;
}, 0);

document.getElementById("totalPrice").innerText = total + " $";
