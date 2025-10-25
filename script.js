/**
 * TERMINAL WINDOW PORTFOLIO
 * With cascading folder structure
 */

class TerminalPortfolio {
    constructor() {
        this.currentFile = 'hero';
        this.currentLang = 'en';
        this.translations = {};
        
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
                html: `
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
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line2"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line3.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line3.emphasis"></span> <span data-i18n="about.line3.text2"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line4.text1"></span> <span class="emphasis-word" data-i18n="about.line4.emphasis"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line5.text1"></span> <span class="emphasis-word" data-i18n="about.line5.emphasis"></span><span data-i18n="about.line5.text2"></span></p>
                            <p class="output-line"><span class="line-marker">·</span> <span data-i18n="about.bullet1"></span></p>
                            <p class="output-line"><span class="line-marker">·</span> <span data-i18n="about.bullet2"></span></p>
                            <p class="output-line"><span class="line-marker">·</span> <span class="emphasis-word glow" data-i18n="about.bullet3.emphasis"></span> <span data-i18n="about.bullet3.text"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line6"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line7"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line8.text1"></span> <span class="emphasis-word" data-i18n="about.line8.emphasis"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line9.text1"></span> <span class="emphasis-word pulse" data-i18n="about.line9.emphasis"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line10"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line11.text1"></span> <span class="emphasis-word" data-i18n="about.line11.emphasis"></span><span data-i18n="about.line11.text2"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line12"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line13.text1"></span> <span class="emphasis-word glow" data-i18n="about.line13.emphasis"></span> <span data-i18n="about.line13.text2"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line14.text1"></span> <span class="emphasis-word" data-i18n="about.line14.emphasis"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span class="emphasis-word" data-i18n="about.line15.emphasis1"></span>, <span class="emphasis-word" data-i18n="about.line15.emphasis2"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.line16"></span></p>
                            <p class="output-line blank"></p>
                            
                            <p class="output-line section-marker"><span class="line-marker">//</span> 02</p>
                            <p class="output-line blank"></p>
                            
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line1"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line2"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line3.text1"></span> <span class="emphasis-word pulse" data-i18n="about.section2.line3.emphasis"></span> <span data-i18n="about.section2.line3.text2"></span></p>
                            <p class="output-line blank"></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line4.text1"></span> <span class="emphasis-word glow" data-i18n="about.section2.line4.emphasis"></span> <span data-i18n="about.section2.line4.text2"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line5.text1"></span> <span class="emphasis-word" data-i18n="about.section2.line5.emphasis"></span></p>
                            <p class="output-line"><span class="line-marker">></span> <span data-i18n="about.section2.line6.text1"></span> <span class="emphasis-word" data-i18n="about.section2.line6.emphasis"></span> <span data-i18n="about.section2.line6.text2"></span></p>
                        </div>
                        
                        <div class="terminal-cursor">_</div>
                    </div>
                `
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
                                    <p class="cv-description" data-en="Real-time facial recognition integrated with speech-to-text systems. Custom Machine Learning Models trained on artist's facial vectors generate language through Behaviour-Driven Systemic Sonification, creating recursive cycles where biometric data becomes voice." data-kr="실시간 얼굴 인식과 음성-텍스트 변환 시스템을 통합한 작품. 작가의 안면 벡터로 학습된 커스텀 머신러닝 모델이 행동 기반 시스템적 사운드화(BDSS)를 통해 언어를 생성하며, 생체 데이터가 목소리로 전환되는 재귀적 순환 구조를 구현하였다.">Real-time facial recognition integrated with speech-to-text systems. Custom Machine Learning Models trained on artist's facial vectors generate language through Behaviour-Driven Systemic Sonification, creating recursive cycles where biometric data becomes voice.</p>
                                    <p class="cv-medium" data-en="Affective translation software, Short Film, LED display" data-kr="소프트웨어, 단편 영상, LED 디스플레이">Affective translation software, Short Film, LED display</p>
                                </div>
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-rotating" data-en="Rotating Weights, To Transport Time Exhibition" data-kr="회전하는 무게 《시간을 나르는 일》">Rotating Weights, To Transport Time Exhibition</p>
                                    <p class="cv-location" data-en="Ho-Gae Train Station, Ulsan, South Korea" data-kr="호계폐역, 울산">Ho-Gae Train Station, Ulsan, South Korea</p>
                                    <p class="cv-description" data-en="Interactive data sonification of Ulsan's labour statistics (KOSIS). Audience interaction with electronic weights generates sound mapping labour data patterns." data-kr="울산 노동 통계 데이터(KOSIS)를 사운드로 변환한 인터랙티브 작품. 관객이 전자 저울과 상호작용하며 노동 데이터 패턴을 음향으로 생성한 작품이다.">Interactive data sonification of Ulsan's labour statistics (KOSIS). Audience interaction with electronic weights generates sound mapping labour data patterns.</p>
                                    <p class="cv-medium" data-en="LED display, headphones, Electronic Weights, LED lights, Dimensions variable" data-kr="LED 디스플레이, 헤드폰, 전자 저울, LED 조명, 가변크기">LED display, headphones, Electronic Weights, LED lights, Dimensions variable</p>
                                </div>
                                <img src="images/1.JPG" alt="Rotating Weights" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-embodied" data-en="Embodied Algorithms, Cont.Rolling Exhibition" data-kr="손끝의 알고리즘 《Cont.Rolling 기술의 미학 2025》">Embodied Algorithms, Cont.Rolling Exhibition</p>
                                    <p class="cv-location" data-en="Space298, Pohang, South Korea" data-kr="스페이스 298, 포항문화재단">Space298, Pohang, South Korea</p>
                                    <p class="cv-description" data-en="Collaborative work with master artisan translating steel rolling control technology into interactive multimedia. Installation comprises Archived Algorithms (layered data visualisation prints), Data Explorer (AR interface with sonified data), and Responsive Algorithms (Behaviour-Driven Systemic Sonification with hand gesture recognition)." data-kr="명장과의 협업을 통해 제강 압연 제어 기술을 인터랙티브 멀티미디어로 번역한 작품. 보관된 알고리즘(층위 데이터 시각화 프린트), 데이터 탐색기(소니피케이션된 데이터와 AR 인터페이스), 반응하는 알고리즘(손동작 인식 기반 행동 기반 시스템적 사운드화)으로 구성하였다.">Collaborative work with master artisan translating steel rolling control technology into interactive multimedia. Installation comprises Archived Algorithms (layered data visualisation prints), Data Explorer (AR interface with sonified data), and Responsive Algorithms (Behaviour-Driven Systemic Sonification with hand gesture recognition).</p>
                                    <p class="cv-medium" data-en="LED display, 2.1 Sound, Webcam, AR App, Data Visualisation Prints, Dimensions Variable" data-kr="LED 디스플레이, 2.1 사운드, 웹캠, AR 앱, 데이터 시각화 프린트, 가변크기">LED display, 2.1 Sound, Webcam, AR App, Data Visualisation Prints, Dimensions Variable</p>
                                </div>
                                <img src="images/2.jpg" alt="Embodied Algorithms" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2025</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-void" data-en="Void && Form, Artificial Territories Exhibition" data-kr="Void && Form 《Artificial Territories》">Void && Form, Artificial Territories Exhibition</p>
                                    <p class="cv-location" data-en="Das LOT, Vienna (Team Mangshinsal)" data-kr="Das Lot, 비엔나, 오스트리아 (팀 망신살)">Das LOT, Vienna (Team Mangshinsal)</p>
                                    <p class="cv-description" data-en="Interactive installation using Face-API.js neural networks to capture emotions and transform them into audiovisual landscapes. Repurposes facial recognition as contemplation, creating digital mandala from decomposing and recomposing emotional states in binary data." data-kr="Face-API.js 신경망을 활용해 감정을 포착하고 시청각 풍경으로 변환하는 인터랙티브 설치작. 얼굴 인식 기술을 성찰의 도구로 재해석하며, 이진 데이터 속에서 감정 상태를 분해하고 재구성하여 디지털 만다라를 생성한다.">Interactive installation using Face-API.js neural networks to capture emotions and transform them into audiovisual landscapes. Repurposes facial recognition as contemplation, creating digital mandala from decomposing and recomposing emotional states in binary data.</p>
                                    <p class="cv-medium" data-en="Projector, Stereo Sound, Webcam, Dimensions Variable" data-kr="프로젝터, 스테레오 사운드, 웹캠, 가변크기">Projector, Stereo Sound, Webcam, Dimensions Variable</p>
                                </div>
                                <img src="images/3.PNG" alt="Void && Form" class="cv-flyer" onclick="openLightbox(this.src)">
                            </div>
                            
                            <div class="cv-entry">
                                <div class="cv-text">
                                    <p class="cv-year">2024</p>
                                    <p class="cv-title cv-title-link" data-file="exhibition-metal" data-en="Metal Rave, The Six Isles Exhibition" data-kr="메탈 레이브 《제6의 섬_풀린역사 암호화된 미래》">Metal Rave, The Six Isles Exhibition</p>
                                    <p class="cv-location" data-en="Dongbin 1969, Pohang" data-kr="동빈 1969, 포항문화재단">Dongbin 1969, Pohang</p>
                                    <p class="cv-description" data-en="Installation translating Hyeongsan River Basin heavy metal contamination data into navigable sonic cartographies. Joystick-controlled navigation through projected digital maps with industrial soundscapes exposing toxic flows." data-kr="형산강 유역 중금속 오염 데이터를 항해 가능한 음향 지도로 변환한 설치작. 조이스틱으로 투사된 디지털 지도를 탐색하며 독성 흐름을 드러내는 산업적 사운드스케이프 경험하게 한다.">Installation translating Hyeongsan River Basin heavy metal contamination data into navigable sonic cartographies. Joystick-controlled navigation through projected digital maps with industrial soundscapes exposing toxic flows.</p>
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
                html: `
                    <h1 data-en="[&quot; &quot;] // Resonance Loop" data-kr="[&quot; &quot;] // 공진회로">[" "] // Resonance Loop</h1>
                    <p class="cv-year">2025</p>
                    <p class="cv-location" data-en="Sound Diaries: Memory Space Exhibition<br>Café Comma/Gallery ÀMiDi, Seoul, South Korea" data-kr="《사운드 다이어리: 기억의 공간》<br>카페 꼼마 x 갤러리 아미디, 서울">Sound Diaries: Memory Space Exhibition<br>Café Comma/Gallery ÀMiDi, Seoul, South Korea</p>
                    
                    <p class="exhibition-text" data-en="Resonance Loop positions the artist before a camera, speechless, while AI-generated inner monologue speaks on their behalf. Facial expression data extracted through computer vision transforms into synthetic narrative, creating visible distance between lived interiority and algorithmic interpretation. The work functions as reality forensics, exposing the infrastructural violence of reduction: the moment a living, breathing subject becomes datafied facial landmarks, then reanimated as computational speech." data-kr="공진회로는 실시간 얼굴 표정 분석 시스템을 통해 작가의 무언의 존재를 AI 생성 내면 서사로 변환한다. 영상에서 작가는 카메라 앞에 말없이 서 있고, 시스템이 실시간으로 표정을 분석한다. 이 분석은 작가 자신의 목소리로 내면의 생각처럼 돌아오며, 작가는 그 목소리를 들으며 반응한다.">Resonance Loop positions the artist before a camera, speechless, while AI-generated inner monologue speaks on their behalf. Facial expression data extracted through computer vision transforms into synthetic narrative, creating visible distance between lived interiority and algorithmic interpretation. The work functions as reality forensics, exposing the infrastructural violence of reduction: the moment a living, breathing subject becomes datafied facial landmarks, then reanimated as computational speech.</p>
                    
                    <p class="exhibition-text" data-en="The work doesn't claim to reveal truth but makes this tension itself perceptible. Digital systems freeze fluid identity into fixed, extractable coordinates. Viewers become implicated participants in the surveillance culture being critiqued. The act of watching constitutes active participation in systems that already speak on our behalf, that already extract expression and regenerate it as data-driven narrative." data-kr="작업은 살아있는 주체가 데이터화된 얼굴 랜드마크로 환원되고, 다시 합성된 목소리로 재생성되는 과정 자체를 실연한다. 컴퓨터 비전을 통해 추출된 표정 데이터가 합성 서사로 변환되면서, 살아있는 내면성과 알고리즘 해석 사이의 간극이 드러난다.">The work doesn't claim to reveal truth but makes this tension itself perceptible. Digital systems freeze fluid identity into fixed, extractable coordinates. Viewers become implicated participants in the surveillance culture being critiqued. The act of watching constitutes active participation in systems that already speak on our behalf, that already extract expression and regenerate it as data-driven narrative.</p>
                    
                    <p class="exhibition-text" data-en="The installation creates conditions where audiences confront their role in legitimizing these translation processes. Not through didactic explanation but through direct encounter with the mechanism itself. The work holds contradiction without resolution: using algorithmic processes to critique algorithmic processes, remaining embedded in the systems it interrogates. This isn't inconsistency but honest acknowledgment that critique from outside is impossible when perception itself operates through computational mediation." data-kr="직접 구축한 시스템으로 머신러닝의 추출성과 범주화 과정을 작동시키며, 그 복잡성과 긴장, 모순을 그대로 보여준다. 관객은 영상을 관찰하는 행위를 통해 감시 시스템에 동참하게 되는 불편한 진실 안에 놓인다.">The installation creates conditions where audiences confront their role in legitimizing these translation processes. Not through didactic explanation but through direct encounter with the mechanism itself. The work holds contradiction without resolution: using algorithmic processes to critique algorithmic processes, remaining embedded in the systems it interrogates. This isn't inconsistency but honest acknowledgment that critique from outside is impossible when perception itself operates through computational mediation.</p>
                    
                    <div class="image-grid">
                        <img src="images/resonance_loop/Sequence 12.00_02_29_12.Still003.jpg" alt="Resonance Loop" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/resonance_loop/Sequence 12.00_02_54_07.Still002.jpg" alt="Resonance Loop" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/resonance_loop/Sequence 12.00_07_26_13.Still001.jpg" alt="Resonance Loop" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">Affective translation software, Short Film, LED display</p>
                `
            },
            
