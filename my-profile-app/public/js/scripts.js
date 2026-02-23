// ============================================
// TAB FUNCTIONALITY (Facebook-style profile tabs)
// ============================================

function showTab(tabName) {
    // Hide all tab contents
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }
    
    // Remove active class from all buttons
    const buttons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    // Show the selected tab
    document.getElementById(tabName).classList.add('active-tab');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Initialize tabs on page load
document.addEventListener('DOMContentLoaded', function() {
    // Make sure first tab is active
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        firstTab.classList.add('active');
    }
    
    const firstContent = document.querySelector('.tab-content');
    if (firstContent) {
        firstContent.classList.add('active-tab');
    }
});

// ============================================
// SLIDESHOW GALLERY FUNCTIONALITY
// ============================================

let slideIndex = 1;

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if slideshow exists on the page
    if (document.getElementsByClassName('mySlides').length > 0) {
        showSlides(slideIndex);
    }
    
    // Add default cover photo if none exists
    const coverPhoto = document.querySelector('.cover-photo img');
    if (coverPhoto && (!coverPhoto.src || coverPhoto.src === '' || coverPhoto.src.includes('undefined'))) {
        document.querySelector('.cover-photo').style.background = 'linear-gradient(135deg, #f8e1ed, #ffc0cb)';
        if (coverPhoto) coverPhoto.style.display = 'none';
    }
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    // Check if slides exist
    if (!slides || slides.length === 0) return;
    
    // Loop back to beginning or end
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all thumbnails
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and highlight thumbnail
    slides[slideIndex - 1].style.display = "block";
    
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
        
        // Update caption if caption element exists
        if (captionText) {
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }
}

// Auto-advance slides every 5 seconds (optional)
let slideInterval;

function startSlideshow() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

// Start slideshow automatically when page loads with slides
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementsByClassName('mySlides').length > 0) {
        startSlideshow();
        
        // Stop slideshow when user interacts with navigation
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const thumbnails = document.querySelectorAll('.demo');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlideshow();
                startSlideshow(); // Restart after interaction
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                stopSlideshow();
                startSlideshow(); // Restart after interaction
            });
        }
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                stopSlideshow();
                startSlideshow(); // Restart after interaction
            });
        });
    }
});

// ============================================
// MOBILE MENU TOGGLE (if you add a mobile menu)
// ============================================

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('show');
    }
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// LAZY LOADING FOR IMAGES (improves performance)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ============================================
// BACK TO TOP BUTTON (optional)
// ============================================

// Create back to top button
function createBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f8e1ed;
        color: #333;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(btn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// back to top button
createBackToTopButton();

// ============================================
// ACTIVE LINK HIGHLIGHTING (for navigation)
// ============================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
    
    // Fade in elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});