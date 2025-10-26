/**
 * TERMINAL WINDOW PORTFOLIO
 * With cascading folder structure
 */

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
            
            // PROCESS FOLDER
            'process-research': {
                breadcrumb: 'process/research.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-i18n="process.research.title">Research</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-i18n="process.research.text"></span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> hot rolling process, industrial data (Embodied Algorithms)</div>
                                <img src="images/Data_analysis/embodied_analysis1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> facial landmarks and korean word pairs data (Resonance Loop)</div>
                                <img src="images/Data_analysis/resonance_analysis1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> labour statistics (KOSIS) data for the city of Ulsan (Rotating Weights)</div>
                                <img src="images/Data_analysis/ulsan_analysis1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> hot rolling compression graph (Embodied Algorithms)</div>
                                <img src="images/Data_analysis/zone_timeline.png" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> C3 plant analysis (Plant Photosynthesis Sonification)</div>
                                <img src="images/Data_analysis/plant.jpg" onclick="openLightbox(this.src)">
                            </div>
                        </div>
                    </div>
                `
            },
            
            'process-systems': {
                breadcrumb: 'process/systems.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-i18n="process.systems.title">Systems</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-i18n="process.systems.text"></span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> agent-based behavioural sonification, SuperCollider (Plant Photosynthesis Sonification)</div>
                                <img src="images/systems/bdss_sc1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> fuzzy attractor logic, SuperCollider (Plant Photosynthesis Sonification)</div>
                                <img src="images/systems/bdss_sc2.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> interactive data sonification system, TouchDesigner (Embodied Algorithms)</div>
                                <img src="images/systems/embodied1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> labour statistics data engine, TouchDesigner (Rotating Weights)</div>
                                <img src="images/systems/ulsan.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> sonification of heavy metal contamination data, Max/MSP (Metal Rave)</div>
                                <img src="images/systems/metalrave.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Python based data simulation engine (Rotating Weights)</div>
                                <img src="images/systems/ulsan_system1.jpg" onclick="openLightbox(this.src)">
                            </div>
                        </div>
                    </div>
                `
            },
            
            'process-visual': {
                breadcrumb: 'process/visual-language.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-i18n="process.visual.title">Visual and Sonic Language</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-i18n="process.visual.text"></span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> layered data visualization of the industrial hot rolling process (Embodied Algorithms)</div>
                                <img src="images/aesthetics/ARTWORK1-01.png" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <img src="images/aesthetics/ARTWORK2-01.png" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <img src="images/aesthetics/ARTWORK3-01.png" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <img src="images/aesthetics/ARTWORK4-01.png" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> interactive data sonification visuals (Embodied Algorithms)</div>
                                <img src="images/aesthetics/embodied1.jpg" onclick="openLightbox(this.src)">
                            </div>
                            <div class="image-item">
                                <img src="images/aesthetics/embodied2.jpg" onclick="openLightbox(this.src)">
                            </div>
                        </div>
                    </div>
                `
            },
            
            'process-experience': {
                breadcrumb: 'process/experience.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-i18n="process.experience.title">Experience</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-i18n="process.experience.text"></span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label">
                                    <span class="prompt">></span> 
                                    <span data-en="Flowing Algorithms | The Aesthetics of Technology: CONT.ROLLING (2025)" data-kr="흐르는 알고리즘 (Flowing Algorithms) | 기술의 미학: CONT.ROLLING (2025)">Flowing Algorithms | The Aesthetics of Technology: CONT.ROLLING (2025)</span>
                                </div>
                                <div class="image-description">
                                    <span data-en="A custom data engine and real-time sonification system built from hot rolling process data. Webcam-based hand tracking enables direct interaction with the data, generating sonic harmonies in real time through audience gestures." data-kr="열간압연 공정 데이터 기반의 맞춤 데이터 엔진과 실시간 소니피케이션 시스템. 웹캠을 통해 관객의 손동작을 감지하여 데이터와 직접 상호작용하며, 그 과정에서 생성되는 사운드 하모니를 실시간으로 경험한다.">A custom data engine and real-time sonification system built from hot rolling process data. Webcam-based hand tracking enables direct interaction with the data, generating sonic harmonies in real time through audience gestures.</span>
                                </div>
                                <video controls>
                                    <source src="videos/embodied_new2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="image-item">
                                <div class="image-label">
                                    <span class="prompt">></span> 
                                    <span data-en="Hearing Plant Conversation | BDSS demonstration" data-kr="Hearing Plant Conversation | 연구자료, BDSS 시연 영상">Hearing Plant Conversation | BDSS demonstration</span>
                                </div>
                                <div class="image-description">
                                    <span data-en="Real-time generative system in SuperCollider modelling C3 plant's adaptive behaviour. Three virtual agents negotiate environmental conditions through harmonic relationships, rendered as granular synthesis and real-time particle visualisation in TouchDesigner." data-kr="SuperCollider와 TouchDesigner로 구현한 실시간 제너레이티브 사운드 시스템으로 C3 식물의 적응 활동력을 모델링한다. 세 개의 가상 에이전트가 환경 조건을 협상하며 하모닉 관계를 생성하고, 이를 그래뉼러 신스와 실시간 파티클 시각화로 렌더링 한 연구 실험이다.">Real-time generative system in SuperCollider modelling C3 plant's adaptive behaviour. Three virtual agents negotiate environmental conditions through harmonic relationships, rendered as granular synthesis and real-time particle visualisation in TouchDesigner.</span>
                                </div>
                                <video controls>
                                    <source src="videos/plant_sonification2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="image-item">
                                <div class="image-label">
                                    <span class="prompt">></span> 
                                    <span data-en="Archived Algorithms | The Aesthetics of Technology: CONT.ROLLING Exhibition (2025)" data-kr="쌓인 알고리즘 (Achieved Algorithms) | 기술의 미학: CONT.ROLLING 전시 (2025)">Archived Algorithms | The Aesthetics of Technology: CONT.ROLLING Exhibition (2025)</span>
                                </div>
                                <div class="image-description">
                                    <span data-en="An interactive app enabling audiences to manipulate metal slab dimensions and explore hot rolling processes. Each adjustment is linked to a real-time sound synthesiser, creating sonic responses that reflect changes in the industrial process." data-kr="관객이 메탈 슬래브의 길이와 높이를 직접 조작하며 열간압연 공정을 탐색하는 인터랙티브 앱. 각 조작은 실시간 사운드 신디사이저와 연결되어 공정 변화에 따른 청각적 변화를 경험할 수 있다.">An interactive app enabling audiences to manipulate metal slab dimensions and explore hot rolling processes. Each adjustment is linked to a real-time sound synthesiser, creating sonic responses that reflect changes in the industrial process.</span>
                                </div>
                                <video controls>
                                    <source src="videos/embodied_app.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="image-item">
                                <div class="image-label">
                                    <span class="prompt">></span> 
                                    <span data-en="Rotating Weights | To Transport Time exhibition" data-kr="회전하는 무게 (Rotating Weights) | 시간을 나르는 일 (To Transport Time) 전시">Rotating Weights | To Transport Time exhibition</span>
                                </div>
                                <div class="image-description">
                                    <span data-en="The visuals for data-driven interactive installation transforming Ulsan business statistics into a pie chart, with values mapped to the C# major scale. The pie chart's opening and closing is animated by a real-time data engine, while audiences control layered vocal harmonies through load cell pressure sensors." data-kr="울산 사업체수 통계 데이터를 파이 차트로 변환하고, 각 값을 C# 메이저 스케일에 매핑한 데이터 기반 사운드 작품. 파이 차트의 개폐 애니메이션은 실시간 데이터 엔진으로 구동되며, 관객이 로드셀을 누르는 압력에 따라 녹음된 보컬 하모니가 실시간으로 레이어링된다.">The visuals for data-driven interactive installation transforming Ulsan business statistics into a pie chart, with values mapped to the C# major scale. The pie chart's opening and closing is animated by a real-time data engine, while audiences control layered vocal harmonies through load cell pressure sensors.</span>
                                </div>
                                <video controls>
                                    <source src="videos/rotating.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                `
            },
            
            // EXHIBITIONS FOLDER
            'exhibitions-overview': {
                breadcrumb: 'exhibitions/overview.md',
                html: `
                    <div class="process-header">
                        <span class="line-marker">//</span> <span data-en="Selected Exhibitions" data-kr="주요 전시">Selected Exhibitions</span>
                    </div>
                    
                    <div class="cv-entry-list">
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-resonance" data-en="[&quot; &quot;] // Resonance Loop, Sound Diaries: Memory Space Exhibition" data-kr="공진회로 [&quot; &quot;] // Resonance Loop 《사운드 다이어리: 기억의 공간》">[" "] // Resonance Loop, Sound Diaries: Memory Space Exhibition</p>
                                    <p class="cv-location" data-en="Café Comma/Gallery ÀMiDi, Seoul, South Korea" data-kr="카페 꼼마 x 갤러리 아미디, 서울">Café Comma/Gallery ÀMiDi, Seoul, South Korea</p>
                                    <p class="cv-description" data-en="Real-time facial recognition integrated with speech-to-text systems. Custom Machine Learning Models trained on artist's facial vectors generate language through Behaviour-Driven Systemic Sonification, creating recursive cycles where biometric data becomes voice." data-kr="실시간 얼굴 인식과 음성-텍스트 변환 시스템을 통합한 작업. 작가의 안면 벡터로 학습된 머신러닝 모델이 생체 데이터를 언어로 생성하며, 데이터가 목소리로 전환되는 재귀적 순환 구조를 형성한다.">Real-time facial recognition integrated with speech-to-text systems. Custom Machine Learning Models trained on artist's facial vectors generate language through Behaviour-Driven Systemic Sonification, creating recursive cycles where biometric data becomes voice.</p>
                                    <p class="cv-medium" data-en="Affective translation software, Short Film, LED display" data-kr="소프트웨어, 단편 영상, LED 디스플레이">Affective translation software, Short Film, LED display</p>
                                </div>
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-rotating" data-en="Rotating Weights, To Transport Time Exhibition" data-kr="회전하는 무게 《시간을 나르는 일》">Rotating Weights, To Transport Time Exhibition</p>
                                    <p class="cv-location" data-en="Ho-Gae Train Station, Ulsan, South Korea" data-kr="호계폐역, 울산">Ho-Gae Train Station, Ulsan, South Korea</p>
                                    <p class="cv-description" data-en="Interactive data sonification of Ulsan's labour statistics (KOSIS). Audience interaction with electronic weights generates sound mapping labour data patterns." data-kr="울산 노동 통계 데이터(KOSIS)를 사운드로 변환한 인터랙티브 작업. 관객이 전자 저울과 상호작용하며 노동 데이터의 패턴을 음향으로 생성한다.">Interactive data sonification of Ulsan's labour statistics (KOSIS). Audience interaction with electronic weights generates sound mapping labour data patterns.</p>
                                    <p class="cv-medium" data-en="LED display, headphones, Electronic Weights, LED lights, Dimensions variable" data-kr="LED 디스플레이, 헤드폰, 전자 저울, LED 조명, 가변크기">LED display, headphones, Electronic Weights, LED lights, Dimensions variable</p>
                                </div>
                                <img src="images/1.JPG" alt="Rotating Weights" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-embodied" data-en="Embodied Algorithms, Cont.Rolling Exhibition" data-kr="손끝의 알고리즘 《Cont.Rolling 기술의 미학 2025》">Embodied Algorithms, Cont.Rolling Exhibition</p>
                                    <p class="cv-location" data-en="Space298, Pohang, South Korea" data-kr="스페이스 298, 포항문화재단">Space298, Pohang, South Korea</p>
                                    <p class="cv-description" data-en="Collaborative work with master artisan translating steel rolling control technology into interactive multimedia. Installation comprises Archived Algorithms (layered data visualisation prints), Data Explorer (AR interface with sonified data), and Responsive Algorithms (Behaviour-Driven Systemic Sonification with hand gesture recognition)." data-kr="명장과의 협업을 통해 제강 압연 제어 기술을 인터랙티브 멀티미디어로 번역한 작업. 보관된 알고리즘(층위 데이터 시각화 프린트), 데이터 탐색기(소니피케이션된 데이터와 AR 인터페이스), 반응하는 알고리즘(손동작 인식 기반 사운드 생성)으로 구성된다.">Collaborative work with master artisan translating steel rolling control technology into interactive multimedia. Installation comprises Archived Algorithms (layered data visualisation prints), Data Explorer (AR interface with sonified data), and Responsive Algorithms (Behaviour-Driven Systemic Sonification with hand gesture recognition).</p>
                                    <p class="cv-medium" data-en="LED display, 2.1 Sound, Webcam, AR App, Data Visualisation Prints, Dimensions Variable" data-kr="LED 디스플레이, 2.1 사운드, 웹캠, AR 앱, 데이터 시각화 프린트, 가변크기">LED display, 2.1 Sound, Webcam, AR App, Data Visualisation Prints, Dimensions Variable</p>
                                </div>
                                <img src="images/2.jpg" alt="Embodied Algorithms" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-void" data-en="Void && Form, Artificial Territories Exhibition" data-kr="Void && Form 《Artificial Territories》">Void && Form, Artificial Territories Exhibition</p>
                                    <p class="cv-location" data-en="Das LOT, Vienna (Team Mangshinsal)" data-kr="Das Lot, 비엔나, 오스트리아 (팀 망신살)">Das LOT, Vienna (Team Mangshinsal)</p>
                                    <p class="cv-description" data-en="Interactive installation using Face-API.js neural networks to capture emotions and transform them into audiovisual landscapes. Repurposes facial recognition as contemplation, creating digital mandala from decomposing and recomposing emotional states in binary data." data-kr="Face-API.js 신경망을 활용해 감정을 포착하고 시청각 풍경으로 변환하는 작업. 얼굴 인식 기술을 성찰의 도구로 재해석하며, 이진 데이터 속에서 감정 상태를 분해하고 재구성하여 디지털 만다라를 생성한다.">Interactive installation using Face-API.js neural networks to capture emotions and transform them into audiovisual landscapes. Repurposes facial recognition as contemplation, creating digital mandala from decomposing and recomposing emotional states in binary data.</p>
                                    <p class="cv-medium" data-en="Projector, Stereo Sound, Webcam, Dimensions Variable" data-kr="프로젝터, 스테레오 사운드, 웹캠, 가변크기">Projector, Stereo Sound, Webcam, Dimensions Variable</p>
                                </div>
                                <img src="images/3.PNG" alt="Void && Form" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2024</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-metal" data-en="Metal Rave, The Six Isles Exhibition" data-kr="메탈 레이브 《제6의 섬_풀린역사 암호화된 미래》">Metal Rave, The Six Isles Exhibition</p>
                                    <p class="cv-location" data-en="Dongbin 1969, Pohang" data-kr="동빈 1969, 포항문화재단">Dongbin 1969, Pohang</p>
                                    <p class="cv-description" data-en="Installation translating Hyeongsan River Basin heavy metal contamination data into navigable sonic cartographies. Joystick-controlled navigation through projected digital maps with industrial soundscapes exposing toxic flows." data-kr="형산강 유역 중금속 오염 데이터를 항해 가능한 음향 지도로 변환한 설치. 조이스틱으로 투사된 디지털 지도를 탐색하며 오염의 궤적을 드러내는 산업적 사운드스케이프를 경험한다.">Installation translating Hyeongsan River Basin heavy metal contamination data into navigable sonic cartographies. Joystick-controlled navigation through projected digital maps with industrial soundscapes exposing toxic flows.</p>
                                    <p class="cv-medium" data-en="Conveyor belt, Joystick, 4.1 Sound, LED display, Dimensions variable" data-kr="컨베이어 벨트, 조이스틱, 4.1 사운드, LED 디스플레이, 가변크기">Conveyor belt, Joystick, 4.1 Sound, LED display, Dimensions variable</p>
                                </div>
                                <img src="images/4.jpg" alt="Metal Rave" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                        </div>
                        
                        <div class="process-header" style="margin-top: 48px;">
                            <span class="line-marker">//</span> <span data-en="Selected Performances & Live Works" data-kr="주요 퍼포먼스 및 라이브 작업">Selected Performances & Live Works</span>
                        </div>
                        
                        <div class="cv-entry-list">
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2024</p>
                                    <p class="cv-title" data-en="Deviated Vibrations, Art & Tech Cluster Forum" data-kr="Deviated Vibrations 아트 앤 테크 클러스터 포럼, 포항가속기연구소 협업작">Deviated Vibrations, Art & Tech Cluster Forum</p>
                                    <p class="cv-location" data-en="Pohang" data-kr="기획: 포항문화재단">Pohang</p>
                                    <p class="cv-description" data-en="Algorithmic translation work translating particle accelerator vibration deviation data into improvisational jazz structures. Deviation patterns from the accelerator dataset generate sonic compositions, transforming scientific measurement into musical form." data-kr="입자가속기 진동 편차 데이터를 즉흥 재즈 구조로 변환한 알고리즘 번역 작업. 가속기 데이터셋의 편차 패턴이 음향 작곡을 생성하며, 과학적 측정을 음악적 형태로 전환한다.">Algorithmic translation work translating particle accelerator vibration deviation data into improvisational jazz structures. Deviation patterns from the accelerator dataset generate sonic compositions, transforming scientific measurement into musical form.</p>
                                </div>
                                <img src="images/deviated.jpg" alt="Deviated Vibrations" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2024</p>
                                    <p class="cv-title" data-en="<4x4> !𝑴𝒆𝒅𝒊𝒆𝒏𝒈𝒓𝒖𝒑𝒑𝒆 𝑩𝒊𝒕𝒏𝒊𝒌, Seoul Edition" data-kr="4x4 !𝑴𝒆𝒅𝒊𝒆𝒏𝒈𝒓𝒖𝒑𝒑𝒆 𝑩𝒊𝒕𝒏𝒊𝒌, Seoul Edition 《인투 더 리듬: 스코어로부터 접촉지대로》"><4x4> !𝑴𝒆𝒅𝒊𝒆𝒏𝒈𝒓𝒖𝒑𝒑𝒆 𝑩𝒊𝒕𝒏𝒊𝒌, Seoul Edition</p>
                                    <p class="cv-location" data-en="Arko Art Centre & Gwangju Biennale" data-kr="아르코 미술관, 서울 (기획: 아르코 x 온큐레이팅, 광주비엔날레 협력)">Arko Art Centre & Gwangju Biennale</p>
                                    <p class="cv-description" data-en="Cross-disciplinary live performance where 16 artists improvise across sound, video, and movement." data-kr="16명의 아티스트가 사운드, 영상, 움직임을 넘나들며 즉흥 연주하는 학제간 라이브 퍼포먼스.">Cross-disciplinary live performance where 16 artists improvise across sound, video, and movement.</p>
                                </div>
                                <img src="images/5.jpg" alt="4x4 Performance" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                        </div>
                `
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
                htmlFile: 'research/research-overview.html'
            },
            
            'research-rcs': {
                breadcrumb: 'research/rcs.md',
                htmlFile: 'research/research-rcs.html'
            },
            
            'research-bdss': {
                breadcrumb: 'research/bdss.md',
                htmlFile: 'research/research-bdss.html'
            },
            
            // CONTACT
            contact: {
                breadcrumb: 'contact.md',
                html: `
                    <div class="terminal-output-style">
                        <div class="terminal-line" data-en="> interested in collaborations?" data-kr="협업, 전시 제안 등은 아래의 이메일로 연락 부탁드립니다.">> interested in collaborating?</div>
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
    }
    
    async init() {
        // Set initial language on body
        document.body.setAttribute('data-lang', this.currentLang);
        
        // Load translations first
        await this.loadTranslations(this.currentLang);
        
        // Setup mobile content cloning
        this.setupMobileContent();
        
        this.setupNavigation();
        this.setupFolders();
        this.setupLanguage();
        this.setupCommands();
        this.setupWindowControls();
        this.setupDesktopFolders();
        this.loadContent('hero');
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
                            this.loadContent(fileId);
                            mobileNav.classList.remove('expanded');
                            navToggle.classList.remove('expanded');
                        }
                    }
                });
            }
        }
    }
    
    setupFolders() {
        document.querySelectorAll('.nav-folder-header').forEach(header => {
            header.addEventListener('click', () => {
                const folder = header.parentElement;
                folder.classList.toggle('expanded');
            });
        });
    }
    
    setupLanguage() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });
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
        
        // STEP 4.5: Reload about section if currently viewing it on DESKTOP (to switch HTML structure)
        // Mobile uses hardcoded data-en/data-kr attributes, so no reload needed
        if (this.currentFile === 'about') {
            const isMobile = window.innerWidth <= 1024;
            
            if (!isMobile) {
                // Desktop only - reload with correct language template
                const data = this.content['about'];
                const htmlContent = data.getHTML ? data.getHTML() : data.html;
                document.getElementById('content').innerHTML = htmlContent;
                
                // Reapply translations and setup
                this.translate();
                this.setupProfileSwitcher();
                
                // Reapply fade-in animations
                setTimeout(() => {
                    const outputLines = document.querySelectorAll('.output-line:not(.blank):not(.section-marker)');
                    outputLines.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-about-text');
                        }, index * 200);
                    });
                    
                    const gridImages = document.querySelectorAll('.image-grid .grid-image');
                    gridImages.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition-image');
                        }, index * 200);
                    });
                }, 300);
            }
            // Mobile: do nothing - language switch handled by data-en/data-kr attributes
        }
        
        // STEP 5: Restart typewriter animations if on a process page
        const currentFileId = this.currentFile;
        if (currentFileId && currentFileId.startsWith('process-') && typeof initProcessNodes === 'function') {
            setTimeout(() => initProcessNodes(currentFileId), 300);
        }
        
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
            const response = await fetch(`./translations/${lang}.json`);
            this.translations = await response.json();
            this.translate();
        } catch (error) {
            console.error(`Failed to load translations for ${lang}:`, error);
        }
    }
    
    translate() {
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
                // Check if element has a prompt (like video caption)
                const hasPrompt = element.querySelector('.prompt');
                if (hasPrompt) {
                    // Split by periods and create lines with prompts
                    const sentences = text.split('.').filter(s => s.trim());
                    const formattedText = sentences.map(sentence => 
                        '<span class="prompt">></span> ' + sentence.trim() + '.'
                    ).join('<br>');
                    element.innerHTML = formattedText;
                } else if (element.children.length > 0 && !element.querySelector('br')) {
                    // Element has child elements (like nested lists) - preserve structure
                    // Only update the direct text nodes, not innerHTML
                    const firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === 3);
                    if (firstTextNode) {
                        firstTextNode.textContent = text;
                    } else {
                        // No text node found, create one at the beginning
                        element.insertBefore(document.createTextNode(text), element.firstChild);
                    }
                } else {
                    // Simple element with no children or only <br> tags - safe to use innerHTML
                    element.innerHTML = text;
                }
            }
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
    
    setupWindowControls() {
        const terminalWindow = document.querySelector('.terminal-window');
        const titleBar = document.querySelector('.window-titlebar');
        const desktopFolders = document.querySelector('.desktop-folders');
        
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
                    // Show desktop folders
                    if (desktopFolders) {
                        desktopFolders.classList.add('visible');
                    }
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
                        
                        // Hide desktop folders
                        if (desktopFolders) {
                            desktopFolders.classList.remove('visible');
                        }
                        
                        // Reset inline styles that might be causing issues
                        terminalWindow.style.position = '';
                        terminalWindow.style.bottom = '';
                        terminalWindow.style.left = '';
                        terminalWindow.style.transform = '';
                        terminalWindow.style.width = '';
                        terminalWindow.style.height = '';
                        terminalWindow.style.maxWidth = '';
                        
                        // Resize canvas after restore from minimized
                        setTimeout(() => {
                            if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                                window.codeArchAnimation.resize();
                            }
                            window.dispatchEvent(new Event('resize'));
                        }, 350);
                    }
                }
            };
            
            terminalWindow.addEventListener('click', handleRestore, true);
            
            // Also add to title bar specifically
            if (titleBar) {
                titleBar.addEventListener('click', (e) => {
                    if (terminalWindow.classList.contains('minimized')) {
                        handleRestore(e);
                    }
                });
            }
        }
        
        // Fullscreen button - expands terminal to fill viewport OR restores from minimized
        const maximizeBtn = document.querySelector('.window-btn.maximize');
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // If minimized, restore to normal state
                if (terminalWindow.classList.contains('minimized')) {
                    terminalWindow.classList.remove('minimized');
                    
                    // Hide desktop folders
                    if (desktopFolders) {
                        desktopFolders.classList.remove('visible');
                    }
                    
                    // Reset inline styles
                    terminalWindow.style.position = '';
                    terminalWindow.style.bottom = '';
                    terminalWindow.style.left = '';
                    terminalWindow.style.transform = '';
                    terminalWindow.style.width = '';
                    terminalWindow.style.height = '';
                    terminalWindow.style.maxWidth = '';
                    
                    // Resize canvas after restore from minimized
                    setTimeout(() => {
                        if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                            window.codeArchAnimation.resize();
                        }
                        window.dispatchEvent(new Event('resize'));
                    }, 350);
                }
                // If fullscreen, restore to normal
                else if (terminalWindow.classList.contains('fullscreen')) {
                    // Restoring - add transition class
                    terminalWindow.classList.add('fullscreen-restoring');
                    setTimeout(() => {
                        terminalWindow.classList.remove('fullscreen');
                        terminalWindow.classList.remove('fullscreen-restoring');
                        
                        // Resize canvas after restore completes
                        setTimeout(() => {
                            if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                                window.codeArchAnimation.resize();
                            }
                            // Trigger window resize event
                            window.dispatchEvent(new Event('resize'));
                        }, 350);
                    }, 100);
                } 
                // If normal, go to fullscreen
                else {
                    // Maximizing
                    terminalWindow.classList.add('fullscreen');
                    
                    // Resize canvas after maximize completes
                    setTimeout(() => {
                        if (window.codeArchAnimation && window.codeArchAnimation.resize) {
                            window.codeArchAnimation.resize();
                        }
                        // Trigger window resize event
                        window.dispatchEvent(new Event('resize'));
                    }, 350);
                }
            });
        }
        
        // Exit button
        const closeBtn = document.querySelector('.window-btn.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.exitWindow();
            });
        }
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
        
        // Folder item click handlers (open images/videos/pdfs)
        document.querySelectorAll('.folder-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.dataset.type;
                const src = item.dataset.src;
                
                if (type === 'image') {
                    openLightbox(src);
                } else if (type === 'video') {
                    // Create video lightbox
                    const lightbox = document.getElementById('lightbox');
                    const lightboxImg = document.getElementById('lightbox-img');
                    
                    // Replace img with video element
                    lightboxImg.style.display = 'none';
                    let videoEl = document.getElementById('lightbox-video');
                    if (!videoEl) {
                        videoEl = document.createElement('video');
                        videoEl.id = 'lightbox-video';
                        videoEl.className = 'lightbox-content';
                        videoEl.controls = true;
                        videoEl.style.maxWidth = '90%';
                        videoEl.style.maxHeight = '90%';
                        lightbox.appendChild(videoEl);
                    }
                    videoEl.src = src;
                    videoEl.style.display = 'block';
                    lightbox.classList.add('active');
                } else if (type === 'pdf') {
                    // Open PDF in viewer window
                    this.openPDFViewer(src, item.querySelector('.folder-item-label').textContent);
                } else if (type === 'text') {
                    // Open text document in viewer window
                    const content = item.dataset.content;
                    this.openTextViewer(content, item.querySelector('.folder-item-label').textContent);
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
            // Clear iframe to stop loading
            if (pdfIframe) {
                pdfIframe.src = '';
            }
        }
    }
    
    openTextViewer(content, title) {
        const textViewer = document.getElementById('text-viewer');
        const textContent = document.getElementById('text-content');
        const textTitle = document.getElementById('text-viewer-title');
        
        if (textViewer && textContent) {
            textTitle.textContent = title;
            textContent.textContent = content;
            textViewer.classList.add('active');
        }
    }
    
    closeTextViewer() {
        const textViewer = document.getElementById('text-viewer');
        const textContent = document.getElementById('text-content');
        
        if (textViewer) {
            textViewer.classList.remove('active');
            // Clear content
            if (textContent) {
                textContent.textContent = '';
            }
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
        
        // Terminal output lines with slower timing
        const lines = [
            { text: '> closing connection...', delay: 0 },
            { text: '> you will be missed', delay: 800 },
            { text: '', delay: 1600 },
            { text: 'goodbye', delay: 2000, style: 'color: var(--text-primary);' },
            { text: '', delay: 2400 }
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
            }, line.delay + 800);
        });
        
        // Create "type restart" message with very slow reveal after long pause
        const restartMessage = document.createElement('div');
        restartMessage.style.cssText = `
            opacity: 0;
            transition: opacity 2s ease;
            color: var(--text-muted);
            font-size: 12px;
            margin-bottom: 8px;
        `;
        restartMessage.textContent = '> type "restart" to reconnect';
        terminalBox.appendChild(restartMessage);
        
        // Create restart input (appears after all lines)
        const restartInput = document.createElement('div');
        restartInput.style.cssText = `
            margin-top: 8px;
            opacity: 0;
            transition: opacity 2s ease;
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
                       outline: none;
                       color: var(--text-primary);
                       font-family: 'IBM Plex Mono', monospace;
                       font-size: 13px;
                       flex: 1;
                       max-width: 200px;
                   ">
        `;
        
        const input = restartInput.querySelector('input');
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim().toLowerCase() === 'restart') {
                location.reload();
            }
        });
        
        terminalBox.appendChild(restartInput);
        
        // Very slow reveal of restart message after long pause (starts at 5000ms)
        setTimeout(() => {
            restartMessage.style.opacity = '1';
        }, 5000);
        
        // Very slow reveal of input field after message (starts at 6000ms)
        setTimeout(() => {
            restartInput.style.opacity = '1';
            input.focus();
        }, 6000);
        
        overlay.appendChild(terminalBox);
        document.body.appendChild(overlay);
        
        // Trigger fade in
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            terminalBox.style.opacity = '1';
        }, 300);
    }
    
    async loadExternalHTML(fileId, htmlFile) {
        try {
            const response = await fetch(htmlFile);
            const html = await response.text();
            // Cache the loaded HTML
            this.content[fileId].html = html;
            document.getElementById('content').innerHTML = html;
            
            // Collapse exhibition sections by default
            setTimeout(() => {
                document.querySelectorAll('.collapsible-section').forEach(section => {
                    const content = section.querySelector('.section-content');
                    const icon = section.querySelector('.toggle-icon');
                    if (content) content.style.display = 'none';
                    if (icon) icon.textContent = '▼';
                    section.classList.remove('expanded');
                });
            }, 0);
        } catch (error) {
            console.error(`Failed to load ${htmlFile}:`, error);
            document.getElementById('content').innerHTML = '<p>Failed to load content.</p>';
        }
    }
    
    async loadContent(fileId) {
        const data = this.content[fileId];
        if (!data) return;
        
        this.currentFile = fileId;
        
        // Check if mobile
        const isMobile = window.innerWidth <= 1024;
        
        if (isMobile) {
            // Load directly into mobile container
            const mobileContainer = document.getElementById('mobile-content');
            if (mobileContainer) {
                // Check if we need to load external HTML file first
                if (data.htmlFile && !data.html) {
                    try {
                        const response = await fetch(data.htmlFile);
                        const html = await response.text();
                        // Cache the loaded HTML
                        data.html = html;
                    } catch (error) {
                        console.error(`Failed to load ${data.htmlFile}:`, error);
                        mobileContainer.innerHTML = '<p>Failed to load content.</p>';
                        return;
                    }
                }
                
                // Get HTML - use getHTML() if available (for language-specific templates like about)
                // IMPORTANT: Work with a copy to avoid modifying the cached data.html
                let content = data.getHTML ? data.getHTML() : (data.html ? String(data.html) : '');
                
                // Special handling for about.md on mobile - create new parallax structure
                if (fileId === 'about') {
                    // Create a temporary div to parse the HTML
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = content;
                    
                    // Extract all spans with data-i18n from output-line elements (excluding blank and section markers)
                    const lines = Array.from(tempDiv.querySelectorAll('.output-line:not(.blank):not(.section-marker)'));
                    const spans = [];
                    lines.forEach(line => {
                        const i18nSpans = line.querySelectorAll('[data-i18n]');
                        i18nSpans.forEach(span => spans.push(span.outerHTML));
                    });
                    
                    // Join all spans with spaces for scattered effect
                    const scatteredText = spans.join(' ');
                    
                    // Create mobile-only parallax structure
                    content = `
                        <div class="mobile-about-container">
                            <!-- Sticky parallax overlay with scattered text -->
                            <div class="mobile-about-sticky">
                                <div class="about-terminal">
                                    <div class="terminal-prompt">
                                        <span class="prompt-symbol">></span>
                                        <span class="prompt-command">about_me.txt</span>
                                    </div>
                                    <div class="terminal-output">
                                        <p class="output-line"><span class="line-marker">></span> ${scatteredText}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Scrollable content area below -->
                            <div class="mobile-about-scroll-content">
                                <div class="mobile-about-spacer"></div>
                                <div class="mobile-about-text-section">
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun Kim / Systems Artist" data-kr="김희은 / 시스템 아티스트">Hee-Eun Kim / Systems Artist</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 01</p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components." data-kr="데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만든다. 개별 요소로 환원하여 최적화하는 사고방식 대신, 무아와 상호연결성의 관점에서 복잡성을 다룬다. 분리된 실체가 아닌 관계 속에서 나타나는 패턴과 흐름을 경험 가능하게 만든다.">Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction, preserving the relational nature of systems against frameworks that reduce them to isolated components.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics." data-kr="데이터를 단순한 정보가 아니라 이야기를 담은 구조로 본다. 그 안에는 사람들의 결정, 시스템의 패턴, 보이지 않는 관계들이 담겨있다. 보편적 과학이 데이터로부터 객관적 사실을 추출하는 것을 목표로 한다면, 나는 관계와 맥락 속에서만 존재가 드러난다는 인식론적 접근을 취한다. 고정된 진리가 아닌 과정과 변화 그 자체를 다룬다. 작업은 답을 제시하기보다 질문을 유지하며, 우리의 인식을 형성하는 구조들을 드러낸다.">Her work is grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple. She treats data as behaviour, focusing on its actions and effects rather than static representation. Her work reveals the narrative infrastructure containing human decisions and systemic patterns without collapsing them into simplified metrics.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 02</p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible." data-kr="데이터 엔진, 실시간 사운드 프로세싱 시스템, 인터랙티브 소프트웨어를 직접 개발한다. 각 시스템은 특정 맥락을 감지하고 반응하도록 만들어지며, 결과가 미리 정해지지 않고 상황에 따라 나타나는 열린 구조로 작동한다. 현장 데이터를 수집하고 분석하여 장소의 특성을 반영하며, 사운드와 시각 요소가 결합된 인터랙티브 설치로 구현한다. 관객의 참여를 통해 시스템이 반응하고 변화하며 작업이 완성된다.">Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software, not as tools applied to content, but as systems built to sense and respond to specific contexts. Each operates through open structures where outcomes emerge through encounter rather than being predetermined. The work completes itself through audience participation, not as an interactive feature but as a fundamental condition: the audience becomes implicated in the processes being made visible.</span></p>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (fileId.startsWith('exhibition-')) {
                    // Special handling for exhibition pages on mobile - reorder content
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = content;
                    
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
                    
                    // Extract the entire exhibition-text-column content (includes both text and collapsible sections)
                    const enTextColumn = enContainer ? enContainer.querySelector('.exhibition-text-column') : null;
                    const krTextColumn = krContainer ? krContainer.querySelector('.exhibition-text-column') : null;
                    
                    // Wrap both language versions in lang-en and lang-kr divs for CSS switching
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
                    
                    // Rebuild with divs instead of p tags to control spacing better
                    content = `
                        <div class="mobile-exhibition-header">
                            <h1 data-en="${titleDataEn}" data-kr="${titleDataKr}">${title ? title.textContent : ''}</h1>
                            <div class="cv-year" data-en="${yearDataEn}" data-kr="${yearDataKr}">${year ? year.textContent : ''}</div>
                            <div class="cv-location" data-en="${locationDataEn}" data-kr="${locationDataKr}">${location ? location.innerHTML : ''}</div>
                        </div>
                        ${imageGrid ? imageGrid.outerHTML : ''}
                        <div class="cv-medium" data-en="${mediumDataEn}" data-kr="${mediumDataKr}">${medium ? medium.textContent : ''}</div>
                        <div class="mobile-exhibition-description">
                            ${descriptionsHTML}
                        </div>
                    `;
                } else {
                    // Strip emphasis spans for mobile
                    content = content.replace(/<span class="emphasis-word[^"]*"[^>]*>/g, '');
                    content = content.replace(/<\/span>/g, '');
                }
                
                mobileContainer.innerHTML = content;
                
                // Collapse exhibition sections by default on mobile
                if (fileId.startsWith('exhibition-')) {
                    setTimeout(() => {
                        document.querySelectorAll('.collapsible-section').forEach(section => {
                            const content = section.querySelector('.section-content');
                            const icon = section.querySelector('.toggle-icon');
                            if (content) content.style.display = 'none';
                            if (icon) icon.textContent = '▼';
                            section.classList.remove('expanded');
                        });
                    }, 0);
                }
                
                // Apply beige background for hero section only
                if (fileId === 'hero') {
                    mobileContainer.classList.add('hero-bg');
                } else {
                    mobileContainer.classList.remove('hero-bg');
                }
                
                // Reset scroll after content loads
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    const mobileContentContainer = document.querySelector('.mobile-content-container');
                    if (mobileContentContainer) {
                        mobileContentContainer.scrollTop = 0;
                    }
                }, 0);
            }
        } else {
            // Desktop: load into desktop container
            document.getElementById('breadcrumb').textContent = data.breadcrumb;
            
            // Check if we need to load external HTML file
            if (data.htmlFile && !data.html) {
                await this.loadExternalHTML(fileId, data.htmlFile);
            } else {
                // Get HTML - use getHTML() if available (for language-specific templates like about)
                const htmlContent = data.getHTML ? data.getHTML() : data.html;
                document.getElementById('content').innerHTML = htmlContent;
            }
        }
        
        // Apply current language to the loaded content
        this.translate();
        
        // Initialize code-architecture animation if hero section
        if (fileId === 'hero' && typeof initCodeArchitecture === 'function') {
            setTimeout(initCodeArchitecture, 100);
        }
        
        // Setup profile picture switcher if about section
        if (fileId === 'about') {
            this.setupProfileSwitcher();
            
            // Fade in text lines in about section (after translation completes) - only on first visit
            if (!this.animatedPages.has(fileId)) {
                setTimeout(() => {
                    const outputLines = document.querySelectorAll('.output-line:not(.blank):not(.section-marker)');
                    outputLines.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-about-text');
                        }, index * 200);
                    });
                    
                    // Fade in images in about section
                    const gridImages = document.querySelectorAll('.image-grid .grid-image');
                    gridImages.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition-image');
                        }, index * 200);
                    });
                }, 300);
                this.animatedPages.add(fileId);
            }
        }
        
        // Setup process node visualization if process section only - AFTER translation
        // Exclude research pages (research-overview, research-rcs, research-bdss)
        if (fileId.startsWith('process-') && typeof initProcessNodes === 'function') {
            // Wait for translation to complete before starting typewriter
            setTimeout(() => initProcessNodes(fileId), 200);
            
            // Fade in images in process pages
            setTimeout(() => {
                const imageItems = document.querySelectorAll('.image-item');
                imageItems.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fade-in-process-image');
                    }, index * 200);
                });
            }, 200);
        }
        
        // Research pages: apply fade-in effect to text paragraphs
        if (fileId.startsWith('research-')) {
            if (!this.animatedPages.has(fileId)) {
                // First visit: animate
                setTimeout(() => {
                    const exhibitionTexts = document.querySelectorAll('.exhibition-text');
                    exhibitionTexts.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                        }, index * 150);
                    });
                    
                    // Fade in images in process-images for research pages
                    const processImages = document.querySelectorAll('.process-images .image-item');
                    processImages.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition-image');
                        }, index * 100);
                    });
                }, 200);
                this.animatedPages.add(fileId);
            } else {
                // Revisit: add classes immediately without animation
                document.querySelectorAll('.exhibition-text').forEach(element => {
                    element.classList.add('fade-in-exhibition');
                });
                document.querySelectorAll('.process-images .image-item').forEach(element => {
                    element.classList.add('fade-in-exhibition-image');
                });
            }
        }
        
        // Exhibition pages: apply fade-in effect to text paragraphs and images
        if (fileId.startsWith('exhibition')) {
            if (!this.animatedPages.has(fileId)) {
                // First visit: animate
                setTimeout(() => {
                    // For individual exhibition pages: fade in exhibition-text paragraphs (slower)
                    const exhibitionTexts = document.querySelectorAll('.exhibition-text');
                    exhibitionTexts.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                        }, index * 250);
                    });
                    
                    // For exhibitions-overview: fade in cv-entry items (keep at 150ms)
                    const cvEntries = document.querySelectorAll('.cv-entry');
                    cvEntries.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition');
                        }, index * 150);
                    });
                    
                    // Fade in images in image-grid (slower for individual pages)
                    const gridImages = document.querySelectorAll('.image-grid .grid-image');
                    gridImages.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition-image');
                        }, index * 200);
                    });
                    
                    // Fade in cv-flyer images (keep at 100ms for overview)
                    const flyerImages = document.querySelectorAll('.cv-flyer');
                    flyerImages.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('fade-in-exhibition-image');
                        }, index * 100);
                    });
                }, 200);
                this.animatedPages.add(fileId);
            } else {
                // Revisit: add classes immediately without animation
                document.querySelectorAll('.exhibition-text').forEach(element => {
                    element.classList.add('fade-in-exhibition');
                });
                document.querySelectorAll('.cv-entry').forEach(element => {
                    element.classList.add('fade-in-exhibition');
                });
                document.querySelectorAll('.image-grid .grid-image').forEach(element => {
                    element.classList.add('fade-in-exhibition-image');
                });
                document.querySelectorAll('.cv-flyer').forEach(element => {
                    element.classList.add('fade-in-exhibition-image');
                });
            }
        }
        
        // Show mobile scroll indicator on about page only
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
            // Hide indicator on other pages
            const indicator = document.getElementById('mobile-scroll-indicator');
            if (indicator) indicator.style.display = 'none';
        }
        
        // Initialize video thumbnails for experience.md (desktop only)
        if (fileId === 'process-experience' && typeof initVideoThumbnails === 'function') {
            setTimeout(initVideoThumbnails, 300);
        }
        
        // Setup clickable exhibition titles
        this.setupExhibitionLinks();
        
        // Reset scroll to top
        this.resetScroll();
    }
    
    resetScroll() {
        // Reset scroll for desktop content area
        const contentBody = document.querySelector('.content-body');
        if (contentBody) {
            contentBody.scrollTop = 0;
        }
        
        // Reset scroll for mobile content area
        const mobileContent = document.getElementById('mobile-content');
        if (mobileContent) {
            mobileContent.scrollTop = 0;
        }
    }
    
    setupExhibitionLinks() {
        document.querySelectorAll('.cv-title-link').forEach(title => {
            title.style.cursor = 'pointer';
            title.addEventListener('click', () => {
                const fileId = title.dataset.file;
                if (fileId) {
                    this.loadContent(fileId);
                    
                    // Update nav item active state
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    const navItem = document.querySelector(`.nav-item[data-file="${fileId}"]`);
                    if (navItem) {
                        navItem.classList.add('active');
                    }
                }
            });
        });
    }
    
    setupProfileSwitcher() {
        const profilePic = document.getElementById('profile-picture');
        const contentBody = document.querySelector('.content-body');
        
        if (!profilePic || !contentBody) return;
        
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
        
        contentBody.addEventListener('scroll', updateImage);
    }
    
    executeCommand(command) {
        const parts = command.split(' ');
        const cmd = parts[0];
        const arg = parts.slice(1).join(' ');
        
        switch(cmd) {
            case 'help':
                alert('// you\'re already navigating a living system\n' +
                      '// meaning emerges through interaction, not instruction\n\n' +
                      '~ available gestures ~\n\n' +
                      'ls — witness what exists\n' +
                      'open [file] — enter a node\n' +
                      'lang [en/kr] — shift perspective\n' +
                      'clear — (but can you ever truly clear a relational field?)\n\n' +
                      '// this interface adapts to you\n' +
                      '// you are co-creating it by being here\n' +
                      '// coherence > optimization');
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
                alert(`Command not found: ${cmd}\nType 'help' for available commands.`);
        }
    }
}

// Toggle function for collapsible exhibition sections
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

// Initialize and make globally accessible
window.portfolio = new TerminalPortfolio();
