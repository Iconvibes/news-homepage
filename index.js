const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menu-links');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'none' ;
    menuLinks.style.display = 'block';
});

closeMenu.addEventListener('click', ()=>{
    menuBtn.style.display = 'block' ;
    menuLinks.style.display = 'none';
});

