# How-much-Do-You-Code
Backup Code for How-much-Do-You-Code
var pageScroll = 1; // Going back and forth between questions
var signs = {
    nextX: 260,
    y: 320,
    w: 100,
    h: 50,
    previousX: 60
};
var centerY = function(object, propertyY) {
    return (propertyY + object.h + propertyY) / 2;
};
var centerX = function(object, propertyX) {
    return (propertyX + object.w + propertyX) / 2;
};
var questions = [{

    }, {
        question: "What programming language is this programmed in?",
        answer1: "HTML",
        answer2: "CSS",
        answer3: "Javascript",
        answer4: "SQL",
        correctAnswer: "Javascript",
        pic: function() {}
    },
    {
        question: "What is this called?",
        answer1: "object oriented design (object types)",
        answer2: "array of objects",
        answer3: "object of arrays",
        answer4: "none of the above",
        correctAnswer: "array of objects",
        pic: function() {
            textSize(15);
            textAlign(LEFT, BASELINE);
            text("[\n    {\n     says:\"Hello!\",\n},\n]", 265, 125);
        }
    },
    {
        question: "If this was a command...How far over would the rectangle be?",
        answer1: 200,
        answer2: 50,
        answer3: 140,
        answer4: 30,
        pic: function() {
            text('rect(200,50,140,30);', 200, 200);
        },
        correctAnswer: 200
    },
]; // array of objects that contain question, choices, and answer
var quizQuestion = function(question, answer1, answer2, answer3, answer4, correctAnswer) {
    var qsBox = {
        x: 35,
        y: 110,
        w: 340,
        h: 100
    };
    var choicesBox = {
        x: 25,
        y: 235,
        w: 80,
        h: 40
    };
    textSize(14);
    noFill();
    stroke(0, 38, 255);
    rect(qsBox.x, qsBox.y, qsBox.w, qsBox.h); // Question Box
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    text(question, centerX(qsBox, qsBox.x), centerY(qsBox, qsBox.y)); // Question
    fill(0, 255, 0);
    rect(signs.previousX, signs.y, signs.w, signs.h); // Previous Box
    rect(signs.nextX, signs.y, signs.w, signs.h); // Next Box
    fill(0, 0, 0);
    text("Next", centerX(signs, signs.nextX), centerY(signs, signs.y)); // Centered 'Next' Text
    text("Previous", centerX(signs, signs.previousX), centerY(signs, signs.y)); // Centered 'Previous' Text
    var spaceApart = 90;
    for (var i = 0; i < 4; i++) {
        var iterateX = i * spaceApart;
        var choices = [answer1, answer2, answer3, answer4];
        textSize(13);
        textAlign(LEFT, CENTER);
        text(choices[i], iterateX + choicesBox.x, centerY(choicesBox, choicesBox.y), choicesBox.w, choicesBox.h); // Answer Choices
        noFill();
        rect(iterateX + choicesBox.x, choicesBox.y, choicesBox.w, choicesBox.h);
    }
};
var draw = function() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);
    textAlign(CENTER, CENTER);
    for (var i = 1; i < questions.length; i++) {
        if (pageScroll === i) { // new scene every question
            quizQuestion(questions[i].question, questions[i].answer1, questions[i].answer2, questions[i].answer3, questions[i].answer4); // displays question and choices
            questions[i].pic(); // calls picture function if there is one
        } else if (pageScroll >= questions.length - 1) {
            // since the array index starts with zero; If the person clicks next, pageScroll will stay on the last question.
            pageScroll = questions.length - 1;
        } else if (pageScroll <= 1) { // if previous is pressed and you are on question 1, nothing wil happen
            pageScroll = 1;
        }
    }
};
var mouseClicked = function() {
    if (mouseX > signs.previousX && mouseX < signs.previousX + signs.w && mouseY > signs.y && mouseY < signs.y + signs.h) {
        pageScroll--;
    } // when the previous box is clicked, you go back
    if (mouseX > signs.nextX && mouseX < signs.nextX + signs.w && mouseY > signs.y && mouseY < signs.y + signs.h) {
        pageScroll++;
    } // when the next box is clicked, you go forward
};
