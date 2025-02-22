
// QUESTION = 06

var totalMarks = +prompt("Enter total marks:");
var obtainedMarks = +prompt("Enter marks obtained in 3 subjects:");

var percentage = (obtainedMarks / totalMarks) * 100;
var grade = "A-one";

if (percentage >= 80) {
    console.log(percentage);
    console.log(grade);
    console.log("Excellent");
} 
else if (percentage >= 70) {
    console.log(percentage);
    grade = "A";
    console.log(grade);
    console.log("Good");
} 
else if (percentage >= 60) {
    console.log(percentage);
    grade = "B";
    console.log(grade);
    console.log("You need to improve");
} 
else {
    console.log(percentage);
    grade = "Fail";
    console.log(grade);
    console.log("Sorry, this is not for you");
}
