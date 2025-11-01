// Custom Video Player Initialization
document.addEventListener('DOMContentLoaded', function() {
    initCustomVideoPlayers();
});

function initCustomVideoPlayers() {
    const videoPlayers = document.querySelectorAll('.custom-video-player');
    
    if (videoPlayers.length === 0) {
        return;
    }
    
    videoPlayers.forEach((player, index) => {
        // Skip video viewer player (it has its own initialization)
        if (player.closest('#video-viewer')) {
            return;
        }
        
        const video = player.querySelector('.custom-video');
        const playBtn = player.querySelector('.custom-play-btn');
        const muteBtn = player.querySelector('.custom-mute-btn') || player.querySelector('.custom-volume-btn');
        const volumeSlider = player.querySelector('.custom-volume-slider');
        
        if (!video || !playBtn) {
            return;
        }
        
        // Add loading spinner if it doesn't exist
        if (!player.querySelector('.video-loading-spinner')) {
            const spinner = document.createElement('div');
            spinner.className = 'video-loading-spinner';
            player.appendChild(spinner);
        }
        
        // Remove any existing listeners to prevent duplicates
        const newPlayBtn = playBtn.cloneNode(true);
        playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
        
        const newVideo = video.cloneNode(true);
        video.parentNode.replaceChild(newVideo, video);
        
        // Get fresh references
        const freshVideo = player.querySelector('.custom-video');
        const freshPlayBtn = player.querySelector('.custom-play-btn');
        const freshMuteBtn = player.querySelector('.custom-mute-btn') || player.querySelector('.custom-volume-btn');
        const freshVolumeSlider = player.querySelector('.custom-volume-slider');
        
        // Play/Pause on button click
        freshPlayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            togglePlayPause(freshVideo, player);
        });
        
        // Play/Pause on video click
        freshVideo.addEventListener('click', function(e) {
            e.preventDefault();
            togglePlayPause(freshVideo, player);
        });
        
        // Get controls container and fullscreen button
        const controlsContainer = player.querySelector('.custom-video-controls');
        const fullscreenButton = player.querySelector('.custom-fullscreen-btn');
        let controlsTimeout;
        
        // Show controls temporarily
        function showControlsTemporarily() {
            if (controlsContainer) {
                controlsContainer.classList.add('show-controls');
            }
            if (fullscreenButton) {
                fullscreenButton.classList.add('show-controls');
            }
            clearTimeout(controlsTimeout);
            controlsTimeout = setTimeout(() => {
                if (controlsContainer) {
                    controlsContainer.classList.remove('show-controls');
                }
                if (fullscreenButton) {
                    fullscreenButton.classList.remove('show-controls');
                }
            }, 2000); // Hide after 2 seconds of inactivity
        }
        
        // Mute/Unmute button
        if (freshMuteBtn) {
            freshMuteBtn.addEventListener('mouseenter', showControlsTemporarily);
            freshMuteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                freshVideo.muted = !freshVideo.muted;
                freshMuteBtn.classList.toggle('muted', freshVideo.muted);
                if (freshVideo.muted) {
                    freshVolumeSlider.value = 0;
                } else {
                    freshVolumeSlider.value = freshVideo.volume * 100;
                }
                showControlsTemporarily();
            });
        }
        
        // Volume slider
        if (freshVolumeSlider) {
            freshVolumeSlider.addEventListener('mouseenter', showControlsTemporarily);
            freshVolumeSlider.addEventListener('input', function(e) {
                e.stopPropagation();
                const volume = e.target.value / 100;
                freshVideo.volume = volume;
                freshVideo.muted = volume === 0;
                if (freshMuteBtn) {
                    freshMuteBtn.classList.toggle('muted', volume === 0);
                }
                showControlsTemporarily();
            });
        }
        
        // Fullscreen button
        const freshFullscreenBtn = player.querySelector('.custom-fullscreen-btn');
        if (freshFullscreenBtn) {
            freshFullscreenBtn.addEventListener('mouseenter', showControlsTemporarily);
            freshFullscreenBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // iOS Safari uses webkitEnterFullscreen on the video element
                if (freshVideo.webkitEnterFullscreen) {
                    freshVideo.webkitEnterFullscreen();
                } else if (!document.fullscreenElement) {
                    player.requestFullscreen().catch(err => {
                        console.error('Error attempting to enable fullscreen:', err);
                    });
                } else {
                    document.exitFullscreen();
                }
                showControlsTemporarily();
            });
        }
        
        // Show controls when hovering over controls area
        if (controlsContainer) {
            controlsContainer.addEventListener('mouseenter', showControlsTemporarily);
        }
        
        // Show overlay when video is paused or ended
        freshVideo.addEventListener('pause', function() {
            player.classList.remove('playing');
        });
        
        freshVideo.addEventListener('ended', function() {
            player.classList.remove('playing');
        });
        
        freshVideo.addEventListener('play', function() {
            player.classList.add('playing');
        });
        
        // Show loading spinner while video is loading
        freshVideo.addEventListener('waiting', function() {
            player.classList.add('loading');
        });
        
        freshVideo.addEventListener('loadstart', function() {
            player.classList.add('loading');
        });
        
        freshVideo.addEventListener('canplay', function() {
            player.classList.remove('loading');
        });
        
        freshVideo.addEventListener('playing', function() {
            player.classList.remove('loading');
        });
        
        // Store reference for carousel pause functionality
        player.videoElement = freshVideo;
    });
    
    // Set up Intersection Observer to pause videos when they leave viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const player = entry.target;
            const video = player.videoElement;
            
            if (video && !entry.isIntersecting) {
                video.pause();
                player.classList.remove('playing');
            }
        });
    }, {
        threshold: 0.5 // Pause when less than 50% visible
    });
    
    // Observe all video players
    videoPlayers.forEach(player => {
        observer.observe(player);
    });
}

function togglePlayPause(video, player) {
    if (video.paused) {
        video.play()
            .then(() => {
                player.classList.add('playing');
            })
            .catch(err => {
                console.error('[Custom Video Player] Play error:', err);
            });
    } else {
        video.pause();
        player.classList.remove('playing');
    }
}

// Re-initialize when content changes (for dynamic loading)
if (typeof window !== 'undefined') {
    window.initCustomVideoPlayers = initCustomVideoPlayers;
    
    // Also try to initialize after a short delay for dynamic content
    setTimeout(initCustomVideoPlayers, 500);
    setTimeout(initCustomVideoPlayers, 1000);
}
