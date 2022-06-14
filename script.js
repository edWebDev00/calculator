//Create a calculator 
// CReate variables
let numberInput = [];
let operatorInput = [];
let displayValue = 0;
let result = 0;
let result2 = 0;
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
        //Make button light up
            if (obj.operator1 === undefined) {
            obj.number1 = numberInput.join("");
            obj.operator1 = operatorInput.join("");
            numberInput = [];
            operatorInput =[];
            }
            else if (obj.number1 != undefined) {
                obj.number2 = numberInput.join("");
                obj.operator2 = operatorInput.join("");
                result = operate (Number(obj.number1), Number(obj.number2), obj.operator1);
                updateDisplay(result);
                numberInput = [];
                operatorInput =[];
                }
            else if (obj.number1 != undefined && obj.number2 != undefined) {
                obj.number3 = numberInput.join("");
                result = operate (Number(obj.number1), Number(obj.number2), obj.operator1);
                updateDisplay(result);
                numberInput = [];
                operatorInput =[];
            }
        }
        else if (element.className === "equals"){
            if (obj.operator1 === "/" && obj.number2 === 0){
                updateDisplay("PFFFT!")
            }
            else if (obj.operator2 === undefined) {
                obj.number2 = numberInput.join("");
                result = operate (Number(obj.number1), Number(obj.number2), obj.operator1);
                updateDisplay(result);  
            }
            else if (obj.number1 != undefined && obj.number2 != undefined) {
                obj.number3 = numberInput.join("");
                result = operate (Number(obj.number1), Number(obj.number2), obj.operator1);
                console.log(result);
                result2 = operate(result,Number(obj.number3),obj.operator2);
                console.log(obj.number3);
                console.log(result2);
                updateDisplay(result2);
            }
            
        }
        else if (element.className === "clear"){
        numberInput = [];
        obj.number1 = undefined;
        obj.number2 = undefined;
        obj.operator1 = undefined;
        obj.operator2 = undefined;
        displayValue = 0;
        result = 0;
        result2 = 0;
        updateDisplay("0");
        }
        else if (element.className === "sign"){
            console.log(numberInput[0]);
            if (numberInput[0] != "-"){
                numberInput.splice(0, 0,"-");
                updateDisplay(numberInput.join(""));
            }
            else{
                numberInput.splice(0,1);
                updateDisplay(numberInput.join(""));
            }
        }   
        else if (element.className === "decimal"){
        numberInput.push(element.textContent);
        updateDisplay(numberInput.join(""));
        }
        
    }));
    
}

//function to update display 
let display = document.querySelector("#display")
display.textContent = displayValue;
function updateDisplay (value) {
     display.textContent = value;
}
//Operate Function  
function operate(a, b, operator) {
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
}

// Function calls
click();

//Create on object to hold values of number inputs ans operators 

obj = {
    number1 : undefined,
    number2 : undefined,
    number3 : undefined,
    operator1 : undefined,
    operator2 : undefined,
    
}
        