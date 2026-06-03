// BOTÃO TEMA
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// GRÁFICO PRODUÇÃO
new Chart(document.getElementById("prodChart"), {
  type: "bar",
  data: {
    labels: ["Soja", "Milho", "Café", "Trigo"],
    datasets: [{
      label: "Produção",
      data: [120, 180, 90, 140],
      backgroundColor: "#2ecc71"
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "white" } } },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } }
    }
  }
});


// GRÁFICO SUSTENTABILIDADE
new Chart(document.getElementById("envChart"), {
  type: "doughnut",
  data: {
    labels: ["Sustentável", "Em progresso", "Crítico"],
    datasets: [{
      data: [70, 20, 10],
      backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"]
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "white" } } }
  }
});