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
