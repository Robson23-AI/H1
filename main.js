// --- Automatyczne pominięcie ekranu powitalnego przy ?start=1 ---
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("start") === "1") {
    startExperience();
  }

  // Obsługa kliknięcia przycisku chat-button
  const chatButton = document.getElementById("chat-button");
  if (chatButton) {
    chatButton.addEventListener("click", () => {
      const widget = document.getElementById("chat-widget");
      if (widget) {
        widget.style.display = widget.style.display === "flex" ? "none" : "flex";
      }
    });
  }

  // Obsługa przycisków czatu z danymi pytaniami
  document.querySelectorAll('.chat-question').forEach(button => {
    button.addEventListener('click', () => {
      const question = button.dataset.question;
      const responseBox = document.getElementById("chat-response");
      if (responseBox && question) {
        responseBox.textContent = "Czekaj... 🤖";

        // Tutaj można dodać zapytanie do API GPT
        // Na razie tylko symulacja odpowiedzi
        setTimeout(() => {
          responseBox.textContent = `Odpowiedź na: ${question}`;
        }, 1000);
      }
    });
  });
});

function startExperience() {
  document.getElementById('intro-screen').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.getElementById('section-nav').style.display = 'block';
  document.getElementById('image-placeholder').style.display = 'block';
  document.getElementById('user-feedback').style.display = 'block';
  document.getElementById('progress-bar-section').style.display = 'block';
  const chatButton = document.getElementById('chat-button');
  if (chatButton) chatButton.style.display = 'block';
  const audio = document.getElementById('background-music');
  if (audio) audio.play();
  animateProgressBar(77.3);
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Obsługa karuzeli feedbacku
const images = [
  'images/feedback1.png',
  'images/feedback2.png',
  'images/feedback3.png',
  'images/feedback4.png',
  'images/feedback5.png',
  'images/feedback6.png',
  'images/feedback7.png'
];

const captions = [
  "Użytkownik: Dziękuję za szybką pomoc!",
  "Super kontakt i rozwiązanie problemu.",
  "Dzięki za cierpliwość!",
  "Najlepszy support ever!",
  "Zespół na medal!",
  "Wszystko działa, dzięki!",
  "Pełen profesjonalizm!"
];

let index = 0;
const imgElement = document.getElementById('carousel-img');
const captionElement = document.getElementById('carousel-caption');

function updateCarousel() {
  if (imgElement && captionElement) {
    imgElement.src = images[index];
    captionElement.textContent = captions[index];
  }
}

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });
}

// Animacja postępu
function animateProgressBar(targetPercentage) {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  let current = 0;
  const interval = setInterval(() => {
    if (current >= targetPercentage) {
      clearInterval(interval);
    } else {
      current += 0.3;
      bar.style.width = current.toFixed(1) + '%';
      bar.textContent = current.toFixed(1) + '%';
    }
  }, 20);
}

// Fade-in animacje
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

faders.forEach(f => observer.observe(f));
