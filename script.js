const navIcon = document.querySelector('.nav-icon')
const closeNavIcon = document.querySelector('.close-nav-icon')
const icons = document.querySelectorAll('.icons')
const navigation = document.querySelector('.navigation-ul')

icons.forEach(icon =>{
    icon.addEventListener('click', e =>{
        navIcon.classList.toggle('hidden')
        closeNavIcon.classList.toggle('hidden')
        navigation.classList.toggle('active')
    })
})

