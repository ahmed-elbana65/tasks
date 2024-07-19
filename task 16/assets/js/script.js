let user_info = document.getElementById("user_info");
let user_dom = document.getElementById("user");
let log_out_btn = document.getElementById("log_out");
let shopping_cart_menu = document.querySelector(".cart_items")
let links = document.querySelector(".header_menu");
let item_dom = document.querySelector(".item_container");
let cart_items_dom = document.querySelector(".cart_items .cart_item_description");
let items_counter = document.querySelector(".number_of_item");
let shopping_cart_icon = document.querySelector(".shopping_cart_icon");


if (localStorage.getItem("username")) {
  links.remove();
  user_info.style.display = "flex";
  user_dom.innerHTML = localStorage.getItem("username");
}

log_out_btn.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});

let products = [
  {
    id: 1,
    title: 'smartphone',
    price: '70$',
    imageurl: '/assets/img/app-1.jpg',
    imageurl2: '/assets/img/app-2.jpg'

  },
  {
    id: 2,
    title: 'book',
    price: '7$',
    imageurl: '/assets/img/books-1.jpg',
    imageurl2: '/assets/img/books-2.jpg'

  },
  {
    id: 3,
    title: 'smartwatch',
    price: '50$',
    imageurl: '/assets/img/product-1.jpg',
    imageurl2: '/assets/img/product-2.jpg'

  },
  {
    id: 4,
    title: 'makeup',
    price: '20$',
    imageurl: '/assets/img/branding-1.jpg',
    imageurl2: '/assets/img/branding-2.jpg'

  }
];
shopping_cart_icon.addEventListener('click', open_cart_menu)

function draw_item_ui() {
  let item_ui = products.map((item) => {
    return `
              <div class="item_card">
            <div class="item_img">
                <img src="${item.imageurl}" alt="">
                <img class="second_pic" src="${item.imageurl2}" alt="">

                <div class="item_btn">
                    <button onclick= "added_to_cart(${item.id})">Add To Cart</button>
                </div>

                <div class="item_icon">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-rotate"></i>
                    <i class="fas fa-magnifying-glass-plus"></i>
                </div>


            </div>


            <div class="item_description">
                <h3>${item.title}</h3>
                        <span>${item.price}</span>
                        <del>$85.00</del>
            </div>
        </div>
    `
  });
  item_dom.innerHTML = item_ui;
};
draw_item_ui();

let added_item = localStorage.getItem("product_in_cart") ? JSON.parse(localStorage.getItem("product_in_cart")) : [];
if (added_item) {
  added_item.map((item) => {
    cart_items_dom.innerHTML += `<p>${item.title}</p>`
  });


  items_counter.style.display = "block"
  items_counter.innerHTML += added_item.length
}
function added_to_cart(id) {

  if (localStorage.getItem("username")) {

    let chosen_item = products.find((b) => b.id === id);
  cart_items_dom.innerHTML += `<p>${chosen_item.title}</p>`;
  added_item = [...added_item , chosen_item];
  localStorage.setItem("product_in_cart", JSON.stringify(added_item));


  let number_of_items = document.querySelectorAll(".cart_items .cart_item_description p");
  items_counter.style.display = "block"
  items_counter.innerHTML = number_of_items.length

  }
  else {
    window.location = "login.html"
  }



  
  
  
}



function open_cart_menu() {
  if (cart_items_dom.innerHTML != "") {
    if (shopping_cart_menu.style.display == "block") {
      
      shopping_cart_menu.style.display = "none";
    }else{
      shopping_cart_menu.style.display = "block";

    }
    
  }
}


  