//variables 
let displayValue = 0;


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
operate = function (math, a, b) {
    switch (math) {
        case  "*":
        return multi(a,b);
        break;
    
        case "/" :
        return div(a,b);
        break;

        case "+" :
        return add(a,b);
        break;

        case "-" :
        return sub(a,b);
        break;

    }
}
// Function that adds event listener to buttons and stores their value
const button = document.querySelectorAll('button');


function click () {
    for (let i = 0; i < button.length; i++) {
        
        button[i].addEventListener('click',()=> {
            if (button[i].classList.contains('number')){
                numberInput(button[i].textContent);
                
            }
            else {
            if (button[i].classList.contains('operate')){
                operatorInput(button[i].textContent);
                
            }
            }
        
        });
    }
}
click();

// functions for storing the values of numbers and operators
function numberInput(value) {
    console.log(value);
    updateDisplay(value);
}

function operatorInput(value) {
    
    console.log(value);
    updateDisplay(value);
}

function updateDisplay (num){
    const display = document.getElementById('display');
    display.textContent = num;
}

//Add event listener for operations including if statement to test if button has been pushed

/*operation.forEach((item) => {
    item.addEventListener('click',(e) =>{
       

    }); 
});*/

//creat an object to contain all the inputs



//Add event listener for equals 


//Add event Listener for clear 
