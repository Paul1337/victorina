class MenuController extends BaseController {

  constructor(model) {
    super();

    this.model = model;
    this.view = new MenuView();

  }
}
