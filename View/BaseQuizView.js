class BaseQuizView extends BaseView {

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

    this.question = this.createQuestionText("");
    this.contentDiv.appendChild(this.question);

    this.timer = this.createTimerText("");
    this.contentDiv.appendChild(this.timer);

    this.hide();

  }

  showTimer(timer, a) {
    this.timer.innerHTML = timer;
    var red = Math.round(a * 255);
    var color = 'rgb(' + red + ', 0, 0)';
    this.timer.style.color = color;
  }

  showStartButton() {
    this.btnStart.style.display = 'block';
  }

  showQuestion(question) {
    this.question.innerHTML = question;
  }

  showAnswers(answers) {
    this.answerButtons = [];

    for (var i = 0; i < answers.length; i ++) {
      this.answerButtons[i] = this.createButton(answers[i], i * 250 + 320, 300);
      this.contentDiv.appendChild( this.answerButtons[i] );

    }
  }
}
