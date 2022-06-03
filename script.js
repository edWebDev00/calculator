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

console.log(operate("sub",6,2));