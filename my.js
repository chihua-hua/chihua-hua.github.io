// Dina.js

// scrollbox appears after clicking "2"
window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("openScroll");
  const box = document.getElementById("scrollbox");
  const closeBtn = document.getElementById("scrollClose");

  btn.addEventListener("click", () => {
    box.classList.toggle("show");
    closeBtn.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    box.classList.remove("show");
    closeBtn.classList.remove("show");
  });

  // single audio player
  const audio   = document.getElementById("bgm");
  const playBtn = document.getElementById("playBgm");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });

});