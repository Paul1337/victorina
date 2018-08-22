class QuizController extends BaseQuizController {

  constructor(model) {
    super();

    this.model = model;
    this.view = new QuizView();

    var self = this;

    this.view.btnStart.onclick = function() {
      self.view.btnStart.style.display = 'none';

      self.model.quiz.chooseQuestion();
      self.model.quiz.startTimer();
      self.model.quiz.init();

      self.view.showQuestion( self.model.quiz.question.question );
      self.view.showAnswers( self.model.quiz.question.answers );
      self.view.showTimer( self.model.quiz.timer, 0 );

      for (var i = 0; i < self.view.answerButtons.length; i ++) {
        self.view.answerButtons[i].onclick = function() {
          console.log(self.view.answerButtons[i].getAttribute('value'));
        }
      }
    }

    this.model.quiz.timerUpdated = function() {
      self.view.showTimer( self.model.quiz.timer, 1 - self.model.quiz.timer / self.model.quiz.maxTimer );
    }

  }


}
