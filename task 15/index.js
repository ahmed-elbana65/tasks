let x;

function open_window() {
    x = window.open("https://youtube.com", "","width = 300, height= 300")
}
function close_window() {
    x.close()
}
document.querySelector(".open").addEventListener("click", open_window)
document.querySelector(".close").addEventListener("click", close_window)

let fruits = ["apple","banana","grapes","mango","watermelon","orange"]

function filter_name(arr,query) {
    return arr.filter( (x) =>{
       return x.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        
    });
};

console.log(filter_name(fruits,"ap"));
console.log(filter_name(fruits,"ng"));
console.log(filter_name(fruits,"lo"));
console.log(filter_name(fruits,"n"));