const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* SCROLL */
function scrollToQuiz(){
    document.getElementById("quiz").scrollIntoView({behavior:"smooth"});
}

/* QUIZ */
const questions = [
    {
        q: "What helps protect soil?",
        a: [
            {text:"No-till farming", correct:true},
            {text:"Deforestation", correct:false},
            {text:"Burning fields", correct:false}
        ]
    },
    {
        q: "Best technology in farming?",
        a: [
            {text:"Artificial Intelligence", correct:true},
            {text:"Random cutting", correct:false},
            {text:"Waste burning", correct:false}
        ]
    },
    {
        q: "What is sustainability?",
        a: [
            {text:"Protecting nature", correct:true},
            {text:"Destroying forests", correct:false},
            {text:"Ignoring soil health", correct:false}
        ]
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
    let q = questions[current];
    questionEl.textContent = q.q;
    answersEl.innerHTML = "";

    q.a.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.text;

        btn.onclick = () => {
            if(ans.correct) score++;
            nextBtn.style.display = "block";
        };

        answersEl.appendChild(btn);
    });

    progress.style.width = ((current)/questions.length)*100 + "%";
}

function nextQuestion(){
    current++;

    if(current < questions.length){
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
}

function showResult(){
    let percent = Math.round((score / questions.length) * 100);

    document.querySelector(".quiz-container").innerHTML = `
        <h2>Final Result</h2>
        <h1>${percent}%</h1>
        <p>${percent >= 70 ? "🌱 Excellent!" : "🌍 Keep learning!"}</p>
        <p class="tag">#Agrinho 2026 🌱</p>
    `;
}

loadQuestion();