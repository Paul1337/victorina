class QuizView extends BaseView {

  constructor() {
    super();

    this.contentDiv = this.createContentDiv();
    document.body.appendChild(this.contentDiv);

    this.btnBack = this.createButton("back", 20, 85, 120, 50, 20);
    this.contentDiv.appendChild(this.btnBack);

    this.title = this.createHeading("");
    this.contentDiv.appendChild(this.title);

    this.btnStart = this.createButton("start", 0, 150, 150, 50, 20);
    this.btnStart.style.left = '45%';
    this.btnStart.style.backgroundColor = 'rgb(240, 50, 0)';

    this.contentDiv.appendChild(this.btnStart);

    this.hide();
  }

  init() {

    this.btnStart.style.display = 'block';

    switch (this.quizType) {

      case 0:
        this.title.innerHTML = "БЛИЦ";
        break;

      case 1:
        this.title.innerHTML = "СУПЕР БЛИЦ";
        break;

    }


  }
}
