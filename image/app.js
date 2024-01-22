let list = document.querySelector(".slide", ".list");
let items = document.querySelector(".slide", "list", "item");
let dots = document.querySelector(".slide .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById(".next");

let active = 0;

next.onclick = function(){
    active += 1;
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px" 
}