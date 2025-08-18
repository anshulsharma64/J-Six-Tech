let currentWeight = 64;
let goalWeight = 75;

console.log("Is my current weight equal to goal?", currentWeight == goalWeight);
console.log("Is my current weight not equal to goal?", currentWeight != goalWeight);
console.log("Am I lighter than goal?", currentWeight < goalWeight);
console.log("Am I heavier than goal?", currentWeight > goalWeight);
console.log("Am I at least goal weight?", currentWeight >= goalWeight);

// Type Conversion
let numString = "100";
let numConverted = Number(numString);
console.log("String:", numString, "Type:", typeof numString);
console.log("Converted:", numConverted, "Type:", typeof numConverted);

let weightString = String(currentWeight);
console.log("Converted weight to string:", weightString, "Type:", typeof weightString);

// Boolean Logic
let gymOpen = true;
let feelingLazy = false;

console.log("Do I go to gym?", gymOpen && !feelingLazy);
console.log("Can I rest?", !gymOpen || feelingLazy);
console.log("Exclusive case:", gymOpen ^ feelingLazy);