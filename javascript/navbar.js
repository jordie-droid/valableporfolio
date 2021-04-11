const hamburgerMenu = document.querySelector('.nav__menu-small-screen');
const menuSmallScreen = document.querySelector('.navbar-container-small-screen');

// large screen link
const lgl1 = document.querySelector('.lgl1');
const lgl2 = document.querySelector('.lgl2');
const lgl3 = document.querySelector('.lgl3');
const lgl4 = document.querySelector('.lgl4');
const lgl5 = document.querySelector('.lgl5');

// small screen link
const sml1 = document.querySelector('.sml1');
const sml2 = document.querySelector('.sml2');
const sml3 = document.querySelector('.sml3');
const sml4 = document.querySelector('.sml4');
const sml5 = document.querySelector('.sml5');

// hamburger menu
hamburgerMenu.addEventListener('click', function(){
    if(menuSmallScreen.classList.contains('show-menu')){
        menuSmallScreen.classList.remove('show-menu');
    }else{
        menuSmallScreen.classList.add('show-menu');
    }
});

// link large screen
lgl2.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl3.classList.remove('active');
    lgl4.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl2.classList.add('active');
    sml2.classList.add('active-sm');
});

lgl3.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl4.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl3.classList.add('active');
    sml3.classList.add('active-sm');
});

lgl4.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl3.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl4.classList.add('active');
    sml4.classList.add('active-sm');
});

lgl5.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl3.classList.remove('active');
    lgl4.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    lgl5.classList.add('active');
    sml5.classList.add('active-sm');
});

// link small screen
sml2.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl3.classList.remove('active');
    lgl4.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl2.classList.add('active');
    sml2.classList.add('active-sm');
    menuSmallScreen.classList.remove('show-menu');
});

sml3.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl4.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl3.classList.add('active');
    sml3.classList.add('active-sm');
    menuSmallScreen.classList.remove('show-menu');
});

sml4.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl3.classList.remove('active');
    lgl5.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml5.classList.remove('active-sm');
    lgl4.classList.add('active');
    sml4.classList.add('active-sm');
    menuSmallScreen.classList.remove('show-menu');
});

sml5.addEventListener('click', function(){
    lgl1.classList.remove('active');
    lgl2.classList.remove('active');
    lgl3.classList.remove('active');
    lgl4.classList.remove('active');
    sml1.classList.remove('active-sm');
    sml2.classList.remove('active-sm');
    sml3.classList.remove('active-sm');
    sml4.classList.remove('active-sm');
    lgl5.classList.add('active');
    sml5.classList.add('active-sm');
    menuSmallScreen.classList.remove('show-menu');
});