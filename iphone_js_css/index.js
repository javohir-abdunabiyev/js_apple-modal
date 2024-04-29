const video = document.querySelector('video')
const body = document.querySelector('body')

body.onscroll = () => {
    video.classList.add('style_for_video')
}