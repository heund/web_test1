/**
 * Code-to-Architecture Animation
 * Lines of code transform into a systems architecture diagram
 */

class CodeArchitecture {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        this.codeLines = [];
        this.nodes = [];
        this.connections = [];
        this.phase = 0;
        this.time = 0;
        this.hoveredNode = null;
        this.selectedNode = null;
        this.typedText = '';
        this.targetText = '';
        this.typeSpeed = 0;
        this.cursorBlink = 0;
        
        // Camera controls - 3D orbital rotation
        this.rotationX = 0; // Vertical rotation
        this.rotationY = 0; // Horizontal rotation
        this.isDragging = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.dragDistance = 0;
        
        // Code snippets
        this.codeSnippets = [
            'const system = new RelationalCognition()',
            'function emergentBehavior(data) {',
            'let coherence = seekPattern()',
            'class Agent { negotiate() }',
            'const feedback = loop.recursive()',
            'transform(sound, data, interaction)',
            'if (adaptive) { evolve() }',
            'return livingSystem.respond()',
            'const field = relational.space()',
            'agent.sense().adapt().create()'
        ];
        
        // Questions and inner thoughts - bilingual
        this.statementsEN = [
            "what assumptions are embedded in this data?",
            "what relationships does the system make invisible?",
            "what does this data not show?",
            "can measurement be neutral?",
            "deviation as information, not error",
            "complexity is relationship, not chaos",
            "the map reshapes the territory",
            "what emerges when structure loosens?",
            "observation changes what is observed",
            "metrics simplify what they measure",
            "staying with uncertainty before resolution",
            "what patterns appear only through encounter?",
            "I am embedded in what I examine",
            "whose perspective does this structure reflect?",
            "where does meaning emerge, not get extracted?",
            "systems shape us as we shape them",
            "optimization prioritizes certain outcomes over others",
            "what gets lost when systems streamline?",
            "speed over nuance—what remains?",
            "what resists being measured?",
            "the optimal path excludes alternatives",
            "how do we build systems that hold space?",
            "care as method, not afterthought",
            "attention is a form of ethics",
            "what does it mean to work with data gently?",
            "listening before interpreting",
            "slowing down to preserve nuance",
            "how do we honour what data represents?",
            "building for emergence, not control",
            "intention shapes structure",
            "can systems hold complexity without violence?",
            "what would non-extractive data practice look like?",
            "art as applied research",
            "making the invisible audible",
            "sonification as epistemology",
            "code as care",
            "systems as conversation, not conclusion",
            "building tools to think with, not through",
            "prototyping alternative logics",
            "the work is the question"
        ];
        
