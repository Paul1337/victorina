class QuestionStore {


  constructor() {
    this.questions = [];
  }

  loadQuestions(url) {
    var xmlhttp = new XMLHttpRequest();
    var data;

    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    this.questions = JSON.parse(xmlhttp.responseText);
  }



}
