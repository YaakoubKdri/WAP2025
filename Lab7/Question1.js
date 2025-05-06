'use strict';

function Student(studentId){
    this.studentId = studentId;
    this.answers = [];    
}

Student.prototype.addAnswer = function(question){
    this.answers.push(question);
};

function Question(qid, answer){
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return this.answer == answer;
};

function Quiz(questionsArray, students){
    this.questions = new Map();
    questionsArray.forEach(q => {
        this.questions.set(q.qid, q.answer);
    });
    this.students = students;
}


Quiz.prototype.scoreStudentBySid = function(sid){
    const student = this.students.find(s => s.studentId === sid)
    if(!student) return 0;
    let score = 0;
    student.answers.forEach(a => {
        if(this.questions.get(a.qid) === a.answer){
            score++;
        }
    });
    return score;
};

Quiz.prototype.getAverageScore = function(){
    const total = this.students
        .map(student => this.scoreStudentBySid(student.studentId))
        .reduce((sum, score) => sum + score, 0);
    return total / this.students.length;
};

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5