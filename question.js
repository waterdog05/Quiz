<<<<<<< HEAD
function Question(text, img, choices, answer) {  //문제, 이미지, 보기, 답
    this.text = text;
    this.img = img;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
=======
function Question(text, img, choices, answer) {  //문제, 이미지, 보기, 답
    this.text = text;
    this.img = img;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
>>>>>>> 34d0f7dfcd0ef821a1ac7c1904c735fff67477cd
