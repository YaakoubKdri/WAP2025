'use strict';
class Student {
    constructor(studentId) {
      this.studentId = studentId;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push(question);
    }
  }

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(answer) {
    return this.answer === answer;
  }
}

class Quiz {
  constructor(questionsArray, students) {
    this.questions = new Map();
    questionsArray.forEach(q => {
      this.questions.set(q.qid, q.answer);
    });
    this.students = students;
  }

  scoreStudentBySid(sid) {
    const student = this.students.find(s => s.studentId === sid);
    if (!student) return 0;
    let score = 0;
    student.answers.forEach(a => {
      const correctAnswer = this.questions.get(a.qid);
      const question = new Question(a.qid, correctAnswer);
      if (question.checkAnswer(a.answer)) {
        score++;
      }
    });

    return score;
  }

  getAverageScore() {
    const total = this.students
      .map(student => this.scoreStudentBySid(student.studentId))
      .reduce((sum, score) => sum + score, 0);
    return total / this.students.length;
  }
}

// test

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [
  new Question(1, 'b'),
  new Question(2, 'a'),
  new Question(3, 'b')
];

const quiz = new Quiz(questions, students);

const scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); // Expected Result: 3

const scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); // Expected Result: 2

const average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5
