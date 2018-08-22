class MenuView extends BaseView {

  constructor() {
    super();

    this.contentDiv = this.createContentDiv();
    document.body.appendChild(this.contentDiv);

    this.title = this.createHeading('Игра "Викторина"!');

    this.quizButton = this.createButton('Блиц', 20, 85, 120, 50, 20);
    this.superQuizButton = this.createButton('Супер блиц', 20, 150, 140, 50, 20);

    this.contentDiv.appendChild(this.title);
    this.contentDiv.appendChild(this.quizButton);
    this.contentDiv.appendChild(this.superQuizButton);


    this.hide();

  }

}
