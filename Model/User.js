class User {


  constructor() {
    this.points = undefined;
  }

  loadUserData(url) {
    var xmlhttp = new XMLHttpRequest();
    var data;

    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    this.points = JSON.parse(xmlhttp.responseText).points;
  }
}
