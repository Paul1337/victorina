class QuestionChooser {

  constructor() {
    this.questions = [];
  }

  setQuestions(questions) {
    this.questions = questions;
  }

  getRandomQuestion() {

    var len = this.questions.length;
    var randomNumber = Math.floor(Math.random() * len);

    return this.questions[randomNumber];


  }
}
