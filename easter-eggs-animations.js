// Easter Egg Animations
// All animation functions for easter eggs

class EasterEggAnimations {
    
    // Helper function to center element using JavaScript (Safari fix)
    static centerElement(element) {
        // Force Safari to recalculate viewport dimensions
        // Use pixels instead of vh/vw, but keep transform for centering
        const centerY = window.innerHeight / 2;
        const centerX = window.innerWidth / 2;
        element.style.top = `${centerY}px`;
        element.style.left = `${centerX}px`;
        // Ensure transform is set for proper centering
        // The animation will override this, but it sets the initial position correctly
        element.style.transform = 'translate(-50%, -50%)';
    }
    
    // Waving hand animation
    static showWavingHand() {
        // Create hand image element
        const handContainer = document.createElement('div');
        handContainer.className = 'waving-hand-svg';
        handContainer.innerHTML = `<img src="icons/hand.svg" alt="Waving hand">`;
        document.body.appendChild(handContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(handContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            handContainer.remove();
        }, 2000);
    }
    
    // Swear reaction - shaking frown emoji
    static showSwearReaction() {
        // Create frown emoji element
        const frownContainer = document.createElement('div');
        frownContainer.className = 'shaking-frown-svg';
        frownContainer.innerHTML = `<img src="icons/swear.svg" alt="Disapproving frown">`;
        document.body.appendChild(frownContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(frownContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            frownContainer.remove();
        }, 2000);
    }
    
    // Cat - static cat emoji
    static showCat() {
        // Create cat emoji element
        const catContainer = document.createElement('div');
        catContainer.className = 'static-cat-svg';
        catContainer.innerHTML = `<img src="icons/cat.svg" alt="Cat">`;
        document.body.appendChild(catContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(catContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            catContainer.remove();
        }, 2000);
    }
    
    // Heart - slowly fading in and out
    static showHeart() {
        // Create heart element
        const heartContainer = document.createElement('div');
        heartContainer.className = 'fading-heart-svg';
        heartContainer.innerHTML = `<img src="icons/heart.svg" alt="Heart">`;
        document.body.appendChild(heartContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(heartContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            heartContainer.remove();
        }, 3000);
    }
    
    // Funny face - rotating like hand wave
    static showFunny() {
        // Create funny face element
        const funnyContainer = document.createElement('div');
        funnyContainer.className = 'rotating-funny-svg';
        funnyContainer.innerHTML = `<img src="icons/funny.svg" alt="Funny">`;
        document.body.appendChild(funnyContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(funnyContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            funnyContainer.remove();
        }, 2000);
    }
    
    // Fire - rotating like funny face
    static showFire() {
        // Create fire element
        const fireContainer = document.createElement('div');
        fireContainer.className = 'rotating-fire-svg';
        fireContainer.innerHTML = `<img src="icons/fire.svg" alt="Fire">`;
        document.body.appendChild(fireContainer);
        
        // Center using JavaScript for Safari compatibility
        EasterEggAnimations.centerElement(fireContainer);
        
        // Remove after animation completes
        setTimeout(() => {
            fireContainer.remove();
        }, 2000);
    }
    
    // Track message rotation for commands with multiple responses
    static messageRotation = {};
    
