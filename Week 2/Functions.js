// Function Declaration
function gainWeight(current, goal) {
    return goal - current;
}
console.log("Weight to gain:", gainWeight(64, 75), "kg");

// Function Expression
const bmiCalc = function(weight, height) {
    return (weight / (height * height)).toFixed(2);
};
console.log("My BMI:", bmiCalc(64, 1.72));

// Arrow Function
const gymStatus = (isOpen, lazy) => {
    return isOpen && !lazy ? "Going to gym" : "Resting";
};
console.log(gymStatus(true, false));

// Function Hoisting
console.log(square(5)); 
function square(num) {
    return num * num;
}
