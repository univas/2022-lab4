const start = () => {
    const saveBtn = document.getElementById('saveBtn')
    saveBtn.onclick = saveStudent
}

const saveStudent = () => {
    const inputName = document.getElementById('name')
    const inputEmail = document.getElementById('email')
    const inputCellPhone = document.getElementById('cellphone')

    const tdName = document.createElement('td')
    const tdEmail = document.createElement('td')
    const tdCellPhone = document.createElement('td')
    const tdUpdate = document.createElement('td')
    const tdRemove = document.createElement('td')

    const tdNameContent = document.createTextNode(inputName.value)
    const tdEmailContent = document.createTextNode(inputEmail.value)
    const tdCellPhoneContent = document.createTextNode(inputCellPhone.value)
    const updateButton = document.createElement('input')
    const removeButton = document.createElement('input')

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
}

start()