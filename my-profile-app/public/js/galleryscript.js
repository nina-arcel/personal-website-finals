let slideIndex = 1;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementsByClassName('mySlides').length > 0) {
        showSlides(slideIndex);
    }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (!slides || slides.length === 0) return;
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
        if (captionText) {
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }
}