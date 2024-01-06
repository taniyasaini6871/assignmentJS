
function quiz() {

    const questions = [
        {
            question: "Q1- select your country ?",
            a: "canada",
            b: "india",
            c: "america",
            d: "italy",
            correct: "b"
        },
        {
            question: "Q2- select your state ?",
            a: "punjab",
            b: "delhi",
            c: "bihar",
            d: "himachal",
            correct: "a"
        },
        {
            question: "Q3- full form of CSS ?",
            a: "central style sheets",
            b: "cascading style sheet",
            c: "cascading simple sheets",
            d: "cars SUVs sailboats",
            correct: "b"
        },
        {
            question: "Q4- full form of HTML ?",
            a: "hypertext markup language",
            b: "hypertext markdown language",
            c: "hypertext machine language",
            d: "helicopter terminal motorboats",
            correct: "a"
        },
        {
            question: "Q5- full form of HTML ?",
            a: "hypertext markup language",
            b: "hypertext markdown language",
            c: "hypertext machine language",
            d: "helicopter terminal motorboats",
            correct: "a"
        },
        {
            question: "Q6- full form of CSS ?",
            a: "central style sheets",
            b: "cascading style sheet",
            c: "cascading simple sheets",
            d: "cars SUVs sailboats",
            correct: "b"
        },
        {
            question: "Q7- select your state ?",
            a: "punjab",
            b: "delhi",
            c: "bihar",
            d: "himachal",
            correct: "a"
        },
        {
            question: "Q8-select your country ?",
            a: "canada",
            b: "india",
            c: "america",
            d: "italy",
            correct: "b"
        }
    ];

    let quiz = document.querySelector("#quizContainer");
    let answerEls = document.querySelectorAll(".answer");
    let questionEl = document.querySelector("#question");
    let a_text = document.querySelector("#a_text");
    let b_text = document.querySelector("#b_text");
    let c_text = document.querySelector("#c_text");
    let d_text = document.querySelector("#d_text");
    let nextBtn = document.querySelector("#next");
    let previousBtn = document.querySelector("#previous");

    let currentQuiz = 0;
    let score = 0;
    let storedAnswer = null;

    function deselectAnswer() {
        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                storedAnswer = answerEl.id;
            }
            answerEl.checked = false;
        });
    }

    function getselected() {
        let answer;
        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        })
        return answer;
    }

    function updateQuestionContent() {
        let currentQuestion = questions[currentQuiz];
        questionEl.innerHTML = currentQuestion.question;
        a_text.innerHTML = currentQuestion.a;
        b_text.innerHTML = currentQuestion.b;
        c_text.innerHTML = currentQuestion.c;
        d_text.innerHTML = currentQuestion.d;

        deselectAnswer()
    }


    let submitBtn = document.querySelector("#submit");

    previousBtn.addEventListener("click", () => {
        currentQuiz--;

        if (currentQuiz >= 0) {
            // Update the content with the previous question
            updateQuestionContent();

            if (storedAnswer) {
                document.getElementById(storedAnswer).checked = true;
            }
        }

        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    });


    nextBtn.addEventListener("click", () => {

        const answer = getselected();
        if (answer) {

            if (answer === questions[currentQuiz].correct) {
                score++;
            }
            currentQuiz++;

            if (currentQuiz < questions.length) {
                // Update the content with the next question
                updateQuestionContent();

            } else {
                nextBtn.style.display = "none";
                submitBtn.style.display = "block";
            }
        }

    });

    submitBtn.addEventListener("click", () => {

        if (score > 4) {
            quiz.innerHTML = `<h2 class="font-bold">Your final score is ${score}/${questions.length}</h2>
                               <p class="text-green-400">you are pass</p>
                               <button type="button"  class="restartBtn bg-blue-300 px-3 py-2 mt-4 text-white  rounded-lg">Restart Test</button>`;


        } else {
            quiz.innerHTML = `<h2 class="font-bold">Your final score is ${score}/${questions.length}</h2>
                               <p class="text-red-400">you are fail</p>
                               <button type="button" class="restartBtn bg-blue-300 mt-4 px-3 py-2 text-white rounded-lg">Restart Test</button>`;
        }

        let restartBtns = document.querySelectorAll(".restartBtn");
        restartBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                currentQuiz = 0;
                score = 0;
                window.location.reload();
            })

        })

    });

    updateQuestionContent();

};

quiz();