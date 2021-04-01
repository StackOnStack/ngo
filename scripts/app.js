const hamburgerMenu = document.getElementById("hamburger-menu");

const cancelMenu = document.getElementById("cancel-menu");

const navBar = document.getElementById("mobile-navbar");

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.style.visibility="hidden";
    navBar.style.display="block";
});

cancelMenu.addEventListener("click", function(){
    navBar.style.display="none";
   
});

let slow = setInterval(()=>{
    if(window.screen.width >768){
        hamburgerMenu.style.visibility="hidden";
        console.log("hello");
    }else{
        hamburgerMenu.style.visibility="visible";
    }
}, 10);
