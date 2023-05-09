function message(){
    alert ("This game is supported on Linux")
}

function goleft(){
        console.log(mainimage.src);  
        mainimage.src = "stonepunk.png"
    }

function goright(){
    console.log(mainimage.src)
    mainimage.src = "pixel-ninjas-2.png"
    }

var mainimage = document.querySelector("#mainimage");

var add1 = document.querySelector(".add1")
var add2 = document.querySelector(".add2")
var add3 = document.querySelector(".add3") 
var count = document.querySelector("#items")

let a =0;
add1.addEventListener("click", ()=>{
    a++
    count.innerText = a
    count.style.textDecoration = "underline"
    console.log(a)
});

add2.addEventListener("click", ()=>{
    a++
    count.innerText = a
    count.style.textDecoration = "underline"
    console.log(a) 
});

add3.addEventListener("click", ()=>{
    a++
    count.innerText = a
    count.style.textDecoration = "underline"
    console.log(a)
});