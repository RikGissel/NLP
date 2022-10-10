let bg10 = document.getElementById("10baggrund");
let field9 = document.getElementById("9markBack");
let field8 = document.getElementById("8markMiddle");
let drone7 = document.getElementById("7droneBack");
let field6 = document.getElementById("6markFront");
let traktor5 = document.getElementById("5traktor");
let drone4 = document.getElementById("4droneFront");
let fence2 = document.getElementById("3busk");
let bush3 = document.getElementById("2hegn");
let farmer1 = document.getElementById("1landmand");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  drone7.style.left = value * 0.25 + 'px';
  drone4.style.left = value * -0.25 + 'px';
  traktor5.style.left = value * -0.1 + 'px';
  field9.style.top = value * 0.2 + 'px';
  field8.style.top = value * 0.15 + 'px';
  bg10.style.top = value * 0.2 + 'px';
});

/* FADE REVEAL */
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);