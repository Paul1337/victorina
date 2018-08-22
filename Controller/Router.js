class Router {


  constructor(model) {
    var menuController = new MenuController(model);
    var quizController = new QuizController(model);

    menuController.view.show();

    menuController.view.quizButton.onclick = function() {
      quizController.view.show();
      quizController.setQuizType( BLIZ_TYPE_NORMAL );
      menuController.view.hide();
    }

    menuController.view.superQuizButton.onclick = function() {
      quizController.view.show();
      quizController.setQuizType( BLIZ_TYPE_SUPER );
      menuController.view.hide();
    }

    quizController.view.btnBack.onclick = function() {
      quizController.view.hide();
      menuController.view.show();
    }
  }
}
