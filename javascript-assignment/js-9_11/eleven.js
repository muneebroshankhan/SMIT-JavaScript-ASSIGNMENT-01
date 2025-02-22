// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

 alert("welcome 2 calc")
 var firstNumber = Number(prompt("Enter the first number:"));
 var secondNumber = Number(prompt("Enter the second number:"));
var  operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation == "+") {
    result = firstNumber + secondNumber;
    console.log(result)
} 
else if (operation == "-") {
    result = firstNumber - secondNumber;
    console.log(result);
} 
else if (operation == "*") {
    result = firstNumber * secondNumber;
    console.log(result);
}
 else if (operation == "/") {
        result = firstNumber / secondNumber;
        console.log(result);
} 
else if (operation === "%") {
        result = firstNumber % secondNumber;
        console.log(result);
}


