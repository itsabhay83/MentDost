const quizData = [
    {
        question: `Section 1: EMOTIONAL WELL-BEING
        On the given scale, How often do you feel overwhelmed by stress?`,
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: `Section 1: EMOTIONAL WELL-BEING
        On the given scale, How well do you cope with major life changes?`,
        a: "Able to adjust quickly",
        b: "Try my best",
        c: "Sometimes face issues",
        d: "Completely get distrubed by them",
        correct: "a",
    },
    {
        question: `Section 2: MOOD AND AFFECT
        In the past two weeks, how often have you felt persistently sad or hopeless?`,
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: `Section 2: MOOD AND AFFECT
        How often do you experience mood swings?`,
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: `Section 3: ANXIETY AND WORRY
        In the past two weeks, How often do you feel excessively worried or anxious?`,
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: `Section 3: ANXIETY AND WORRY
        How often do you imagine the worst for a situation?`,
        a: "Not At All",
        b: "Several times",
        c: "More than half the times",
        d: "Nearly every time",
        correct: "a",
    },
    {
        question: `Section 4: SOCIAL RELATIONSHIPS
        How often do you feel isolated or lonely?`,
        a: "Not At All",
        b: "Several times",
        c: "More than half the times",
        d: "Nearly every time",
        correct: "a",
    },
    {
        question: `Section 4: SOCIAL RELATIONSHIPS
        How often do you feel you have someone to talk to about your problems?`,
        a: "Always",
        b: "Sometimes",
        c: "Occasionally",
        d: "Rarely or Never",
        correct: "a",
    },
    {
        question: `Section 5: SLEEP PATTERNS
        How many hours of sleep do you get on average per night?`,
        a: "7-9 hours",
        b: "5-7 hours",
        c: "3-5 hours",
        d: "Less than 3 hours",
        correct: "a",
    },
    {
        question: `Section 5: SLEEP PATTERNS
        Do you experience difficulty falling asleep or staying asleep?`,
        a: "Rarely or Never",
        b: "Occasionally",
        c: "Sometimes",
        d: "Always",
        correct: "a",
    },
    {
        question: `Section 6: SUBSTANCE USE
        Do you engage in the regular use of drugs or alcohol?`,
        a: "Rarely or Never",
        b: "Occasionally",
        c: "Sometimes",
        d: "Always",
        correct: "a",
    },
    {
        question: `Section 6: SUBSTANCE USE
        Has substance use caused any negative consequences in your life?`,
        a: "Rarely or Never",
        b: "Occasionally",
        c: "Sometimes",
        d: "Always",
        correct: "a",
    },
    {
        question: `Section 7: COPING MECHANISM
        Are you able to cope up with stress or difficult emotions?`,
        a: "Rarely or Never",
        b: "Occasionally",
        c: "Sometimes",
        d: "Always",
        correct: "a",
    },
    {
        question: `Section 7: COPING MECHANISM
        Are there any activities or hobbies that bring you joy or relaxation?`,
        a: "Yes they help",
        b: "Sometimes it help",
        c: "No that dont help at all",
        d: "I dont have any hobbies",
        correct: "a",
    },
    {
        question: `Section 8: BODY IMAGE AND SELF-ESTEEM
        How often do you feel satisfied with your body image?`,
        a: "Always",
        b: "Sometimes",
        c: "Occasionally",
        d: "Rarely or Never",
        correct: "a",
    },
    {
        question: `Section 8: BODY IMAGE AND SELF-ESTEEM
        How would you rate your overall self-esteem?`,
        a: "10-7",
        b: "7-5",
        c: "4-3",
        d: "below 3",
        correct: "a",
    },
    {
        question: `Section 9: BODY IMAGE AND SELF-ESTEEM
        Do you experience difficulties concentrating or making decisions?`,
        a: "Always",
        b: "Sometimes",
        c: "Occasionally",
        d: "Rarely or Never",
        correct: "a",
    },
    {
        question: `Section 9: BODY IMAGE AND SELF-ESTEEM
        How optimistic or pessimistic do you feel about the future?`,
        a: "Always",
        b: "Sometimes",
        c: "Occasionally",
        d: "Rarely or Never",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

let arr = []
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === "a") {
            arr.push(10);
        } else if (answer === "b") {
            arr.push(7);
        } else if (answer === "c") {
            arr.push(4);
        } else {
            arr.push(1);
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            let sum = 0; let speak = "";
            for (let num of arr) {
                sum += num;
            }

            if (sum >= 150 && sum <= 180) {
                speak = "You're excelling in life! Your achievements and positive attitude shine. Keep up the fantastic work, and remember, you're doing great..your journey is inspiring and impressive. Cheers to you!";
            } else if (sum >= 120 && sum < 150) {
                speak = "Strive for continual improvement, embracing positivity in your journey. Cultivate and sustain good mental health. Your well-being matters, so prioritize self-care, resilience, and a positive mindset for a fulfilling life.";
            } else if (sum >= 90 && sum < 120) {
                speak = "Stay focused on your goals. Divert your mind into meaningful pursuits that align with your aspirations. Channeling energy into positive endeavors contributes to personal growth and fulfillment";
            } else if (sum >= 60 && sum < 90) {
                speak = "Consider directing your energy towards enhancing your mental well-being. Prioritize self-care, seek support when needed, and embrace positive habits. Your mental health is important; take steps towards improvement.";
            } else {
                speak = "Seek professional support for your mental health. Consult a doctor to discuss concerns, receive guidance, and explore treatment options. Taking this step demonstrates strength and commitment to your well-being.";
            }
            quiz.innerHTML = `
           <h1 class="prescribe-head"> Your Pyschometric score is ${sum}/${quizData.length * 10} </h1>
           <p class="prescribe">${speak}</p>
           <button id="again" onclick="location.reload()">Take the test again</button>
           `


            console.log(arr);

        }
    }
})

function back() {
    window.history.back();
}
