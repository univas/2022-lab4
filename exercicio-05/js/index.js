const start = () => {
    const addButton = document.getElementById('addButton')
    addButton.onclick = createNewGuest
}

const createNewGuest = () => {
    const list = document.getElementById('guestList')
    const inputGuestName = document.getElementById('guestName')
    
    if (validate(list, inputGuestName)) {
        const newItem = createListItem(inputGuestName.value)
        list.appendChild(newItem)
        clearAndFocusInputElement(inputGuestName)
    }
}

const createListItem = contentListItem => {
    const newItem = document.createElement('li')
    const itemTextNode = document.createTextNode(contentListItem)
    newItem.appendChild(itemTextNode)

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Remover'
    deleteButton.onclick = deleteListItemEvent
    newItem.appendChild(deleteButton)

    return newItem
}

const clearAndFocusInputElement = input => {
    input.value = ''
    input.focus()
}

const deleteListItemEvent = event => {
    const input = event.target
    const listItem = input.parentNode
    const list = listItem.parentNode
    list.removeChild(listItem)
}

const validate = (list, input) => {
    return validateInput(input) && 
        validateGuestAlreadyExist(list, input)
}

const validateInput = (input) => {
    if (input.value.trim() === '') {
        alert('Por favor preencha o campo corretamente')
        return false
    }
    return true
}


const validateGuestAlreadyExist = (list, input) => {
    for (let i = 0; i < list.children.length; i++) {
        const item = list.children[i]
        console.log(item.childNodes[0])
        if (input.value == item.childNodes[0].textContent) {
            alert('Convidado já está na lista!')
            return false
        }
    }
    return true
}


start()