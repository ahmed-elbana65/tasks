let product_in_cart = localStorage.getItem("product_in_cart");
// let item_dom = document.querySelector(".item_container");
if (product_in_cart) {
    let items_product_cart = JSON.parse(product_in_cart);

    draw_cart_product_ui(items_product_cart);
    
}

function draw_cart_product_ui(all_products_cart = []) {
    let products_cart = JSON.parse(localStorage.getItem("product_in_cart")) || all_products_cart;
    let item_ui_product = products_cart.map((item) => {
        return `
                  <div class="item_card">
                <div class="item_img">
                    <img src="${item.imageurl}" alt="">
                    <img class="second_pic" src="${item.imageurl2}" alt="">
    
                    <div class="item_btn">
                        <button onclick= "remove_from_cart(${item.id})">remove from Cart</button>
                    </div>
    
                    <div class="item_icon">
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
      item_dom.innerHTML = item_ui_product;
}

function remove_from_cart(id) {
    let product_in_cart = localStorage.getItem("product_in_cart")
    if (product_in_cart) {
        let item_product_in_cart = JSON.parse(product_in_cart);
        let filtered_items = item_product_in_cart.filter((item) => item.id !== id);
        localStorage.setItem("product_in_cart" , JSON.stringify(filtered_items));
        draw_cart_product_ui(filtered_items);
    }
}