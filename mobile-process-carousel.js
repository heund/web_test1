// Mobile Process Section Horizontal Carousel
class MobileProcessCarousel {
    constructor() {
        this.currentIndex = 0;
        this.container = null;
        this.track = null;
        this.navLeft = null;
        this.navRight = null;
        this.isActive = false;
    }

    async init() {
        // Only run on mobile
        if (window.innerWidth > 1024) return;
        
        console.log('[Mobile Process Carousel] Initializing horizontal section carousel');
        
        // Load the main process.html content
        try {
            const response = await fetch('process.html');
            const html = await response.text();
            
            // Parse the HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Get all process sections
            const sections = doc.querySelectorAll('.process-section');
            console.log('[Mobile Process Carousel] Found sections:', sections.length);
            
            if (sections.length === 0) {
                console.error('[Mobile Process Carousel] No sections found in process.html');
                return;
            }
            
            // Create carousel structure
            this.createCarouselStructure(sections);
            
        } catch (error) {
            console.error('[Mobile Process Carousel] Error loading process.html:', error);
        }
    }

    createCarouselStructure(sections) {
        console.log('[Mobile Process Carousel] Creating carousel structure');
        
        // Remove existing carousel if any
        const existing = document.querySelector('.mobile-process-sections-container');
        if (existing) {
            existing.remove();
        }

        // Create container
        this.container = document.createElement('div');
        this.container.className = 'mobile-process-sections-container';

        // Create track
        this.track = document.createElement('div');
        this.track.className = 'mobile-process-sections-track';
        
        // Add each section as a slide
        sections.forEach((section, index) => {
            const slide = document.createElement('div');
            slide.className = 'mobile-process-section-slide';
            // Set first slide as active
            if (index === 0) {
                slide.classList.add('active');
            }
            slide.innerHTML = section.outerHTML;
            this.track.appendChild(slide);
            console.log(`[Mobile Process Carousel] Added section ${index}`);
        });
        
        this.container.appendChild(this.track);

        // Create navigation arrows
        this.createNavigation();

        // Find the mobile content container and append
        const mobileContent = document.querySelector('.mobile-content-container');
        if (mobileContent) {
            mobileContent.innerHTML = '';
            mobileContent.appendChild(this.container);
            console.log('[Mobile Process Carousel] Appended carousel to mobile content');
        }
        
        this.isActive = true;
        
        // Add swipe support for section navigation
        this.addSwipeSupport();
        
        // Initialize the image carousels within each section
        setTimeout(() => {
            this.initializeSectionCarousels();
            this.initializeFadeIn();
        }, 100);
    }
    
    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        let touchStartElement = null;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            touchStartElement = e.target;
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            
            // Check if swipe started on an image carousel
            const isOnCarousel = touchStartElement && (
                touchStartElement.closest('.mobile-process-carousel') ||
                touchStartElement.closest('.mobile-carousel-track') ||
                touchStartElement.closest('.mobile-carousel-slide')
            );
            
