const open_window = document.querySelector('.modal')
const modal = document.querySelector('dialog')
const close_btn = document.querySelector('.close')


open_window.onclick = () => {
    modal.showModal()
}

close_btn.onclick = () => {
    modal.close()
}


