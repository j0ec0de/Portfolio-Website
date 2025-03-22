document.addEventListener("DOMContentLoaded", function () {
    const projectHeading = document.querySelector(".projects-section h2");

    function revealHeading() {
        const headingPosition = projectHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (headingPosition < windowHeight * 0.8 && headingPosition > 0) { // Adjust for earlier animation trigger
            projectHeading.classList.add("show");
        } else {
            projectHeading.classList.remove("show");
        }
    }

    window.addEventListener("scroll", revealHeading);
    revealHeading(); // Run on load in case it's already in view
});
