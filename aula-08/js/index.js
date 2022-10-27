let moveRight = true
let intervalId

const start = () => {
    const button = document.getElementById('btnChangeColor')
    button.onclick = clickButtonEvent

    const btnMoveLeftImage = document.getElementById('btnLeft')
    btnMoveLeftImage.onclick = moveLeftImageEvent

    const btnMoveRightImage = document.getElementById('btnRight')
    btnMoveRightImage.onclick = moveRightImageEvent

    const btnStartMoveImage = document.getElementById('btnPlay')
    btnStartMoveImage.onclick = startMoveImageEvent

    const btnPauseMoveImage = document.getElementById('btnPause')
    btnPauseMoveImage.onclick = pauseMoveImageEvent
}

const clickButtonEvent = () => {
    const par = document.getElementById('p1')
    par.style.color = 'blue'
    par.style.backgroundColor = 'green'

    let currentFontSize = par.style.fontSize
    currentFontSize = currentFontSize.replace('px', '')
    currentFontSize = parseInt(currentFontSize, 10)
    if (currentFontSize < 12) {
        par.style.fontSize = '12px'
    } else if (currentFontSize < 20) {
        par.style.fontSize = (currentFontSize + 2) + 'px'
    }
}

const moveLeftImageEvent = () => {
    moveImage(-5)
}

const moveRightImageEvent = () => {
    moveImage(5)
}

const moveImage = marginLeftValue => {
    const image = document.getElementById('everestImage')
    let currentMarginValue = image.style.marginLeft
    if (!currentMarginValue || currentMarginValue == '') {
        currentMarginValue = '0'
    }
    currentMarginValue = currentMarginValue.replace('px', '')
    currentMarginValue = parseInt(currentMarginValue, 10)
    image.style.marginLeft = (currentMarginValue + marginLeftValue) + 'px'
}

const startMoveImageEvent = () => {
    intervalId = setInterval(() => {
        const image = document.getElementById('everestImage')
        let currentMarginValue = image.style.marginLeft
        if (currentMarginValue == '500px') {
            moveRight = false
        } else if (!currentMarginValue || currentMarginValue == '0px') {
            moveRight = true
        }
        
        const value = moveRight ? 5 : -5
        moveImage(value)
    }, 150)
}

const pauseMoveImageEvent = () => {
    clearInterval(intervalId)
}

start()