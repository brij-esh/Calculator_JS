// "use strict"
console.log("Caluculator");

let displayInput = document.getElementById("input_text");
displayInput.innerText = "";
let equation = "";
let result = 0;


document.addEventListener('keydown', function(event){
    let keyValue = event.key;
    doCalculation(keyValue);
});

let buttons = document.getElementsByTagName('button');
for(const button of buttons){
    let buttonValue = button.getAttribute("data-value");
    button.addEventListener('click', function(){
    console.log(buttonValue);
    doCalculation(buttonValue);
    })
}




function doCalculation(keyValue){
    if((keyValue==='+' || keyValue ==='-' || keyValue === '*' || keyValue === '/' || keyValue === '%') && isRepeatingOperator(displayInput.innerText)){
        displayInput.innerText = equation.substring(0, equation.length-1)+keyValue;
        equation = displayInput.innerText;
        return;
    }
    if(keyValue === "=" || keyValue === "Enter"){
        result = eval(displayInput.innerText);
        displayInput.innerText = result;
    }else if(keyValue === "Backspace" || keyValue == "Delete" || keyValue === 'C'){
        let temp = displayInput.innerText;
        temp = temp.substring(0,temp.length-1);
        equation = temp;
        displayInput.innerText = temp;
    }else if(keyValue === "+/-"){
        if(equation.includes("(") && equation.includes(")")){
            if(equation.charAt(1) !== "-"){
                equation = equation.substring(0,1)+"-"+equation.substring(1,equation.length);
            }else{
                equation = equation.substring(0,1)+equation.substring(2,equation.length);
            }
        }else{
            if(equation.charAt(0) !== "-"){
                equation = "-"+equation;
            }else{
                equation = equation.substring(1,equation.length);
            }
        }
        displayInput.innerText = eval(equation);
    }else if(keyValue === "()"){
        equation = displayInput.innerText;
        if(equation.includes("(") && equation.includes(")")){
            equation = equation.substring(1,equation.length-1);
        }else{
            equation = "("+equation+")";
        }
        displayInput.innerText = equation;
    }
    else if(keyValue === "+"){
        let temp = displayInput.innerText;
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }else if(keyValue === "-"){
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }else if(keyValue === "/"){
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }else if(keyValue === "*"){
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }else if(keyValue === "%"){
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }else if(keyValue === '.'){
        let temp = displayInput.innerText;
        if(!temp.includes('.')){
            displayInput.innerText += keyValue;
            equation+=keyValue;
        }
    }else if(/[0-9]/.test(keyValue)){
        displayInput.innerText += keyValue;
        equation+=keyValue;
    }
    console.log(equation);
}




function isRepeatingOperator(equation){
    let index = equation.length-1;
    if(equation.charAt(index)=='+' || equation.charAt(index)=='-' || equation.charAt(index)=='*' || equation.charAt(index)=='/' || equation.charAt(index)=='%'){
        return true;
    }
    return false;
}