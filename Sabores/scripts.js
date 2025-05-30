function mostrarDescricao(id) {
    const descricao = document.getElementById(id);
    const visivel = descricao.style.display === 'block';
    descricao.style.display = visivel ? 'none' : 'block';
  }
  