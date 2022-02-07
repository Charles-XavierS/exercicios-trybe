function adminTemp() {
  let header = document.querySelectorAll("#header-container")[0];
  header.style.background = "rgba(0,176,105,255)"
}
adminTemp();

function postItLaranja() {
  let divsLaranjas = document.querySelectorAll(".emergency-tasks div");
  for (let index = 0; index < divsLaranjas.length; index++) {
    divsLaranjas[index].style.background = "#ff9f84"
    divsLaranjas[index].style.padding = "1px"
  }
}
postItLaranja();

function tituloRosa() {
  let h3Rosas = document.querySelectorAll(".emergency-tasks h3");
  for (let index = 0; index < h3Rosas.length; index++) {
    h3Rosas[index].style.background = "#a500f3"
  }
}
tituloRosa();

function postItAmarelo() {
  let divsAmarelas = document.querySelectorAll(".no-emergency-tasks div");
  for (let index = 0; index < divsAmarelas.length; index++) {
    divsAmarelas[index].style.background = "#f9db5e"
    divsAmarelas[index].style.padding = "1px"
  }
}
postItAmarelo();

function tituloPreto() {
  let h3Preto = document.querySelectorAll(".no-emergency-tasks h3");
  for (let index = 0; index < h3Preto.length; index++) {
    h3Preto[index].style.background = "#232525"
  }
}
tituloPreto();

function rodapeTrybe() {
  let footer = document.querySelectorAll("#footer-container")[0];
  footer.style.background = "rgba(0,53,51,255)"
}
rodapeTrybe();