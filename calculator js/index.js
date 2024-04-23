//Calculator program

const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
}

function clearDisplay(){
    display.value ='';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = "Error";
    }
}

function calculatePercentage() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);

        result = result / 100;

        document.getElementById('display').value = result;
    } catch (error) {

        document.getElementById('display').value = 'Error';
    }
}