            'exhibition-rotating': {
                breadcrumb: 'exhibitions/rotating-weights.md',
                html: `
                    <h1 data-en="Rotating Weights" data-kr="회전하는 무게">Rotating Weights</h1>
                    <p class="cv-year">2025</p>
                    <p class="cv-location" data-en="To Transport Time Exhibition<br>Ho-Gae Train Station, Ulsan, South Korea" data-kr="《시간을 나르는 일》<br>호계폐역, 울산">To Transport Time Exhibition<br>Ho-Gae Train Station, Ulsan, South Korea</p>
                    
                    <p class="exhibition-text" data-en="Rotating Weights transforms statistical labour data into an interactive sound installation responding to physical touch. Two wall-mounted electronic scales positioned at different heights (one at child's eye level, one at adult height) generate distinct vocal harmonies when pressed. An LED strip illuminates in real-time, visually echoing the shifting weight applied to each scale." data-kr="회전하는 무게는 노동 통계 데이터를 터치에 반응하는 사운드 설치로 변환한다. 어린이와 어른의 눈높이에 맞춰 벽에 설치된 두 개의 전자저울은 눌렀을 때 각기 다른 보컬 하모니를 생성한다. LED 조명이 실시간으로 무게의 변화에 반응한다.">Rotating Weights transforms statistical labour data into an interactive sound installation responding to physical touch. Two wall-mounted electronic scales positioned at different heights (one at child's eye level, one at adult height) generate distinct vocal harmonies when pressed. An LED strip illuminates in real-time, visually echoing the shifting weight applied to each scale.</p>
                    
                    <p class="exhibition-text" data-en="The work is installed in the break room of decommissioned Hogae Station. When visitors engage with both scales simultaneously, the individual harmonies intertwine, producing a richer soundscape that emerges only through collaborative participation. The act of applying weight becomes metaphor for shared labour, familial bonds, and the invisible forces structuring daily life across generations." data-kr="작품은 폐역이 된 호계역의 탕비실에 설치되었다. 한 저울만 누르면 한 소리가 나지만, 두 저울을 동시에 누르면 하모니가 얽히며 더 풍부한 소리가 만들어진다. 무게를 가하는 행위는 세대를 넘어 공유되는 노동과 돌봄에 대한 은유가 된다.">The work is installed in the break room of decommissioned Hogae Station. When visitors engage with both scales simultaneously, the individual harmonies intertwine, producing a richer soundscape that emerges only through collaborative participation. The act of applying weight becomes metaphor for shared labour, familial bonds, and the invisible forces structuring daily life across generations.</p>
                    
                    <p class="exhibition-text" data-en="Statistical labour data abstracted into sonic form provides the underlying material. The installation transforms pressure into sound and light, making tangible the cycles of work and care that turn across generations. In a space once central to industrial logistics, the work reactivates pause through collective resonance, requiring intergenerational co-presence to complete itself." data-kr="노동 통계 데이터를 음향으로 추상화한 것이 기반이다. 설치는 압력을 소리와 빛으로 변환하며, 세대를 거쳐 반복되는 노동과 돌봄의 순환을 감각할 수 있게 만든다. 한때 물류의 중심이었던 공간에서, 작품은 두 세대가 함께 참여할 때 완성된다.">Statistical labour data abstracted into sonic form provides the underlying material. The installation transforms pressure into sound and light, making tangible the cycles of work and care that turn across generations. In a space once central to industrial logistics, the work reactivates pause through collective resonance, requiring intergenerational co-presence to complete itself.</p>
                    
                    <div class="image-grid">
                        <img src="images/rotating/image1.jpg" alt="Rotating Weights" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/rotating/image2.JPEG" alt="Rotating Weights" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">LED display, headphones, Electronic Weights, LED lights</p>
                `
            },
            
