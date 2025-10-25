// Convert videos to thumbnails in experience.md section
function initVideoThumbnails() {
    // Only run on desktop
    if (window.innerWidth <= 1024) return;
    
    // Find all videos in the process-images section that haven't been converted yet
    const videos = document.querySelectorAll('.process-images video:not([data-thumbnail-converted])');
    
    if (videos.length === 0) return;
    
    videos.forEach((video) => {
        const parent = video.parentElement;
        const videoSrc = video.querySelector('source')?.src;
        
        if (!videoSrc) return;
        
        // Mark as converted to prevent re-processing
        video.setAttribute('data-thumbnail-converted', 'true');
        
        // Get both EN and KR titles from the image-label
        const labelEl = parent.querySelector('.image-label span:last-child');
        const titleEN = labelEl ? labelEl.dataset.en || labelEl.textContent.trim() : videoSrc.split('/').pop();
        const titleKR = labelEl ? labelEl.dataset.kr || titleEN : titleEN;
        
        // Get both EN and KR descriptions/captions from image-description
        const descEl = parent.querySelector('.image-description span');
        const captionEN = descEl ? descEl.dataset.en || descEl.textContent.trim() : '';
        const captionKR = descEl ? descEl.dataset.kr || '' : '';
        
        // Create thumbnail container
        const thumbnail = document.createElement('div');
        thumbnail.className = 'video-thumbnail';
        thumbnail.setAttribute('data-video-thumbnail', 'true');
        thumbnail.onclick = () => openVideoPlayer(videoSrc, titleEN, titleKR, captionEN, captionKR);
        
        // Clone the video for thumbnail (muted, no controls)
        const thumbVideo = video.cloneNode(true);
        thumbVideo.removeAttribute('controls');
        thumbVideo.removeAttribute('data-thumbnail-converted');
        thumbVideo.muted = true;
        thumbVideo.loop = true;
        thumbVideo.autoplay = true;
        thumbVideo.playsInline = true;
        
        // Create overlay with play button
        const overlay = document.createElement('div');
        overlay.className = 'video-thumbnail-overlay';
        
        const playIcon = document.createElement('div');
        playIcon.className = 'video-play-icon';
        
        overlay.appendChild(playIcon);
        thumbnail.appendChild(thumbVideo);
        thumbnail.appendChild(overlay);
        
        // Replace original video with thumbnail
        video.replaceWith(thumbnail);
    });
}

// No need for DOMContentLoaded or MutationObserver
// The function is called directly from script.js loadContent() when experience.md loads
