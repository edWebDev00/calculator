//Create functions for basic match 
//addition
add = function (a, b) {
    return a + b;
}
//subtraction
sub = function (a,b) {
    return a - b;
}
//division 
div = function(a,b) {
    return a / b;
}
// multiply
multi = function(a,b) {
    return a * b;
}
// function operate takes two numbers and performs a math function on them
operate = function (math, a,b) {
    switch (math) {
        case  "multi":
        return multi(a,b);
        break;
    
        case "div" :
        return div(a,b);
        break;

        case "add" :
        return add(a,b);
        break;

        case "sub" :
        return sub(a,b);
        break;

    }
}
//Add event listener to number buttons and store value and populate display with value
let displayValue;
let userInput;
let display = document.querySelector(".display")
let button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener('click',() =>{
        let displayValue = button.textContent;
        display.textContent = button.textContent;
        return displayValue;
    });
});
//Add event listener for operations
let operationValue;
let operation = document.querySelectorAll(".operate");
operation.forEach((item) => {
    item.addEventListener('click',() =>{
        let operationValue = item.textContent;
        display.textContent = "";
        return operationValue;
    });
});

