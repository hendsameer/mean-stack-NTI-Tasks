//  Task 1

function multiply(a, b) {
    return a * b;
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

const finalResult = calculate(5, 10, multiply);
displayResult(finalResult); 


//  Task 2
function greetUser() {
    console.log("Hello");
}
setTimeout(greetUser, 3000); 

let countdownValue = 10;
let countdownInterval;

function countdown() {
    console.log(countdownValue);
    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(countdownInterval);
        console.log("Time's up!");
    }
}
countdownInterval = setInterval(countdown, 1000);


const messageTimeout = setTimeout(() => {
    console.log("This will be cleared!");
}, 5000);

clearTimeout(messageTimeout);
console.log("The message has been cleared and will not appear.");