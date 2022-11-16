let editRowIndex = -1

const start = () => {
    const saveBtn = document.getElementById('saveBtn')
    saveBtn.onclick = saveStudent
}

const saveStudent = () => {
    const inputName = document.getElementById('name')
    const inputEmail = document.getElementById('email')
    const inputCellPhone = document.getElementById('cellphone')

    if (editRowIndex === -1) { 
        const tdName = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdCellPhone = document.createElement('td')
        const tdUpdate = document.createElement('td')
        const tdRemove = document.createElement('td')

        const tdNameContent = document.createTextNode(inputName.value)
        const tdEmailContent = document.createTextNode(inputEmail.value)
        const tdCellPhoneContent = document.createTextNode(inputCellPhone.value)
        const updateButton = document.createElement('input')
        updateButton.type = 'button'
        updateButton.value = 'Editar'
        updateButton.onclick = editStudent
        const removeButton = document.createElement('input')
        removeButton.type = 'button'
        removeButton.value = 'Remover'
        removeButton.onclick = removeStudent

        tdName.appendChild(tdNameContent)
        tdEmail.appendChild(tdEmailContent)
        tdCellPhone.appendChild(tdCellPhoneContent)
        tdUpdate.appendChild(updateButton)
        tdRemove.appendChild(removeButton)
        
        const newLine = document.createElement('tr')
        newLine.appendChild(tdName)
        newLine.appendChild(tdEmail)
        newLine.appendChild(tdCellPhone)
        newLine.appendChild(tdUpdate)
        newLine.appendChild(tdRemove)

        const table = document.getElementById('studentTable')
        const tBody = table.tBodies[0]
        tBody.appendChild(newLine)
    } else {
        const table = document.getElementById('studentTable')
        const tBody = table.tBodies[0]
        const editRow = tBody.childNodes[editRowIndex - 1]

        editRow.childNodes[0].innerHTML = inputName.value
        editRow.childNodes[1].innerHTML = inputEmail.value
        editRow.childNodes[2].innerHTML = inputCellPhone.value

        editRowIndex = -1
    }

    inputName.value = ''
    inputCellPhone.value = ''
    inputEmail.value = ''
}

const editStudent = event => {
    const editBtn = event.target
    const td = editBtn.parentNode
    const tr = td.parentNode
    editRowIndex = tr.rowIndex

    const inputName = document.getElementById('name')
    const inputEmail = document.getElementById('email')
    const inputCellPhone = document.getElementById('cellphone')

    inputName.value = tr.childNodes[0].innerHTML
    inputEmail.value = tr.childNodes[1].innerHTML
    inputCellPhone.value = tr.childNodes[2].innerHTML
}

const removeStudent = event => {
    const removeBtn = event.target
    const td = removeBtn.parentNode
    const tr = td.parentNode
    const tBody = tr.parentNode
    tBody.removeChild(tr)
}

start()