let questions = [
    { question: "Which cancer is the most common among women in Lebanon?", options: ["Breast cancer", "Skin cancer", "Stomach cancer", "Thyroid cancer"], answer: 0 },
    { question: "Which group of diseases causes the largest share of deaths in Lebanon?", options: ["Infectious diseases such as cholera and hepatitis", "Tropical diseases such as malaria", "Chronic (noncommunicable) diseases such as heart disease, cancer and diabetes", "Genetic diseases only"], answer: 2 },
    { question: "What is the number of the Lebanese Red Cross?", options: ["140", "112", "125", "1795"], answer: 0 },
    { question: "Which risk factor is the most common in Lebanon?", options: ["Lack of activity", "High protein diet", "Excessive tobacco use", "Bad healthcare system"], answer: 2 }
];

let current = 0;
let score = 0;
let answered = false;

function el(id) { return document.getElementById(id); }

function showQuestion() {
    let q = questions[current];
    el("progress").textContent = "Question " + (current + 1) + " of " + questions.length;
    el("question").textContent = q.question;
    for (let i = 0; i < 4; i++) {
        el("option" + i).textContent = q.options[i];
        el("option" + i).className = "option";
    }
    el("feedback").textContent = "";
    el("next-btn").classList.add("hidden");
    answered = false;
}

function checkAnswer(chosen) {
    if (answered) return;
    answered = true;
    let right = questions[current].answer;
    el("option" + right).classList.add("correct");
    if (chosen === right) {
        score++;
        el("feedback").textContent = "Correct!";

    } else {
        el("option" + chosen).classList.add("wrong");
        el("feedback").textContent = "False. Not quite.";
    }
    el("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    current++;
    if (current < questions.length) showQuestion();
    else showResult();
}

function showResult() {
    el("quiz-box").classList.add("hidden");
    el("result-box").classList.remove("hidden");
    el("score").textContent = "You scored " + score + " out of " + questions.length + ".";
}

function restartQuiz() {
    current = 0;
    score = 0;
    el("result-box").classList.add("hidden");
    el("quiz-box").classList.remove("hidden");
    showQuestion();
}

showQuestion();  