let employeeName = prompt("Enter employee's name:");
let employeeAge = prompt("Enter employee's age:");
let yearsOfExperience = parseInt(prompt("Enter years of experience:"));
let selfRating = parseInt(prompt("Rate yourself from 1 to 10:"));

let jobCategory;
if (yearsOfExperience < 2) {
    jobCategory = "Junior";
} else if (yearsOfExperience >= 2 && yearsOfExperience <= 4) {
    jobCategory = "Mid-Level";
} else if (yearsOfExperience >= 5 && yearsOfExperience <= 10) {
    jobCategory = "Expert";
} else {
    jobCategory = "Guru";
}

let performanceLevel;
switch (selfRating) {
    case 9:
    case 10:
        performanceLevel = "Excellent";
        break;
    case 7:
    case 8:
        performanceLevel = "Good";
        break;
    case 5:
    case 6:
        performanceLevel = "Average";
        break;
    default:
        performanceLevel = "Needs Improvement";
}

let baseSalary = 5000;
let bonus = 0;
if (yearsOfExperience >= 0 && yearsOfExperience <= 2) {
    bonus = baseSalary * 0.10;
} else if (yearsOfExperience >= 3 && yearsOfExperience <= 5) {
    bonus = baseSalary * 0.15;
} else if (yearsOfExperience > 5) {
    bonus = baseSalary * 0.20;
}
let finalSalary = baseSalary + bonus;

let currentTime = new Date();
let currentHour = currentTime.getHours();
let workShift;
if (currentHour >= 9 && currentHour < 18) {
    workShift = "Day Shift";
} else {
    workShift = "Night Shift";
}

let summary = `Employee Name: ${employeeName}\nAge: ${employeeAge}\nJob Category: ${jobCategory}\nPerformance: ${performanceLevel}\nFinal Salary: ${finalSalary} EGP\nWork Shift: ${workShift}`;

console.log("--- Employee Report ---");
console.log(summary);

alert("Final Salary: " + finalSalary + " $");

document.getElementById("results").innerText = summary;