        this.statementsKR = [
    "이 데이터는 무엇을 전제하고 있는가",
    "무엇이 기록되지 않았는가",
    "이 데이터가 말하지 않는 것",
    "중립적 측정의 불가능성",
    "관찰하는 순간, 대상은 이미 달라진다",
    "숫자로 바꾸면서 사라지는 것들",
    "누구의 시선으로 만들어진 구조인가",
    "시스템은 우리를 길들인다",
    "무엇을 위한 최적화인가",
    "효율이라는 이름으로 잃은 것",
    "수치로 담을 수 없는 것들",
    "하나의 답이 배제하는 가능성들",
    "빈 공간을 남겨두는 시스템",
    "방법으로서의 돌봄",
    "데이터를 다루는 태도",
    "데이터는 누군가의 이야기다",
    "오류가 알려주는 것",
    "복잡함 속에서 드러나는 관계",
    "통제를 놓았을 때 나타나는 것",
    "혼자서는 볼 수 없는 것들",
    "의미는 만들어진다",
    "예술로서의 탐구",
    "귀로 이해하는 방법",
    "코드를 통한 돌봄",
    "끝이 아닌 과정으로서의 시스템",
    "함께 사유하는 도구",
    "질문으로서의 작업",
    "관찰하는 순간 이미 연루된다"
        ];
        
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.animate();
    }
    
    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        // Store for later use
        this.dpr = dpr;
        this.displayWidth = rect.width;
        this.displayHeight = rect.height;
        
        // Set actual canvas size in memory (scaled for high-DPI)
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        // Set display size (CSS pixels)
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        // Use CSS pixel dimensions for calculations
        this.centerX = rect.width / 2;
        this.centerY = rect.height / 2;
    }
    
    generateCodeLine() {
        const snippet = this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)];
        
        // Remove oldest line if we're at max
        if (this.codeLines.length >= 8) {
            this.codeLines.shift();
        }
        
        this.codeLines.push({
            text: snippet,
            displayText: '', // Start empty, will type out
            x: 20, // Fixed left margin like terminal
            opacity: 1,
            age: 0,
            typeIndex: 0,
            typeSpeed: Math.floor(Math.random() * 2) + 1 // Vary typing speed
        });
    }
    
    updateCodePhase() {
        // Generate new code lines (with limit) - slower rate
        if (Math.random() < 0.03 && this.codeLines.length < 8) {
            this.generateCodeLine();
        }
        
        // Cap total nodes to prevent memory issues
        if (this.nodes.length > 25) {
            return; // Stop creating new nodes
        }
        
        // Update and draw code lines
        this.codeLines = this.codeLines.filter(line => {
            line.age++;
            
            // Type out characters
            if (line.typeIndex < line.text.length) {
                if (line.age % line.typeSpeed === 0) {
                    line.typeIndex++;
                    line.displayText = line.text.substring(0, line.typeIndex);
                }
            }
            
            // Start fading and transforming after fully typed and aged
            if (line.typeIndex >= line.text.length && line.age > 150) {
                line.opacity -= 0.008;
                
                // Transform into node
                if (line.opacity <= 0.5 && Math.random() < 0.03) {
                    this.createNodeFromCode(line);
                    return false;
                }
            }
            
            // Calculate Y position based on index (fixed slots)
            const lineIndex = this.codeLines.indexOf(line);
            const yPosition = 30 + (lineIndex * 22);
            
            // Draw the line
            this.ctx.save();
            this.ctx.globalAlpha = line.opacity;
            const isKorean = document.documentElement.lang === 'ko';
            this.ctx.font = isKorean 
                ? '12px "IBM Plex Mono", "Noto Sans KR", monospace'
                : '12px "IBM Plex Mono", monospace';
            this.ctx.fillStyle = '#78716C';
            
            // Draw line number prefix (like terminal)
            this.ctx.fillStyle = '#A8A29E';
            const lineNum = String(lineIndex + 1).padStart(2, '0');
            this.ctx.fillText(lineNum + ' │ ', line.x, yPosition);
            
            // Draw code text
            this.ctx.fillStyle = '#78716C';
            this.ctx.fillText(line.displayText, line.x + 40, yPosition);
            
            // Blinking cursor while typing
            if (line.typeIndex < line.text.length && (this.time % 30) < 15) {
                const cursorX = line.x + 40 + this.ctx.measureText(line.displayText).width;
                this.ctx.fillStyle = '#78716C';
                this.ctx.fillRect(cursorX, yPosition - 10, 6, 12);
            }
            
            this.ctx.restore();
            
            return line.opacity > 0;
        });
    }
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Handle drag rotation (orbital camera)
        if (this.isDragging) {
            const deltaX = mouseX - this.lastMouseX;
            const deltaY = mouseY - this.lastMouseY;
            this.dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
            
            // Update camera rotation
            this.rotationY += deltaX * 0.005; // Horizontal orbit
            this.rotationX += deltaY * 0.005; // Vertical orbit
            
            // Clamp vertical rotation to prevent flipping
            this.rotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.rotationX));
            
            this.lastMouseX = mouseX;
            this.lastMouseY = mouseY;
            this.canvas.style.cursor = 'grabbing';
            return;
        }
        
        // Check for node hover (with 3D transform)
        this.hoveredNode = null;
        for (let node of this.nodes) {
            // Project node position with current rotation
            const projected = this.project3D(node.x, node.y, node.z);
            
            const dist = Math.hypot(projected.x - mouseX, projected.y - mouseY);
            const scaledRadius = (node.radius + 10) * projected.scale;
            if (dist < scaledRadius) {
                this.hoveredNode = node;
                this.canvas.style.cursor = 'pointer';
                return;
            }
        }
        
        // Check if over node area for grab cursor
        const distFromCenter = Math.hypot(mouseX - this.centerX, mouseY - this.centerY);
        if (this.nodes.length > 0 && distFromCenter < 300) {
            this.canvas.style.cursor = 'grab';
        } else {
            this.canvas.style.cursor = 'default';
        }
    }
    
    project3D(x, y, z) {
        // Translate to origin
        let dx = x - this.centerX;
        let dy = y - this.centerY;
        let dz = z;
        
        // Rotate around Y axis (horizontal)
        const cosY = Math.cos(this.rotationY);
        const sinY = Math.sin(this.rotationY);
        const x1 = dx * cosY - dz * sinY;
        const z1 = dx * sinY + dz * cosY;
        
        // Rotate around X axis (vertical)
        const cosX = Math.cos(this.rotationX);
        const sinX = Math.sin(this.rotationX);
        const y1 = dy * cosX - z1 * sinX;
        const z2 = dy * sinX + z1 * cosX;
        
        // Simple perspective projection
        const perspective = 600;
        const scale = perspective / (perspective + z2);
        
        return {
            x: x1 * scale + this.centerX,
            y: y1 * scale + this.centerY,
            scale: scale
        };
    }
    
    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        this.dragDistance = 0; // Reset drag distance
        
        // Start dragging if not clicking a specific node
        if (!this.hoveredNode) {
            const distFromCenter = Math.hypot(mouseX - this.centerX, mouseY - this.centerY);
            if (distFromCenter < 300) {
                this.isDragging = true;
                this.lastMouseX = mouseX;
                this.lastMouseY = mouseY;
            }
        }
    }
    
    handleMouseUp(e) {
        this.isDragging = false;
    }
    
    handleClick(e) {
        // Ignore click if it was actually a drag
        if (this.dragDistance > 5) {
            return;
        }
        
        if (this.hoveredNode) {
            if (this.selectedNode === this.hoveredNode) {
                // Deselect
                this.selectedNode = null;
                this.targetText = '';
                this.typedText = '';
            } else {
                // Select new node
                this.selectedNode = this.hoveredNode;
                
                // Get current language from portfolio instance
                const currentLang = window.portfolio ? window.portfolio.currentLang : 'en';
                const statement = currentLang === 'kr' ? this.hoveredNode.statementKR : this.hoveredNode.statementEN;
                
                this.targetText = '> ' + statement;
                this.typedText = '';
                this.typeSpeed = 0;
            }
        } else {
            this.selectedNode = null;
            this.targetText = '';
            this.typedText = '';
        }
    }
    
    createNodeFromCode(codeLine) {
        // Don't create if at limit
        if (this.nodes.length >= 25) return;
        
        const index = Math.floor(Math.random() * this.statementsEN.length);
        const lineIndex = this.codeLines.indexOf(codeLine);
        const yPosition = 30 + (lineIndex * 22);
        
        const node = {
            x: codeLine.x + 40,
            y: yPosition,
            z: 0, // Start at 0 depth
            targetX: this.centerX + (Math.random() - 0.5) * 400,
            targetY: this.centerY + (Math.random() - 0.5) * 300,
            targetZ: (Math.random() - 0.5) * 200, // Random depth between -100 and 100
            radius: 0,
            targetRadius: 4 + Math.random() * 6,
            opacity: 0,
            label: codeLine.text.split(' ')[0].replace(/[(){}]/g, ''),
            statementEN: this.statementsEN[index],
            statementKR: this.statementsKR[index],
            connections: [],
            age: 0
        };
        
        this.nodes.push(node);
        
        // Remove oldest node if over limit
        if (this.nodes.length > 25) {
            const oldestNode = this.nodes.shift();
            // Remove connections involving this node
            this.connections = this.connections.filter(c => 
                c.from !== oldestNode && c.to !== oldestNode
            );
        }
        
        // Create connections to nearby nodes (limited)
        if (this.nodes.length > 1 && this.connections.length < 50) {
            const nearbyNodes = this.nodes
                .filter(n => n !== node)
                .sort((a, b) => {
                    const distA = Math.hypot(a.targetX - node.targetX, a.targetY - node.targetY);
                    const distB = Math.hypot(b.targetX - node.targetX, b.targetY - node.targetY);
                    return distA - distB;
                })
                .slice(0, 2); // Max 2 connections per node
            
            nearbyNodes.forEach(nearNode => {
                if (this.connections.length < 50) { // Cap total connections
                    this.connections.push({
                        from: node,
                        to: nearNode,
                        opacity: 0,
                        flow: Math.random()
                    });
                }
            });
        }
    }
    
    updateArchitecturePhase() {
        // Update nodes
        this.nodes.forEach(node => {
            // Move towards target position in 3D space
            node.x += (node.targetX - node.x) * 0.05;
            node.y += (node.targetY - node.y) * 0.05;
            node.z += (node.targetZ - node.z) * 0.05;
            
            // Grow to target size
            node.radius += (node.targetRadius - node.radius) * 0.1;
            node.opacity = Math.min(1, node.opacity + 0.02);
        });
        
        // Sort nodes by Z depth for proper rendering (back to front)
        const projectedNodes = this.nodes.map(node => {
            const projected = this.project3D(node.x, node.y, node.z);
            return { node, projected };
        }).sort((a, b) => a.projected.scale - b.projected.scale);
        
        // Draw nodes with 3D projection
        projectedNodes.forEach(({ node, projected }) => {
            const isHovered = this.hoveredNode === node;
            const isSelected = this.selectedNode === node;
            
            // Draw node
            this.ctx.save();
            this.ctx.globalAlpha = node.opacity;
            
            // Node circle - larger if hovered/selected, scaled by perspective
            const baseRadius = isHovered || isSelected ? node.radius * 1.5 : node.radius;
            const displayRadius = baseRadius * projected.scale;
            
            this.ctx.beginPath();
            this.ctx.arc(projected.x, projected.y, displayRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = isSelected ? '#57534E' : '#78716C';
            this.ctx.fill();
            
            // Outer ring (breathing effect)
            const pulse = Math.sin(this.time * 0.02 + node.x) * 0.3 + 0.7;
            this.ctx.beginPath();
            this.ctx.arc(projected.x, projected.y, displayRadius + 2, 0, Math.PI * 2);
            this.ctx.strokeStyle = isHovered || isSelected ? '#57534E' : '#78716C';
            this.ctx.lineWidth = isHovered || isSelected ? 2 : 1;
            this.ctx.globalAlpha = node.opacity * pulse * (isHovered || isSelected ? 0.6 : 0.3);
            this.ctx.stroke();
            
            this.ctx.restore();
        });
        
        // Update and draw connections with 3D projection
        this.connections.forEach(conn => {
            conn.opacity = Math.min(0.3, conn.opacity + 0.01);
            conn.flow += 0.02;
            
            const fromProj = this.project3D(conn.from.x, conn.from.y, conn.from.z);
            const toProj = this.project3D(conn.to.x, conn.to.y, conn.to.z);
            
            this.ctx.save();
            this.ctx.globalAlpha = conn.opacity;
            this.ctx.strokeStyle = '#A3A3A3';
            this.ctx.lineWidth = 1;
            
            // Draw connection line
            this.ctx.beginPath();
            this.ctx.moveTo(fromProj.x, fromProj.y);
            this.ctx.lineTo(toProj.x, toProj.y);
            this.ctx.stroke();
            
            // Draw flow particle
            const flowPos = (conn.flow % 1);
            const flowX = conn.from.x + (conn.to.x - conn.from.x) * flowPos;
            const flowY = conn.from.y + (conn.to.y - conn.from.y) * flowPos;
            const flowZ = conn.from.z + (conn.to.z - conn.from.z) * flowPos;
            const flowProj = this.project3D(flowX, flowY, flowZ);
            
            this.ctx.beginPath();
            this.ctx.arc(flowProj.x, flowProj.y, 2 * flowProj.scale, 0, Math.PI * 2);
            this.ctx.fillStyle = '#78716C';
            this.ctx.fill();
            
            this.ctx.restore();
        });
        
        // Draw terminal text (not rotated)
        this.drawTerminalText();
    }
    
    drawTerminalText() {
        // Typewriter effect
        if (this.typedText.length < this.targetText.length) {
            this.typeSpeed++;
            if (this.typeSpeed > 1) { // Type every 2 frames
                this.typedText = this.targetText.substring(0, this.typedText.length + 1);
                this.typeSpeed = 0;
            }
        }
        
        if (this.typedText.length === 0) return;
        
        this.ctx.save();
        
        // Terminal area at bottom - use display dimensions with offset
        const terminalHeight = 60;
        const bottomOffset = 40; // Move up from bottom
        const terminalY = this.displayHeight - terminalHeight - bottomOffset;
        const padding = 16;
        
        // Draw terminal background (light theme)
        this.ctx.fillStyle = 'rgba(250, 250, 249, 0.98)';
        this.ctx.fillRect(0, terminalY, this.displayWidth, terminalHeight);
        
        // Draw top border
        this.ctx.strokeStyle = '#D6D3D1';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, terminalY);
        this.ctx.lineTo(this.displayWidth, terminalY);
        this.ctx.stroke();
        
        // Word wrap the text - use Korean font if language is Korean
        const isKorean = document.documentElement.lang === 'ko';
        this.ctx.font = isKorean 
            ? '13px "IBM Plex Mono", "Noto Sans KR", monospace'
            : '13px "IBM Plex Mono", monospace';
        const maxWidth = this.displayWidth - padding * 2;
        const words = this.typedText.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            const testLine = currentLine + word + ' ';
            const metrics = this.ctx.measureText(testLine);
            if (metrics.width > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = word + ' ';
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) lines.push(currentLine);
        
        // Draw text lines (dark text on light background)
        this.ctx.fillStyle = '#44403C';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        
        const lineHeight = 18;
        const startY = terminalY + padding;
        
        lines.slice(0, 3).forEach((line, i) => { // Max 3 lines
            this.ctx.fillText(line.trim(), padding, startY + i * lineHeight);
        });
        
        // Blinking cursor
        this.cursorBlink++;
        if (this.typedText.length === this.targetText.length && (this.cursorBlink % 60) < 30) {
            const lastLine = lines[lines.length - 1] || '';
            const cursorX = padding + this.ctx.measureText(lastLine).width;
            const cursorY = startY + (lines.length - 1) * lineHeight;
            
            this.ctx.fillStyle = '#78716C';
            this.ctx.fillRect(cursorX, cursorY, 8, 14);
        }
        
        this.ctx.restore();
    }
    
    animate() {
        this.time++;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Apply DPR scaling for crisp rendering
        this.ctx.save();
        this.ctx.scale(this.dpr || 1, this.dpr || 1);
        
        // Update phases
        this.updateCodePhase();
        this.updateArchitecturePhase();
        
        this.ctx.restore();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when hero section is loaded
function initCodeArchitecture() {
    const canvas = document.getElementById('code-architecture-canvas');
    if (canvas) {
        // Always create new instance when canvas is loaded
        window.codeArchAnimation = new CodeArchitecture('code-architecture-canvas');
    }
}

// Auto-initialize if canvas exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodeArchitecture);
} else {
    initCodeArchitecture();
}
