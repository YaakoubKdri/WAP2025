'use strict';

function Student(studentId, answers = []){
    this.studentId = studentId;
    this.answers = answers;

    
}

Student.prototype.addAnswer = function(question){
    this.answers.push(question);
}

function Question(qid, answer){
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return this.answer == answer;
}

function Quiz(questionsArray, students){
    this.questions = new Map();
    questionsArray.array.forEach(q => {
        this.questions.set(q.id, q.correctAnswer);
    });
    this.students = students;
}

Quiz.prototype.scoreStudentBySid = function(sid){
    const student = this.students.find(s => s.sid === sid)
    if(!student) return 0;
    let score = 0;
    for(let[qid, correctAnswer] of this.questions){
        if(student.answers[qid] === correctAnswer){
            score++;
        }
    }
}