            'exhibition-embodied': {
                breadcrumb: 'exhibitions/embodied-algorithms.md',
                html: `
                    <h1 data-en="Embodied Algorithms" data-kr="손끝의 알고리즘">Embodied Algorithms</h1>
                    <p class="cv-year">2025</p>
                    <p class="cv-location" data-en="Cont.Rolling Exhibition<br>Space298, Pohang, South Korea" data-kr="《Cont.Rolling 기술의 미학 2025》<br>스페이스 298, 포항문화재단">Cont.Rolling Exhibition<br>Space298, Pohang, South Korea</p>
                    
                    <p class="exhibition-text" data-en="Embodied Algorithms transforms industrial hot rolling data into a tactile, sensory experience that mirrors how Master Craftsman Kwon Young-kook embodies technical processes through bodily intuition. The work explores how human sensing operates like distributed computation, where decades of experience enable the craftsman to perceive micro-variations in temperature, vibration, and rhythm as immediate, felt knowledge rather than abstract measurement." data-kr="손끝의 알고리즘은 권영국 명장의 정밀 제어 기술을 AR, 사운드, 데이터 시각화를 결합한 인터랙티브 멀티미디어 시스템으로 재구성한다. 작품은 알고리즘 프로세스가 물리적 상호작용을 통해 어떻게 구체화되는지 탐구하며, 산업 데이터를 개별 행위가 복잡한 시스템 전체에 파급되는 상호 연결된 생태계로 변환한다.">Embodied Algorithms transforms industrial hot rolling data into a tactile, sensory experience that mirrors how Master Craftsman Kwon Young-kook embodies technical processes through bodily intuition. The work explores how human sensing operates like distributed computation, where decades of experience enable the craftsman to perceive micro-variations in temperature, vibration, and rhythm as immediate, felt knowledge rather than abstract measurement.</p>
                    
                    <p class="exhibition-text" data-en="A unified custom data simulation engine generates real-time flows across four interconnected installations. This architecture investigates whether a single underlying system can simultaneously drive multiple autonomous works, with each installation functioning as a node in a living network where actions in one space ripple through the entire ecosystem." data-kr="작품의 핵심에는 네 개의 개별 설치를 연결하는 실시간 데이터 흐름을 생성하는 통합 맞춤 데이터 시뮬레이션 엔진이 있다. 이 접근은 단일 기저 시스템이 여러 자율적 작품을 동시에 구동하고 협상할 수 있는지 탐구하며, 각 설치를 더 큰 시스템적 전체 내의 상호 연결된 노드로 다룬다. 작품은 용광로에서 흘러나온 쇳물이 슬래브를 거쳐 거대한 코일이 되기까지의 제강 과정을 '노이즈에서 음악으로 나아가는 흐름'에 비유하며, 의미가 미리 정해진 결과물이 아닌 지속적인 협상을 통해 어떻게 발현되는지 드러낸다.">A unified custom data simulation engine generates real-time flows across four interconnected installations. This architecture investigates whether a single underlying system can simultaneously drive multiple autonomous works, with each installation functioning as a node in a living network where actions in one space ripple through the entire ecosystem.</p>
                    
                    <p class="exhibition-text" data-en="Archived Algorithms presents five layered data visualisations that audiences physically navigate through touch, each layer revealing temporal patterns and directional flows embedded in the rolling process. A custom AR app unlocks sonic and structural dimensions hidden within each work, creating an acoustic journey from noise to harmonic order that parallels steel's transformation from molten metal to refined coil." data-kr="쌓인 알고리즘은 열간압연 공정 데이터에 내재된 알고리즘 구조를 레이어드 형태로 시각화한 다섯 개의 물리적 작품으로 구성된다. 각 레이어는 데이터를 수치로 환원하지 않고, 알고리즘의 시간성, 방향성, 균형 지향성 등을 시각적으로 드러내며 관객이 촉각적으로 탐색할 수 있게 한다. 맞춤 제작한 AR 앱을 통해 관객은 각 작품의 마커를 스캔하여 상세 그래프와 사운드 해석을 경험할 수 있다. 첫 번째 작품부터 마지막 작품까지 점진적으로 노이즈에서 음악적 구조로 변모하는 청각적 여정은 철강 생산의 정제 과정을 반영한다.">Archived Algorithms presents five layered data visualisations that audiences physically navigate through touch, each layer revealing temporal patterns and directional flows embedded in the rolling process. A custom AR app unlocks sonic and structural dimensions hidden within each work, creating an acoustic journey from noise to harmonic order that parallels steel's transformation from molten metal to refined coil.</p>
                    
                    <p class="exhibition-text" data-en="Responsive Algorithms uses hand tracking and BDSS (Behaviour-Driven Systemic Sonification) to render process variables as dynamic sound fields. Audiences negotiate directly with the data engine's internal logic, their gestures translating into harmonic intervals that emerge from ongoing exchanges between human input, environmental conditions, and systemic responses. The work reveals how meaning arises not through imposed order but through embodied participation in relational processes." data-kr="흐르는 알고리즘은 손동작 추적, LED 디스플레이, 그리고 실시간 처리를 위한 BDSS(행동 기반 시스템 소니피케이션)를 사용한다. 관객의 제스처는 기저 데이터 엔진과 직접 상호작용하며, 압연력, 속도, 온도, 시간, 생산량, 설비 환경이 하모닉 인터벌로 변환되는 동적 관계 장으로 모델링된다. 이러한 상호 연결된 설치를 통해 관객은 일방적 제어가 아닌 인간 입력, 환경 데이터, 시스템 반응 간의 지속적인 협상을 통해 균형이 발현되는 창발적 과정에 참여하게 된다.">Responsive Algorithms uses hand tracking and BDSS (Behaviour-Driven Systemic Sonification) to render process variables as dynamic sound fields. Audiences negotiate directly with the data engine's internal logic, their gestures translating into harmonic intervals that emerge from ongoing exchanges between human input, environmental conditions, and systemic responses. The work reveals how meaning arises not through imposed order but through embodied participation in relational processes.</p>
                    
                    <div class="image-grid">
                        <img src="images/embodied/algo1.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/algo2.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/algo3.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/algo4.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/app1.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/son1.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/son2.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/son3.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/embodied/son4.jpg" alt="Embodied Algorithms" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">LED display, 2.1 Sound, Webcam, AR App, Data Visualisation Prints</p>
                `
            },
            
