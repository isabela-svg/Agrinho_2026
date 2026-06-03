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
        q: "Qual prática ajuda o solo?",
        a: [
            {text:"Plantio direto", correct:true},
            {text:"Desmatamento", correct:false},
            {text:"Queimada", correct:false}
        ]
    },
    {
        q: "Qual tecnologia ajuda no campo?",
        a: [
            {text:"Drones", correct:true},
            {text:"Poluição", correct:false},
            {text:"Desperdício", correct:false}
        ]
    },
    {
        q: "O que é sustentabilidade?",
        a: [
            {text:"Preservar o meio ambiente", correct:true},
            {text:"Destruir florestas", correct:false},
            {text:"Poluir rios", correct:false}
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
        <h2>Resultado Final</h2>
        <h1>${percent}%</h1>
        <p>${percent >= 70 ? "🌱 Excelente conhecimento!" : "🌍 Continue aprendendo!"}</p>
        <p class="tag">#Agrinho 2026 🌱</p>
    `;
}

loadQuestion();