    // Terminal overlay for developer commands
    static showTerminalOverlay(config) {
        // Create full-screen terminal overlay - Windows cmd style
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #000000;
            z-index: 10000;
            font-family: 'Consolas', 'Noto Sans KR', 'Lucida Console', 'Courier New', monospace;
            font-size: 14px;
            color: #C0C0C0;
            padding: 10px 20px;
            overflow-y: auto;
            animation: fadeIn 0.2s ease;
            line-height: 1.5;
        `;
        
        const terminal = document.createElement('div');
        terminal.style.cssText = `
            width: 800px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: left;
        `;
        
        overlay.appendChild(terminal);
        document.body.appendChild(overlay);
        
        // Add lines with typing effect
        const addLine = (text, delay = 0) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.style.cssText = `
                        color: #C0C0C0;
                        margin: 0;
                        white-space: pre-wrap;
                    `;
                    line.textContent = text;
                    terminal.appendChild(line);
                    terminal.scrollTop = terminal.scrollHeight;
                    resolve();
                }, delay);
            });
        };
        
        // Execute the animation sequence
        (async () => {
            await addLine(`> ${config.command}`, 100);
            
            // Run command-specific animation
            if (config.type === 'install') {
                await addLine('', 100);
                
                // Create progress bar line that updates in place
                const progressLine = document.createElement('div');
                progressLine.style.cssText = `
                    color: #C0C0C0;
                    margin: 0;
                    white-space: pre;
                `;
                terminal.appendChild(progressLine);
                
                // Animate progress bar
                for (let i = 0; i <= 100; i += 5) {
                    const filled = Math.floor(i / 5);
                    const empty = 20 - filled;
                    const bar = '▓'.repeat(filled) + '░'.repeat(empty);
                    // Wrap only the bar blocks in smaller font
                    progressLine.innerHTML = `[<span style="font-size: 10px;">${bar}</span>] \\ idealTree: timing idealTree Completed in ${Math.floor(i * 0.74)}ms`;
                    await new Promise(r => setTimeout(r, 150));
                }
                
                await addLine('', 200);
                await addLine('', 100);
                
                // Show the punchline - load ASCII art from rick.txt
                if (config.asciiArt) {
                    try {
                        const response = await fetch('rick.txt');
                        const asciiArt = await response.text();
                        
                        // Display ASCII art with proper formatting
                        const artContainer = document.createElement('pre');
                        artContainer.style.cssText = `
                            color: #C0C0C0;
                            font-size: 8px;
                            line-height: 1;
                            margin: 0;
                            overflow-x: auto;
                            font-family: 'Consolas', 'Lucida Console', monospace;
                        `;
                        artContainer.textContent = asciiArt;
                        terminal.appendChild(artContainer);
                    } catch (error) {
                        console.error('Failed to load ASCII art:', error);
                    }
                }
                
                await addLine('', 200);
                
                // Handle message or messages array
                let messageToShow = '';
                if (config.messages && Array.isArray(config.messages)) {
                    // Rotate through messages
                    const key = config.command;
                    if (!EasterEggAnimations.messageRotation[key]) {
                        EasterEggAnimations.messageRotation[key] = 0;
                    }
                    messageToShow = config.messages[EasterEggAnimations.messageRotation[key]];
                    EasterEggAnimations.messageRotation[key] = (EasterEggAnimations.messageRotation[key] + 1) % config.messages.length;
                } else if (config.message) {
                    messageToShow = config.message;
                }
                
                if (messageToShow) {
                    await addLine(messageToShow, 300);
                }
                
            } else if (config.type === 'error') {
                await addLine('', 300);
                await addLine('Access is denied.', 400);
                await addLine('', 100);
                
                // Handle message or messages array
                let messageToShow = '';
                if (config.messages && Array.isArray(config.messages)) {
                    const key = config.command;
                    if (!EasterEggAnimations.messageRotation[key]) {
                        EasterEggAnimations.messageRotation[key] = 0;
                    }
                    messageToShow = config.messages[EasterEggAnimations.messageRotation[key]];
                    EasterEggAnimations.messageRotation[key] = (EasterEggAnimations.messageRotation[key] + 1) % config.messages.length;
                } else if (config.message) {
                    messageToShow = config.message;
                }
                
                if (messageToShow) {
                    await addLine(messageToShow, 300);
                }
                
            } else if (config.type === 'success') {
                await addLine('', 300);
                
                // Handle message or messages array
                let messageToShow = '';
                if (config.messages && Array.isArray(config.messages)) {
                    const key = config.command;
                    if (!EasterEggAnimations.messageRotation[key]) {
                        EasterEggAnimations.messageRotation[key] = 0;
                    }
                    messageToShow = config.messages[EasterEggAnimations.messageRotation[key]];
                    EasterEggAnimations.messageRotation[key] = (EasterEggAnimations.messageRotation[key] + 1) % config.messages.length;
                } else if (config.message) {
                    messageToShow = config.message;
                }
                
                if (messageToShow) {
                    await addLine(messageToShow, 300);
                }
            }
            
            // Add close instruction
            await addLine(' ', 500);
            await addLine(' ', 100);
            await addLine('Press ESC or click anywhere to close', 300);
            
            // Close on click or ESC
            const closeOverlay = () => {
                overlay.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => overlay.remove(), 200);
            };
            
            overlay.addEventListener('click', closeOverlay);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeOverlay();
            }, { once: true });
        })();
    }
    
    // Add more animation methods here
    // static showDanceAnimation() {
    //     // Implementation
    // }
    
}

// Make globally accessible
window.EasterEggAnimations = EasterEggAnimations;
