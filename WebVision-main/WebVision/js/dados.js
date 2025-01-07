const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  document.getElementById('nome-usuario').textContent = `Nome: ${user.nome}`;
  document.getElementById('email-usuario').textContent = `Email: ${user.email}`;
  document.getElementById('senha-usuario').value = user.senha;
}

const eyeIcon = document.getElementById('toggle-eye');
const senhaInput = document.getElementById('senha-usuario');

eyeIcon.addEventListener('click', () => {
  const type = senhaInput.type === 'password' ? 'text' : 'password';
  senhaInput.type = type;

  if (senhaInput.type === 'password') {
    eyeIcon.src = './img/olhofechado.png';
  } else {
    eyeIcon.src = 'img/olhoaberto.png'; 
  }
});

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('user');
  alert('Você saiu da sua conta.');
  window.location.href = 'index.html'; 
});