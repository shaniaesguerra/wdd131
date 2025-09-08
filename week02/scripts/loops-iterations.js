/* Week 02 learning activity
---- Loops and Iterations ----
*/

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop
console.log("For-Loop:");
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop
console.log("While-Loop:")
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
}

//forEach Loop
console.log("forEach-Loop:")
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

//for...in Loop
console.log("for...in-Loop:")
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}