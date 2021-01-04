var answers = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes - definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"]

var answerReveal = document.querySelector(".answer-reveal");
var submitButton = document.querySelector(".submit");
var question = document.querySelector(".question");
var image = document.querySelector(".image1");
submitButton.addEventListener('click', randomAnswer);

function randomAnswer() {
  answerReveal.value = answers[getRandomIndex(answers)];
  answerReveal.classList.remove("hidden");
  image.classList.add("hidden");
  answerReveal.innerHTML = `
  "${question.value}?"
  ${answerReveal.value}
  `;
  question.value = ""
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
