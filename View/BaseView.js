class BaseView {

  constructor() {

  }

  createContentDiv() {

    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'ContentDivs');

    return contentDiv;
  }

  show() {
    this.contentDiv.style.display = 'block';
  }

  hide() {
    this.contentDiv.style.display = 'none';
  }
}
