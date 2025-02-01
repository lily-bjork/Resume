let slideIndex = 0;
showSlides();

function currentSlide(n) {
slideIndex = n-1;
clearTimeout(timeout)
showSlides()
}

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides fade");
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
timeout = setTimeout(showSlides, 5000); // Change image every 5 seconds
}