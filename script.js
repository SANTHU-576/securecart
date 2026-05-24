let cartCount = 0;

let paymentMethod = "";

/* Loader */

window.onload = function(){

  loadCart();

  setTimeout(() => {

    document.getElementById("loader")
    .style.display = "none";

  }, 2000);
}

/* Search */

function searchProducts(){

  let input =
  document.getElementById("search")
  .value
  .toLowerCase();

  let cards =
  document.getElementsByClassName("product-card");

  for(let i=0; i<cards.length; i++){

    let title =
    cards[i]
    .getElementsByTagName("h3")[0]
    .innerText
    .toLowerCase();

    if(title.includes(input)){

      cards[i].style.display = "block";
    }

    else{

      cards[i].style.display = "none";
    }
  }
}

/* Dark Mode */

function toggleDarkMode(){

  document.body.classList.toggle("dark-mode");
}

/* Login */

function openLogin(){

  document.getElementById("loginPopup")
  .style.display = "flex";
}

function closeLogin(){

  document.getElementById("loginPopup")
  .style.display = "none";
}

function loginUser(){

  document.getElementById("loginText")
  .innerText = "Welcome User 😄";

  document.getElementById("productsSection")
  .style.display = "flex";

  alert("Login Successful 🔥");

  closeLogin();
}

/* Cart */

function addToCart(){

  cartCount++;

  document.getElementById("cart-count")
  .innerText = cartCount;

  saveCart();

  let toast =
  document.getElementById("toast");

  toast.style.display = "block";

  setTimeout(() => {

    toast.style.display = "none";

  }, 2000);
}

/* Wishlist */

function addWishlist(){

  alert("Added To Wishlist ❤️");
}

/* Quantity */

function increaseQuantity(button){

  let qty =
  button.parentElement.querySelector(".qty");

  qty.innerText =
  parseInt(qty.innerText) + 1;
}

function decreaseQuantity(button){

  let qty =
  button.parentElement.querySelector(".qty");

  let current =
  parseInt(qty.innerText);

  if(current > 1){

    qty.innerText = current - 1;
  }
}

/* Checkout */

function openCheckout(){

  document.getElementById("checkoutPopup")
  .style.display = "flex";
}

function closeCheckout(){

  document.getElementById("checkoutPopup")
  .style.display = "none";
}

/* Payment */

function selectPayment(method){

  paymentMethod = method;

  document.getElementById("selected-payment")
  .innerText =
  "Selected: " + method;
}

function placeOrder(){

  if(paymentMethod === ""){

    alert("Select Payment Method 💳");

    return;
  }

  alert(
    "Payment Successful using " +
    paymentMethod +
    " 🎉"
  );

  updateOrderStatus();

  closeCheckout();
}

/* Tracking */

function updateOrderStatus(){

  document.getElementById("orderStatus")
  .innerText = "Shipped 🚚";

  setTimeout(() => {

    document.getElementById("orderStatus")
    .innerText = "Delivered 📦";

  }, 5000);
}

/* Chatbot */

function openChatbot(){

  let bot =
  document.getElementById("chatbot");

  if(bot.style.display === "block"){

    bot.style.display = "none";
  }

  else{

    bot.style.display = "block";
  }
}

function sendMessage(){

  let input =
  document.getElementById("chatInput");

  let chatBody =
  document.getElementById("chatBody");

  let userMessage =
  "<p><b>You:</b> " +
  input.value +
  "</p>";

  let botMessage =
  "<p><b>Bot:</b> Thanks for messaging 😄</p>";

  chatBody.innerHTML +=
  userMessage + botMessage;

  input.value = "";
}

/* Profile */

function openProfile(){

  document.getElementById("profilePopup")
  .style.display = "flex";
}

function closeProfile(){

  document.getElementById("profilePopup")
  .style.display = "none";
}

/* Local Storage */

function saveCart(){

  localStorage.setItem(
    "cartCount",
    cartCount
  );
}

function loadCart(){

  let saved =
  localStorage.getItem("cartCount");

  if(saved){

    cartCount = saved;

    document.getElementById("cart-count")
    .innerText = cartCount;
  }
}