const doodle = document.getElementById("doodle");
const message = document.getElementById("message");

if(doodle){
    doodle.addEventListener("click", () => {
        message.classList.remove("hidden");
    });
}

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

    let current = 0;

    document.getElementById("next").addEventListener("click", () => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    });

    document.getElementById("prev").addEventListener("click", () => {

        slides[current].classList.remove("active");

        current = (current - 1 + slides.length) % slides.length;

        slides[current].classList.add("active");
    });
}