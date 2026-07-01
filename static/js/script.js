// ================================
// Smooth Fade-In Animation
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ================================
// Active Navigation Link
// ================================

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});
// ================================
// Quiz Data
// ================================

const quiz = [

{
    question: "Which sender address is most likely to be a phishing email?",
    options: [
        "support@paypal.com",
        "security@amazon.in",
        "paypal-support123@gmail.com",
        "help@microsoft.com"
    ],
    answer: 2
},

{
    question: "What should you do before clicking a link in an email?",
    options: [
        "Click it immediately",
        "Hover over the link to inspect the URL",
        "Forward it to friends",
        "Ignore the sender"
    ],
    answer: 1
},

{
    question: "Which is a common phishing tactic?",
    options: [
        "Offering software updates",
        "Creating urgency or fear",
        "Providing accurate account information",
        "Using your full name correctly"
    ],
    answer: 1
},

{
    question: "Which website is most likely legitimate?",
    options: [
        "http://paypal-login.xyz",
        "https://www.paypal.com",
        "paypal-security.net",
        "paypalverify.co"
    ],
    answer: 1
},

{
    question: "What is Multi-Factor Authentication (MFA)?",
    options: [
        "A stronger antivirus",
        "Using multiple passwords",
        "An extra verification step during login",
        "A spam filter"
    ],
    answer: 2
}

];

// ================================
// Variables
// ================================

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

// ================================
// Load Question
// ================================

function loadQuestion() {

    nextBtn.style.display = "none";

    question.innerText = quiz[currentQuestion].question;

    answers.innerHTML = "";

    quiz[currentQuestion].options.forEach((option, index) => {

        const button = document.createElement("button");

        button.classList.add("answer-btn");

        button.innerText = option;

        button.onclick = () => checkAnswer(button, index);

        answers.appendChild(button);

    });

}

// ================================
// Check Answer
// ================================

function checkAnswer(button, selected) {

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => btn.disabled = true);

    if(selected === quiz[currentQuestion].answer){

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        buttons[quiz[currentQuestion].answer].classList.add("correct");

    }

    nextBtn.style.display = "inline-block";

}

// ================================
// Next Question
// ================================

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < quiz.length){

        loadQuestion();

    } else {

        showResult();

    }

});

// ================================
// Result
// ================================

function showResult(){

    question.innerHTML = "Quiz Completed!";

    answers.innerHTML = "";

    nextBtn.style.display = "none";

    let message = "";

    if(score === quiz.length){

        message = "🏆 Excellent! You're a phishing detection expert.";

    } else if(score >= 4){

        message = "✅ Great job! You have strong phishing awareness.";

    } else if(score >= 2){

        message = "👍 Good effort! Keep practicing to improve.";

    } else {

        message = "📚 You should review the training material and try again.";

    }

    result.innerHTML = `
        <p>Your Score: <strong>${score}/${quiz.length}</strong></p>
        <p>${message}</p>
        <br>
        <button class="btn" onclick="location.reload()">Retake Quiz</button>
    `;

}

// ================================
// Start Quiz
// ================================

loadQuestion();


// ================================
// Hero Button Smooth Scroll
// ================================

const startButton = document.querySelector(".btn");

if (startButton) {

    startButton.addEventListener("click", function (e) {

        if (this.getAttribute("href").startsWith("#")) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}
