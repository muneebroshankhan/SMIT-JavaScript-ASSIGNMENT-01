// Question = 04. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// answer=04

var char = prompt("Enter a character");
let flag = false;

if (char.length > 1) {
  alert("Invalid");
} else {
    let flag = char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U";
    alert(flag);
}
