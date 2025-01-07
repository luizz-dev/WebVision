function alterarTextoBotao() {
  const botao = document.getElementById("btn-submit");
  botao.value = "Obrigado!";
  botao.disabled = true;
  return false;
}

const instaIcon = document.getElementById("insta");
const tikIcon = document.getElementById("tik");
const xIcon = document.getElementById("x");

function openInsta() {
  window.location.href = "https://www.instagram.com/web_visionofc/";
}

function openProjetos() {
  window.location.href = "http://127.0.0.1:5500/WebVision/index.html#projetos";
}
function openContato() {
  window.location.href = "http://127.0.0.1:5500/WebVision/index.html#contato";
}
function openServicos() {
  window.location.href = "http://127.0.0.1:5500/WebVision/index.html#servicos";
}

// modal
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const botaoAbir = document.querySelector('[ data-modal="abrir"]');
const containerModal = document.querySelector('[ data-modal="container"]');

const botaoFecharC = document.querySelector('[data-modal="fechar-cadastro"]');

const containerModalC = document.querySelector(
  '[data-modal="container-cadastro"]'
);

const cadastroBtn = document.querySelector('[ data-modal="btn-cadastro"]');
const loginBtn = document.querySelector('[ data-modal="btn-login"]');

function abrirModal(event) {
  event.preventDefault();
  containerModal.classList.add("ativo");
}
function fecharModal(event) {
  event.preventDefault();
  containerModal.classList.remove("ativo");
}

function abrirModalC(event) {
  event.preventDefault();
  fecharModal(event);
  containerModalC.classList.add("ativo");
}
function fecharModalC(event) {
  event.preventDefault();
  containerModalC.classList.remove("ativo");
}
function abrirModalBtn(event) {
  event.preventDefault(event);
  containerModal.classList.add("ativo");
  fecharModalC(event);
}

botaoAbir.addEventListener("click", abrirModal);
botaoFechar.addEventListener("click", fecharModal);

botaoFecharC.addEventListener("click", fecharModalC);
cadastroBtn.addEventListener("click", abrirModalC);
loginBtn.addEventListener("click", abrirModalBtn);
// Seleciona os elementos dos modais
const modalLogin = document.querySelector('[data-modal="container"]');
const modalCadastro = document.querySelector('[data-modal="container-cadastro"]');

// Seleciona os botões
const btnFecharLogin = document.querySelector('[data-modal="fechar"]');
const btnFecharCadastro = document.querySelector('[data-modal="fechar-cadastro"]');
const btnCadastroLogin = document.querySelector('[data-modal="btn-cadastro"]');
const btnLoginCadastro = document.querySelector('[data-modal="btn-login"]');

// Eventos para abrir e fechar os modais
btnCadastroLogin.addEventListener('click', () => {
  modalLogin.classList.remove('active');
  modalCadastro.classList.add('active');
});

btnLoginCadastro.addEventListener('click', () => {
  modalCadastro.classList.remove('active');
  modalLogin.classList.add('active');
});

btnFecharLogin.addEventListener('click', () => {
  modalLogin.classList.remove('active');
});

btnFecharCadastro.addEventListener('click', () => {
  modalCadastro.classList.remove('active');
});

// Função para cadastrar um usuário
const formCadastro = modalCadastro.querySelector('form');
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome-cadastro').value;
  const email = formCadastro.querySelector('input[type="email"]').value;
  const senha = document.getElementById('senha-cadastro').value;

  if (!nome || !email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }

  localStorage.setItem('user', JSON.stringify({ nome, email, senha }));
  alert('Cadastro realizado com sucesso! Faça login.');
  
  formCadastro.reset();
  modalCadastro.classList.remove('active');
  modalLogin.classList.add('active');
});

// Função para realizar o login
const formLogin = modalLogin.querySelector('form');
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = formLogin.querySelector('input[type="email"]').value;
  const senha = formLogin.querySelector('#senha').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
    return;
  }

  if (email === user.email && senha === user.senha) {
    alert(`Bem-vindo(a), ${user.nome}!`);
    formLogin.reset();
  } else {
    alert('Email ou senha incorretos.');
  }
});
