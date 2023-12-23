// const red = document.querySelector(".red");
// const yellow = document.querySelector(".yellow");
const forLine = document.querySelectorAll(".for");
console.log(forLine);
let activeLight = 0;

setInterval(() => {
  forsLight();
}, 2000);

function forsLight() {
  forLine[activeLight].className = "for";
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const krugLight = forLine[activeLight];
  krugLight.classList.add(krugLight.getAttribute("color"));
}
