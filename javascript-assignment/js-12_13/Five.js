// QUESTION:5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var password = "abc123";
var input = prompt("enter your password")

if (input == ""){
   alert("Please enter your password")
}

else if(input==password){
    alert("Correct! The password you entered matches the original password")
}

else{
   alert("Incorrect password") 
}