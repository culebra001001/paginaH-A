let sound = new Audio('../../Loco Y Tumbado.mp3')
const panels = document.querySelectorAll('.panel')
playBtn.addEventListener('click',()=>{sound.play();});

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}