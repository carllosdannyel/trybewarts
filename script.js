function checkInputValue() {
  const getButton = document.getElementById('button-login');
  getButton.addEventListener('click', () => {
    const inputEmail = document.getElementById('email-input');
    const inputPassword = document.getElementById('input-password');
    if (
      inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function verifyChecked() {
  const check = document.getElementById('agreement');
  const botao = document.getElementById('submit-btn');
  check.addEventListener('click', () => {
    if (check.checked) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
}

checkInputValue();
verifyChecked();
