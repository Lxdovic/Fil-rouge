import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app')




















var burger = document.getElementById('burger')
var mobile_menu = document.getElementById('mobile-menu')
var menu_svg_hidden = document.getElementById('menu-svg-hidden')
var menu_svg_visible = document.getElementById('menu-svg-visible')

burger.onclick = e => {
    if (mobile_menu.classList.contains('hidden')) {
        mobile_menu.classList.remove('hidden')
        mobile_menu.classList.add('visible')
        menu_svg_hidden.classList.remove('hidden')
        menu_svg_hidden.classList.add('visible')
        menu_svg_visible.classList.remove('visible')
        menu_svg_visible.classList.add('hidden')
    }

    else if (mobile_menu.classList.contains('visible')) {
        mobile_menu.classList.remove('visible')
        mobile_menu.classList.add('hidden')
        menu_svg_hidden.classList.remove('visible')
        menu_svg_hidden.classList.add('hidden')
        menu_svg_visible.classList.remove('hidden')
        menu_svg_visible.classList.add('visible')
    }
}
