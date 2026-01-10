var inp = document.querySelector("#Answer");
var newCalculation = false;

function EnterNumber(num){
    // Clear the screen if we have a number after an =
    if (newCalculation) {
        inp.value = "";
        newCalculation = false;
    }
    inp.value += num;

}

function EnterOperator(op){
    newCalculation = false; // Keep previous result and continue the math
    var lastChar = inp.value.charAt(inp.value.length - 1);
    var operator = ["+", "-", "*", "/", "."];
    if(operator.includes(lastChar)){
        alert("Cannot put multiple operators next to each other.");
    } else if(inp.value.length === 0 && op !== "-"){
        alert("Enter a number first.");
        return;
    }
    else{
        inp.value += op;
    }
}

function EnterClear(){
    inp.value = "";
}

function EnterEqual(){
try {
        var result = eval(inp.value);
        
        if (result === Infinity) {
            alert("Cannot divide by zero");
            inp.value = "";
        } else {
            // Round to 8 decimal places to fix the 0.1+0.2 glitch
            inp.value = Number(Math.round(result + 'e8') + 'e-8');
            newCalculation = true;
        }
    } catch (error) {
        alert("Invalid Expression");
        inp.value = "";
    }
}