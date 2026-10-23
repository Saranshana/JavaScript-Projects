
alert("JavaScript is connected!");

/* Open the Modal */
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

/* Close the Modal */
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = "";
}

/* Starting slide */
let slideIndex = 1;

/* Next and previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Show the selected image */
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    /* Hide all slides */
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /* Remove active state from all thumbnails */
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    /* Display current slide */
    slides[slideIndex - 1].style.display = "block";

    /* Update thumbnail and caption */
    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");

        if (captionText) {
            captionText.textContent = dots[slideIndex - 1].alt;
        }
    }
}

/* Close the modal by clicking outside the image area */
document.addEventListener("click", function(event) {
    const modal = document.getElementById("myModal");

    if (event.target === modal) {
        closeModal();
    }
});

/* Keyboard controls */
document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("myModal");

    if (!modal || modal.style.display !== "block") {
        return;
    }

    if (event.key === "Escape") {
        closeModal();
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    } else if (event.key === "ArrowLeft") {
        plusSlides(-1);
    }
});