            // Don't trigger section navigation if swipe started on image carousel
            if (isOnCarousel) {
                return;
            }
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            
            // Only trigger horizontal swipe if it's more horizontal than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Swipe right - go to previous section
                    if (this.currentIndex > 0) {
                        this.navigate(-1);
                    }
                } else {
                    // Swipe left - go to next section
                    if (this.currentIndex < this.track.children.length - 1) {
                        this.navigate(1);
                    }
                }
            }
        }, { passive: true });
    }
    
    initializeFadeIn() {
        console.log('[Mobile Process Carousel] Initializing fade-in animations');
        
        // Animate all sections initially (only once)
        const allSlides = this.track.querySelectorAll('.mobile-process-section-slide');
        
        allSlides.forEach((slide, slideIndex) => {
            const delay = slideIndex * 100; // Stagger between sections
            
            // Animate h1 and h2 headings
            const headings = slide.querySelectorAll('h1, h2');
            headings.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in-exhibition');
                }, delay + 100);
            });
            
            // Animate paragraphs and text
            const texts = slide.querySelectorAll('.exhibition-text, p');
            texts.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in-exhibition');
                    element.style.visibility = 'visible';
                }, delay + 200 + (index * 50));
            });
            
            // Animate images and carousels
            const images = slide.querySelectorAll('.mobile-process-carousel, .grid-image, .image-item');
            images.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in-exhibition');
                }, delay + 400 + (index * 50));
            });
        });
        
        console.log('[Mobile Process Carousel] Fade-in animations initialized');
    }

    createNavigation() {
        // Left arrow
        this.navLeft = document.createElement('div');
        this.navLeft.className = 'mobile-process-nav mobile-process-nav-left hidden';
        this.navLeft.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        this.navLeft.addEventListener('click', () => this.navigate(-1));

        // Right arrow
        this.navRight = document.createElement('div');
        this.navRight.className = 'mobile-process-nav mobile-process-nav-right';
        this.navRight.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        this.navRight.addEventListener('click', () => this.navigate(1));

        document.body.appendChild(this.navLeft);
        document.body.appendChild(this.navRight);

        this.updateNavigation();
    }

    navigate(direction) {
        this.currentIndex += direction;
        this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.track.children.length - 1));
        
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update active class on slides
        Array.from(this.track.children).forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        this.updateNavigation();
    }

    updateNavigation() {
        if (this.currentIndex === 0) {
            this.navLeft.classList.add('hidden');
        } else {
            this.navLeft.classList.remove('hidden');
        }

        if (this.currentIndex === this.track.children.length - 1) {
            this.navRight.classList.add('hidden');
        } else {
            this.navRight.classList.remove('hidden');
        }
    }

    initializeSectionCarousels() {
        console.log('[Mobile Process Carousel] Initializing image carousels within sections');
        
        // Find all mobile-process-carousel elements
        const carousels = this.container.querySelectorAll('.mobile-process-carousel');
        console.log('[Mobile Process Carousel] Found image carousels:', carousels.length);
        
        carousels.forEach((carousel, index) => {
            const track = carousel.querySelector('.mobile-carousel-track');
            const slides = carousel.querySelectorAll('.mobile-carousel-slide');
            const dotsContainer = carousel.querySelector('.mobile-carousel-dots');
            
            if (!track || slides.length === 0) {
                console.warn(`[Mobile Process Carousel] Carousel ${index} missing track or slides`);
                return;
            }
            
            console.log(`[Mobile Process Carousel] Initializing image carousel ${index} with ${slides.length} slides`);
            
            let currentSlide = 0;
            
            // Create dots
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'mobile-carousel-dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => {
                    currentSlide = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            }
            
            const dots = dotsContainer.querySelectorAll('.mobile-carousel-dot');
            
            const updateCarousel = () => {
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentSlide);
                });
            };
            
            // Add swipe support for image carousel
            let touchStartX = 0;
            let touchEndX = 0;
            
            carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const deltaX = touchEndX - touchStartX;
                
                // Swipe threshold
                if (Math.abs(deltaX) > 50) {
                    if (deltaX > 0 && currentSlide > 0) {
                        // Swipe right - previous image
                        currentSlide--;
                        updateCarousel();
                    } else if (deltaX < 0 && currentSlide < slides.length - 1) {
                        // Swipe left - next image
                        currentSlide++;
                        updateCarousel();
                    }
                }
            }, { passive: true });
            
            updateCarousel();
        });
        
        console.log('[Mobile Process Carousel] Image carousels initialized');
    }
    
    cleanup() {
        if (this.navLeft) {
            this.navLeft.remove();
            this.navLeft = null;
        }
        if (this.navRight) {
            this.navRight.remove();
            this.navRight = null;
        }
        if (this.container) {
            this.container.remove();
            this.container = null;
        }
        this.isActive = false;
    }
}

// Create global instance
window.mobileProcessCarousel = new MobileProcessCarousel();

// Function to initialize carousel from external scripts
window.initMobileProcessCarousel = function() {
    if (window.innerWidth <= 1024) {
        window.mobileProcessCarousel.init();
    }
};

// Function to cleanup carousel
window.cleanupMobileProcessCarousel = function() {
    if (window.mobileProcessCarousel && window.mobileProcessCarousel.isActive) {
        window.mobileProcessCarousel.cleanup();
    }
};
