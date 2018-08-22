class SuperQuizController extends BaseQuizController {

  constructor(model) {
    super();

    this.model = model;
    this.view = new SuperQuizView();

  }

}
