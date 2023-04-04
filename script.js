let navbar = document.querySelector(".navbar");

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
