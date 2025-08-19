// Object with Properties & Methods
let student = {
    name: "Anshul Sharma",
    age: 22,
    weight: 64,
    goalWeight: 75,
    isFresher: true,

    gainNeeded: function() {
        return this.goalWeight - this.weight;
    },

    updateWeight: function(newWeight) {
        this.weight = newWeight;
        console.log("Updated weight:", this.weight);
    }
};

console.log("Student Name:", student.name);
console.log("Weight to gain:", student.gainNeeded(), "kg");

student.updateWeight(66);
console.log("Now weight to gain:", student.gainNeeded(), "kg");

// this Keyword in Different Contexts
let gym = {
    name: "Muscle Factory",
    location: "Indore",
    members: 120,

    showInfo: function() {
        console.log("Welcome to", this.name, "in", this.location);
        console.log("Total Members:", this.members);
    },

    addMember: function() {
        this.members++;
        console.log("New member joined! Members:", this.members);
    }
};

gym.showInfo();
gym.addMember();

//Arrays of Objects
let students = [
    { name: "Anshul", weight: 64, goal: 75 },
    { name: "Rahul", weight: 70, goal: 80 },
    { name: "Priya", weight: 55, goal: 60 }
];

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    console.log(s.name, "needs to gain", s.goal - s.weight, "kg");
}

// Array of Objects + Methods
let gymMembers = [
    {
        name: "Anshul",
        weight: 64,
        goal: 75,
        progress: function() {
            return this.goal - this.weight;
        }
    },
    {
        name: "Rahul",
        weight: 70,
        goal: 80,
        progress: function() {
            return this.goal - this.weight;
        }
    },
    {
        name: "Priya",
        weight: 55,
        goal: 60,
        progress: function() {
            return this.goal - this.weight;
        }
    }
];

for (let i = 0; i < gymMembers.length; i++) {
    let member = gymMembers[i];
    console.log(member.name, "has", member.progress(), "kg to reach goal.");
}

// Array Methods on Objects
let students = [
    { name: "Anshul", score: 85 },
    { name: "Rahul", score: 92 },
    { name: "Priya", score: 78 }
];

students.forEach(s => console.log(s.name, "scored", s.score));

let names = students.map(s => s.name.toUpperCase());
console.log("Student Names:", names);

let toppers = students.filter(s => s.score > 80);
console.log("Toppers:", toppers);

let priya = students.find(s => s.name === "Priya");
console.log("Found:", priya);