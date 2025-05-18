//Student
class Student {
    studentId: number;
    answers: Question[] = [];
  
    constructor(studentId: number) {
      this.studentId = studentId;
    }
  
    addAnswer(question: Question): void {
      this.answers.push(question);
    }
  }
//Question
class Question {
  qid: number;
  answer: string;

  constructor(qid: number, answer: string) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(ans: string): boolean {
    return this.answer === ans;
  }
}
//Quiz
class Quiz {
  questions: Map<number, string>;
  students: Student[];

  constructor(questions: Question[], students: Student[]) {
    this.questions = new Map();
    questions.forEach((q) => {
      this.questions.set(q.qid, q.answer);
    });
    this.students = students;
  }

  scoreStudentBySid(sid: number): number {
    const student = this.students.find((s) => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (const q of student.answers) {
      const ans = this.questions.get(q.qid);
      if (ans && q.checkAnswer(ans)) {
        score++;
      }
    }
    return score;
  }

  getAverageScore(): number {
    if (this.students.length === 0) return 0;

    const totalScore = this.students.reduce((acc, student) => {
      return acc + this.scoreStudentBySid(student.studentId);
    }, 0);

    return totalScore / this.students.length;
  }
}

//test
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); // Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); // Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5
