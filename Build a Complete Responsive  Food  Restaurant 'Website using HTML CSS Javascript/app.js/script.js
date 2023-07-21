let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
const sr= ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2500,
    reset:true
})

ScrollReveal().reveal('.home-text', { delay: 500 });
ScrollReveal().reveal('.home-img ', { delay: 2000 });