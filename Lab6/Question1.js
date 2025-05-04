'use strict'
const studentProto = {
  inputNewGrade(newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, val) => acc + val, 0);
    return sum / this.grades.length;
  }
};

const student1 = Object.create(studentProto);
student1.firstName = "Yaakoub";
student1.lastName = "Kadri";
student1.grades = [85, 90];

const student2 = Object.create(studentProto);
student2.firstName = "Victor";
student2.lastName = "Hugo";
student2.grades = [78, 82, 88];

const student3 = Object.create(studentProto);
student3.firstName = "Marie";
student3.lastName = "Curie";
student3.grades = [92, 95, 91];

const students = [student1, student2, student3];

let total = 0;
let count = 0;

students.forEach(student => {
  total += student.grades.reduce((acc, val) => acc + val, 0);
  count += student.grades.length;
});

const overallAverage = total / count;
console.log("Average grade for all students: ", overallAverage);