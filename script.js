document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const respuestas = {
      p1: "1946",
      p2: "Campín",
      p3: "Di Stefano",
      p4: "16",
      p5: "2023",
      p6: "un hijo bobo llamdo santafe"
    };
  
    let puntos = 0;
    const form = e.target;
  
    if (form.p1.value === respuestas.p1) puntos++;
    if (form.p2.value === respuestas.p2) puntos++;
    if (form.p3.value === respuestas.p3) puntos++;
    if (form.p4.value === respuestas.p4) puntos++;
    if (form.p5.value.trim() === respuestas.p5) puntos++;
    if (form.p6.value.trim() === respuestas.p6) puntos++;
    if (form.p7.value.trim() === respuestas.p7) puntos++;
  
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Obtuviste ${puntos}/7 respuestas correctas. ¡${puntos === 7 ? 'Eres un verdadero hincha azul! 💙' : 'Sigue aprendiendo sobre el equipo del alma!'}`;
  });
  
  const abrir = document.getElementById("abrirModal");
  const modal = document.getElementById("videoModal");
  const cerrar = document.getElementById("cerrarModal");
  
  abrir.addEventListener("click", () => {
    modal.style.display = "block";
  });
  
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  