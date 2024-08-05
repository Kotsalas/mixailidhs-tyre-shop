const showAllBtn = document.getElementById("showAllBtn");
const brandsUlSmall = document.getElementById("brands-ul-small");
const brandsUlBig = document.getElementById("brands-ul-big");
const arrowIcon = document.getElementById("arrowIcon");
const showAllP = document.getElementById("show-all-p");

showAllBtn.addEventListener("click", function() {
    brandsUlBig.classList.toggle("all");
    brandsUlSmall.classList.toggle("close")

    const isAll = brandsUlBig.classList.contains("all");
    if(isAll){
        showAllP.innerText = "ΛΙΓΟΤΕΡΑ";
    } else {
        showAllP.innerText = "ΠΕΡΙΣΣΟΤΕΡΑ";
    }
    arrowIcon.setAttribute("class", isAll ? "fas fa-arrow-up" : "fas fa-arrow-down");
})