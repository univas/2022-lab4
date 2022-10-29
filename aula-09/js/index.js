const start = () => {
    const newElementButton = document.getElementById('newElement')
    newElementButton.onclick = addNewElement2

    const removeElementButton = document.getElementById('deleteElement')
    removeElementButton.onclick = removeDiv
}

const addNewElement = () => {
    const paragraphContent = document.createTextNode('Hello World!!!')
    const newP = document.createElement('p')
    newP.appendChild(paragraphContent)
    const div = document.getElementById('content')
    div.appendChild(newP)
}

const addNewElement2 = () => {
    const div = document.getElementById('content')
    div.innerHTML += '<p>Hello World!!!</p>'
}

const removeDiv = () => {
    const div = document.getElementById('content')
    const body = div.parentNode
    body.removeChild(div)
}

start()