// Esconde o caminho depois da barra
if (window.location.pathname !== '/') {
  window.history.replaceState({}, document.title, '/');
}

// Remove o # da URL sem recarregar a página, mantendo a posição atual
function removeHash() {
  history.replaceState(null, document.title, window.location.pathname + window.location.search);
}

// Escuta clicks nos links com href começando com #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    setTimeout(removeHash, 100);
  });
});