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
    var text = document.createElement("p");
    text.innerHTML = value;
    text.style.fontSize = '60px';
    text.style.position = 'absolute';
    text.style.left = '100px';
    text.style.top = '250px';

    return text;
  }

  createQuestionText(value) {
    var text = document.createElement("p");
    text.innerHTML = value;
    text.style.fontSize = '25px';
    text.style.color = 'rgb(149, 15, 0)';
    text.style.position = 'absolute';
    text.style.left = '20%';
    text.style.top = '20%';

    return text;

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
  }

  hide() {
    this.contentDiv.style.display = 'none';
  }
}
