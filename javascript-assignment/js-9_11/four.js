// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = prompt("Enter the reminig fuel:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} 

else {
    alert("You have enough fuel");
}