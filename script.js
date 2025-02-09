const menuIcon = document.querySelector('.menu_icon');
const mobileNav = document.querySelector('.mobile_nav');


function toggleMobileNav() {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex"
    }else{
        mobileNav.style.display = "none"
    }
}

menuIcon.addEventListener("click", toggleMobileNav );
