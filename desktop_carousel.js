// Desktop Resonance Loop Carousel
window.initDesktopResonanceCarousel = function() {
    const slides = document.querySelectorAll('.desktop-resonance-slide');
    const dots = document.querySelectorAll('.desktop-resonance-dot');
    
    if (slides.length === 0) {
        console.log('[Desktop Resonance Carousel] No slides found');
        return;
    }
    
    console.log('[Desktop Resonance Carousel] Found', slides.length, 'slides');
    console.log('[Desktop Resonance Carousel] Found', dots.length, 'dots');
    
    let currentSlide = 0;
    
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    
    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        
        // Update dots active state
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Scroll to the top of the active slide
        if (slides[index]) {
            // Get the exhibition-content-wrapper (parent container)
            const wrapper = slides[index].closest('.exhibition-content-wrapper');
            if (wrapper) {
                wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        
        currentSlide = index;
        console.log('[Desktop Resonance Carousel] Showing slide', index);
    }
    
    // Expose navigation function globally for dot clicks
    window.navigateToResonanceSlide = function(index) {
        showSlide(index);
    };
    
    console.log('[Desktop Resonance Carousel] Initialized with', slides.length, 'slides');
};
