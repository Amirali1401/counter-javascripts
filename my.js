let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let p = document.getElementById('number');
let reset = document.getElementById('reset');

let newNum =0;

increase.addEventListener('click' , ()=>{
        newNum = Number(p.innerHTML)+1;
        p.innerHTML = newNum;
})

decrease.addEventListener('click' , ()=>{
        newNum = Number(p.innerHTML)-1;
        p.innerHTML = newNum;
})



reset.addEventListener('click' , ()=>{
        p.innerHTML = 0;
})