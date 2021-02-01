const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenuIcon = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function() {
    sideMenuIcon.classList.add('active')
})

hideMenuIcon.addEventListener('click', function() {
    sideMenuIcon.classList.remove('active')
})
