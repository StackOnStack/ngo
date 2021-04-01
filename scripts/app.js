const bodyTag = document.getElementsByTagName("body");

const hamburgerMenu = document.getElementById("hamburger-menu");

const cancelMenu = document.getElementById("cancel-menu");

const navBar = document.getElementById("mobile-navbar");

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.style.visibility="hidden";
    navBar.style.display="block";
    bodyTag.style.overflow = "hidden";
});

cancelMenu.addEventListener("click", function(){
    navBar.style.display="none";
});