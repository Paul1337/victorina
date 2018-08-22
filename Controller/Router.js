class Router {


  constructor(model) {
    var menuController = new MenuController(model);
    var quizController = new QuizController(model);
    var superQuizController = new SuperQuizController(model);

    menuController.view.show();

    menuController.view.quizButton.onclick = function() {
      quizController.view.show();
      quizController.view.showStartButton();
      menuController.view.hide();
    }

    menuController.view.superQuizButton.onclick = function() {
      superQuizController.view.show();
      superQuizController.view.showStartButton();
      menuController.view.hide();
    }

    quizController.view.btnBack.onclick = function() {
      quizController.view.hide();
      menuController.view.show();
    }

    superQuizController.view.btnBack.onclick = function() {
      superQuizController.view.hide();
      menuController.view.show();
    }
  }
}
