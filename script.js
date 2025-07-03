let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");


increment.addEventListener("click",()=>{
    let count = Number(counter.innerText)
     counter.innerText = count + 1
})
decrement.addEventListener("click",()=>{
    let count = Number(counter.innerText);
    if (count > 0){
        counter.innerText = count - 1
    }
})
reset.addEventListener("click",()=>{
    counter.innerHTML = 0
})

