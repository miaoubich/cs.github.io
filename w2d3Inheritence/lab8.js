"use strict";

/* Question 1 */

//Creation of student object
let student = {
    firstName: "Ali",
    lastName: "Bouzar",
    grades: [],
    inputNewGrade: function (grade) {
        this.grades.push(grade);
    },
    computeAverageGrade: function () {
        return this.grades.reduce((sum, curr, i, arr) => sum + curr / arr.length, 0);
    }
};
student.inputNewGrade(6);
student.inputNewGrade(4);
student.inputNewGrade(6);
student.inputNewGrade(8);

// Calculate student's grades average
let sum = 0;
let i = 0;

let avg = () => {
    for (let grade in student.grades) {
        sum += student.grades[grade];
        i += 1;
    }
    console.log("One student Grades sum: " + sum);
    return sum / i;
}
console.log("Average of student: " + avg());

//Creating an array of students using Object.create()

let student2 = Object.create(student);
student2.firstName = "Sushil";
student2.lastName = "Anil";
student2.grades = [6, 10, 7];

let student3 = Object.create(student);
student3.firstName = "Sandip";
student3.lastName = "Mahato";
student3.grades = [4, 6, 3, 3];

let student4 = Object.create(student);
student4.firstName = "dipesh";
student4.lastName = "Mahato";
student4.grades = [7, 6, 8, 3];

let students = [];
students.push(student);
students.push(student2);
students.push(student3);
students.push(student4);

//Calculate Total Students grades average:
let total = 0;
let j = 0;
let avgTotal = () => {
    for (let student in students) {
        let std = students[student];
        for (let g in std.grades) {
            total += std.grades[g];
            j += 1;
        }
    }
    console.log("Total 4 students grades sum: " + total);
    return total / j;
}
console.log("Average Grades for all the students: " + avgTotal());

//ro usu reduce
let avgReduce = students.reduce((sum, grade, i, arr) => sum + grade.computeAverageGrade() / arr.length, 0);
console.log("Avg with reduce: " + avgReduce);


/* Question 2 */

//Using constructor function
function StudentFunction(fName, lName, grades = []) {
    this.firstName = fName,
        this.lastName = lName,
        this.grades = grades
}
let studentN1 = new StudentFunction("Mike", "Hanz", [10, 9, 6, 5]);

//Clculate student grade average
let sumN = 0;
let ii = 0;
let avgN = () => {
    for (let g in studentN1.grades) {
        sumN += studentN1.grades[g];
        ii += 1;
    }
    return sumN / ii;
}
console.log("Average student's grade using construction function: " + avgN());

//Create many studens using constructor function
let studentN2 = new StudentFunction("Henry", "pens", [7, 8, 11, 15]);
let studentN3 = new StudentFunction("David", "lam", [5, 18, 10, 15]);
let studentN4 = new StudentFunction("Humer", "simpson", [9, 11, 4, 12]);

let studentsN = [];
studentsN.push(studentN1);
studentsN.push(studentN2);
studentsN.push(studentN3);
studentsN.push(studentN4);

//Calculate Students grades average
let totalN = 0;
let jj = 0;
let avgTotalN = () => {
    for (let student in studentsN) {
        let stdN = studentsN[student];
        for (let sN in stdN.grades) {
            totalN += stdN.grades[sN];
            jj += 1;
        }
    }
    return totalN / jj;
}
console.log("Average Grades for all the students using function constructor: " + avgTotalN());


/* Question 3 */

function Animals(name) {
    this.name = name
}
let animal1 = new Animals("Cat");
let animal3 = new Animals("Fish");
let animal2 = new Animals("Dog");
let animal4 = new Animals("Bird");

let animalArray = [];
animalArray.push(animal1)
animalArray.push(animal3);
animalArray.push(animal2);
animalArray.push(animal4);

const customSort = () => {

}

animalArray.sort((animal1, animal2) => {
    if (animal1.name < animal2.name) {
        return -1;
    }
    if (animal1.name > animal2.name) {
        return 1;
    }
    return 0;

}
);
Array.prototype.mysort = function () {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log("Array sorted: " + [7, 5, 2, 4, 3, 9, 1].mysort());
console.log(animalArray);

