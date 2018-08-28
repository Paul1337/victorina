class QuizController extends BaseQuizController {

  constructor(model) {
    super(model);

    this.model = model;
    this.view = new QuizView();

    var self = this;

    this.view.btnStart.onclick = function() {
      self.view.btnStart.style.display = 'none';

      self.model.quiz.playing = true;
      self.model.quiz.chooseQuestion();
      self.model.quiz.startTimer();
      self.model.quiz.init();

      self.view.makeDivNormalColor();
      self.view.zoomOutPointsText();
      self.view.showPoints( self.model.quiz.points );
      self.view.showQuestion( self.model.quiz.question.question );
      self.view.showPrize( self.model.quiz.question.prize );
      self.view.showAnswers( self.model.quiz.question.answers );
      self.view.showTimer( self.model.quiz.timer, 0 );

      self.view.answerButtons.forEach( function (button, index) {
        button.onclick = function() {
          self.model.quiz.checkAnswer( button.getAttribute('value') );
        }
      });
    }

    this.model.quiz.timerUpdated = function() {
      self.view.showTimer( self.model.quiz.timer, 1 - self.model.quiz.timer / self.model.quiz.maxTimer );
    }

    this.model.quiz.pointsUpdated = function() {
      self.view.showPoints( self.model.quiz.points );
    }

    this.model.quiz.questionChanged = function() {
      self.view.showQuestion( self.model.quiz.question.question );
      self.view.showPrize( self.model.quiz.question.prize );
      self.view.showAnswers( self.model.quiz.question.answers );

      self.view.answerButtons.forEach( function (button, index) {
        button.onclick = function() {
          self.model.quiz.checkAnswer( button.getAttribute('value') );
        }
      });
    }

    this.model.quiz.answeredRight = function() {
      self.view.decorateDiv();
      self.view.hideAnswers();
    }

    this.model.quiz.gameOver = function() {
      self.view.makeDivRed();
      self.view.hideQuestion();
      self.view.hideAnswers();
      self.view.hideTimer();
      self.view.zoomInPointsText();

      self.view.showStartButton();
    }


  }




}
