'use strict'
function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  
    this.inputNewGrade = function(newGrade) {
      this.grades.push(newGrade);
    };
  
    this.computeAverageGrade = function() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, val) => acc + val, 0);
      return sum / this.grades.length;
    };
  }
  
  const student1 = new Student("Yaakoub", "Kadri", [85, 90]);
  const student2 = new Student("Victor", "Hugo", [78, 82, 88]);
  const student3 = new Student("Marie", "Curie", [92, 95, 91]);
 
  const studentList = [student1, student2, student3];
  
  let total = 0;
  let count = 0;
  
  studentList.forEach(student => {
    total += student.grades.reduce((acc, val) => acc + val, 0);
    count += student.grades.length;
  });
  
  const averageGrade = total / count;
  console.log("Average grade for all students: ", averageGrade);
  