//Create a calculator 
// CReate variables
let numberInput = [];
let operatorInput = [];
let displayValue = 0;
//Add event listener to capture input from the calculator


function click(){
    const button = document.querySelectorAll('button')
    button.forEach(element => element.addEventListener('click', () => {
        if (element.className ==="number"){
        numberInput.push(element.textContent);
        updateDisplay(numberInput.join(""));
        }
        else if (element.className === "operate"){
        operatorInput.push(element.textContent);
        updateDisplay(operatorInput.join(""));
            if (obj.operator1 === undefined) {
            obj.number1 = numberInput;
            obj.operator1 = operatorInput;
            numberInput = [];
            }
            else if (obj.operator1 != undefined) {
            obj.number2 = numberInput;
            
            }
        }
        else if (element.className === "equals"){
        ongotpointercapture
        }
        else if (element.className === "clear"){
        numberInput = [];
        operatorInput = [];
        updateDisplay("0");
        }
        else if (element.className === "sign"){
        console.log(element);
        }   
        else if (element.className === "decimal"){
        numberInput.push(element.textContent);
        updateDisplay(numberInput.join(""));
        }
        console.log(obj.number1);
        console.log(obj.operator1);
        console.log(obj.number2);
    }));
    
}

//function to update display 
let display = document.querySelector("#display")
display.textContent = displayValue;
function updateDisplay (value) {
     display.textContent = value;
}

// Function calls
click();

//Create on object to hold values of number inputs ans operators 

obj = {
    number1 : undefined,
    number2 : undefined,
    numner3 :undefined,
    operator1 : undefined,
    operator2 : undefined,
}