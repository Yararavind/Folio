// show menu

const showmenu = (toggleiId, navId) =>{
    const toggle= document.getElementById(toggleiId),
    nav = document.getElementById(navId)
    if(toggle && nav){
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show')
    });
    }
}

showmenu('nav_toggle','nav_menu')

// active & remove active 
const navLink= document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))

function linkaction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navmenu =document.getElementById('nav_menu')
    navmenu.classList.remove('show')
}

    navLink.forEach(n=> n.addEventListener('click', linkaction))