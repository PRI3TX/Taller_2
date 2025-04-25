document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const respuestas = {
      p1: "1946",
      p2: "Campín",
      p3: "Di Stefano",
      p4: "16"
    };
  
    let puntos = 0;
    const form = e.target;
  
    if (form.p1.value === respuestas.p1) puntos++;
    if (form.p2.value === respuestas.p2) puntos++;
    if (form.p3.value === respuestas.p3) puntos++;
    if (form.p4.value === respuestas.p4) puntos++;
  
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Obtuviste ${puntos}/4 respuestas correctas. ¡${puntos === 4 ? 'Eres un verdadero hincha azul! 💙' : 'Sigue aprendiendo sobre el equipo del alma!'}`;
  });
  