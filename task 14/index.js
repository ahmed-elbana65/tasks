var all_items = document.querySelectorAll(".list li");
let content = document.querySelector("#content");
let btn = document.querySelector("#add_to_cart");
let total_price = 0;
all_items.forEach(function (x) {
  x.onclick = function () {
    total_price += parseInt(x.getAttribute("price"));
    content.innerHTML += x.textContent + " ";

    if (x.innerHTML != "") {
      btn.style.display = "block";
    }
  };
});

btn.onclick = function () {
  console.log(total_price);
};

let btn_product = document.getElementById("product_btn");
let content_container = document.getElementById("product_container");
let data = [
  { id: 1, name: "product1", desc: "any content" },
  { id: 2, name: "product2", desc: "any content" },
  { id: 3, name: "product3", desc: "any content" },
  { id: 4, name: "product4", desc: "any content" },
  { id: 5, name: "product5", desc: "any content" },
  { id: 6, name: "product6", desc: "any content" },
];

function draw_ui(items) {
    content_container.innerHTML = ""
  items.forEach(function (y) {
    content_container.innerHTML += `<div onclick='delete_item(${y.id})'>
        ${y.name}
        </div>
        `;
  });
}

draw_ui(data);

btn_product.addEventListener("click", add_item);

function add_item() {
  let input_product = document.getElementById("product_input");

  if (product_input.value == "") {
    alert("you should insert product");
  } else {
    let last_id = data.length ? data[data.length - 1].id : 0;
    data.push({
      id: ++last_id,
      name: input_product.value,
      desc: "any content",
    });

    let add_last_item = data[data.length - 1];
    content_container.innerHTML +=  `<div onclick='delete_item(${add_last_item.id})'>
    ${add_last_item.name}
    </div>
    `;

    input_product.value = "";
  }
}
function delete_item(id) {
    let index = data.map(function (i) {
        return i.id;
    }).indexOf(id);
    
    if (index != -1) {
        data.splice(index,1)
    draw_ui(data) 
    }
    // console.log(data);
}
// console.log(data);