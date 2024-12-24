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
