let navBar = document.getElementById("navbar");
const url = "https://localhost:4600/data/add";
let mainSection = document.getElementById("main");

function renderList(data) {
    let CardList = `
      ${data
        .map((ele) =>
          card(
            ele.id,
            ele.image,
            ele.name,
            ele.price,
          )
        )
        .join("")}    
      `;
    mainSection.innerHTML = CardList;
          }
          function card(image, name, price) {
            let card = `
                  <div class="card" data-id=${id}>
                      <div class="card-img">
                          <img src=${image} alt='image'>
                      </div>
                      <div class="card-body">
                          <h3 class="name">${name.substring(0, 24)}</h3>
                          <h3 class='price'>Price: ${price}</h3>
                         
                          <button id="removeButton">Remove</button>
                        </div>
                  </div>        
                  `;
            return card;
          }