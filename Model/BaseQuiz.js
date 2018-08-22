class BaseQuiz {


  constructor() {
    this.question = {};
    this.timer = 0;

    this.questionStore = new QuestionStore();
    this.questionStore.loadQuestions( "../data/questions.JSON" );

    this.questionChooser = new QuestionChooser();
    this.questionChooser.setQuestions(this.questionStore.questions);
  }

  init() {
    this.points = 0;
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
    this.timer --;
    this.timerUpdated();
    var self = this;
    if (this.timer > 0) {
      setTimeout( function() {
        self.tickTimer();
      }, 1000 );
    }
  }

}
