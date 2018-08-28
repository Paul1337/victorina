class SuperQuizController extends BaseQuizController {

  constructor(model) {
    super(model);

    this.model = model;
    this.view = new SuperQuizView();

    var self = this;

    this.view.btnStart.onclick = function() {
      self.view.btnStart.style.display = 'none';

      self.model.superQuiz.playing = true;
      self.model.superQuiz.chooseQuestion();
      self.model.superQuiz.startTimer();
      self.model.superQuiz.init();

      self.view.makeDivNormalColor();
      self.view.zoomOutPointsText();
      self.view.showPoints( self.model.superQuiz.points );
      self.view.showQuestion( self.model.superQuiz.question.question );
      self.view.showPrize( self.model.superQuiz.question.prize );
      self.view.showAnswers( self.model.superQuiz.question.answers );
      self.view.showTimer( self.model.superQuiz.timer, 0 );

      self.view.answerButtons.forEach( function (button, index) {
        button.onclick = function() {
          self.model.superQuiz.checkAnswer( button.getAttribute('value') );
        }
      });
    }

    this.model.superQuiz.timerUpdated = function() {
      self.view.showTimer( self.model.superQuiz.timer, 1 - self.model.superQuiz.timer / self.model.superQuiz.maxTimer );
    }

    this.model.superQuiz.pointsUpdated = function() {
      self.view.showPoints( self.model.superQuiz.points );
    }

    this.model.superQuiz.questionNulled = function() {
      self.view.hideQuestion();
      self.view.hideAnswers();
      self.view.showStartButton();
    }

    this.model.superQuiz.questionChanged = function() {
      self.view.showQuestion( self.model.superQuiz.question.question );
      self.view.showPrize( self.model.superQuiz.question.prize );
      self.view.showAnswers( self.model.superQuiz.question.answers );

      self.view.answerButtons.forEach( function (button, index) {
        button.onclick = function() {
          self.model.superQuiz.checkAnswer( button.getAttribute('value') );
        }
      });
    }

    this.model.superQuiz.answeredRight = function() {
      self.view.decorateDiv();
      self.view.hideAnswers();
    }

    this.model.superQuiz.quizFinished = function() {
      self.view.hideTimer();
      self.view.zoomInPointsText();
      alert("Вы выиграли супер блиц!");
    }

    this.model.superQuiz.gameOver = function() {
      self.view.makeDivRed();
      self.view.hideQuestion();
      self.view.hideAnswers();
      self.view.hideTimer();
      self.view.zoomInPointsText();

      self.view.showStartButton();
    }
  }

}
