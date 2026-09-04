let correctAnswer = 1;

function startGame() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("game").classList.remove("hidden");

  document.getElementById("message").innerText =
    "🎯 First click the correct button!";
}

function checkAnswer(number) {
  if (number === correctAnswer) {
    if (correctAnswer < 3) {
      correctAnswer++;
      document.getElementById("message").innerText =
        "✅ Correct! Next one! 🎉";
    } else {
      document.getElementById("message").innerText =
        "🏆 Perfect! You completed the puzzle!";
      document.getElementById("final").classList.remove("hidden");
      createConfetti();
    }
  } else {
    document.getElementById("message").innerText =
      "❌ Wrong! Try again 😄";
  }
}

function celebrate() {
  createConfetti();
  alert("🎉 HAPPY BIRTHDAY MADHAV! 🎂❤️");
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = Math.random() * 20 + 15 + "px";
    confetti.style.animation =
      "fall " + (Math.random() * 3 + 2) + "s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(720deg);
  }
}
`;

document.head.appendChild(style);
