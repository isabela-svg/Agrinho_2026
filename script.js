// Contadores animados
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => {
    const target = +stat.getAttribute('data-target');
    let count = 0;
    const increment = target / 200;
    function updateCounter(){
        count += increment;
        if(count < target){
            stat.firstChild.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            stat.firstChild.textContent = target;
        }
    }
    updateCounter();
});

// Formulário simples
const form = document.getElementById('contactForm');
form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
});