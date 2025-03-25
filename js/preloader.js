document.addEventListener("DOMContentLoaded", function () {
    // Get the preloader and content elements
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    
    // Function to hide preloader with fade effect
    function hidePreloader() {
        if (preloader && content) {
            // Add fade-out effect
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            
            // After fade completes, hide the preloader completely
            setTimeout(() => {
                preloader.style.display = "none"; // Hide preloader
                content.style.display = "block";  // Show content
                
                // Stop any animations in the preloader if they exist
                const lottiePlayer = preloader.querySelector('dotlottie-player');
                if (lottiePlayer) {
                    try {
                        lottiePlayer.pause();
                    } catch (e) {
                        console.log('Could not pause animation');
                    }
                }
            }, 500);
        }
    }
    
    // If page is already loaded, hide the preloader immediately
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        // Otherwise, hide it when the page finishes loading
        window.addEventListener('load', hidePreloader);
        
        // Fallback: If load event doesn't fire, hide preloader after 3 seconds
        setTimeout(hidePreloader, 3000);
    }
});
