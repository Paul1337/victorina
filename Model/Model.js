class Model {


  constructor() {

    this.user = new User();
    this.user.loadUserData("../data/User.JSON");

    this.quiz = new Quiz();
    this.superQuiz = new SuperQuiz();



  }




}