            'exhibition-void': {
                breadcrumb: 'exhibitions/void-form.md',
                html: `
                    <h1>Void && Form</h1>
                    <p class="cv-year">2025</p>
                    <p class="cv-location" data-en="Artificial Territories Exhibition<br>Das LOT, Vienna<br>Team 망신살 (Mangshinsal)" data-kr="《Artificial Territories》<br>Das Lot, 비엔나, 오스트리아<br>팀 망신살">Artificial Territories Exhibition<br>Das LOT, Vienna<br>Team 망신살 (Mangshinsal)</p>
                    
                    <p class="exhibition-text" data-en="Void && Form places participants before a screen displaying their digital twin, a graphically rendered version of their face that processes real-time expressions through FaceAPI. The system categorizes detected emotions into standard classifications (happy, sad, angry, surprised, etc.), triggering pre-composed music strictly corresponding to each emotional state." data-kr="Void && Form은 참여자를 스크린 앞에 세우며, FaceAPI를 통해 실시간 표정을 처리하는 그래픽으로 렌더링된 자신의 디지털 트윈을 보여준다. 시스템은 감지된 감정을 표준 분류(행복, 슬픔, 분노, 놀람 등)로 범주화하고, 각 감정 상태에 엄격하게 대응하는 미리 작곡된 음악을 트리거한다.">Void && Form places participants before a screen displaying their digital twin, a graphically rendered version of their face that processes real-time expressions through FaceAPI. The system categorizes detected emotions into standard classifications (happy, sad, angry, surprised, etc.), triggering pre-composed music strictly corresponding to each emotional state.</p>
                    
                    <p class="exhibition-text" data-en="The work interrogates how human emotion gets reduced to discrete categories and pre-determined responses. Participants witness the distance between their felt emotional experience and the algorithmic interpretation appearing on screen. Their face becomes artwork, but through a translation process that simultaneously captures and misses something essential. The digital twin mirrors physical movements while remaining fundamentally separate from the lived experience generating those movements." data-kr="작품은 인간 감정이 어떻게 개별 범주와 미리 결정된 반응으로 환원되는지 질문한다. 참여자는 자신이 느끼는 감정 경험과 스크린에 나타나는 알고리즘 해석 사이의 거리를 목격한다. 그들의 얼굴은 작품이 되지만, 동시에 본질적인 무언가를 포착하면서도 놓치는 번역 과정을 통해서다. 디지털 트윈은 물리적 움직임을 반영하지만, 그 움직임을 생성하는 살아있는 경험과는 근본적으로 분리되어 있다.">The work interrogates how human emotion gets reduced to discrete categories and pre-determined responses. Participants witness the distance between their felt emotional experience and the algorithmic interpretation appearing on screen. Their face becomes artwork, but through a translation process that simultaneously captures and misses something essential. The digital twin mirrors physical movements while remaining fundamentally separate from the lived experience generating those movements.</p>
                    
                    <p class="exhibition-text" data-en="Behind the digital twin, a mandala circles endlessly as a backdrop, its perpetual rotation reflecting the continuous processing of emotional data. While the system attempts to freeze felt experience into fixed categorical labels, the mandala's unceasing movement emphasizes the instability of both the emotions themselves and their algorithmic interpretation. Drawing on Buddhist concepts of impermanence, this endless circulation suggests that meaning emerges not from static classification but from ongoing flux." data-kr="디지털 트윈 뒤에서, 만다라가 배경으로 끝없이 회전하며 감정 데이터의 지속적인 처리를 반영한다. 시스템이 느껴진 경험을 고정된 범주 레이블로 동결시키려 하는 동안, 만다라의 끊임없는 움직임은 감정 자체와 그 알고리즘 해석 모두의 불안정성을 강조한다. 불교의 무상 개념을 바탕으로, 이 끝없는 순환은 의미가 정적 분류가 아닌 지속적인 변화에서 발현됨을 시사한다.">Behind the digital twin, a mandala circles endlessly as a backdrop, its perpetual rotation reflecting the continuous processing of emotional data. While the system attempts to freeze felt experience into fixed categorical labels, the mandala's unceasing movement emphasizes the instability of both the emotions themselves and their algorithmic interpretation. Drawing on Buddhist concepts of impermanence, this endless circulation suggests that meaning emerges not from static classification but from ongoing flux.</p>
                    
                    <div class="image-grid">
                        <img src="images/void/lot1.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/lot2.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/void1.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/void2.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/void3.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/void4.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/void/void5.JPG" alt="Void && Form" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">Projector, Stereo Sound, Webcam</p>
                `
            },
            
