const imgs = document.querySelectorAll(".slide");
let imgIndex = 0;
let interval = null;

document.addEventListener("DOMContentLoaded", startSlideshow);

function startSlideshow() {

    if(imgs.length > 0) {
        imgs[imgIndex].classList.add("display");
        interval = setInterval(nextSlide, 5000);
    }
}

function currentShownSlide(index) {
    
    if(index >= imgs.length) {
        imgIndex = 0;
    } else if(index < 0) {
        imgIndex = imgs.length - 1;
    }

    imgs.forEach(img => {
        img.classList.remove("display");
    })
    imgs[imgIndex].classList.add("display");
}

function previousSlide() {
    imgIndex--;
    currentShownSlide(imgIndex);
}

function nextSlide() {
    imgIndex++;
    currentShownSlide(imgIndex);
}