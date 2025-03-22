document.addEventListener("DOMContentLoaded", function () {
    // Wait for the entire page (including images) to load
    window.addEventListener("load", function () {
        let preloader = document.getElementById("preloader");
        let content = document.getElementById("content");

        if (preloader && content) {
            setTimeout(() => {
                preloader.style.display = "none"; // Hide preloader
                content.style.display = "block";  // Show content
            }, 1000); // Delay for smooth transition
        }
    });
});