            'exhibition-metal': {
                breadcrumb: 'exhibitions/metal-rave.md',
                html: `
                    <h1 data-en="Metal Rave" data-kr="메탈 레이브">Metal Rave</h1>
                    <p class="cv-year">2024</p>
                    <p class="cv-location" data-en="The Six Isles Exhibition<br>Dongbin 1969, Pohang" data-kr="《제6의 섬_풀린역사 암호화된 미래》<br>동빈 1969, 포항문화재단">The Six Isles Exhibition<br>Dongbin 1969, Pohang</p>
                    
                    <p class="exhibition-text" data-en="Metal Rave transforms environmental contamination data from the Hyeongsan River basin into an immersive sonic environment, making invisible pollution perceptually tangible through sound. Built from actual research documenting heavy metal concentrations across the watershed, the installation maps distinct metal properties and contamination levels to differentiated sonic textures distributed across a 4.1 surround system." data-kr="메탈 레이브는 형산강 유역의 환경 오염 데이터를 몰입형 사운드 환경으로 변환하여, 보이지 않는 오염을 사운드를 통해 지각적으로 구체화한다. 유역 전체의 중금속 농도를 기록한 실제 연구를 기반으로, 설치는 고유한 금속 특성과 오염 수준을 4.1 서라운드 시스템에 분산된 차별화된 사운드 텍스처로 매핑한다.">Metal Rave transforms environmental contamination data from the Hyeongsan River basin into an immersive sonic environment, making invisible pollution perceptually tangible through sound. Built from actual research documenting heavy metal concentrations across the watershed, the installation maps distinct metal properties and contamination levels to differentiated sonic textures distributed across a 4.1 surround system.</p>
                    
                    <p class="exhibition-text" data-en="An interactive map interface with joysticks enables audiences to navigate the river basin spatially, aurally encountering contamination hotspots as they move through the geography. Each location generates its own acoustic signature derived from the specific metals present and their measured concentrations, translating scientific data into felt experience. The sound design treats contamination not as abstract statistics but as material presence, where cadmium, lead, and mercury each possess distinct sonic qualities that accumulate and interfere as concentrations rise." data-kr="조이스틱이 있는 인터랙티브 맵 인터페이스를 통해 관객은 강 유역을 공간적으로 탐색하며, 지리를 이동하면서 오염 핫스팟을 청각적으로 마주한다. 각 위치는 존재하는 특정 금속과 측정된 농도에서 파생된 고유한 음향 시그니처를 생성하며, 과학 데이터를 체감되는 경험으로 번역한다. 사운드 디자인은 오염을 추상적 통계가 아닌 물질적 존재로 다루며, 카드뮴, 납, 수은이 각각 고유한 사운드 특성을 지니고 농도가 상승함에 따라 축적되고 간섭한다.">An interactive map interface with joysticks enables audiences to navigate the river basin spatially, aurally encountering contamination hotspots as they move through the geography. Each location generates its own acoustic signature derived from the specific metals present and their measured concentrations, translating scientific data into felt experience. The sound design treats contamination not as abstract statistics but as material presence, where cadmium, lead, and mercury each possess distinct sonic qualities that accumulate and interfere as concentrations rise.</p>
                    
                    <p class="exhibition-text" data-en="A stationary conveyor belt positioned before an LED display serves as symbolic gesture toward industrial processes and their discharge into the watershed. The belt's stillness contrasts with the continuous sonic activity, suggesting arrested production whose consequences persist in the environment long after operations cease." data-kr="LED 디스플레이 앞에 정지된 컨베이어 벨트는 산업 공정과 유역으로의 배출을 향한 상징적 제스처로 기능한다. 벨트의 정지 상태는 지속적인 사운드 활동과 대조를 이루며, 작동이 중단된 후에도 환경에 오래 지속되는 결과를 남기는 정지된 생산을 시사한다.">A stationary conveyor belt positioned before an LED display serves as symbolic gesture toward industrial processes and their discharge into the watershed. The belt's stillness contrasts with the continuous sonic activity, suggesting arrested production whose consequences persist in the environment long after operations cease.</p>
                    
                    <p class="exhibition-text" data-en="The work proposes that environmental data becomes meaningful not through numerical representation but through embodied encounter. By sonifying contamination, Metal Rave creates conditions for audiences to sense pollution's distribution and intensity viscerally, suggesting that understanding ecological damage requires more than information, it demands sensory engagement with systems we typically experience only through mediated reports." data-kr="작품은 환경 데이터가 수치적 표현이 아닌 체화된 조우를 통해 의미 있게 된다고 제안한다. 오염을 소니피케이션함으로써, 메탈 레이브는 관객이 오염의 분포와 강도를 내장적으로 감지할 수 있는 조건을 만들며, 생태적 피해를 이해하는 것은 정보 이상을 요구하고, 일반적으로 매개된 보고를 통해서만 경험하는 시스템과의 감각적 참여를 요구함을 시사한다.">The work proposes that environmental data becomes meaningful not through numerical representation but through embodied encounter. By sonifying contamination, Metal Rave creates conditions for audiences to sense pollution's distribution and intensity viscerally, suggesting that understanding ecological damage requires more than information, it demands sensory engagement with systems we typically experience only through mediated reports.</p>
                    
                    <div class="image-grid">
                        <img src="images/metal_rave/metalrave01.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/metal_rave/metalrave02.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/metal_rave/metalrave03.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/metal_rave/metalrave04.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/metal_rave/metalrave05.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/metal_rave/metalrave06.jpg" alt="Metal Rave" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">Conveyor belt, Joystick, 4.1 Sound, LED display</p>
                `
            },
            
            'exhibition-rhythm': {
                breadcrumb: 'exhibitions/4x4-mediengruppe.md',
                html: `
                    <h1>&lt;4x4&gt; !𝑴𝒆𝒅𝒊𝒆𝒏𝒈𝒓𝒖𝒑𝒑𝒆 𝑩𝒊𝒕𝒏𝒊𝒌</h1>
                    <p class="cv-year">2024</p>
                    <p class="cv-location" data-en="Live Performance<br>Seoul, South Korea" data-kr="《인투 더 리듬: 스코어로부터 접촉지대로》<br>아르코 미술관, 서울 (기획: 아르코 x 온큐레이팅, 광주비엔날레 협력)">Live Performance<br>Seoul, South Korea</p>
                    
                    <h2 class="exhibition-subtitle" data-en="The Shot, <4x4> Performance" data-kr="The Shot, <4x4> 퍼포먼스">The Shot, <4x4> Performance</h2>
                    
                    <p class="exhibition-text" data-en="Composed of Hanna Kim, Hee-Eun Kim, Gyu-Chul Moon, and Young-Hae Jang, The Shot explores sounds that infiltrate everyday spaces and push through their boundaries. Through the process of converting live video of emerging and dismantling sculptures into sound, the work creates layers of sound that subtly permeate the space, unfolding as a single musical structure formed from the stories that arise within. The contrasting collision and harmony of flute and electronic sound, and the entanglement of consonance and dissonance over time, explore the boundaries of limited space and sound through their interaction." data-kr="김한나, 김희은, 문규철, 장영해로 구성된 The Shot은 일상적 공간에 침투해 그 틀을 비집고 들어가는 사운드를 탐구한다. 생성되고 해체되는 조형물과 설치된 조형물의 실시간 영상을 사운드로 변환하는 과정을 통해, 공간에 스며드는 소리들의 교묘히 중첩되고, 그 속에서의 발생하는 이야기가 하나의 음악적 구조로 펼쳐진다. 플루트와 전자음의 이질적인 충돌과 조화, 화음과 불협화음은 시간에 따라 얽히며, 공간과 소리의 상호작용을 통해 제한된 공간과 소리의 경계를 탐색한다.">Composed of Hanna Kim, Hee-Eun Kim, Gyu-Chul Moon, and Young-Hae Jang, The Shot explores sounds that infiltrate everyday spaces and push through their boundaries. Through the process of converting live video of emerging and dismantling sculptures into sound, the work creates layers of sound that subtly permeate the space, unfolding as a single musical structure formed from the stories that arise within. The contrasting collision and harmony of flute and electronic sound, and the entanglement of consonance and dissonance over time, explore the boundaries of limited space and sound through their interaction.</p>
                    
                    <div class="image-grid">
                        <img src="images/rhythm/rhy1.jpg" alt="4x4 Performance" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/rhythm/rhy2.jpg" alt="4x4 Performance" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/rhythm/rhy3.jpg" alt="4x4 Performance" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">Live Performance, Improvisation, Collaborative</p>
                `
            },
            
