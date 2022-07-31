let inputInit = document.querySelector("#init");
let inputFinal = document.querySelector("#final");
let inputPause = document.querySelector("#pausa");

let divRes = document.querySelector(".res");
let button = document.querySelector(".button");
button.addEventListener("click", contar);

divRes.style.textAlign = "left";
divRes.innerHTML = "Contando:";

function contar() {
  let valorInit = Number(inputInit.value);
  let valorFinal = Number(inputFinal.value);
  let valorPause = Number(inputPause.value);

  if (
    inputInit.value.length == 0 ||
    inputFinal.value.length == 0 ||
    inputPause.value.length == 0
  ) {
    window.alert("preencha um dos campos");
  } else {
    for (let i = valorInit; i <= valorFinal; i += valorPause) {
      divRes.innerHTML += `${i} \u{1f449}`;
    }
  }
}
