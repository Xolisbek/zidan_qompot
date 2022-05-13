let ism1 = document.querySelector(".ism1");
let ism2 = document.querySelector(".ism2");
let resultText = document.querySelector(".resultText");
// let resultText2 = document.querySelector(".res2");
let br = document.createElement("br");
let span = document.createElement("span");
span.className = "res2";
let link = document.querySelector(".link");
let li = document.querySelector(".teleg");
function resultRun() {
  resultText.textContent =
    "Men " +
    ism1.value.toUpperCase() +
    ", Sizni Yaxshi Ko`raman " +
    "Zayniddin 💕😛😛😛👀🎁";
  resultText.appendChild(br);
  resultText.appendChild(span);
  resultText.style.border = "2px solid #797979";
  span.textContent =
    ism2.value.toUpperCase() + " bilan o`zim gaplashaman,iltimos uni unuting !";
  link.textContent =
    ism1.value.toUpperCase() + " men  bilan bog`laning ! Sizni kutaman !";
  li.className = " teleg fa-brands fa-telegram";
  ism1.value = null;
  ism2.value = null;
}
