document.querySelectorAll('.select-btn').forEach(button => {
  button.addEventListener('click', (event) => {
      const selectedTheme = event.target.getAttribute('data-theme');
      alert(`Você selecionou o ${selectedTheme}`);
      // Aqui você pode adicionar qualquer lógica para lidar com o tema escolhido.
  });
});
