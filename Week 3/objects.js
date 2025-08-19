// Objects
let student = {
    name: "Anshul Sharma",
    age: 22,
    weight: 64,
    goalWeight: 75,
    isFresher: true,
    gainNeeded: function() {
        return this.goalWeight - this.weight;
    }
};

console.log(student.name);
console.log("Weight to gain:", student.gainNeeded(), "kg");

// DOM
<p id="intro">Hello, JavaScript!</p>
let para = document.getElementById("intro");
para.innerText = "Hi, I’m Anshul, learning JavaScript!";

//Events
let button = document.getElementById("btn");
let message = document.getElementById("msg");

button.addEventListener("click", function() {
    message.innerText = "Button clicked by Anshul!";
});
