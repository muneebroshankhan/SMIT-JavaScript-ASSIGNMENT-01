
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


var color = prompt("Enter signal color Red Yellow Green:");
if (color == "red") {
    alert("Must Stop");
} 

else if (color == "yellow") {
    alert("Ready to move");
} 

else if (color == "green") {
    alert("Move now");
} 

else {
    alert("Bhai 3 hi hotay hen signal mein");
}