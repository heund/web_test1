/**
 * Process Network Animation
 * Interactive network with 4 nodes: Research, Systems, Visual and Sonic Language, Experience
 */

class ProcessNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        this.nodes = [];
        this.connections = [];
        this.time = 0;
        this.hoveredNode = null;
        this.selectedNode = null;
        
        // Camera controls - 3D orbital rotation
        this.rotationX = 0;
        this.rotationY = 0;
        this.isDragging = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.dragDistance = 0;
        
        // Process nodes data - using hero page color scheme
        this.processNodes = [
            {
                id: 'research',
                labelEN: 'Research',
                labelKR: '리서치',
                descriptionEN: 'Site-specific data collection and analysis',
                descriptionKR: '현장 특정적 데이터 수집과 분석',
                color: '#78716C',
                file: 'process-research'
            },
            {
                id: 'systems',
                labelEN: 'Systems',
                labelKR: '시스템',
                descriptionEN: 'Custom data engines and real-time processing',
                descriptionKR: '맞춤 데이터 엔진과 실시간 프로세싱',
                color: '#57534E',
                file: 'process-systems'
            },
            {
                id: 'visual-sonic',
                labelEN: 'Visual & Sonic Language',
                labelKR: '시각 및 음향 언어',
                descriptionEN: 'Sonification and interactive visualization',
                descriptionKR: '소니피케이션과 인터랙티브 시각화',
                color: '#A8A29E',
                file: 'process-visual'
            },
            {
                id: 'experience',
                labelEN: 'Experience',
                labelKR: '경험',
                descriptionEN: 'Responsive systems and audience participation',
                descriptionKR: '반응형 시스템과 관객 참여',
                color: '#A3A3A3',
                file: 'process-experience'
            }
        ];
        
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        
        this.initializeNodes();
        this.animate();
    }
    
    resize() {
        this.canvas.style.width = '';
        this.canvas.style.height = '';
        
        this.canvas.offsetHeight;
        
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        const oldCenterX = this.centerX;
        const oldCenterY = this.centerY;
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        
        // Update node positions if canvas was resized
        if (oldCenterX && oldCenterY && this.nodes.length > 0) {
            const deltaX = this.centerX - oldCenterX;
            const deltaY = this.centerY - oldCenterY;
            
            this.nodes.forEach(node => {
                node.x += deltaX;
                node.y += deltaY;
                node.targetX += deltaX;
                node.targetY += deltaY;
            });
        }
    }
    
    initializeNodes() {
        const radius = Math.min(this.width, this.height) * 0.25;
        const angleStep = (Math.PI * 2) / this.processNodes.length;
        
        this.processNodes.forEach((nodeData, index) => {
            const angle = index * angleStep - Math.PI / 2; // Start from top
            const x = this.centerX + Math.cos(angle) * radius;
            const y = this.centerY + Math.sin(angle) * radius;
            
            const node = {
                id: nodeData.id,
                x: x,
                y: y,
                z: 0,
                targetX: x,
                targetY: y,
                targetZ: (Math.random() - 0.5) * 100,
                radius: 0,
                targetRadius: 12,
                opacity: 0,
                labelEN: nodeData.labelEN,
                labelKR: nodeData.labelKR,
                descriptionEN: nodeData.descriptionEN,
                descriptionKR: nodeData.descriptionKR,
                color: nodeData.color,
                file: nodeData.file,
                age: 0,
                pulsePhase: Math.random() * Math.PI * 2
            };
            
            this.nodes.push(node);
        });
        
        // Create connections between all nodes
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                this.connections.push({
                    from: this.nodes[i],
                    to: this.nodes[j],
                    opacity: 0,
                    targetOpacity: 0.3
                });
            }
        }
    }
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (this.isDragging) {
            const deltaX = mouseX - this.lastMouseX;
            const deltaY = mouseY - this.lastMouseY;
            
            this.rotationY += deltaX * 0.01;
            this.rotationX += deltaY * 0.01;
            
            // Clamp vertical rotation
            this.rotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.rotationX));
            
            this.dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
        }
        
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        
        // Check for hover
        this.hoveredNode = null;
        this.nodes.forEach(node => {
            const screenPos = this.project3D(node.x, node.y, node.z);
            const distance = Math.hypot(mouseX - screenPos.x, mouseY - screenPos.y);
            if (distance < node.radius + 10) {
                this.hoveredNode = node;
                this.canvas.style.cursor = 'pointer';
            }
        });
        
        if (!this.hoveredNode) {
            this.canvas.style.cursor = this.isDragging ? 'grabbing' : 'grab';
        }
    }
    
    handleMouseDown(e) {
        this.isDragging = true;
        this.dragDistance = 0;
        this.canvas.style.cursor = 'grabbing';
    }
    
    handleMouseUp(e) {
        this.isDragging = false;
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
    }
    
    handleClick(e) {
        if (this.dragDistance > 10) return; // Ignore clicks after dragging
        
        if (this.hoveredNode) {
            // Navigate to the process subsection
            if (typeof window.portfolio !== 'undefined' && this.hoveredNode.file) {
                window.portfolio.loadContent(this.hoveredNode.file);
                
                // Update navigation
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                const navItem = document.querySelector(`[data-file="${this.hoveredNode.file}"]`);
                if (navItem) {
                    navItem.classList.add('active');
                }
            }
        }
    }
    
    project3D(x, y, z) {
        // Apply rotation
        const cosX = Math.cos(this.rotationX);
        const sinX = Math.sin(this.rotationX);
        const cosY = Math.cos(this.rotationY);
        const sinY = Math.sin(this.rotationY);
        
        // Translate to origin
        const tx = x - this.centerX;
        const ty = y - this.centerY;
        const tz = z;
        
        // Rotate around Y axis (horizontal)
        const rx1 = tx * cosY - tz * sinY;
        const rz1 = tx * sinY + tz * cosY;
        
        // Rotate around X axis (vertical)
        const ry2 = ty * cosX - rz1 * sinX;
        const rz2 = ty * sinX + rz1 * cosX;
        
        // Project to 2D with perspective
        const perspective = 300;
        const scale = perspective / (perspective + rz2);
        
        return {
            x: this.centerX + rx1 * scale,
            y: this.centerY + ry2 * scale,
            scale: scale
        };
    }
    
    animate() {
        this.time += 0.016; // ~60fps
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Update nodes
        this.nodes.forEach(node => {
            node.age += 0.016;
            
            // Animate appearance
            if (node.opacity < 1) {
                node.opacity = Math.min(1, node.opacity + 0.02);
            }
            if (node.radius < node.targetRadius) {
                node.radius = Math.min(node.targetRadius, node.radius + 0.3);
            }
            
            // Gentle floating motion
            const floatX = Math.sin(this.time * 0.5 + node.pulsePhase) * 2;
            const floatY = Math.cos(this.time * 0.3 + node.pulsePhase) * 1.5;
            const floatZ = Math.sin(this.time * 0.4 + node.pulsePhase) * 10;
            
            node.x = node.targetX + floatX;
            node.y = node.targetY + floatY;
            node.z = node.targetZ + floatZ;
        });
        
        // Update connections
        this.connections.forEach(connection => {
            if (connection.opacity < connection.targetOpacity) {
                connection.opacity = Math.min(connection.targetOpacity, connection.opacity + 0.01);
            }
        });
        
        // Draw connections
        this.connections.forEach(connection => {
            if (connection.opacity > 0) {
                const fromPos = this.project3D(connection.from.x, connection.from.y, connection.from.z);
                const toPos = this.project3D(connection.to.x, connection.to.y, connection.to.z);
                
                this.ctx.save();
                this.ctx.globalAlpha = connection.opacity;
                this.ctx.strokeStyle = '#A3A3A3';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(fromPos.x, fromPos.y);
                this.ctx.lineTo(toPos.x, toPos.y);
                this.ctx.stroke();
                this.ctx.restore();
            }
        });
        
        // Draw nodes
        this.nodes.forEach(node => {
            if (node.opacity > 0) {
                const pos = this.project3D(node.x, node.y, node.z);
                const scale = pos.scale;
                const isHovered = node === this.hoveredNode;
                
                // Node circle - larger if hovered, scaled by perspective
                const baseRadius = isHovered ? node.radius * 1.5 : node.radius;
                const displayRadius = baseRadius * scale;
                
                this.ctx.save();
                this.ctx.globalAlpha = node.opacity;
                
                // Main node circle
                this.ctx.beginPath();
                this.ctx.arc(pos.x, pos.y, displayRadius, 0, Math.PI * 2);
                this.ctx.fillStyle = node.color;
                this.ctx.fill();
                
                // Outer ring (breathing effect)
                const pulse = Math.sin(this.time * 0.02 + node.x) * 0.3 + 0.7;
                this.ctx.beginPath();
                this.ctx.arc(pos.x, pos.y, displayRadius + 2, 0, Math.PI * 2);
                this.ctx.strokeStyle = node.color;
                this.ctx.lineWidth = isHovered ? 2 : 1;
                this.ctx.globalAlpha = node.opacity * pulse * (isHovered ? 0.6 : 0.3);
                this.ctx.stroke();
                
                this.ctx.restore();
                
                // Label
                if (node.opacity > 0.5) {
                    const currentLang = document.documentElement.lang === 'ko' ? 'kr' : 'en';
                    const label = currentLang === 'kr' ? node.labelKR : node.labelEN;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = node.opacity;
                    this.ctx.fillStyle = '#78716C';
                    const isKorean = document.documentElement.lang === 'ko';
                    this.ctx.font = isKorean 
                        ? `${12 * scale}px "IBM Plex Mono", "Noto Sans KR", monospace`
                        : `${12 * scale}px "IBM Plex Mono", monospace`;
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(label, pos.x, pos.y + displayRadius + 20 * scale);
                    
                    // Description on hover
                    if (isHovered) {
                        const description = currentLang === 'kr' ? node.descriptionKR : node.descriptionEN;
                        this.ctx.font = isKorean 
                            ? `${10 * scale}px "IBM Plex Mono", "Noto Sans KR", monospace`
                            : `${10 * scale}px "IBM Plex Mono", monospace`;
                        this.ctx.fillStyle = '#A8A29E';
                        this.ctx.fillText(description, pos.x, pos.y + displayRadius + 35 * scale);
                    }
                    this.ctx.restore();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize function
function initProcessNetwork() {
    const canvas = document.getElementById('process-network-canvas');
    
    if (canvas) {
        new ProcessNetwork('process-network-canvas');
    }
}

// Auto-initialize if canvas exists
if (typeof window !== 'undefined') {
    window.initProcessNetwork = initProcessNetwork;
    
    // Don't auto-initialize - only initialize when called by script2.js
    // This prevents the premature "canvas not found" error
}
