// script.js




let slideIndex = 0;
let timeoutId;

// Funcția pentru afișarea imaginilor
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Setează timeout-ul pentru a schimba imaginea la fiecare 3 secunde
  timeoutId = setTimeout(showSlides, 3000);
}

// Adaugă evenimentul de dublu clic pe textul "Utilizare resurse"
document.getElementById("utilizare-resurse").addEventListener("dblclick", function() {
  // Oprirea timeout-ului dacă există unul deja setat
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Schimbarea imaginilor manual
  slideIndex++;
  showSlides();
});

// Inițializează slideshow-ul
showSlides();