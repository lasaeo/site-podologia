document.getElementById('form-agendamento').addEventListener('submit', function(event) {
  event.preventDefault();
  const resposta = document.getElementById('resposta');
  resposta.textContent = "Obrigado por agendar! Entraremos em contato em breve.";
  this.reset();
});
Adicionar script.js

