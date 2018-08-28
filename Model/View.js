class View {

  constructor() {

  }

  createButton() {
    var buttonId = 'button';
    this.btn = new Button(10, 10, 120, 40, 'press me!', buttonId);
    document.body.appendChild(this.btn.button);
  }

  createTexts() {
    this.text1 = document.createElement('p');
    this.text1.setAttribute('class', 'textClass');
    this.text1.innerHTML = "Clicks amount: 0";
    document.body.appendChild(this.text1);



  }

}
