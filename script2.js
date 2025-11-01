// Portfolio Website - Refactored Script

class TerminalPortfolio {
    constructor() {
        this.currentFile = 'hero';
        this.currentLang = 'en';
        this.translations = {};
        this.animatedPages = new Set(); // Track which pages have been animated
        
        this.content = {
            hero: {
                breadcrumb: 'intro',
                html: `
                    <div class="hero-intro">
                        <canvas id="code-architecture-canvas"></canvas>
                    </div>
                `
            },
            about: {
                breadcrumb: 'about.md',
                getHTML: function() {
                    const isKorean = document.documentElement.lang === 'ko';
                    
                    if (isKorean) {
                        // Korean structure
                        return `
                            <img src="images/profile/image1.jpg" alt="Profile" class="profile-picture" id="profile-picture">
                            <div class="about-terminal">
                                <div class="terminal-prompt">
                                    <span class="prompt-symbol">></span>
                                    <span class="prompt-command">about_me.txt</span>
                                </div>
                                
                                <div class="terminal-output">
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.name"></span></p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 01</p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line1.text1"></span> <span class="emphasis-word" data-i18n="about.line1.emphasis"></span> <span data-i18n="about.line1.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line2.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line2.emphasis"></span> <span data-i18n="about.line2.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line3.text1"></span> <span class="emphasis-word" data-i18n="about.line3.emphasis"></span> <span data-i18n="about.line3.text2"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line4.text1"></span> <span class="emphasis-word glow" data-i18n="about.line4.emphasis"></span> <span data-i18n="about.line4.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line5"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line6"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line6b.text1"></span> <span class="emphasis-word" data-i18n="about.line6b.emphasis"></span> <span data-i18n="about.line6b.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line7.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line7.emphasis"></span> <span data-i18n="about.line7.text2"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line8.text1"></span> <span class="emphasis-word" data-i18n="about.line8.emphasis"></span> <span data-i18n="about.line8.text2"></span></p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 02</p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line1.text1"></span> <span class="emphasis-word" data-i18n="about.section2.line1.emphasis"></span> <span data-i18n="about.section2.line1.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line2b.text1"></span> <span class="emphasis-word pulse" data-i18n="about.section2.line2b.emphasis"></span> <span data-i18n="about.section2.line2b.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line3.text1"></span> <span class="emphasis-word glow" data-i18n="about.section2.line3.emphasis"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line3b.text1"></span> <span data-i18n="about.section2.line3b.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line4.text1"></span> <span class="emphasis-word" data-i18n="about.section2.line4.emphasis"></span> <span data-i18n="about.section2.line4.text2"></span></p>
                                </div>
                                
                                <div class="terminal-cursor">_</div>
                            </div>
                        `;
                    } else {
                        // English structure - completely independent
                        return `
                            <img src="images/profile/image1.jpg" alt="Profile" class="profile-picture" id="profile-picture">
                            <div class="about-terminal">
                                <div class="terminal-prompt">
                                    <span class="prompt-symbol">></span>
                                    <span class="prompt-command">about_me.txt</span>
                                </div>
                                
                                <div class="terminal-output">
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.name"></span></p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 01</p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line1.text1"></span> <span class="emphasis-word" data-i18n="about.line1.emphasis"></span> <span data-i18n="about.line1.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line2.text1"></span> <span class="emphasis-word" data-i18n="about.line2.emphasis"></span> <span data-i18n="about.line2.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line3.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line3.emphasis"></span> <span data-i18n="about.line3.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line4"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line5.text1"></span> <span class="emphasis-word" data-i18n="about.line5.emphasis"></span> <span data-i18n="about.line5.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line6.text1"></span> <span class="emphasis-word glow" data-i18n="about.line6.emphasis"></span> <span data-i18n="about.line6.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line7.text1"></span> <span class="emphasis-word" data-i18n="about.line7.emphasis"></span> <span data-i18n="about.line7.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line8"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line9.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line9.emphasis"></span> <span data-i18n="about.line9.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line10"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line11"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line12"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line13"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line14.text1"></span> <span class="emphasis-word" data-i18n="about.line14.emphasis"></span> <span data-i18n="about.line14.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line15.text1"></span> <span class="emphasis-word glow" data-i18n="about.line15.emphasis"></span> <span data-i18n="about.line15.text2"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line16.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line16.emphasis"></span> <span data-i18n="about.line16.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line17"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line18"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line19"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line20.text1"></span> <span class="emphasis-word" data-i18n="about.line20.emphasis"></span> <span data-i18n="about.line20.text2"></span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line21.text1"></span> <span class="emphasis-word glow" data-i18n="about.line21.emphasis"></span> <span data-i18n="about.line21.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line22"></span></p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 02</p>
                                    <p class="output-line blank"></p>
                                    
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line1"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line3"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line4.text1"></span> <span class="emphasis-word" data-i18n="about.section2.line4.emphasis"></span> <span data-i18n="about.section2.line4.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line5.text1"></span> <span class="emphasis-word pulse" data-i18n="about.section2.line5.emphasis"></span> <span data-i18n="about.section2.line5.text2"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line6"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line7"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line8"></span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line9.text1"></span> <span class="emphasis-word glow" data-i18n="about.section2.line9.emphasis"></span> <span data-i18n="about.section2.line9.text2"></span></p>
                                </div>
                                
                                <div class="terminal-cursor">_</div>
                            </div>
                        `;
                    }
                }
            },
            
            'exhibitions-overview': {
                breadcrumb: 'exhibitions/overview.md',
                htmlFile: 'exhibitions/exhibitions-overview.html',
                html: null
            },
            
            'exhibition-resonance': {
                breadcrumb: 'exhibitions/resonance-loop.md',
                htmlFile: 'exhibitions/resonance-loop.html',
                html: null
            },
            
            'exhibition-rotating': {
                breadcrumb: 'exhibitions/rotating-weights.md',
                htmlFile: 'exhibitions/rotating-weights.html',
                html: null
            },
            
            'exhibition-embodied': {
                breadcrumb: 'exhibitions/embodied-algorithms.md',
                htmlFile: 'exhibitions/embodied-algorithms.html',
                html: null
            },
            
            'exhibition-void': {
                breadcrumb: 'exhibitions/void-form.md',
                htmlFile: 'exhibitions/void-form.html',
                html: null
            },
            
            'exhibition-metal': {
                breadcrumb: 'exhibitions/metal-rave.md',
                htmlFile: 'exhibitions/metal-rave.html',
                html: null
            },
            
            'exhibition-rhythm': {
                breadcrumb: 'exhibitions/4x4-mediengruppe.md',
                htmlFile: 'exhibitions/4x4-mediengruppe.html',
                html: null
            },
            
            'exhibition-solar': {
                breadcrumb: 'exhibitions/soil-contamination.md',
                htmlFile: 'exhibitions/soil-contamination.html',
                html: null
            },
            
            // RESEARCH FOLDER
            'research-overview': {
                breadcrumb: 'research/overview.md',
                htmlFile: 'research/research-overview.html',
                html: null
            },
            
            'research-rcs': {
                breadcrumb: 'research/rcs.md',
                htmlFile: 'research/research-rcs.html',
                html: null
            },
            
            'research-bdss': {
                breadcrumb: 'research/bdss.md',
                htmlFile: 'research/research-bdss.html',
                html: null
            },
            
            // PROCESS FILE
            'process': {
                breadcrumb: 'process.md',
                htmlFile: 'process.html',
                html: null
            },
            
            // DESKTOP ABOUT (MOBILE STYLE)
            'desktop-about': {
                breadcrumb: 'desktop-about.md',
                htmlFile: 'desktop-about.html',
                html: null
            },
            
            'process-systems': {
                breadcrumb: 'process/systems.md',
                htmlFile: 'process/process-systems.html',
                html: null
            },
            
            'process-visual': {
                breadcrumb: 'process/visual-language.md',
                htmlFile: 'process/process-visual.html',
                html: null
            },
            
            'process-experience': {
                breadcrumb: 'process/experience.md',
                htmlFile: 'process/process-experience.html',
                html: null
            },
            
            // CONTACT
            contact: {
                breadcrumb: 'contact.md',
                html: `
                    <div class="terminal-output-style">
                        <div class="terminal-line" data-en="> interested in collaborations?" data-kr="협업, 의뢰 등은 아래의 이메일로 연락 부탁드립니다.">> interested in collaborating?</div>
                        <div class="terminal-line terminal-line-en-only" data-en="> want to learn more about my work?">> want to learn more about my work?</div>
                        <div class="terminal-line-blank"></div>
                        <div class="terminal-line-primary terminal-line-en-only" data-en="say hello">say hello</div>
                        <div class="terminal-line-blank terminal-line-blank-en-only"></div>
                        <div class="terminal-line-email">
                            <span class="prompt-symbol">></span>
                            <a href="mailto:hello@heund.net" class="contact-email">hello@heund.net</a>
                        </div>
                        <div class="terminal-line-blank"></div>
                        <div class="terminal-line-muted">
                            <span class="prompt-symbol">></span>
                            <a href="https://www.instagram.com/h.eund/" target="_blank" class="contact-link">Instagram</a>
                            <span class="separator"> · </span>
                            <a href="https://www.youtube.com/@heund" target="_blank" class="contact-link">YouTube</a>
                        </div>
                    </div>
                `
            }
        };
        
        this.init();
        
        // Update main content position on window resize
        window.addEventListener('resize', () => {
            this.updateMainContentPosition();
        });
    }
    
