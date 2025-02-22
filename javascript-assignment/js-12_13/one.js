// QNO:1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// ANSWER:1
var input = prompt("Give input")
if(input >= 0 && input <= 64){
    alert("number")
}
else if(input >= 65 &&  input <= 90){
    alert("Uppercase");
}
else if(input >= 97 &&  input <= 122){
    alert("Lowercase");
}