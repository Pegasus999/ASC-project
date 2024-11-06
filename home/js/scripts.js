/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const buttons = document.getElementsByClassName("buy");

function buyBook(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.includes(id)) {
    return alert("this book is already in cart ");
  }
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buyBook(i + 1);
  });
}
