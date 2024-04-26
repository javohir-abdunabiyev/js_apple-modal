const menu_btn = document.querySelector('.menu_btn')
const menu = document.querySelector('dialog')
const close = document.querySelector('.close')

menu_btn.onclick = () => {
    menu.showModal().add('.open')
}

close.onclick = () => {
    menu.close()
}