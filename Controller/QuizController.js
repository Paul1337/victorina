class QuizController extends BaseController {

  constructor(model) {
    super();

    this.model = model;
    this.view = new QuizView();

    var self = this;

    this.view.btnStart.onclick = function() {
      self.view.btnStart.style.display = 'none';
      console.log(1);

    }

  }

  setQuizType(quizType) {
    this.quizType = quizType;
    this.view.quizType = quizType;
    this.view.init();
  }
}