    async init() {
        this.setupLanguageToggle();
        this.setupMobileContent();
        this.setupNavigation();
        this.setupFolderToggles();
        this.setupCommands();
        this.setupWindowControls();
        this.setupDesktopFolders();
        
        // Set default language on page load
        await this.switchLanguage(this.currentLang);
        
        this.loadContent('hero');
        
        // Set initial main content position
        setTimeout(() => {
            this.updateMainContentPosition();
        }, 100);
    }
    
    setupMobileContent() {
        // Check if mobile
        if (window.innerWidth <= 1024) {
            const mobileNav = document.getElementById('mobile-nav');
            const desktopNav = document.querySelector('.sidebar-nav');
            
            // Clone nav only
            if (mobileNav && desktopNav) {
                mobileNav.innerHTML = desktopNav.innerHTML;
                
                // Setup mobile nav toggle
                const navToggle = document.getElementById('nav-toggle');
                if (navToggle) {
                    navToggle.addEventListener('click', (e) => {
                        e.stopPropagation();
                        mobileNav.classList.toggle('expanded');
                        navToggle.classList.toggle('expanded');
                    });
                    
                    // Close on click outside
                    document.addEventListener('click', (e) => {
                        if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
                            mobileNav.classList.remove('expanded');
                            navToggle.classList.remove('expanded');
                        }
                    });
                }
                
                // Setup nav item clicks in mobile nav
                mobileNav.addEventListener('click', (e) => {
                    const navItem = e.target.closest('.nav-item');
                    if (navItem) {
                        const fileId = navItem.dataset.file;
                        if (fileId) {
                            // Close nav immediately
                            mobileNav.classList.remove('expanded');
                            navToggle.classList.remove('expanded');
                            // Note: loadContent is called by setupNavigation() handler, no need to call it here
                        }
                    }
                });
            }
        }
    }
    
    setupFolderToggles() {
        document.querySelectorAll('.nav-folder-header').forEach(header => {
            header.addEventListener('click', () => {
                const folder = header.parentElement;
                folder.classList.toggle('expanded');
            });
        });
    }
    
    setupNavigation() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const fileId = item.dataset.file;
                if (fileId) {
                    this.loadContent(fileId);
                    
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                }
            });
        });
        
        // Add click handler for nav-header (Hee-Eun Kim) to go to hero page
        const navHeader = document.querySelector('.nav-header[data-file]');
        if (navHeader) {
            navHeader.addEventListener('click', () => {
                const fileId = navHeader.dataset.file;
                if (fileId) {
                    this.loadContent(fileId);
                    
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    const heroNavItem = document.querySelector('.nav-item[data-file="hero"]');
                    if (heroNavItem) {
                        heroNavItem.classList.add('active');
                    }
                }
            });
        }
        
        // Add click handler for mobile-title (Hee-Eun Kim) to go to hero page
        const mobileTitle = document.querySelector('.mobile-title[data-file]');
        if (mobileTitle) {
            mobileTitle.addEventListener('click', () => {
                const fileId = mobileTitle.dataset.file;
                if (fileId) {
                    this.loadContent(fileId);
                    
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    const heroNavItem = document.querySelector('.nav-item[data-file="hero"]');
                    if (heroNavItem) {
                        heroNavItem.classList.add('active');
                    }
                }
            });
        }
    }
    
    setupLanguageToggle() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
    
    updateMainContentPosition() {
        const mainContent = document.querySelector('.main-content');
        const terminalWindow = document.querySelector('.terminal-window');
        
        if (mainContent && terminalWindow) {
            const isMobile = window.innerWidth <= 1024;
            const isMinimized = terminalWindow.classList.contains('minimized');
            const isHeroPage = this.currentFile === 'hero';
            
            // Only apply bottom positioning on desktop when:
            // 1. Not mobile
            // 2. Terminal is not minimized  
            // 3. Not on hero page (hero should be perfectly centered)
            if (!isMobile && !isMinimized && !isHeroPage) {
                mainContent.classList.add('has-active-terminal');
            } else {
                mainContent.classList.remove('has-active-terminal');
            }
        }
    }
    
    setupDesktopAboutScrollLock() {
        const contentBody = document.querySelector('.content-body');
        if (!contentBody) return;
        
        let isAnimating = false;
        let animationId = null;
        
        const smoothScrollTo = (targetPosition, duration = 1000) => {
            if (isAnimating) return;
            isAnimating = true;
            
            const startPosition = contentBody.scrollTop;
            const distance = targetPosition - startPosition;
            const startTime = performance.now();
            
            // Ultra-smooth easing function for luxurious parallax animation
            const easeInOutQuart = (t) => {
                return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
            };
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeInOutQuart(progress);
                
                const currentPosition = startPosition + (distance * easedProgress);
                contentBody.scrollTop = currentPosition;
                
                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    isAnimating = false;
                    animationId = null;
                }
            };
            
            animationId = requestAnimationFrame(animate);
        };
        
        let scrollTimeout;
        const scrollHandler = () => {
            if (isAnimating) return;
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const textSection = document.querySelector('.desktop-about-text-section');
                if (!textSection) return;
                
                const scrollTop = contentBody.scrollTop;
                const windowHeight = window.innerHeight;
                const textSectionRect = textSection.getBoundingClientRect();
                const textSectionTop = scrollTop + textSectionRect.top;
                const textSectionHeight = textSection.offsetHeight;
                
                // Calculate if we should snap to the text section
                const snapThreshold = windowHeight * 2.0; // 200% of viewport height - triggers almost always
                const textSectionCenter = textSectionTop - (windowHeight - textSectionHeight) / 2;
                
                // If we're close to the text section, snap to center it
                if (Math.abs(scrollTop - textSectionCenter) < snapThreshold) {
                    smoothScrollTo(textSectionCenter, 1200); // 1.2 second ultra-smooth animation
                }
            }, 100); // Reduced debounce for more responsive feel
        };
        
        // Add scroll listener
        contentBody.addEventListener('scroll', scrollHandler);
        
        // Trigger initial auto-scroll to center text section when page loads
        setTimeout(() => {
            const textSection = document.querySelector('.desktop-about-text-section');
            if (textSection) {
                const windowHeight = window.innerHeight;
                const textSectionRect = textSection.getBoundingClientRect();
                const textSectionTop = contentBody.scrollTop + textSectionRect.top;
                const textSectionHeight = textSection.offsetHeight;
                const textSectionCenter = textSectionTop - (windowHeight - textSectionHeight) / 2;
                
                smoothScrollTo(textSectionCenter, 1800); // Ultra-smooth initial scroll for elegant landing
            }
        }, 1200); // Wait 1.2 seconds after page load for better initial experience
        
        // Clean up on page change
        const cleanup = () => {
            contentBody.removeEventListener('scroll', scrollHandler);
            clearTimeout(scrollTimeout);
            if (animationId) {
                cancelAnimationFrame(animationId);
                isAnimating = false;
            }
        };
        
        // Store cleanup function for later use
        this.desktopAboutScrollCleanup = cleanup;
    }
    
    async switchLanguage(lang) {
        this.currentLang = lang;
        
        // Set body data-lang attribute for CSS show/hide
        document.body.setAttribute('data-lang', lang);
        
        // STEP 1: Cancel all active animations
        if (typeof cancelAllTypewriters === 'function') {
            cancelAllTypewriters();
        }
        
        // STEP 2: Update HTML lang attribute for accessibility and CSS :lang() selectors
        document.documentElement.lang = lang === 'kr' ? 'ko' : 'en';
        
        // STEP 3: Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // STEP 4: Load and apply all translations (both data-i18n and data-en/kr)
        await this.loadTranslations(lang);
        
        // STEP 4.5: Reload about section if currently viewing it (both desktop and mobile)
        // Both mobile and desktop need reload because sticky text is generated in loadContent()
        if (this.currentFile === 'about') {
            // Reload to regenerate sticky text with correct language
            this.loadContent('about');
        }
        
        // STEP 4.6: Animate new language content if on exhibition/research pages
        if (this.currentFile !== 'hero' && this.currentFile !== 'about' && this.animatedPages.has(this.currentFile)) {
            const currentLangClass = lang === 'kr' ? '.lang-kr' : '.lang-en';
            const langContainer = document.querySelector(currentLangClass);
            
            if (langContainer) {
                // Immediately show all elements in the new language without animation
                const elements = langContainer.querySelectorAll('h1, h2, .exhibition-text, p, .cv-entry, .cv-year, .cv-title, .cv-location, .cv-medium');
                elements.forEach(element => {
                    element.classList.add('fade-in-exhibition');
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                });
            }
        }
        
        // STEP 4.7: Re-initialize desktop carousel if on resonance-loop, embodied-algorithms, or rotating-weights page
        const isMobileDevice = window.innerWidth <= 768;
        if ((this.currentFile === 'exhibition-resonance' || this.currentFile === 'exhibition-embodied' || this.currentFile === 'exhibition-rotating') && !isMobileDevice) {
            setTimeout(() => {
                if (window.initDesktopResonanceCarousel) {
                    window.initDesktopResonanceCarousel();
                }
            }, 100);
        }
        
        // STEP 5: Process page animations removed - no typewriter animations
        
        // STEP 6: Update code-architecture animation if it exists and has a selected node
        if (window.codeArchAnimation && window.codeArchAnimation.selectedNode) {
            const node = window.codeArchAnimation.selectedNode;
            const statement = lang === 'kr' ? node.statementKR : node.statementEN;
            window.codeArchAnimation.targetText = '> ' + statement;
            window.codeArchAnimation.typedText = '';
            window.codeArchAnimation.typeSpeed = 0;
        }
    }
    
    async loadTranslations(lang) {
        try {
            const response = await fetch(`translations/${lang}.json`);
            this.translations = await response.json();
            this.applyTranslations();
        } catch (error) {
            console.error('Translation load failed:', error);
        }
    }
    
    applyTranslations() {
        // Find all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (!key) return;
            
            // Navigate through nested object using dot notation
            const keys = key.split('.');
            let text = keys.reduce((obj, i) => {
                return obj && obj[i] !== undefined ? obj[i] : undefined;
            }, this.translations);
            
            // Update element content
            if (text !== undefined) {
                // Show element and update content
                element.style.display = '';
                element.textContent = text;
            } else {
                // If key doesn't exist in translation, hide the element
                element.style.display = 'none';
            }
        });
        
        // Handle data-en and data-kr attributes (for CV entries)
        document.querySelectorAll('[data-en][data-kr]').forEach(element => {
            const text = this.currentLang === 'kr' ? element.dataset.kr : element.dataset.en;
            if (text) {
                element.innerHTML = text;
            }
        });
    }
    
    async loadContent(fileId) {
        const contentData = this.content[fileId];
        if (!contentData) return;
        
        // Clean up any existing scroll listeners before loading new content
        if (this.profileScrollHandler) {
            const contentBody = document.querySelector('.content-body');
            if (contentBody) {
                contentBody.removeEventListener('scroll', this.profileScrollHandler);
            }
            this.profileScrollHandler = null;
        }
        
        // Check if mobile
        const isMobile = window.innerWidth <= 1024;
        
        // Use mobile-content on mobile, content on desktop
        const contentArea = isMobile ? document.getElementById('mobile-content') : document.getElementById('content');
        if (!contentArea) return;
        
        // Load HTML file if needed
        if (contentData.htmlFile && !contentData.html) {
            try {
                const response = await fetch(contentData.htmlFile);
                contentData.html = await response.text();
            } catch (error) {
                console.error('Failed to load:', error);
                return;
            }
        }
        
        // Clean up desktop about scroll lock if switching away from about page
        if (this.desktopAboutScrollCleanup && fileId !== 'about') {
            this.desktopAboutScrollCleanup();
            this.desktopAboutScrollCleanup = null;
        }
        
        // Get HTML content
        let htmlContent = contentData.getHTML ? contentData.getHTML() : contentData.html;
        
        // Special handling for about.md on mobile and desktop - create parallax structure
        if (fileId === 'about') {
            const scrollableContent = `
                <p class="output-line"><span data-en="Hee-Eun Kim" data-kr="김희은">Hee-Eun Kim</span></p>
                <p class="output-line"><span data-en="Systems Artist" data-kr="시스템 아티스트">Systems Artist</span></p>
                <p class="output-line"><span data-en="Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components." data-kr="데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만든다. 개별 요소로 환원하여 최적화하는 사고방식 대신, 무아와 상호연결성의 관점에서 복잡성을 다룬다. 분리된 실체가 아닌 관계 속에서 나타나는 패턴과 흐름을 경험 가능하게 만든다.">Hee-Eun builds alternative infrastructures</span></p>
                <p class="output-line"><span data-en="Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics." data-kr="데이터를 단순한 정보가 아니라 이야기를 담은 구조로 본다. 그 안에는 사람들의 결정, 시스템의 패턴, 보이지 않는 관계들이 담겨있다. 보편적 과학이 데이터로부터 객관적 사실을 추출하는 것을 목표로 한다면, 나는 관계와 맥락 속에서만 존재가 드러난다는 인식론적 접근을 취한다. 고정된 진리가 아닌 과정과 변화 그 자체를 다룬다. 작업은 답을 제시하기보다 질문을 유지하며, 우리의 인식을 형성하는 구조들을 드러낸다.">Her work is grounded in Eastern philosophical traditions</span></p>
                <p class="output-line"><span data-en="Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible." data-kr="데이터 엔진, 실시간 사운드 프로세싱 시스템, 인터랙티브 소프트웨어를 개발한다. 각 시스템은 특정 맥락을 감지하고 반응하도록 만들어지며, 결과가 미리 정해지지 않고 상황에 따라 나타나는 열린 구조로 작동한다. 현장 데이터를 수집하고 분석하여 장소의 특성을 반영하며, 사운드와 시각 요소가 결합된 인터랙티브 설치로 구현한다. 관객의 참여를 통해 시스템이 반응하고 변화하며 작업이 완성된다.">Hee-Eun develops custom data engines</span></p>
            `;
            
            // Extract text using the SAME method as translate() for data-en/data-kr
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = scrollableContent;
            
            const textPieces = [];
            tempDiv.querySelectorAll('[data-en][data-kr]').forEach((element) => {
                const text = this.currentLang === 'kr' ? element.dataset.kr : element.dataset.en;
                if (text) textPieces.push(text);
            });
            
            // Join all text pieces with spaces for scattered effect
            const scatteredText = textPieces.join(' ');
            
            // Create parallax structure - use appropriate classes based on mobile vs desktop
            if (!isMobile) {
                // Desktop about structure
                htmlContent = `
                    <div class="desktop-about-container">
                        <!-- Sticky parallax overlay with scattered text -->
                        <div class="desktop-about-sticky">
                            <div class="about-terminal">
                                <div class="terminal-output">
                                    <p class="output-line">${scatteredText}</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Scrollable content area below -->
                        <div class="desktop-about-scroll-content">
                            <div class="desktop-about-spacer"></div>
                            <div class="desktop-about-text-section">
                                <h2><span data-en="Hee-Eun Kim" data-kr="김희은">Hee-Eun Kim</span></h2>
                                <h2><span data-en="Systems Artist" data-kr="시스템 아티스트">Systems Artist</span></h2>
                                <p class="exhibition-text"><span data-en="Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components." data-kr="데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만든다. 개별 요소로 환원하여 최적화하는 사고방식 대신, 무아와 상호연결성의 관점에서 복잡성을 다룬다. 분리된 실체가 아닌 관계 속에서 나타나는 패턴과 흐름을 경험 가능하게 만든다.">Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components.</span></p>
                                <p class="exhibition-text"><span data-en="Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics." data-kr="데이터를 단순한 정보가 아니라 이야기를 담은 구조로 본다. 그 안에는 사람들의 결정, 시스템의 패턴, 보이지 않는 관계들이 담겨있다. 보편적 과학이 데이터로부터 객관적 사실을 추출하는 것을 목표로 한다면, 나는 관계와 맥락 속에서만 존재가 드러난다는 인식론적 접근을 취한다. 고정된 진리가 아닌 과정과 변화 그 자체를 다룬다. 작업은 답을 제시하기보다 질문을 유지하며, 우리의 인식을 형성하는 구조들을 드러낸다.">Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics.</span></p>
                                <p class="exhibition-text"><span data-en="Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible." data-kr="데이터 엔진, 실시간 사운드 프로세싱 시스템, 인터랙티브 소프트웨어를 개발한다. 각 시스템은 특정 맥락을 감지하고 반응하도록 만들어지며, 결과가 미리 정해지지 않고 상황에 따라 나타나는 열린 구조로 작동한다. 현장 데이터를 수집하고 분석하여 장소의 특성을 반영하며, 사운드와 시각 요소가 결합된 인터랙티브 설치로 구현한다. 관객의 참여를 통해 시스템이 반응하고 변화하며 작업이 완성된다.">Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible.</span></p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Mobile about structure
                htmlContent = `
                    <div class="mobile-about-container">
                        <!-- Sticky parallax overlay with scattered text -->
                        <div class="mobile-about-sticky">
                            <div class="about-terminal">
                                <div class="terminal-prompt">
                                    <span class="prompt-symbol">></span>
                                    <span class="prompt-command">about_me.txt</span>
                                </div>
                                <div class="terminal-output">
                                    <p class="output-line">${scatteredText}</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Scrollable content area below -->
                        <div class="mobile-about-scroll-content">
                            <div class="mobile-about-spacer"></div>
                            <div class="mobile-about-text-section">
                                <h2><span data-en="Hee-Eun Kim" data-kr="김희은">Hee-Eun Kim</span></h2>
                                <h2><span data-en="Systems Artist" data-kr="시스템 아티스트">Systems Artist</span></h2>
                                <p class="exhibition-text"><span data-en="Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components." data-kr="데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만든다. 개별 요소로 환원하여 최적화하는 사고방식 대신, 무아와 상호연결성의 관점에서 복잡성을 다룬다. 분리된 실체가 아닌 관계 속에서 나타나는 패턴과 흐름을 경험 가능하게 만든다.">Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components.</span></p>
                                <p class="exhibition-text"><span data-en="Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics." data-kr="데이터를 단순한 정보가 아니라 이야기를 담은 구조로 본다. 그 안에는 사람들의 결정, 시스템의 패턴, 보이지 않는 관계들이 담겨있다. 보편적 과학이 데이터로부터 객관적 사실을 추출하는 것을 목표로 한다면, 나는 관계와 맥락 속에서만 존재가 드러난다는 인식론적 접근을 취한다. 고정된 진리가 아닌 과정과 변화 그 자체를 다룬다. 작업은 답을 제시하기보다 질문을 유지하며, 우리의 인식을 형성하는 구조들을 드러낸다.">Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics.</span></p>
                                <p class="exhibition-text"><span data-en="Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible." data-kr="데이터 엔진, 실시간 사운드 프로세싱 시스템, 인터랙티브 소프트웨어를 개발한다. 각 시스템은 특정 맥락을 감지하고 반응하도록 만들어지며, 결과가 미리 정해지지 않고 상황에 따라 나타나는 열린 구조로 작동한다. 현장 데이터를 수집하고 분석하여 장소의 특성을 반영하며, 사운드와 시각 요소가 결합된 인터랙티브 설치로 구현한다. 관객의 참여를 통해 시스템이 반응하고 변화하며 작업이 완성된다.">Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible.</span></p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        
        // Special handling for exhibition pages on mobile - reorder content
        if (isMobile && fileId.startsWith('exhibition-')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            
            // Determine which language container to use
            const langClass = this.currentLang === 'kr' ? '.lang-kr' : '.lang-en';
            const langContainer = tempDiv.querySelector(langClass);
            
            // If no language container found, fall back to entire content
            const sourceContainer = langContainer || tempDiv;
            
            // Extract components from the active language container only
            const title = sourceContainer.querySelector('h1');
            const year = sourceContainer.querySelector('.cv-year');
            const location = sourceContainer.querySelector('.cv-location');
            const imageGrid = sourceContainer.querySelector('.image-grid');
            const medium = sourceContainer.querySelector('.cv-medium');
            
            // Get exhibition content from BOTH language containers
            const enContainer = tempDiv.querySelector('.lang-en');
            const krContainer = tempDiv.querySelector('.lang-kr');
            
            // Helper function to escape HTML attribute values
            const escapeAttr = (str) => {
                if (!str) return '';
                return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            };
            
            // Extract the entire exhibition-text-column content
            const enTextColumn = enContainer ? enContainer.querySelector('.exhibition-text-column') : null;
            const krTextColumn = krContainer ? krContainer.querySelector('.exhibition-text-column') : null;
            
            // Wrap both language versions for CSS switching
            let descriptionsHTML = '';
            if (enTextColumn && krTextColumn) {
                descriptionsHTML = `
                    <div class="lang-en">${enTextColumn.innerHTML}</div>
                    <div class="lang-kr">${krTextColumn.innerHTML}</div>
                `;
            } else if (enTextColumn) {
                descriptionsHTML = `<div class="lang-en">${enTextColumn.innerHTML}</div>`;
            } else if (krTextColumn) {
                descriptionsHTML = `<div class="lang-kr">${krTextColumn.innerHTML}</div>`;
            }
            
            // Preserve data attributes for language switching
            const enYear = enContainer ? enContainer.querySelector('.cv-year') : null;
            const krYear = krContainer ? krContainer.querySelector('.cv-year') : null;
            const enLocation = enContainer ? enContainer.querySelector('.cv-location') : null;
            const krLocation = krContainer ? krContainer.querySelector('.cv-location') : null;
            const enMedium = enContainer ? enContainer.querySelector('.cv-medium') : null;
            const krMedium = krContainer ? krContainer.querySelector('.cv-medium') : null;
            const enTitle = enContainer ? enContainer.querySelector('h1') : null;
            const krTitle = krContainer ? krContainer.querySelector('h1') : null;
            
            const yearDataEn = escapeAttr(enYear ? enYear.textContent : '');
            const yearDataKr = escapeAttr(krYear ? krYear.textContent : '');
            const locationDataEn = escapeAttr(enLocation ? enLocation.innerHTML : '');
            const locationDataKr = escapeAttr(krLocation ? krLocation.innerHTML : '');
            const mediumDataEn = escapeAttr(enMedium ? enMedium.textContent : '');
            const mediumDataKr = escapeAttr(krMedium ? krMedium.textContent : '');
            const titleDataEn = escapeAttr(enTitle ? enTitle.textContent : '');
            const titleDataKr = escapeAttr(krTitle ? krTitle.textContent : '');
            
            // Check if this is resonance-loop page to include carousel
            const enResonanceCarousel = enContainer ? enContainer.querySelector('.mobile-resonance-carousel') : null;
            const krResonanceCarousel = krContainer ? krContainer.querySelector('.mobile-resonance-carousel') : null;
            
            // Check if this is embodied-algorithms page to include carousel
            const enEmbodiedCarousel = enContainer ? enContainer.querySelector('.mobile-embodied-carousel') : null;
            const krEmbodiedCarousel = krContainer ? krContainer.querySelector('.mobile-embodied-carousel') : null;
            
            let carouselHTML = '';
            if (fileId === 'exhibition-resonance') {
                if (enResonanceCarousel && krResonanceCarousel) {
                    carouselHTML = `
                        <div class="lang-en">${enResonanceCarousel.outerHTML}</div>
                        <div class="lang-kr">${krResonanceCarousel.outerHTML}</div>
                    `;
                } else if (enResonanceCarousel) {
                    carouselHTML = `<div class="lang-en">${enResonanceCarousel.outerHTML}</div>`;
                }
            } else if (fileId === 'exhibition-embodied' || fileId === 'exhibition-rotating') {
                if (enEmbodiedCarousel && krEmbodiedCarousel) {
                    carouselHTML = `
                        <div class="lang-en">${enEmbodiedCarousel.outerHTML}</div>
                        <div class="lang-kr">${krEmbodiedCarousel.outerHTML}</div>
                    `;
                } else if (enEmbodiedCarousel) {
                    carouselHTML = `<div class="lang-en">${enEmbodiedCarousel.outerHTML}</div>`;
                }
            }
            
            // Rebuild with mobile-specific classes for CSS targeting
            // Only include description if no carousel exists
            const descriptionHTML = carouselHTML ? '' : `
                <div class="mobile-exhibition-description">
                    ${descriptionsHTML}
                </div>
            `;
            
            htmlContent = `
                <div class="mobile-exhibition-header">
                    <h1 data-en="${titleDataEn}" data-kr="${titleDataKr}">${title ? title.textContent : ''}</h1>
                    <div class="cv-year" data-en="${yearDataEn}" data-kr="${yearDataKr}">${year ? year.textContent : ''}</div>
                    <div class="cv-location" data-en="${locationDataEn}" data-kr="${locationDataKr}">${location ? location.innerHTML : ''}</div>
                </div>
                ${imageGrid ? imageGrid.outerHTML : ''}
                <div class="cv-medium" data-en="${mediumDataEn}" data-kr="${mediumDataKr}">${medium ? medium.textContent : ''}</div>
                ${carouselHTML}
                ${descriptionHTML}
            `;
        }
        
        // Check if mobile and process page
        const isMobileDevice = window.innerWidth <= 1024;
        
        // Initialize mobile horizontal section carousel for process page
        if (isMobileDevice && fileId === 'process') {
            // Cleanup any existing carousel
            if (window.cleanupMobileProcessCarousel) {
                window.cleanupMobileProcessCarousel();
            }
            
            // Initialize horizontal section carousel (which loads process.html sections)
            setTimeout(() => {
                if (window.initMobileProcessCarousel) {
                    window.initMobileProcessCarousel();
                }
            }, 100);
        } else {
            // Cleanup carousel if switching away from process on mobile
            if (isMobileDevice && window.cleanupMobileProcessCarousel) {
                window.cleanupMobileProcessCarousel();
            }
            
            // Load into appropriate container (non-process or desktop)
            contentArea.innerHTML = htmlContent;
            
            // Initialize carousels if this is the process page on desktop
            if (fileId === 'process') {
                setTimeout(() => {
                    // Initialize new clean process carousels
                    if (window.initializeProcessCarousels) {
                        window.initializeProcessCarousels();
                    }
                    
                    // Initialize audio carousels
                    const audioCarousels = document.querySelectorAll('[data-audio-carousel]');
                    audioCarousels.forEach(carousel => {
                        const carouselId = carousel.getAttribute('data-audio-carousel');
                        if (window.initializeAudioCarousel) {
                            window.initializeAudioCarousel(carouselId);
                        }
                    });
                }, 100);
            }
            
            // Initialize mobile resonance carousel if on resonance-loop page and mobile
            if (fileId === 'exhibition-resonance' && isMobileDevice) {
                setTimeout(() => {
                    if (window.initMobileResonanceCarousel) {
                        window.initMobileResonanceCarousel();
                    }
                    // Reset scroll after carousel initialization
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                        const mobileContentContainer = document.querySelector('.mobile-content-container');
                        if (mobileContentContainer) {
                            mobileContentContainer.scrollTop = 0;
                        }
                    }, 50);
                }, 100);
            }
            
            // Initialize desktop carousel if on resonance-loop, embodied-algorithms, or rotating-weights page and desktop
            if ((fileId === 'exhibition-resonance' || fileId === 'exhibition-embodied' || fileId === 'exhibition-rotating') && !isMobileDevice) {
                setTimeout(() => {
                    if (window.initDesktopResonanceCarousel) {
                        window.initDesktopResonanceCarousel();
                    }
                }, 100);
            }
            
            // Initialize mobile embodied carousel if on embodied-algorithms or rotating-weights page and mobile
            if ((fileId === 'exhibition-embodied' || fileId === 'exhibition-rotating') && isMobileDevice) {
                console.log('[Script2] Initializing embodied carousel for:', fileId);
                setTimeout(() => {
                    if (window.initMobileEmbodiedCarousel) {
                        console.log('[Script2] Calling initMobileEmbodiedCarousel');
                        window.initMobileEmbodiedCarousel();
                    }
                    // Reset scroll after carousel initialization
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                        const mobileContentContainer = document.querySelector('.mobile-content-container');
                        if (mobileContentContainer) {
                            mobileContentContainer.scrollTop = 0;
                        }
                    }, 50);
                    // Initialize custom video players after carousel is loaded
                    if (window.initCustomVideoPlayers) {
                        console.log('[Script2] Calling initCustomVideoPlayers');
                        window.initCustomVideoPlayers();
                    }
                }, 200);
            }
        }
        
        this.currentFile = fileId;
        
        // Update main content position based on current page
        this.updateMainContentPosition();
        
        // Update breadcrumb on desktop
        if (!isMobile) {
            const breadcrumb = document.getElementById('breadcrumb');
            if (breadcrumb && contentData.breadcrumb) {
                breadcrumb.textContent = contentData.breadcrumb;
            }
        }
        
        // Setup click handlers for cv-title-link elements
        setTimeout(() => {
            document.querySelectorAll('.cv-title-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetFile = link.dataset.file;
                    if (targetFile) {
                        this.loadContent(targetFile);
                    }
                });
            });
        }, 10);
        
        // Apply translations
        this.applyTranslations();
        
        
        // Initialize animations based on page
        const contentBody = document.querySelector('.content-body');
        if (fileId === 'hero' && typeof initCodeArchitecture === 'function') {
            // Hide overflow on content-body to prevent scrollbars on hero page
            if (contentBody) {
                contentBody.style.overflow = 'hidden';
            }
            setTimeout(initCodeArchitecture, 100);
        } else if (fileId === 'about' && !isMobile && typeof initCodeArchitecture === 'function') {
            // Use hero animation for desktop about page but allow scrolling
            if (contentBody) {
                contentBody.style.overflow = 'auto';
            }
            setTimeout(initCodeArchitecture, 100);
            
            // Add scroll lock functionality for desktop about
            this.setupDesktopAboutScrollLock();
        } else if (fileId === 'process') {
            // No animations for process page
            if (contentBody) {
                contentBody.style.overflow = 'auto'; // Allow normal scrolling
            }
        } else {
            // Reset overflow for other pages
            if (contentBody) {
                contentBody.style.overflow = '';
            }
        }
        
        // Collapse sections by default
        setTimeout(() => {
            document.querySelectorAll('.collapsible-section').forEach(section => {
                const content = section.querySelector('.section-content');
                const icon = section.querySelector('.toggle-icon');
                if (content) content.style.display = 'none';
                if (icon) icon.textContent = '▼';
            });
        }, 10);
        
        // Global fade-in animation for all content pages (except hero and about)
        if (fileId !== 'hero' && fileId !== 'about') {
            
            if (!this.animatedPages.has(fileId)) {
                // Check if mobile
                const isMobile = window.innerWidth <= 1024;
                const isContactPage = fileId === 'contact';
                
                // First visit: animate with staggered timing (faster on mobile)
                let delay = 0;
                const staggerDelay = isMobile ? 50 : 100; // Faster stagger on mobile
                
                // Special handling for contact page
                if (isContactPage) {
                    const isKorean = this.currentLang === 'kr';
                    
                    // Animate regular terminal lines with ambient fade (0.8s)
                    document.querySelectorAll('.terminal-line').forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                            element.style.visibility = 'visible';
                            element.style.animation = 'fadeInAmbient 0.8s ease-in-out forwards';
                        }, delay + 300 + (index * 400));
                    });
                    
                    // "say hello" text - much longer delay and slower fade (2s)
                    // Korean: shorter delay since there's only one line before it
                    const sayHello = document.querySelector('.terminal-line-primary');
                    if (sayHello) {
                        setTimeout(() => {
                            sayHello.classList.add('fade-in-contact');
                        }, isKorean ? delay + 700 : delay + 1200);
                    }
                    
                    // Email and socials - reduced delay for faster reveal
                    const emailDelay = isKorean ? delay + 1200 : delay + 1500;
                    document.querySelectorAll('.terminal-line-email, .terminal-line-muted').forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                            element.style.visibility = 'visible';
                        }, emailDelay + (index * 200));
                    });
                } else {
                    // Normal animation for other pages
                    // Animate headings (h1, h2) - 0.1s delay
                    const headings = document.querySelectorAll('h1, h2');
                    headings.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                        }, delay + 100);
                    });
                    
                    // Animate paragraphs and text (0.2s + stagger)
                    // Only select from visible language section (except process page which has content outside lang container)
                    const isProcessPage = fileId === 'process';
                    const currentLangClass = this.currentLang === 'kr' ? '.lang-kr' : '.lang-en';
                    const langContainer = !isProcessPage ? document.querySelector(currentLangClass) : null;
                    
                    let paragraphs;
                    if (isMobile) {
                        // On mobile: include carousel content, exclude desktop accordion
                        paragraphs = langContainer ? 
                            langContainer.querySelectorAll('.exhibition-text, p:not(.exhibition-text), .process-section p') :
                            document.querySelectorAll('.exhibition-text, p:not(.exhibition-text), .process-section p');
                    } else {
                        // On desktop: exclude mobile carousel content
                        paragraphs = langContainer ? 
                            langContainer.querySelectorAll('.exhibition-text:not(.mobile-resonance-carousel *):not(.mobile-embodied-carousel *), p:not(.exhibition-text):not(.mobile-resonance-carousel *):not(.mobile-embodied-carousel *), .process-section p') :
                            document.querySelectorAll('.exhibition-text, p:not(.exhibition-text), .process-section p');
                    }
                    
                    paragraphs.forEach((element, index) => {
                        const animDelay = delay + 200 + (index * staggerDelay);
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                            element.style.visibility = 'visible';
                        }, animDelay);
                    });
                }
                
                // Animate images (0.4s + stagger)
                const images = document.querySelectorAll('.grid-image, .image-item, .cv-flyer, .process-carousel, .mobile-process-carousel');
                images.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fade-in-exhibition');
                    }, delay + 400 + (index * staggerDelay));
                });
                
                // Animate CV entries (0.2s + stagger)
                document.querySelectorAll('.cv-entry').forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fade-in-exhibition');
                    }, delay + 200 + (index * staggerDelay));
                });
                
                // Animate CV metadata (year, location, medium) - both desktop and mobile
                document.querySelectorAll('.cv-year, .cv-title, .cv-location, .cv-medium').forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fade-in-exhibition');
                        element.style.opacity = '1';
                        element.style.visibility = 'visible';
                    }, delay + 200 + (index * 50));
                });
                
                this.animatedPages.add(fileId);
            } else {
                // Revisit: add classes immediately without animation
                document.querySelectorAll('h1, h2, .exhibition-text, .cv-entry, p, .process-section p, .terminal-line, .terminal-line-primary, .terminal-line-email, .terminal-line-muted').forEach(element => {
                    element.classList.add('fade-in-exhibition');
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                });
                document.querySelectorAll('.grid-image, .image-item, .cv-flyer, .process-carousel, .mobile-process-carousel').forEach(element => {
                    element.classList.add('fade-in-exhibition');
                    element.style.opacity = '1';
                });
                document.querySelectorAll('.cv-year, .cv-title, .cv-location, .cv-medium').forEach(element => {
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                });
            }
        }
        
        // About section - setup profile switcher and animations
        if (fileId === 'about') {
            this.setupProfileSwitcher();
            
            // Fade in text lines in about section (after translation completes)
            if (!this.animatedPages.has(fileId)) {
                // First visit: animate
                setTimeout(() => {
                    const outputLines = document.querySelectorAll('.output-line:not(.blank):not(.section-marker)');
                    outputLines.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-about-text');
                        }, index * 100);
                    });
                }, 200);
                this.animatedPages.add(fileId);
            } else {
                // Revisit: add classes immediately without animation
                document.querySelectorAll('.output-line:not(.blank):not(.section-marker)').forEach(element => {
                    element.classList.add('fade-in-about-text');
                });
            }
        }
        
        // Mobile-specific: Apply beige background for hero section only
        if (isMobile) {
            const mobileContainer = document.getElementById('mobile-content');
            if (mobileContainer) {
                if (fileId === 'hero') {
                    mobileContainer.classList.add('hero-bg');
                } else {
                    mobileContainer.classList.remove('hero-bg');
                }
            }
            
            // Reset scroll after content loads on mobile
            // Immediate reset
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            const mobileContentContainer = document.querySelector('.mobile-content-container');
            if (mobileContentContainer) {
                mobileContentContainer.scrollTop = 0;
            }
            
            // Additional resets to ensure it sticks (especially for exhibitions-overview)
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                if (mobileContentContainer) {
                    mobileContentContainer.scrollTop = 0;
                }
            }, 0);
            
            setTimeout(() => {
                window.scrollTo(0, 0);
                if (mobileContentContainer) {
                    mobileContentContainer.scrollTop = 0;
                }
            }, 100);
        } else {
            // Reset scroll after content loads on desktop
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                const contentBody = document.querySelector('.content-body');
                if (contentBody) {
                    contentBody.scrollTop = 0;
                }
            }, 0);
        }
        
        // Special handling for about page on mobile only
        if (isMobile && fileId === 'about') {
            const indicator = document.getElementById('mobile-scroll-indicator');
            const mobileContentContainer = document.getElementById('mobile-content');
            if (indicator && mobileContentContainer) {
                indicator.style.display = 'block';
                indicator.style.opacity = '0.4';
                
                // Hide indicator after user scrolls
                const hideIndicator = () => {
                    const scrolled = mobileContentContainer.scrollTop > 50;
                    if (scrolled) {
                        indicator.style.opacity = '0';
                        indicator.style.transition = 'opacity 0.3s';
                        setTimeout(() => indicator.style.display = 'none', 300);
                        mobileContentContainer.removeEventListener('scroll', hideIndicator);
                    }
                };
                mobileContentContainer.addEventListener('scroll', hideIndicator);
            }
        } else {
            // Hide indicator on all other pages (including desktop)
            const indicator = document.getElementById('mobile-scroll-indicator');
            if (indicator) indicator.style.display = 'none';
        }
    }
    
    setupProfileSwitcher() {
        const profilePic = document.getElementById('profile-picture');
        const contentBody = document.querySelector('.content-body');
        
        if (!profilePic || !contentBody) return;
        
        // Clean up any existing scroll listeners first
        if (this.profileScrollHandler) {
            contentBody.removeEventListener('scroll', this.profileScrollHandler);
        }
        
        const images = [
            'images/profile/image1.jpg',
            'images/profile/image2.jpg',
            'images/profile/image3.jpg',
            'images/profile/image4.jpg',
            'images/profile/image5.jpg',
            'images/profile/image6.jpg',
            'images/profile/image7.jpg'
        ];
        
        let currentImageIndex = 0;
        
        const updateImage = () => {
            const scrollTop = contentBody.scrollTop;
            const scrollHeight = contentBody.scrollHeight - contentBody.clientHeight;
            const scrollPercent = scrollTop / scrollHeight;
            
            // Calculate which image to show based on scroll position
            const newIndex = Math.min(Math.floor(scrollPercent * images.length), images.length - 1);
            
            if (newIndex !== currentImageIndex) {
                currentImageIndex = newIndex;
                profilePic.src = images[currentImageIndex];
            }
        };
        
        // Store the handler reference for cleanup
        this.profileScrollHandler = updateImage;
        contentBody.addEventListener('scroll', updateImage);
    }
    
    setupCommands() {
        const input = document.getElementById('command-input');
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = input.value.trim().toLowerCase();
                if (command) {
                    this.executeCommand(command);
                    input.value = '';
                }
            }
        });
    }
    
    executeCommand(command) {
        // Check if the full command (including spaces) is an easter egg first
        if (window.easterEggHandler && window.easterEggHandler.isEasterEgg(command)) {
            window.easterEggHandler.execute(command);
            return;
        }
        
        const parts = command.split(' ');
        const cmd = parts[0];
        const arg = parts.slice(1).join(' ');
        
        switch(cmd) {
            case 'help':
                if (this.currentLang === 'kr') {
                    alert('> about.md: 소개\n' +
                          '> exhibitions: 전시\n' +
                          '> research: 연구, 이론적 기반\n' +
                          '> contact: 연락처\n\n' +
                          '사이드바의 섹션을 클릭하여 이동하세요 :)');
                } else {
                    alert('> about.md: Background and practice\n' +
                          '> exhibitions: Project documentation\n' +
                          '> research: Theoretical foundations\n' +
                          '> contact: Get in touch\n\n' +
                          'Click any section in the sidebar to navigate :)');
                }
                break;
                
            case 'ls':
                alert('Files:\n\n' +
                      'about.md\n' +
                      'process/\n' +
                      'exhibitions/\n' +
                      'research/\n' +
                      'contact.md');
                break;
                
            case 'open':
                if (arg && this.content[arg]) {
                    this.loadContent(arg);
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    document.querySelector(`[data-file="${arg}"]`)?.classList.add('active');
                } else {
                    alert(`File not found: ${arg}`);
                }
                break;
                
            case 'lang':
                if (arg === 'en' || arg === 'kr') {
                    this.switchLanguage(arg);
                } else {
                    alert('Usage: lang [en/kr]');
                }
                break;
                
            case 'clear':
                // Just a placeholder
                alert('Terminal cleared');
                break;
                
            default:
                alert(`Command not found: ${cmd}`);
        }
    }
    
    // Helper function to close all folder windows and content viewers
    closeAllFolderWindows() {
        // Close all folder windows
        document.querySelectorAll('.folder-window.active').forEach(window => {
            window.classList.remove('active');
        });
        
        // Close PDF viewer
        const pdfViewer = document.getElementById('pdf-viewer');
        if (pdfViewer && pdfViewer.classList.contains('active')) {
            this.closePDFViewer();
        }
        
        // Close text viewer
        const textViewer = document.getElementById('text-viewer');
        if (textViewer && textViewer.classList.contains('active')) {
            this.closeTextViewer();
        }
        
        // Close lightbox if open
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    }

    setupWindowControls() {
        const terminalWindow = document.querySelector('.terminal-window');
        const desktopFolders = document.querySelector('.desktop-folders');
        
        // Helper function to reset inline styles and resize canvas
        const resetAndResize = () => {
            terminalWindow.style.position = '';
            terminalWindow.style.bottom = '';
            terminalWindow.style.left = '';
            terminalWindow.style.transform = '';
            terminalWindow.style.width = '';
            terminalWindow.style.height = '';
            terminalWindow.style.maxWidth = '';
            
            setTimeout(() => {
                if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                    window.codeArchAnimation.resize();
                }
                window.dispatchEvent(new Event('resize'));
            }, 350);
        };
        
        // Minimize button
        const minimizeBtn = document.querySelector('.window-btn.minimize');
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!terminalWindow.classList.contains('minimized')) {
                    // Remove fullscreen if currently maximized
                    if (terminalWindow.classList.contains('fullscreen')) {
                        terminalWindow.classList.remove('fullscreen');
                        terminalWindow.classList.remove('fullscreen-restoring');
                    }
                    
                    terminalWindow.classList.add('minimized');
                    if (desktopFolders) {
                        desktopFolders.classList.add('visible');
                    }
                    this.updateMainContentPosition();
                }
            });
        }
        
        // Click anywhere on terminal window to restore when minimized
        if (terminalWindow) {
            const handleRestore = (e) => {
                if (terminalWindow.classList.contains('minimized')) {
                    // Don't restore if clicking on other window buttons
                    if (!e.target.closest('.window-btn.maximize') && !e.target.closest('.window-btn.close')) {
                        terminalWindow.classList.remove('minimized');
                        
                        if (desktopFolders) {
                            desktopFolders.classList.remove('visible');
                        }
                        this.updateMainContentPosition();
                        
                        // Close all folder windows and content viewers
                        this.closeAllFolderWindows();
                        
                        resetAndResize();
                    }
                }
            };
            
            terminalWindow.addEventListener('click', handleRestore, true);
        }
        
        // Maximize button - toggles fullscreen
        const maximizeBtn = document.querySelector('.window-btn.maximize');
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // If minimized, restore to normal state
                if (terminalWindow.classList.contains('minimized')) {
                    terminalWindow.classList.remove('minimized');
                    
                    if (desktopFolders) {
                        desktopFolders.classList.remove('visible');
                    }
                    this.updateMainContentPosition();
                    
                    // Close all folder windows and content viewers
                    this.closeAllFolderWindows();
                    
                    resetAndResize();
                }
                // If fullscreen, restore to normal
                else if (terminalWindow.classList.contains('fullscreen')) {
                    terminalWindow.classList.add('fullscreen-restoring');
                    setTimeout(() => {
                        terminalWindow.classList.remove('fullscreen');
                        terminalWindow.classList.remove('fullscreen-restoring');
                        
                        setTimeout(() => {
                            if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                                window.codeArchAnimation.resize();
                            }
                            window.dispatchEvent(new Event('resize'));
                        }, 400);
                    }, 100);
                } 
                // If normal, go to fullscreen
                else {
                    terminalWindow.classList.add('fullscreen');
                    
                    setTimeout(() => {
                        if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                            window.codeArchAnimation.resize();
                        }
                        window.dispatchEvent(new Event('resize'));
                    }, 350);
                }
            });
        }
        
        // Close button
        const closeBtn = document.querySelector('.window-btn.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.exitWindow();
            });
        }
    }
    
    exitWindow() {
        // Create full-screen overlay with terminal background
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: var(--bg-canvas);
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.8s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        // Create terminal-style container
        const terminalBox = document.createElement('div');
        terminalBox.style.cssText = `
            font-family: 'IBM Plex Mono', monospace;
            font-size: 13px;
            color: var(--text-secondary);
            line-height: 1.6;
            opacity: 0;
            transition: opacity 0.5s ease 0.3s;
            text-align: left;
        `;
        
        // Terminal output lines
        const lines = [
            { text: '> closing connection...', delay: 0 },
            { text: '> you will be missed', delay: 600 },
            { text: '', delay: 1200 },
            { text: 'goodbye', delay: 1500, style: 'color: var(--text-primary);' }
        ];
        
        lines.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.style.cssText = `
                opacity: 0;
                transition: opacity 0.6s ease;
                ${line.style || ''}
            `;
            lineDiv.textContent = line.text;
            terminalBox.appendChild(lineDiv);
            
            setTimeout(() => {
                lineDiv.style.opacity = '1';
            }, line.delay);
        });
        
        // Add line break after goodbye
        const lineBreak = document.createElement('div');
        lineBreak.style.cssText = `
            opacity: 0;
            transition: opacity 0.6s ease;
            margin-top: 16px;
        `;
        lineBreak.innerHTML = '&nbsp;';
        terminalBox.appendChild(lineBreak);
        
        setTimeout(() => {
            lineBreak.style.opacity = '1';
        }, 2100);
        
        // Create restart message
        const restartMessage = document.createElement('div');
        restartMessage.style.cssText = `
            opacity: 0;
            transition: opacity 0.6s ease;
            color: var(--text-muted);
            font-size: 12px;
            margin-bottom: 8px;
        `;
        restartMessage.textContent = '> type "restart" to reconnect';
        terminalBox.appendChild(restartMessage);
        
        setTimeout(() => {
            restartMessage.style.opacity = '1';
        }, 2400);
        
        // Create restart input
        const restartInput = document.createElement('div');
        restartInput.style.cssText = `
            opacity: 0;
            transition: opacity 0.6s ease;
            display: flex;
            gap: 8px;
            align-items: center;
        `;
        restartInput.innerHTML = `
            <span style="color: var(--accent-primary);">></span>
            <input type="text" 
                   placeholder="type here..." 
                   style="
                       background: transparent;
                       border: none;
                       color: var(--text-primary);
                       font-family: 'IBM Plex Mono', monospace;
                       font-size: 13px;
                       outline: none;
                       flex: 1;
                   ">
        `;
        
        const input = restartInput.querySelector('input');
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim().toLowerCase() === 'restart') {
                location.reload();
            }
        });
        
        terminalBox.appendChild(restartInput);
        
        overlay.appendChild(terminalBox);
        document.body.appendChild(overlay);
        
        // Fade in overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Show terminal box
        setTimeout(() => {
            terminalBox.style.opacity = '1';
        }, 300);
        
        // Reveal input field and focus
        setTimeout(() => {
            restartInput.style.opacity = '1';
            input.focus();
        }, 2700);
    }
    
    setupDesktopFolders() {
        // Desktop folder click handlers
        document.querySelectorAll('.desktop-folder').forEach(folder => {
            folder.addEventListener('click', () => {
                const folderType = folder.dataset.folder;
                const folderWindow = document.getElementById(`${folderType}-window`);
                
                if (folderWindow) {
                    folderWindow.classList.add('active');
                }
            });
        });
        
        // Folder window close buttons
        document.querySelectorAll('.folder-window .window-btn.close').forEach(btn => {
            btn.addEventListener('click', () => {
                const windowId = btn.dataset.window;
                const folderWindow = document.getElementById(`${windowId}-window`);
                if (folderWindow) {
                    folderWindow.classList.remove('active');
                }
            });
        });
        
        // Folder item click handlers (open images/pdfs/text/videos)
        document.querySelectorAll('.folder-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.dataset.type;
                const src = item.dataset.src;
                const videoSrc = item.dataset.videoSrc;
                
                
                if (type === 'image') {
                    openLightbox(src);
                } else if (type === 'pdf') {
                    // Open PDF in viewer window
                    this.openPDFViewer(src, item.querySelector('.folder-item-label').textContent);
                } else if (type === 'text') {
                    // Open text document in viewer window
                    const content = item.dataset.content;
                    this.openTextViewer(content, item.querySelector('.folder-item-label').textContent);
                } else if (type === 'video') {
                    // Open video in viewer window
                    this.openVideoViewer(videoSrc, item.querySelector('.folder-item-label').textContent);
                }
            });
        });
        
        // PDF viewer close button
        const pdfViewerClose = document.getElementById('pdf-viewer-close');
        if (pdfViewerClose) {
            pdfViewerClose.addEventListener('click', () => {
                this.closePDFViewer();
            });
        }
        
        // Text viewer close button
        const textViewerClose = document.getElementById('text-viewer-close');
        if (textViewerClose) {
            textViewerClose.addEventListener('click', () => {
                this.closeTextViewer();
            });
        }
        
        // Video viewer close button
        const videoViewerClose = document.getElementById('video-viewer-close');
        if (videoViewerClose) {
            videoViewerClose.addEventListener('click', () => {
                this.closeVideoViewer();
            });
        }
    }
    
    openPDFViewer(src, title) {
        const pdfViewer = document.getElementById('pdf-viewer');
        const pdfIframe = document.getElementById('pdf-iframe');
        const pdfTitle = document.getElementById('pdf-viewer-title');
        
        if (pdfViewer && pdfIframe) {
            pdfTitle.textContent = title;
            pdfIframe.src = src;
            pdfViewer.classList.add('active');
        }
    }
    
    closePDFViewer() {
        const pdfViewer = document.getElementById('pdf-viewer');
        const pdfIframe = document.getElementById('pdf-iframe');
        
        if (pdfViewer) {
            pdfViewer.classList.remove('active');
            if (pdfIframe) {
                pdfIframe.src = '';
            }
        }
    }
    
    openTextViewer(content, title) {
        const textViewer = document.getElementById('text-viewer');
        const textViewerContent = textViewer.querySelector('.text-viewer-content');
        const textTitle = document.getElementById('text-viewer-title');
        
        if (textViewer && textViewerContent) {
            textTitle.textContent = title;
            
            // Check if it's a markdown file
            const isMarkdown = title.toLowerCase().endsWith('.md');
            
            if (isMarkdown) {
                // For markdown: completely replace content container to remove all padding
                textViewerContent.style.padding = '0';
                textViewerContent.style.overflow = 'auto';
                textViewerContent.innerHTML = this.renderMarkdownIDE(content);
            } else {
                // For plain text: use normal padding and pre element
                textViewerContent.style.padding = '24px';
                textViewerContent.style.overflow = 'auto';
                textViewerContent.innerHTML = `<pre id="text-content" style="font-family: 'IBM Plex Mono', monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; margin: 0; color: var(--text-secondary);">${this.escapeHtml(content)}</pre>`;
            }
            
            textViewer.classList.add('active');
        }
    }
    
    escapeHtml(text) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    renderMarkdownIDE(content) {
        // Split content into lines
        const lines = content.split('\n');
        const maxLineNum = lines.length.toString().length;
        
        // Use CSS Grid to pair line numbers with content lines
        let html = '<div style="display: grid; grid-template-columns: auto 1fr; background: #ffffff; color: #24292e; font-family: \'IBM Plex Mono\', monospace; font-size: 13px;">';
        
        lines.forEach((line, index) => {
            // Line number cell
            html += `<div style="background: #f6f8fa; padding: 0 8px; text-align: right; user-select: none; border-right: 1px solid #e1e4e8; color: #6e7781; line-height: 1.6; font-family: 'IBM Plex Mono', monospace; font-size: 13px; min-width: ${maxLineNum * 8 + 16}px;">${index + 1}</div>`;
            
            // Content cell
            let styledLine = this.highlightMarkdownSyntax(line);
            html += `<div style="padding: 0 16px; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap; font-family: 'IBM Plex Mono', monospace; font-size: 13px;">${styledLine}</div>`;
        });
        
        html += '</div>';
        
        return html;
    }
    
    highlightMarkdownSyntax(line) {
        // Escape HTML first
        let escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        // H1 headers (# )
        if (/^# /.test(escaped)) {
            return escaped.replace(/^(# )(.+)$/, '<span style="color: #0969da;">$1$2</span>');
        }
        
        // H2 headers (## )
        if (/^## /.test(escaped)) {
            return escaped.replace(/^(## )(.+)$/, '<span style="color: #0969da;">$1$2</span>');
        }
        
        // H3 headers (### )
        if (/^### /.test(escaped)) {
            return escaped.replace(/^(### )(.+)$/, '<span style="color: #0969da;">$1$2</span>');
        }
        
        // Bold (**text**) - just color the markers, no bold
        escaped = escaped.replace(/(\*\*)(.+?)(\*\*)/g, '<span style="color: #cf222e;">$1</span>$2<span style="color: #cf222e;">$3</span>');
        
        // Horizontal rule (---)
        if (/^---$/.test(escaped)) {
            return '<span style="color: #6e7781;">---</span>';
        }
        
        // Lists (- )
        if (/^- /.test(escaped)) {
            return escaped.replace(/^(- )(.+)$/, '<span style="color: #6e7781;">$1</span>$2');
        }
        
        // Inline code (`code`)
        escaped = escaped.replace(/(`)(.*?)(`)/g, '<span style="color: #cf222e;">$1</span><span style="background: #f6f8fa; padding: 2px 4px;">$2</span><span style="color: #cf222e;">$3</span>');
        
        // If no special formatting, return as normal text
        return escaped || '&nbsp;';
    }
    
    closeTextViewer() {
        const textViewer = document.getElementById('text-viewer');
        
        if (textViewer) {
            textViewer.classList.remove('active');
        }
    }
    
    openVideoViewer(src, title) {
        const videoViewer = document.getElementById('video-viewer');
        const videoPlayer = document.getElementById('video-viewer-player');
        const videoTitle = document.getElementById('video-viewer-title');
        
        if (videoViewer && videoPlayer) {
            videoTitle.textContent = title;
            // Add #t=0.001 to force iOS Safari to show first frame
            videoPlayer.src = src + '#t=0.001';
            // Set poster image (replace .mp4 with _poster.jpg)
            videoPlayer.poster = src.replace('.mp4', '_poster.jpg');
            videoPlayer.load();
            videoViewer.classList.add('active');
            
            // Initialize custom video player for the video viewer only
            setTimeout(() => {
                const player = videoViewer.querySelector('.custom-video-player');
                if (player) {
                    this.initSingleVideoPlayer(player);
                }
            }, 100);
        }
    }
    
    initSingleVideoPlayer(player) {
        const video = player.querySelector('.custom-video');
        const playBtn = player.querySelector('.custom-play-btn');
        const volumeBtn = player.querySelector('.custom-volume-btn');
        const volumeSlider = player.querySelector('.custom-volume-slider');
        const fullscreenBtn = player.querySelector('.custom-fullscreen-btn');
        
        if (!video || !playBtn) return;
        
        // Add loading spinner if it doesn't exist
        if (!player.querySelector('.video-loading-spinner')) {
            const spinner = document.createElement('div');
            spinner.className = 'video-loading-spinner';
            player.appendChild(spinner);
        }
        
        // Play/Pause on button click
        playBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (video.paused) {
                video.play();
                player.classList.add('playing');
            } else {
                video.pause();
                player.classList.remove('playing');
            }
        };
        
        // Play/Pause on video click
        video.onclick = (e) => {
            e.preventDefault();
            if (video.paused) {
                video.play();
                player.classList.add('playing');
            } else {
                video.pause();
                player.classList.remove('playing');
            }
        };
        
        // Volume controls
        if (volumeBtn && volumeSlider) {
            volumeBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                video.muted = !video.muted;
                volumeBtn.classList.toggle('muted', video.muted);
            };
            
            volumeSlider.oninput = (e) => {
                video.volume = e.target.value / 100;
                video.muted = false;
                volumeBtn.classList.remove('muted');
            };
        }
        
        // Fullscreen button
        if (fullscreenBtn) {
            fullscreenBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // iOS Safari uses webkitEnterFullscreen on the video element
                if (video.webkitEnterFullscreen) {
                    video.webkitEnterFullscreen();
                } else if (!document.fullscreenElement) {
                    player.requestFullscreen().catch(err => {
                        console.error('Error attempting to enable fullscreen:', err);
                    });
                } else {
                    document.exitFullscreen();
                }
            };
        }
        
        // Update playing state
        video.onplay = () => player.classList.add('playing');
        video.onpause = () => player.classList.remove('playing');
        
        // Show loading spinner while video is loading
        video.addEventListener('waiting', () => player.classList.add('loading'));
        video.addEventListener('loadstart', () => player.classList.add('loading'));
        video.addEventListener('canplay', () => player.classList.remove('loading'));
        video.addEventListener('playing', () => player.classList.remove('loading'));
    }
    
    closeVideoViewer() {
        const videoViewer = document.getElementById('video-viewer');
        const videoPlayer = document.getElementById('video-viewer-player');
        
        if (videoViewer) {
            videoViewer.classList.remove('active');
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
        }
    }
}

// Initialize
window.portfolio = new TerminalPortfolio();

// Fullscreen detection for centering main content
function handleFullscreenChange() {
    const isFullscreen = !!(document.fullscreenElement || 
                           document.webkitFullscreenElement || 
                           document.mozFullScreenElement || 
                           document.msFullscreenElement);
    
    if (isFullscreen) {
        document.body.classList.add('browser-fullscreen');
    } else {
        document.body.classList.remove('browser-fullscreen');
    }
}

// Listen for fullscreen changes
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

// Toggle function for collapsible sections
window.toggleSection = function(titleElement) {
    const section = titleElement.closest('.collapsible-section');
    const content = section.querySelector('.section-content');
    const icon = titleElement.querySelector('.toggle-icon');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.textContent = '▲';
        section.classList.add('expanded');
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
        section.classList.remove('expanded');
    }
};

// Mobile Resonance Loop Text Carousel
window.initMobileResonanceCarousel = function() {
    // Find all carousels (both English and Korean)
    const carousels = document.querySelectorAll('.mobile-resonance-carousel');
    
    if (carousels.length === 0) return;
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.mobile-resonance-track');
        const dots = carousel.querySelectorAll('.mobile-resonance-dot');
        let currentSlide = 0;
        
        // Function to update carousel position
        function updateCarousel() {
            const offset = -currentSlide * 100;
            track.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Reset scroll position of the current slide to top
            const slides = carousel.querySelectorAll('.mobile-resonance-slide');
            if (slides[currentSlide]) {
                slides[currentSlide].scrollTop = 0;
            }
            
            // Scroll carousel into view with some space at top
            carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Add click handlers to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Add swipe support with direction detection
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        let swipeDirection = null;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            swipeDirection = null;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (swipeDirection === null) {
                const deltaX = Math.abs(e.changedTouches[0].screenX - touchStartX);
                const deltaY = Math.abs(e.changedTouches[0].screenY - touchStartY);
                
                // Determine swipe direction based on which delta is larger
                if (deltaX > deltaY && deltaX > 10) {
                    swipeDirection = 'horizontal';
                } else if (deltaY > deltaX && deltaY > 10) {
                    swipeDirection = 'vertical';
                }
            }
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        });
        
        function handleSwipe() {
            // Only trigger slide change on horizontal swipes
            if (swipeDirection !== 'horizontal') return;
            
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentSlide < dots.length - 1) {
                    // Swipe left - next slide
                    currentSlide++;
                    updateCarousel();
                } else if (diff < 0 && currentSlide > 0) {
                    // Swipe right - previous slide
                    currentSlide--;
                    updateCarousel();
                }
            }
        }
        
        // Initial update
        updateCarousel();
    });
};

