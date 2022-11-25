function Question(text, img, choices, answer) {  //문제, 이미지, 보기, 답
    this.text = text;
    this.img = img;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
