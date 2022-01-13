
// hide & show burger menu on click
document.getElementById('toggle').onclick = function() {
    document.getElementById('menu').style.display = this.checked ? 'inherit' : 'none'
    document.getElementById('burger').src = this.checked ? 'assets/images/burger_open.png' : 'assets/images/burger_closed.png' 
}

// resize invisible checkbox for burger menu
window.addEventListener('resize', resize_burger)

function resize_burger() {
    var checkbox = document.getElementById('toggle')
    var burger_style = window.getComputedStyle(document.getElementById('burger'))
    checkbox.style.marginLeft = burger_style.marginLeft
    checkbox.style.marginTop = burger_style.marginTop
    checkbox.style.width = burger_style.width
    checkbox.style.height = burger_style.height
}

// bug correction
setTimeout(() => { resize_burger() }, 100) 
