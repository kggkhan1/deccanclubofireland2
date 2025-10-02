// Lightbox functionality for gallery
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentImageIndex = 0;
    let images = [];
    
    // Initialize lightbox
    function initLightbox() {
        // Get all gallery images
        const galleryItems = document.querySelectorAll('.gallery-item');
        images = Array.from(galleryItems).map(item => ({
            src: item.querySelector('img').src,
            alt: item.querySelector('img').alt || ''
        }));
        
        // Add click event to each gallery item
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });
        
        // Close lightbox
        closeLightbox.addEventListener('click', closeLightboxFunc);
        
        // Previous image
        prevBtn.addEventListener('click', () => {
            navigateLightbox(-1);
        });
        
        // Next image
        nextBtn.addEventListener('click', () => {
            navigateLightbox(1);
        });
        
        // Close on click outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxFunc();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightboxFunc();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });
    }
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
        lightboxCaption.textContent = images[index].alt;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeLightboxFunc() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    function navigateLightbox(direction) {
        currentImageIndex += direction;
        
        // Wrap around if at beginning or end
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        
        lightboxImg.src = images[currentImageIndex].src;
        lightboxCaption.textContent = images[currentImageIndex].alt;
    }
    
    // Initialize lightbox if gallery exists on page
    if (document.querySelector('.gallery-container')) {
        initLightbox();
    }
});