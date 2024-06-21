

function add(){
    let counterAdd = document.getElementById("counter-add");
    let counterValue = parseInt(counterAdd.innerText);
    console.log(counterValue);
    counterValue = counterValue+1;
    counterAdd.innerText = counterValue;
}

function Minus(){
    let counterAdd = document.getElementById("counter-add");
    let counterValue = parseInt(counterAdd.innerText);
    console.log(counterValue);
    counterValue = counterValue-1;
    counterAdd.innerText = counterValue;
}