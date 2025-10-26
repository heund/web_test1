// Global typewriter state management
window.activeTypewriterIntervals = [];
window.isTypewriterActive = false;

// Cancel all active typewriter animations
function cancelAllTypewriters() {
    window.activeTypewriterIntervals.forEach(interval => clearInterval(interval));
    window.activeTypewriterIntervals = [];
    window.isTypewriterActive = false;
}

// Typewriter effect for desktop, fade-in for mobile
function initProcessNodes(fileId) {
    // Cancel any existing typewriters first
    cancelAllTypewriters();
    const typewriterElements = Array.from(document.querySelectorAll('.typewriter-text'));
    
    if (typewriterElements.length === 0) return;
    
    // Check if first element has text
    const firstText = typewriterElements[0].textContent.trim();
    if (!firstText) {
        setTimeout(() => initProcessNodes(fileId), 100);
        return;
    }
    
    const isMobile = window.innerWidth <= 1024;
    
    // Check if user has visited this page before (desktop only)
    // Use fileId if provided, otherwise fall back to URL
    const pageKey = fileId || (window.location.pathname + window.location.hash);
    const hasVisited = sessionStorage.getItem('visited_' + pageKey);
    
    if (isMobile) {
        // Mobile: Fade in elements sequentially
        typewriterElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('typing');
                element.classList.add('fade-in');
            }, index * 100);
        });
    } else if (hasVisited) {
        // Desktop return visit: Show all text immediately
        typewriterElements.forEach(element => {
            element.classList.add('typing');
        });
    } else {
        // Desktop first visit: Typewriter effect
        sessionStorage.setItem('visited_' + pageKey, 'true');
        let currentIndex = 0;
        
        function typeNextElement() {
            if (currentIndex >= typewriterElements.length) return;
            
            const element = typewriterElements[currentIndex];
            const text = element.textContent;
            element.textContent = '';
            element.classList.add('typing');
            
            // Disable any transitions/animations
            element.style.transition = 'none';
            element.style.animation = 'none';
            
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    // Remove from active intervals
                    const index = window.activeTypewriterIntervals.indexOf(typeInterval);
                    if (index > -1) {
                        window.activeTypewriterIntervals.splice(index, 1);
                    }
                    currentIndex++;
                    setTimeout(typeNextElement, 200);
                }
            }, 30);
            
            // Track this interval globally
            window.activeTypewriterIntervals.push(typeInterval);
            window.isTypewriterActive = true;
        }
        
        typeNextElement();
    }
}
