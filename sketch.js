

window.onload = function() {

  var model = new Model();

  var menuController = new MenuController(model);
  var quizController = new QuizController(model);

  menuController.view.show();

}
