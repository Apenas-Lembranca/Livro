function irParaCapitulo(pagina) {
  window.location.href = pagina;
}

// Efeito de digitação para a primeira linha
window.addEventListener("DOMContentLoaded", () => {
  const elemento = document.querySelector(".digitando");
  if (elemento) {
    const textoCompleto = elemento.textContent;
    elemento.textContent = "";
    let i = 0;

    const escrever = () => {
      if (i < textoCompleto.length) {
        elemento.textContent += textoCompleto.charAt(i);
        i++;
        setTimeout(escrever, 60);
      }
    };

    escrever();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musicaFundo");
  if (audio) {
    audio.play().catch(() => {
      // navegador bloqueou? tenta de novo após clique
      document.body.addEventListener("click", () => audio.play());
    });
  }
});