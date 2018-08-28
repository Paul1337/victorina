class BaseView {

  constructor() {

  }

  createContentDiv() {
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'ContentDivs');

    return contentDiv;
  }

  createHeading(text) {
    var head = document.createElement('h1');
    head.innerHTML = text;
    head.style.textAlign = 'center';
    head.style.color = '#8a00dc';


    return head;
  }

  createTimerText(value) {
    var style = 'font-size: 60px; left: 100px; top: 250px;';
    var text = this.createText(value, style);
    return text;
  }

  createQuestionText(value) {
    var style = 'font-size: 25px; left: 20%; top: 20%; color: rgb(149, 15, 0);';
    var text = this.createText(value, style);
    return text;
  }

  createPointsText(value) {
    var style = 'font-size: 30px; left: 100px; top: 400px; color: rgb(223, 250, 0);';
    var text = this.createText(value, style);
    return text;
  }

  createText(val, style) {
    var text = document.createElement("p");
    text.innerHTML = val;
    text.style = style + 'position: absolute;';

    return text;
  }

  createAnswerButton(text) {
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'answerButton');
    button.setAttribute('value', text);

    return button;
  }

  createButton(text, x, y, w, h, fontSize) {
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'StandartButton');
    button.setAttribute('value', text);

    button.style.left = x + 'px';
    button.style.top = y + 'px';

    if (w !== undefined) button.style.width = w + 'px';
    if (h !== undefined) button.style.height = h + 'px';
    if (fontSize !== undefined) button.style.fontSize = fontSize + 'px'; else button.style.fontSize = '20px';

    return button;
  }

  show() {
    this.contentDiv.style.display = 'block';
    this.makeDivNormalColor();
  }

  makeDivNormalColor() {
    this.contentDiv.style.backgroundColor = '#34d9ff';
  }

  hide() {
    this.contentDiv.style.display = 'none';
  }
}