            'exhibition-solar': {
                breadcrumb: 'exhibitions/soil-contamination.md',
                html: `
                    <h1 data-en="Sonification of Soil Contamination Data" data-kr="토양 오염 데이터 소니피케이션">Sonification of Soil Contamination Data</h1>
                    <p class="cv-year">2024</p>
                    <p class="cv-location" data-en="《지형지물 地形地物 – Embodying Our Land》" data-kr="《지형지물 地形地物 – Embodying Our Land》 솔라해피아워">《지형지물 地形地物 – Embodying Our Land》</p>
                    
                    <p class="exhibition-text" data-en="Sonification of Soil Contamination Data renders environmental degradation as acoustic landscape, drawing from Ministry of Environment datasets documenting soil contamination across South Korea. The work layers field recordings of earth being dug with data-driven sonification and traditional Korean instruments, creating a sonic terrain where scientific measurement, physical gesture, and cultural mourning converge." data-kr="토양 오염 데이터 소니피케이션은 환경 파괴를 음향 풍경으로 렌더링하며, 한국 전역의 토양 오염을 기록한 환경부 데이터셋을 활용한다. 작품은 때을 파는 필드 레코딩을 데이터 기반 소니피케이션 및 한국 전통 악기와 레이어링하여, 과학적 측정, 물리적 제스처, 문화적 애도가 수렴하는 사운드 지형을 만든다.">Sonification of Soil Contamination Data renders environmental degradation as acoustic landscape, drawing from Ministry of Environment datasets documenting soil contamination across South Korea. The work layers field recordings of earth being dug with data-driven sonification and traditional Korean instruments, creating a sonic terrain where scientific measurement, physical gesture, and cultural mourning converge.</p>
                    
                    <p class="exhibition-text" data-en="The field recordings capture the material act of penetrating soil, the scrape and shift of earth disturbed. These sounds anchor the work in bodily labor and direct contact with contaminated ground, establishing a textural foundation that resists abstraction. Over this base, contamination data manifests as synthesized frequencies, with different pollutant types and concentration levels mapped to distinct timbral characteristics that accumulate and interfere as toxicity rises." data-kr="필드 레코딩은 흙을 관통하는 물질적 행위, 방해받은 때의 긁힙과 이동을 포착한다. 이 사운드는 작품을 신체 노동과 오염된 때과의 직접적 접촉에 정박시키며, 추상화를 거부하는 질감적 기반을 확립한다. 이 베이스 위에, 오염 데이터는 합성된 주파수로 나타나며, 다른 오염 물질 유형과 농도 수준이 독성이 상승함에 따라 축적되고 간섭하는 고유한 음색 특성으로 매핑된다.">The field recordings capture the material act of penetrating soil, the scrape and shift of earth disturbed. These sounds anchor the work in bodily labor and direct contact with contaminated ground, establishing a textural foundation that resists abstraction. Over this base, contamination data manifests as synthesized frequencies, with different pollutant types and concentration levels mapped to distinct timbral characteristics that accumulate and interfere as toxicity rises.</p>
                    
                    <p class="exhibition-text" data-en="Traditional Korean instruments enter as emotional counterpoint, their tones suggesting the earth's response to industrial violation. These instrumental passages function not as decoration but as articulation of grief, embodying what environmental data cannot convey through measurement alone. The instruments carry cultural memory of relationships to land, making audible the rupture between inherited practices of care and contemporary patterns of extraction and disposal." data-kr="한국 전통 악기는 정서적 대위법으로 진입하며, 그 음색은 산업적 침해에 대한 때의 반응을 시사한다. 이러한 악기 구절은 장식이 아니라 슬픔의 표명으로 기능하며, 측정만으로는 전달할 수 없는 환경 데이터의 내용을 구현한다. 악기는 때과의 관계에 대한 문화적 기억을 담고 있으며, 돌봄의 물려받은 관행과 추출 및 폐기의 현대적 패턴 사이의 단절을 가청화한다.">Traditional Korean instruments enter as emotional counterpoint, their tones suggesting the earth's response to industrial violation. These instrumental passages function not as decoration but as articulation of grief, embodying what environmental data cannot convey through measurement alone. The instruments carry cultural memory of relationships to land, making audible the rupture between inherited practices of care and contemporary patterns of extraction and disposal.</p>
                    
                    <p class="exhibition-text" data-en="The work proposes that environmental crisis becomes legible not only through scientific documentation but through sensory and affective engagement. By combining recorded physical interaction, data translation, and instrumental expression, Sonification of Soil Contamination Data creates a listening space where pollution exists simultaneously as measurable fact, material encounter, and mourned loss." data-kr="작품은 환경 위기가 과학적 문서화뿐만 아니라 감각적이고 정동적인 참여를 통해 판독 가능해진다고 제안한다. 녹음된 물리적 상호작용, 데이터 번역, 악기 표현을 결합함으로써, 토양 오염 데이터의 소니피케이션은 오염이 동시에 측정 가능한 사실, 물질적 조우, 애도되는 상실로 존재하는 듣기 공간을 만든다.">The work proposes that environmental crisis becomes legible not only through scientific documentation but through sensory and affective engagement. By combining recorded physical interaction, data translation, and instrumental expression, Sonification of Soil Contamination Data creates a listening space where pollution exists simultaneously as measurable fact, material encounter, and mourned loss.</p>
                    
                    <div class="image-grid">
                        <img src="images/solar_happy/solar-1.jpg" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/solar_happy/solar-2.jpg" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/solar_happy/solar-3.jpg" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/solar_happy/solar-4.jpg" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/solar_happy/solar-5.jpg" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                        <img src="images/solar_happy/solar-6.JPG" alt="Soil Contamination Sonification" class="grid-image" onclick="openLightbox(this.src)">
                    </div>
                    
                    <p class="cv-medium">Field Recordings, Data Sonification, Traditional Korean Instruments</p>
                `
            },
            
