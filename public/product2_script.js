const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const purchase = document.getElementById('purchase')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts =  document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)
function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />'
    title.innerHTML = 'Dress Shirt'
    excerpt.innerHTML = 'Dress shirts made with the best tailoring expertise and the finest materials, all ethically sourced in the United States!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'Made by:'
    date.innerHTML = 'Jean Paul'
    purchase.innerHTML = '<input type = "number" min = "0" value = "1"><button type = "button" class = "animated-ng btn">Add to Cart</button>'
    
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
    
