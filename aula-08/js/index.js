const start = () => {
    const button = document.getElementById('btnChangeColor')
    button.onclick = clickButtonEvent
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

start()