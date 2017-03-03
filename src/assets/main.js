let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  var min = Math.ceil(0),
      max = Math.floor(9999);

  answer.value = Math.floor(Math.random() * (max - min)) + min;
  makeFourCharactersLong();
}

function makeFourCharactersLong() {
  while (answer.value.toString().length < 4) {
    answer.value.toString() = '0' + answer.value.toString();
  }

  answer.value = parseInt(answer.value.toString());
}