// Mobile Embodied Algorithms Carousel - Copy resonance carousel logic
window.initMobileEmbodiedCarousel = function() {
    const carousels = document.querySelectorAll('.mobile-embodied-carousel');
    
    if (carousels.length === 0) {
        return;
    }
    
    carousels.forEach((carousel, index) => {
        const track = carousel.querySelector('.mobile-embodied-track');
        const dots = carousel.querySelectorAll('.mobile-embodied-dot');
        let currentSlide = 0;
        
        function updateCarousel() {
            const offset = -currentSlide * 100;
            track.style.transform = `translateX(${offset}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            const slides = carousel.querySelectorAll('.mobile-embodied-slide');
            if (slides[currentSlide]) {
                slides[currentSlide].scrollTop = 0;
            }
            
            // Scroll carousel into view with some space at top
            carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        let swipeDirection = null;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            swipeDirection = null;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (swipeDirection === null) {
                const deltaX = Math.abs(e.changedTouches[0].screenX - touchStartX);
                const deltaY = Math.abs(e.changedTouches[0].screenY - touchStartY);
                
                if (deltaX > deltaY && deltaX > 10) {
                    swipeDirection = 'horizontal';
                } else if (deltaY > deltaX && deltaY > 10) {
                    swipeDirection = 'vertical';
                }
            }
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (swipeDirection !== 'horizontal') return;
            
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentSlide < dots.length - 1) {
                    currentSlide++;
                    updateCarousel();
                } else if (diff < 0 && currentSlide > 0) {
                    currentSlide--;
                    updateCarousel();
                }
            }
        }
        
        updateCarousel();
    });
};

// Desktop Resonance Loop Carousel
window.initDesktopResonanceCarousel = function() {
    // Find the visible language section
    const enSection = document.querySelector('.lang-en');
    const krSection = document.querySelector('.lang-kr');
    
    // Determine which section is visible (check computed style or use currentLang from PageManager)
    let visibleSection = null;
    if (enSection && window.getComputedStyle(enSection).display !== 'none') {
        visibleSection = enSection;
    } else if (krSection && window.getComputedStyle(krSection).display !== 'none') {
        visibleSection = krSection;
    }
    
    if (!visibleSection) {
        return;
    }
    
    // Only select slides and dots from the visible language section
    const slides = visibleSection.querySelectorAll('.desktop-resonance-slide');
    const dots = visibleSection.querySelectorAll('.desktop-resonance-dot');
    
    if (slides.length === 0) {
        return;
    }
    
    let currentSlide = 0;
    
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    
    // Reset all dots to inactive, then set first dot as active
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === 0) {
            dot.classList.add('active');
        }
    });
    
    // Hide dots from the inactive language section
    const allDots = document.querySelectorAll('.desktop-resonance-dot');
    allDots.forEach(dot => {
        // Check if this dot is in the visible section
        if (visibleSection.contains(dot)) {
            dot.parentElement.style.display = 'flex'; // Show the dots container
        } else {
            // Hide dots container from inactive language
            const dotsContainer = dot.closest('.desktop-resonance-dots');
            if (dotsContainer) {
                dotsContainer.style.display = 'none';
            }
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
    }
    
    // Expose navigation function globally for dot clicks
    window.navigateToResonanceSlide = function(index) {
        showSlide(index);
        // Only re-initialize video players if navigating to a slide with videos (slide 1 for embodied-algorithms, slide 1 for rotating-weights)
        const currentSlideElement = slides[index];
        if (currentSlideElement && currentSlideElement.querySelector('.custom-video-player')) {
            setTimeout(() => {
                if (window.initCustomVideoPlayers) {
                    console.log('[Desktop Resonance Carousel] Re-initializing video players for slide', index);
                    window.initCustomVideoPlayers();
                }
            }, 100);
        }
    };
    
    console.log('[Desktop Resonance Carousel] Initialized with', slides.length, 'slides');
    
    // Re-initialize video players after carousel setup
    setTimeout(() => {
        if (window.initCustomVideoPlayers) {
            console.log('[Desktop Resonance Carousel] Re-initializing video players');
            window.initCustomVideoPlayers();
        }
    }, 200);
};
