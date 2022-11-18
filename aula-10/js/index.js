let editRowIndex = -1

const start = () => {
    const saveBtn = document.getElementById('saveBtn')
    saveBtn.onclick = saveBtnEvent
}

const saveBtnEvent = () => {
    const inputArray = createArrayWithInputs()

    if (editRowIndex === -1) { 
        saveNewStudent(inputArray)
    } else {
        saveStudentAlreadyExist(inputArray)
    }

    inputArray.forEach(aux => aux.value = '')
}

const saveNewStudent = inputArray => {
    const newLine = document.createElement('tr')
    inputArray.forEach(input => {
        const td = document.createElement('td')
        const tdContent = document.createTextNode(input.value)
        td.appendChild(tdContent)
        newLine.appendChild(td)
    })

    createActionButton('Editar', editStudent, newLine)
    createActionButton('Remover', removeStudent, newLine)

    const table = document.getElementById('studentTable')
    const tBody = table.tBodies[0]
    tBody.appendChild(newLine)
}

const saveStudentAlreadyExist = inputArray => {
    const table = document.getElementById('studentTable')
    const tBody = table.tBodies[0]
    const editRow = tBody.childNodes[editRowIndex - 1]

    inputArray.forEach((input, index) => {
        editRow.childNodes[index].innerHTML = input.value    
    })

    editRowIndex = -1
}

const editStudent = event => {
    const editBtn = event.target
    const td = editBtn.parentNode
    const tr = td.parentNode
    editRowIndex = tr.rowIndex

    const inputArray = createArrayWithInputs()
    inputArray.forEach((input, index) => {
        input.value = tr.childNodes[index].innerHTML
    })
}

const removeStudent = event => {
    const removeBtn = event.target
    const td = removeBtn.parentNode
    const tr = td.parentNode
    const tBody = tr.parentNode
    tBody.removeChild(tr)
}

const createArrayWithInputs = () => {
    const inputName = document.getElementById('name')
    const inputEmail = document.getElementById('email')
    const inputCellPhone = document.getElementById('cellphone')
    const inputBirthday = document.getElementById('birthday')
    return [inputName, inputEmail, inputCellPhone, inputBirthday]
}

const createActionButton = (inputValue, clickEventCallback, newLine) => {
    const td = document.createElement('td')
    button = document.createElement('input')
    button.type = 'button'
    button.value = inputValue
    button.onclick = clickEventCallback
    td.appendChild(button)
    newLine.appendChild(td)
}

start()