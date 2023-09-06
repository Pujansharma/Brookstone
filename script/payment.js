
    let data=localStorage.getItem("grandtotal")||0;
    document.querySelector("#subtotal").innerText=`+ ${data} $`;
    let total = parseFloat(data) + 99.79; 
    total=total.toFixed(2) 
    localStorage.setItem("totalamount",total);
    document.querySelector("#total").innerText=` ${total} $`;

   
    let userslogo = document.querySelector("#user-icon")
    userslogo.addEventListener("click", () => {
        window.location.href = "../html/register.html"
    })
    let cartlogo = document.querySelector("#cart-icon")
    cartlogo.addEventListener("click", () => {
        let tokendata = localStorage.getItem("token")
        if (tokendata) {
            window.location.href = "../html/cart.html"
        }else{
            window.location.href = "../register.html"
        }
        
    })
    let logo = document.querySelector("#logo-image");
  logo.addEventListener("click", () => {
    window.location.href = "../index.html"
  })

  let continuetolastpage=document.querySelector("#checkout");
  continuetolastpage.addEventListener("click",()=>{
    let add=document.querySelector("#add").value;
    let phoneno=document.querySelector("#phoneno").value;
  localStorage.setItem("address",add)
  localStorage.setItem("userdata",phoneno)
    window.location.href="./checkout.html"
  })
  
