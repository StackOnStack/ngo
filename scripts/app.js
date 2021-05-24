const hamburgerMenu = document.getElementById("hamburger-menu");

const cancelMenu = document.getElementById("cancel-menu");

const navBar = document.getElementById("mobile-navbar");
/////////////////////////////////////////////////////////////////

const aboutUs = document.getElementById('about-us-link');

const stories = document.getElementById('stories-link');

const blog = document.getElementById('blog-link');

const contact = document.getElementById('contact-link');


hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.style.visibility="hidden";
    navBar.style.display="block";
});

cancelMenu.addEventListener("click", function(){
    navBar.style.display="none";
   
});

aboutUs.addEventListener('click', ()=>{
    navBar.style.display="none";
    aboutUs.href="#about";
})

stories.addEventListener('click', ()=>{
    navBar.style.display="none";
    stories.href="#success-stories";
})

blog.addEventListener('click', ()=>{
    navBar.style.display="none";
    blog.href="#blog";
})

contact.addEventListener('click', ()=>{
    navBar.style.display="none";
    contact.href="#footer";
})

let slow = setInterval(()=>{
    if(window.screen.width >768){
        hamburgerMenu.style.visibility="hidden";
    }else{
        hamburgerMenu.style.visibility="visible";
    }
}, 10);


