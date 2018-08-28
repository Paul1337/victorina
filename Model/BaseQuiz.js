class BaseQuiz {


  constructor() {
    this.question = {};
    this.timer = 0;
    this.questionPassed = 0;
    this.playing = false;

    this.questionStore = new QuestionStore();
    this.questionStore.loadQuestions( "../data/questions.JSON" );

    this.questionChooser = new QuestionChooser();
    this.questionChooser.setQuestions(this.questionStore.questions);
  }

  init() {
    this.points = 0;
    this.questionPassed = 0;
  }

  checkAnswer(answer) {
    console.log(answer, ' ', this.question.rightAsnwer);
    console.log(answer == this.question.rightAsnwer);
    if (answer == this.question.rightAsnwer) {
      this.answeredRight();

      this.points += this.question.prize;
      this.pointsUpdated();

      this.questionPassed ++;
      if (this.questionsNumber !== undefined && this.questionPassed >= this.questionsNumber) {
        this.question = {};
        this.questionNulled();

        this.timer = 0;
        this.timerUpdated();

        this.playing = false;
        this.quizFinished();

      } else {
        this.chooseQuestion();
        this.questionChanged();

        this.timer = this.maxTimer;
        this.timerUpdated();
      }


    } else {
      this.timer = 0;
      this.gameOver();
    }
  }

  chooseQuestion() {
    this.question = this.questionChooser.getRandomQuestion();
  }

  startTimer() {
    this.timer = this.maxTimer;

    var self = this;

    setTimeout( function() {
      self.tickTimer();
    }, 1000);

  }

  tickTimer() {
    if (this.timer > 0) {
      this.timer --;
      this.timerUpdated();
      var self = this;
      setTimeout( function() {
        self.tickTimer();
      }, 1000 );
    } else if (this.playing) {
      this.gameOver();
      this.playing = false;
    }
  }

}
