const start = () => {
    const addButton = document.getElementById('addButton')
    addButton.onclick = createNewGuest
}

const createNewGuest = () => {
    const inputGuestName = document.getElementById('guestName')
    const newItem = createListItem(inputGuestName.value)
    const list = document.getElementById('guestList')
    list.appendChild(newItem)

    clearAndFocusInputElement(inputGuestName)
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

start()