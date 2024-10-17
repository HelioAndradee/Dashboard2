document.getElementById('gerar-relatorio').addEventListener('click', function () {
  const select = document.getElementById('relatorio-select');
  const reportOutput = document.querySelector('.report-output');
  const feedbackMessage = document.getElementById('feedback-message');

  if (select.value) {
    feedbackMessage.textContent = 'Relatório gerado!';
    feedbackMessage.style.color = 'green';
  } else {
    feedbackMessage.textContent = 'Selecione um relatório.';
    feedbackMessage.style.color = 'red';
    reportOutput.innerHTML = '';
  }

  setTimeout(() => {
    feedbackMessage.textContent = '';
  }, 3500);
});

document.getElementById('cancelar-config').addEventListener('click', function () {
  document.getElementById('configForm').reset();
  document.getElementById('feedbackMessage').style.display = 'none';
});

document.getElementById('configForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const feedbackMessage = document.getElementById('feedbackMessage');

  if (!email || !senha) {
    feedbackMessage.style.display = 'block';
    feedbackMessage.textContent = 'Preencha todos os campos em questão.';
    feedbackMessage.style.color = 'red';
    return;
  }

  if (senha.length <= 3) {
    feedbackMessage.style.display = 'block';
    feedbackMessage.textContent = 'A senha deve conter mais de 3 caracteres.';
    feedbackMessage.style.color = 'red';
    return;
  }

  feedbackMessage.style.display = 'block';
  feedbackMessage.textContent = 'Configurações salvas';
  feedbackMessage.style.color = 'green';

  this.reset();
});

// Dark mode toggle function
function applyTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Event listener for theme toggle button
document.getElementById('toggle-theme').addEventListener('click', applyTheme);
