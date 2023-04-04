//auto-text effect 
const textEl = document.getElementById('text')
const text = 'shop for clothing'
let idx = 1
let speed = 300 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, 300)
}

//navbar
let navbar = document.querySelector(".navbar");

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}




