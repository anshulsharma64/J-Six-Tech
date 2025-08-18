// if / else
let currentWeight = 64;
let goalWeight = 75;

if (currentWeight < goalWeight) {
    console.log("I need to gain weight.");
} else if (currentWeight === goalWeight) {
    console.log("I reached my goal weight!");
} else {
    console.log("I exceeded my goal weight.");
}

// switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Chest day");
        break;
    case "Tuesday":
        console.log("Back day");
        break;
    case "Wednesday":
        console.log("Leg day");
        break;
    case "Thursday":
        console.log("Shoulders");
        break;
    case "Friday":
        console.log("Arms");
        break;
    case "Saturday":
        console.log("Cardio + Abs");
        break;
    default:
        console.log("Rest day");
}

// for loop
let exercises = ["Bench Press", "Squats", "Deadlift", "Pull-ups"];
for (let i = 0; i < exercises.length; i++) {
    console.log("Exercise", i + 1, ":", exercises[i]);
}

// while loop
let reps = 1;
while (reps <= 5) {
    console.log("Push-up rep", reps);
    reps++;
}

// do-while loop
let waterCups = 1;
do {
    console.log("Cup of water", waterCups);
    waterCups++;
} while (waterCups <= 3);
