/*!
 * Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
//  <div class="mb-3">
//                         <input type="text" id="cardHolderName" class="form-control" placeholder="Card holder name" required />
//                     </div>
//                     <div class="mb-3">
//                         <input type="text" id="cardNumber" class="form-control" placeholder="Card number" required />
//                     </div>
//                     <div class="row">
//                         <div class="col">
//                             <input type="text" id="expiryDate" class="form-control" placeholder="DD/MM/YY" required />
//                         </div>
//                         <div class="col">
//                             <input type="text" id="ccv" class="form-control" placeholder="CCV" required />
//                         </div>
//                     </div>
//                     <button type="button" id="payButton" class="btn btn-pay mt-3 ">PAY</button>

const name = document.getElementById("cardHolderName");
const cardNumber = document.getElementById("cardNumber");
const expiryDate = document.getElementById("expiryDate");
const ccv = document.getElementById("ccv");

document.getElementById("payButton").addEventListener("click", () => {
  if (name.value && cardNumber.value && expiryDate.value && ccv.value) {
    alert("Payment successful");
    localStorage.removeItem("cart");
    window.location.href = "../home/index.html";
  } else {
    alert("Please fill all the fields");
  }
});