            // RESEARCH FOLDER
            'research-overview': {
                breadcrumb: 'research/overview.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-en="Research Overview" data-kr="연구">Research Overview</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="Hee-Eun's research operates as independent R&D, developing systematic frameworks for technology that engages with rather than controls living systems. Treating the development process itself as equally central to final outcomes, exhibitions function as research sites where theoretical approaches and technical methods evolve through implementation and public interaction." data-kr="김희은의 연구는 독립 R&D로 작동하며, 살아있는 시스템을 제어하기보다 관여하는 기술을 위한 체계적 프레임워크를 개발한다. 최종 결과물과 동등하게 개발 과정 자체를 연구의 핵심으로 다루며, 전시는 이론적 접근과 기술적 방법이 구현과 공공 상호작용을 통해 진화하는 연구 현장으로 기능한다.">Hee-Eun's research operates as independent R&D, developing systematic frameworks for technology that engages with rather than controls living systems. Treating the development process itself as equally central to final outcomes, exhibitions function as research sites where theoretical approaches and technical methods evolve through implementation and public interaction.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="Practice centers on two primary methodologies: Relational Cognitive Systems (RCS), which models cognition as emerging from distributed negotiation rather than isolated processing, and Behaviour-Driven Systemic Sonification (BDSS), which renders system dynamics as sonic expressions of ongoing adaptive processes. BDSS has been implemented across various installation works that translate ecological and industrial process data into sound. Grounded in systems theory and dynamic systems approaches, these frameworks challenge computational paradigms that prioritise efficiency and predetermined outcomes, instead proposing architectures where meaning arises through relational exchange and negotiated equilibrium." data-kr="실천은 두 가지 주요 방법론을 중심으로 한다: 인지를 고립된 처리가 아닌 분산된 협상에서 발현되는 것으로 모델링하는 관계적 인지 시스템(RCS)과, 시스템 역학을 진행 중인 적응 과정의 사운드 표현으로 렌더링하는 행동 기반 시스템 소니피케이션(BDSS)이 있다. BDSS는 생태 데이터와 산업 공정 데이터를 사운드로 변환하는 다양한 설치 작업에서 구현되었다. 시스템 이론과 동적 시스템 접근에 기반한 이 프레임워크들은 효율성과 미리 정해진 결과를 우선시하는 계산 패러다임에 도전하며, 대신 의미가 관계적 교환과 협상된 균형을 통해 발생하는 아키텍처를 제안한다.">Practice centers on two primary methodologies: Relational Cognitive Systems (RCS), which models cognition as emerging from distributed negotiation rather than isolated processing, and Behaviour-Driven Systemic Sonification (BDSS), which renders system dynamics as sonic expressions of ongoing adaptive processes. BDSS has been implemented across various installation works that translate ecological and industrial process data into sound. Grounded in systems theory and dynamic systems approaches, these frameworks challenge computational paradigms that prioritise efficiency and predetermined outcomes, instead proposing architectures where meaning arises through relational exchange and negotiated equilibrium.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="Research unfolds across interconnected activities: developing theoretical frameworks that reconceptualise perception and cognition as relational processes, building technical systems through agent-based architectures and real-time computing, and testing these approaches through installations that serve as experimental validation. Each exhibition generates insights that feed back into theoretical refinement and technical iteration. In this model, installations function as epistemological instruments where hypotheses about distributed cognition, systemic negotiation, and affective computation become observable through embodied encounter, treating artistic production not as application of completed research but as essential component of the research process itself." data-kr="연구는 상호 연결된 활동들을 통해 전개된다: 지각과 인지를 관계적 과정으로 재개념화하는 이론적 프레임워크 개발, 에이전트 기반 아키텍처와 실시간 컴퓨팅을 통한 기술 시스템 구축, 그리고 실험적 검증으로 기능하는 설치를 통한 이러한 접근의 테스트. 각 전시는 이론적 정제와 기술적 반복으로 피드백되는 통찰을 생성한다. 이 모델에서, 설치는 분산 인지, 시스템 협상, 정동적 계산에 대한 가설이 체화된 조우를 통해 관찰 가능해지는 인식론적 도구로 기능하며, 예술적 생산을 완성된 연구의 적용이 아니라 연구 과정 자체의 필수적 부분으로 다룬다.">Research unfolds across interconnected activities: developing theoretical frameworks that reconceptualise perception and cognition as relational processes, building technical systems through agent-based architectures and real-time computing, and testing these approaches through installations that serve as experimental validation. Each exhibition generates insights that feed back into theoretical refinement and technical iteration. In this model, installations function as epistemological instruments where hypotheses about distributed cognition, systemic negotiation, and affective computation become observable through embodied encounter, treating artistic production not as application of completed research but as essential component of the research process itself.</span><span class="cursor-blink">_</span>
                        </div>
                    </div>
                `
            },
            
            'research-rcs': {
                breadcrumb: 'research/rcs.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-en="Relational Cognitive System (RCS)" data-kr="관계적 인지 시스템 (RCS)">Relational Cognitive System (RCS)</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="A framework for designing cognitive architectures that prioritise distributed emergence over centralised optimisation. RCS models cognition as negotiated processes arising from recursive symbolic interaction, affective entrainment, and coherence-seeking dynamics within relational fields rather than isolated computational units." data-kr="중앙 집중형 최적화보다 분산형 창발을 우선시하는 인지 아키텍처 설계 프레임워크. RCS는 인지를 독립된 계산 단위가 아닌 관계 속에서 재귀적 상호작용, 정서적 동기화, 일관성 추구를 통해 발생하는 협상 과정으로 모델링한다.">A framework for designing cognitive architectures that prioritise distributed emergence over centralised optimisation. RCS models cognition as negotiated processes arising from recursive symbolic interaction, affective entrainment, and coherence-seeking dynamics within relational fields rather than isolated computational units.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="Drawing on systems theory, dynamic systems approaches, and Eastern philosophy, RCS employs multi-agent architectures with recursive feedback and resonance-based evaluation. The framework positions meaning as continuously stabilised through symbolic anchoring, emotional field modulation, and improvisational adaptation, enabling affect-sensitive systems capable of co-creating interpretation with human participants." data-kr="시스템 이론, 동역학계 이론, 동양 철학을 기반으로, RCS는 재귀적 피드백과 공명 기반 평가를 활용한 멀티 에이전트 아키텍처를 사용한다. 의미는 상징적 고정점, 정서장 변조, 즉흥적 적응을 통해 지속적으로 안정화되며, 인간 참여자와 해석을 공동 생성할 수 있는 감정 인식 시스템을 가능하게 한다.">Drawing on systems theory, dynamic systems approaches, and Eastern philosophy, RCS employs multi-agent architectures with recursive feedback and resonance-based evaluation. The framework positions meaning as continuously stabilised through symbolic anchoring, emotional field modulation, and improvisational adaptation, enabling affect-sensitive systems capable of co-creating interpretation with human participants.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Neural Network Sonification</div>
                                <a href="https://youtube.com/shorts/QzUNDYefY_U" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/QzUNDYefY_U</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> CLARION Model</div>
                                <a href="https://youtube.com/shorts/gr1eG__a7Cw" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/gr1eG__a7Cw</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Temporal Pattern Recognition</div>
                                <a href="https://youtube.com/shorts/R1rgIYHnlto" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/R1rgIYHnlto</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Information Theory</div>
                                <a href="https://youtube.com/shorts/fFN04Ja855s" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/fFN04Ja855s</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Can AI Witness Instead of Solve?</div>
                                <a href="https://youtube.com/shorts/Oj1zINkZP9A" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/Oj1zINkZP9A</a>
                            </div>
                        </div>
                    </div>
                `
            },
            
