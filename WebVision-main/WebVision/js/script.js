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
