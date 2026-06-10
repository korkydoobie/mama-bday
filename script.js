const openLetter = document.querySelector("#openLetter");
const celebrate = document.querySelector("#celebrate");
const letter = document.querySelector("#letter");
const confettiLayer = document.querySelector("#confettiLayer");
const colors = ["#f27970", "#d94f65", "#176c6d", "#c28a32", "#577f56", "#fff1db"];

function makeConfetti(amount = 90) {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    piece.style.setProperty("--duration", `${Math.random() * 1.8 + 2.8}s`);
    piece.style.setProperty("--turn", `${Math.random() * 360}deg`);
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    fragment.appendChild(piece);
  }

  confettiLayer.appendChild(fragment);
  window.setTimeout(() => confettiLayer.replaceChildren(), 5200);
}

openLetter.addEventListener("click", () => {
  letter.scrollIntoView({ behavior: "smooth", block: "start" });
  makeConfetti(60);
});

celebrate.addEventListener("click", () => makeConfetti(120));
window.addEventListener("load", () => window.setTimeout(() => makeConfetti(70), 550));
