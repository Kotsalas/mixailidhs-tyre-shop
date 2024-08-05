const menuBtnDiv = document.getElementById("menuBtnDiv");
const smallMenu = document.getElementById("small-menu");
const menuBtn = document.getElementById("menuBtn");

menuBtnDiv.addEventListener("click", function() {
  smallMenu.classList.toggle("open");

  const isOpen = smallMenu.classList.contains("open");
  menuBtn.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
})

smallMenu.addEventListener("click", function() {
    smallMenu.classList.remove("open");

    const isOpen = smallMenu.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
})