            'research-bdss': {
                breadcrumb: 'research/bdss.md',
                html: `
                    <div class="process-section">
                        <div class="process-header">
                            <span class="line-marker">//</span> <span data-en="Behaviour-Driven Systemic Sonification (BDSS)" data-kr="행동 기반 시스템 소니피케이션 (BDSS)">Behaviour-Driven Systemic Sonification (BDSS)</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="A sonification methodology modelling adaptive negotiation in complex systems through sound. BDSS conceptualises processes as trajectories within dynamic attractor spaces characterised by fuzzy, overlapping boundaries rather than discrete states. Agent-based layers simulate competing pressures, generating sonic textures that embody systemic tension, adaptation, and feedback." data-kr="복잡한 시스템의 적응적 협상을 소리로 모델링하는 소니피케이션 방법론. BDSS는 과정을 명확히 구분되는 상태가 아닌, 퍼지하고 중첩된 경계를 가진 동적 attractor space 내 궤적으로 다룬다. 에이전트 기반 레이어는 경쟁하는 압력들을 시뮬레이션하여 시스템의 긴장, 적응, 피드백을 담은 음향 텍스처를 생성한다.">A sonification methodology modelling adaptive negotiation in complex systems through sound. BDSS conceptualises processes as trajectories within dynamic attractor spaces characterised by fuzzy, overlapping boundaries rather than discrete states. Agent-based layers simulate competing pressures, generating sonic textures that embody systemic tension, adaptation, and feedback.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="typewriter-container">
                            <span class="prompt">></span> <span class="typewriter-text" data-en="Sound functions as perceptual evidence of negotiation between internal and external forces, articulating how stability and change emerge through continuous relational adjustment. By treating sonification as expression of systemic behaviour rather than data translation, BDSS enables critical engagement with hidden dynamics through embodied listening." data-kr="소리는 내·외부 힘 간 협상의 지각 가능한 증거로 기능하며, 안정성과 변화가 지속적인 관계 조정을 통해 어떻게 나타나는지 드러낸다. 소니피케이션을 데이터 변환이 아닌 시스템 행동의 표현으로 접근함으로써, BDSS는 청취를 통해 보이지 않는 역학과 비판적으로 참여할 수 있게 한다.">Sound functions as perceptual evidence of negotiation between internal and external forces, articulating how stability and change emerge through continuous relational adjustment. By treating sonification as expression of systemic behaviour rather than data translation, BDSS enables critical engagement with hidden dynamics through embodied listening.</span><span class="cursor-blink">_</span>
                        </div>
                        
                        <div class="process-images">
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> BDSS Prototype Implementation (Zenodo)</div>
                                <a href="https://doi.org/10.5281/zenodo.15509042" target="_blank" style="color: var(--text-secondary); text-decoration: none;">doi.org/10.5281/zenodo.15509042</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> How a Leaf Sounds as a System</div>
                                <a href="https://youtu.be/U3tuYjfow6o" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtu.be/U3tuYjfow6o</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Photosynthesis as Generative Sound</div>
                                <a href="https://youtu.be/TRb-llECHgI" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtu.be/TRb-llECHgI</a>
                            </div>
                            <div class="image-item">
                                <div class="image-label"><span class="prompt">></span> Data-Driven Cross-Modal Sonification Engine</div>
                                <a href="https://youtube.com/shorts/nCGHsyoMR84" target="_blank" style="color: var(--text-secondary); text-decoration: none;">youtube.com/shorts/nCGHsyoMR84</a>
                            </div>
                        </div>
                    </div>
                `
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
        
        // STEP 5: Restart typewriter animations if on a process page
        const currentFileId = this.currentFile;
        if (currentFileId && currentFileId.startsWith('process-') && typeof initProcessNodes === 'function') {
            setTimeout(initProcessNodes, 300);
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
                } else {
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
    
    loadContent(fileId) {
        const data = this.content[fileId];
        if (!data) return;
        
        this.currentFile = fileId;
        
        // Check if mobile
        const isMobile = window.innerWidth <= 1024;
        
        if (isMobile) {
            // Load directly into mobile container
            const mobileContainer = document.getElementById('mobile-content');
            if (mobileContainer) {
                let content = data.html;
                
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
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun Kim" data-kr="김희은">Hee-Eun Kim</span></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Systems Artist" data-kr="시스템 아티스트">Systems Artist</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 01</p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction. Her practice confronts the reductionist violence of frameworks that demand legibility at the cost of complexity." data-kr="김희은은 데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만든다. 복잡한 것을 단순하게 줄이려는 시스템에 맞서, 복잡성을 보존하면서 경험 가능하게 만드는 작업을 한다.">Hee-Eun builds alternative infrastructures for knowing and relating through data, sound, and interaction. Her practice confronts the reductionist violence of frameworks that demand legibility at the cost of complexity.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple, Hee-Eun approaches data not as pure information but as narrative infrastructure containing embedded stories about human decisions and systemic patterns. Her work refuses static one-to-one mappings, instead developing methodologies that treat data as behaviour rather than truth, exposing the logics and architectures that shape perception without collapsing them into simplified metrics." data-kr="데이터를 단순한 정보가 아니라 이야기를 담은 구조로 본다. 그 안에는 사람들의 결정, 시스템의 패턴, 보이지 않는 관계들이 담겨있다. 일대일 매핑을 거부하고, 데이터를 고정된 진리가 아닌 움직이는 행동으로 다룬다. 이를 통해 우리의 인식을 형성하는 보이지 않는 구조들을 드러낸다.">Grounded in Eastern philosophical traditions that understand reality as processual, relational, and inherently multiple, Hee-Eun approaches data not as pure information but as narrative infrastructure containing embedded stories about human decisions and systemic patterns. Her work refuses static one-to-one mappings, instead developing methodologies that treat data as behaviour rather than truth, exposing the logics and architectures that shape perception without collapsing them into simplified metrics.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Philosophical and ethical investigation doesn't inform the work from outside - it becomes the systemic structure itself. Through interactive installations, experimental interfaces, and custom sonification engines, Hee-Eun creates conditions where complexity can be experienced rather than decoded. The work doesn't present answers but holds tensions, making visible the mechanisms through which algorithmic processes manufacture reality while remaining embedded in those same processes." data-kr="작업에서 철학적 질문과 시스템 구조는 분리되지 않는다. 질문 자체가 시스템이 된다. 인터랙티브 설치, 실험적 인터페이스, 사운드 시스템을 통해 복잡성을 해석하는 것이 아니라 직접 경험할 수 있는 조건을 만든다. 답을 주는 것이 아니라 긴장을 유지하며, 알고리즘이 현실을 만들어내는 방식을 가시화한다. 동시에 그 과정 안에 있다.">Philosophical and ethical investigation doesn't inform the work from outside - it becomes the systemic structure itself. Through interactive installations, experimental interfaces, and custom sonification engines, Hee-Eun creates conditions where complexity can be experienced rather than decoded. The work doesn't present answers but holds tensions, making visible the mechanisms through which algorithmic processes manufacture reality while remaining embedded in those same processes.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Her practice is fundamentally non-extractive, operating coherence-first and emergence-oriented. Building not to optimize but to preserve and translate what resists reduction, prototyping different epistemologies that resist totalizing logic while remaining navigable." data-kr="작업은 착취하지 않고, 최적화하지 않으며, 미리 정해진 결과를 강요하지 않는다. 대신 복잡성을 보존하고 번역하는 방법을 실험한다.">Her practice is fundamentally non-extractive, operating coherence-first and emergence-oriented. Building not to optimize but to preserve and translate what resists reduction, prototyping different epistemologies that resist totalizing logic while remaining navigable.</span></p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line section-marker"><span class="line-marker">//</span> 02</p>
                                    <p class="output-line blank"></p>
                                    <p class="output-line"><span class="line-marker">></span> <span data-en="Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software. But these aren't tools applied to content. Each system is built to sense and respond to its specific context, operating through open structures where outcomes aren't predetermined but emerge through encounter. The work completes itself through participation, not as interactive feature but as fundamental condition: the audience becomes implicated in the processes being made visible." data-kr="데이터 엔진, 실시간 사운드 프로세싱 시스템, 인터랙티브 소프트웨어를 직접 개발한다. 각 시스템은 특정 맥락을 감지하고 반응하도록 만들어지며, 결과가 미리 정해지지 않고 상황에 따라 나타나는 열린 구조로 작동한다. 장소의 특성을 살린 작업을 위해 현장 데이터를 수집하고 분석하며, 이를 사운드와 시각 요소가 결합된 인터랙티브 설치로 구현한다. 관객의 참여를 통해 시스템이 반응하고 변화하며 작업이 완성된다.">Hee-Eun develops custom data engines, real-time sound processing systems, and interactive software. But these aren't tools applied to content. Each system is built to sense and respond to its specific context, operating through open structures where outcomes aren't predetermined but emerge through encounter. The work completes itself through participation, not as interactive feature but as fundamental condition: the audience becomes implicated in the processes being made visible.</span></p>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (fileId.startsWith('exhibition-')) {
                    // Special handling for exhibition pages on mobile - reorder content
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = content;
                    
                    // Extract components
                    const title = tempDiv.querySelector('h1');
                    const year = tempDiv.querySelector('.cv-year');
                    const location = tempDiv.querySelector('.cv-location');
                    const imageGrid = tempDiv.querySelector('.image-grid');
                    const medium = tempDiv.querySelector('.cv-medium');
                    
                    // Get ALL exhibition text paragraphs
                    const descriptions = Array.from(tempDiv.querySelectorAll('.exhibition-text'));
                    const descriptionsHTML = descriptions.map(p => p.outerHTML).join('\n');
                    
                    // Preserve data attributes for language switching
                    const yearDataEn = year ? year.getAttribute('data-en') || year.textContent : '';
                    const yearDataKr = year ? year.getAttribute('data-kr') || year.textContent : '';
                    const locationDataEn = location ? location.getAttribute('data-en') || location.innerHTML : '';
                    const locationDataKr = location ? location.getAttribute('data-kr') || location.innerHTML : '';
                    const mediumDataEn = medium ? medium.getAttribute('data-en') || medium.textContent : '';
                    const mediumDataKr = medium ? medium.getAttribute('data-kr') || medium.textContent : '';
                    
                    // Rebuild with divs instead of p tags to control spacing better
                    content = `
                        <div class="mobile-exhibition-header">
                            ${title ? title.outerHTML : ''}
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
            document.getElementById('content').innerHTML = data.html;
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
        }
        
        // Setup process node visualization if process, exhibition, or research section - AFTER translation
        if ((fileId.startsWith('process-') || fileId.startsWith('exhibition') || fileId.startsWith('research-')) && typeof initProcessNodes === 'function') {
            // Wait for translation to complete before starting typewriter
            setTimeout(initProcessNodes, 200);
        }
        
        // Initialize video thumbnails for experience.md (desktop only)
        if (fileId === 'process-experience' && typeof initVideoThumbnails === 'function') {
            setTimeout(initVideoThumbnails, 300);
        }
        
        // Setup clickable exhibition titles
        this.setupExhibitionLinks();
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

// Initialize and make globally accessible
window.portfolio = new TerminalPortfolio();
