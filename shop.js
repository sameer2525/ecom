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
}, 3000);