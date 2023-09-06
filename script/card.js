
  // checkout-btn
  let logo = document.querySelector("#logo-image");
  logo.addEventListener("click", () => {
    window.location.href = "../index.html"
  })
  let checkout = document.querySelector(".checkout-btn");
  checkout.addEventListener("click", () => {
    window.location.href = "payment.html"
  })

  let product = document.querySelector("#new-product-page")
  product.addEventListener("click", () => {
    window.location.href = "./product.html"
  })
  let userslogo = document.querySelector("#user-icon")
    userslogo.addEventListener("click", () => {
        let tokendata = localStorage.getItem("token")
        console.log(tokendata)
        if(tokendata){
            window.location.href="./profile.html"
        }else{
            window.location.href = "./register.html"
        }
        
    })
  let cartlogo = document.querySelector("#cart-icon")
  cartlogo.addEventListener("click", () => {
    let tokendata = localStorage.getItem("token")
    if (tokendata) {
      window.location.href = "./cart.html"
    } else {
      alert("Please Login First!")
      window.location.href = "./register.html"
    }

  })



  let cartItems = JSON.parse(localStorage.getItem("Favourites")) || [];
  console.log(cartItems)
  const tableBody = document.querySelector('tbody');
  let quantity = 1
  cartItems.forEach(item => {

    const row = document.createElement('tr');

    row.innerHTML = `
		<td>
			<img id="img" src="${item.image}" alt="${item.name}">
			${item.name}
		</td>
		<td>$${item.price}</td>
<td>
  
<button class="decrease-quantity" data-name="${item.name}">-</button>
<span class="quantity">${quantity}</span>
<button class="increase-quantity" data-name="${item.name}">+</button>
</td>
<td>$${(item.price * quantity)}</td>
<td>
<button class="remove-item" data-name="${item.name}">Remove</button>
</td>
`;
    tableBody.appendChild(row);
  });

  const decreaseButtons = document.querySelectorAll('.decrease-quantity');
  const increaseButtons = document.querySelectorAll('.increase-quantity');
  const removeButtons = document.querySelectorAll('.remove-item');

  function decreaseQuantity(event) {
    const button = event.target;
    const itemName = button.dataset.name;
    const itemRow = button.parentNode.parentNode;
    const itemQuantity = itemRow.querySelector('.quantity');
    const itemPrice = itemRow.querySelector('td:nth-child(2)');
    const itemTotal = itemRow.querySelector('td:nth-child(4)');
    let quantity = parseInt(itemQuantity.textContent);
    if (quantity > 1) {
      quantity--;
      itemQuantity.textContent = quantity;
      itemTotal.textContent = (quantity * parseFloat(itemPrice.textContent.substring(1))).toFixed(2);
      updateCartTotal();
    }
  }

  function increaseQuantity(event) {
    const button = event.target;
    const itemName = button.dataset.name;
    const itemRow = button.parentNode.parentNode;
    const itemQuantity = itemRow.querySelector('.quantity');
    const itemPrice = itemRow.querySelector('td:nth-child(2)');
    const itemTotal = itemRow.querySelector('td:nth-child(4)');
    let quantity = parseInt(itemQuantity.textContent);
    quantity++;
    itemQuantity.textContent = quantity;
    itemTotal.textContent = (quantity * parseFloat(itemPrice.textContent.substring(1))).toFixed(2);
    updateCartTotal();
    // console.log(quantity)
    console.log(itemQuantity.value)
  }

  function removeItem(event) {
  const button = event.target;
  const itemName = button.dataset.name;
  const itemRow = button.parentNode.parentNode;
  
  // Remove the item from the display
  itemRow.remove();

  // Update local storage
  const cartItems = JSON.parse(localStorage.getItem('Favourites')) || [];
  const updatedCartItems = cartItems.filter(item => item.name !== itemName);
  localStorage.setItem('Favourites', JSON.stringify(updatedCartItems));

  updateCartTotal();
}

  function updateCartTotal() {
    const cartRows = document.querySelectorAll('tbody tr');
    let total = 0;
    cartRows.forEach(row => {
      const priceElement = row.querySelector('td:nth-child(2)');
      const quantityElement = row.querySelector('.quantity');
      const price = parseFloat(priceElement.textContent.substring(1));
      const quantity = parseInt(quantityElement.textContent);
      total += price *quantity
      
    });
    console.log(total)
    let grandtotal=document.querySelector("#grandtotal");
    grandtotal.textContent=`$ ${+total.toFixed(3)}`;
    let totaldat=+total.toFixed(3)
    // console.log(totaldat)
    localStorage.setItem("grandtotal",totaldat)
  }

  decreaseButtons.forEach(button => {
    button.addEventListener('click', decreaseQuantity);
  });

  increaseButtons.forEach(button => {
    button.addEventListener('click', increaseQuantity);
  });

  removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
    // localStorage.setItem("Favourites",JSON.stringify(removeItem))
  });

  updateCartTotal();
  let cartItem = JSON.parse(localStorage.getItem("Favourites")) || [];
let emptydata=document.querySelector("#maincointerifbodyisblank");
let data=document.querySelector("#main_item_container")
  if(cartItem.length>0){
    data.style="display:block"
    emptydata.style="display:none"
    data.style="display:block"
    
  }else{
    data.style="display:none"
      emptydata.style="display:block"
      data.style="display:none"
      
      
      
      
  }
  

