let name = "Anshul Sharma";
let age = 22;
let weight = 64.0;
const goalWeight = 75;
let isFresher = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Current Weight:", weight);
console.log("Goal Weight:", goalWeight);
console.log("Am I a fresher?", isFresher);

let intro = "Hi, my name is " + name;
let course = "I am learning JavaScript.";
console.log(intro);
console.log(course);
console.log("Length of my name:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());
console.log("First 6 letters:", name.substring(0, 6));

let currentWeight = 64;
let targetWeight = 75;
let gainNeeded = targetWeight - currentWeight;
console.log("Weight to gain:", gainNeeded, "kg");

let height = 1.72;
let bmi = currentWeight / (height * height);
console.log("My BMI is:", bmi.toFixed(2));

let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice rolled:", dice);

let exercises = ["Bench Press", "Squats", "Deadlift", "Pull-ups", "Push-ups"];
console.log("My exercises:", exercises);
console.log("First exercise:", exercises[0]);
console.log("Last exercise:", exercises[exercises.length - 1]);

exercises.push("Bicep Curls");
console.log("Updated exercises:", exercises);

exercises.pop();
console.log("After removing last:", exercises);

console.log("List of exercises:");
for (let i = 0; i < exercises.length; i++) {
    console.log(i + 1 + ".", exercises[i]);
}
