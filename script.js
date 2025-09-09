const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', function () {
  this.classList.toggle('collapsed');
});

// Slogan Rotator
const slogans = [
  "🎉Custom Gifts,Special Prices–Shop Now & Save!🎉",
 
  "🌈Unwrap style, comfort & class.🌈",
  "🎀Crafted with love, delivered with care.🎀",
  "📸Style isn't expensive—it's smart shopping!📸"
];
let currentSlogan = 0;
const sloganBar = document.getElementById("sloganBar");

setInterval(() => {
  sloganBar.style.opacity = 0;
  setTimeout(() => {
    currentSlogan = (currentSlogan + 1) % slogans.length;
    sloganBar.textContent = slogans[currentSlogan];
    sloganBar.style.opacity = 1;
  }, 500);
}, 5000);
// =============================
 // Animate box on page load
 window.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('videoBox');
  setTimeout(() => {
    box.classList.add('visible');
  }, 200);
});

// CTA button action
document.getElementById('ctaButton').addEventListener('click', () => {
  alert("Welcome to MadeForYou! Let's start shopping...");
  window.location.href = "#"; // Replace with your shop URL
});
// ==================curousal===================
var carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 5000, // Change every 5 seconds
    ride: 'carousel'
  });


//   ==============SHOP=================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

  