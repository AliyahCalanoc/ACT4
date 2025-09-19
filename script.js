// Smooth Scroll
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight Active Section
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      document.querySelector(`.nav-link[href='#${sec.id}']`)?.classList.add("active");
    }
  });
});

// Contact Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorBox = document.getElementById("form-error");

  if (name === "" || email === "" || message === "") {
    errorBox.textContent = "All fields are required!";
    errorBox.style.color = "red";
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorBox.textContent = "Please enter a valid email address!";
    errorBox.style.color = "red";
    return false;
  }

  errorBox.textContent = "";
  alert("Form submitted successfully!");
  return true;
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    this.reset();
  }
});

// Project Modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", function () {
    let title = this.querySelector(".card-title")?.textContent;
    let desc = this.querySelector(".card-text")?.textContent;

    document.getElementById("projectModalLabel").textContent = title;
    document.getElementById("projectModalBody").textContent = desc;

    new bootstrap.Modal(document.getElementById("projectModal")).show();
  });
});


// CSS Manipulation Example
document.getElementById("color_button")?.addEventListener("click", function () {
  this.style.backgroundColor = "purple";
  this.style.transform = "scale(1.1)";
});

// ================================
// 🎵 Background Music Controls
// ================================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

if (music && musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play().then(() => {
        musicBtn.textContent = "Pause Music";
      }).catch(err => {
        console.log("Playback blocked:", err);
      });
    } else {
      music.pause();
      musicBtn.textContent = "Play Music";
    }
  });
}
