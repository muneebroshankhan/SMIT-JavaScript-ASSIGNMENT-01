
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender male ya female");

if (gender == "male") {
    alert("Good Morning Sir.");
}
 else if (gender == "female") {
    alert("Good Morning Ma’am.");
}
 else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}
