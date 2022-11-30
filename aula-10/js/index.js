let studentId = null
let studentList = []

const start = () => {
    loadLocalStorageItems()

    const saveBtn = document.getElementById('saveBtn')
    saveBtn.onclick = saveBtnEvent
}

const saveBtnEvent = () => {
    const inputArray = createArrayWithInputs()
    const student = createStudentObject(inputArray)

    if (!studentId) {
        student.id = (new Date()).getTime()
        studentList.push(student)
    } else {
        const index = studentList.findIndex(student => student.id == studentId)
        studentList[index].name = student.name
        studentList[index].email = student.email
        studentList[index].cellphone = student.cellphone
        studentList[index].birthday = student.birthday
    }

    mountTable()
    inputArray.forEach(aux => aux.value = '')
    saveLocalStorage()
    studentId = null
}

const mountTable = () => {
    const table = document.getElementById('studentTable')
    const tBody = table.tBodies[0]
    tBody.innerHTML = ''
    
    studentList.forEach(student => {
        const newLine = document.createElement('tr')
        createTableData(newLine, student.name)
        createTableData(newLine, student.email)
        createTableData(newLine, student.cellphone)
        createTableData(newLine, student.birthday)
        createActionButton('Editar', editStudent, newLine, student.id)
        createActionButton('Remover', removeStudent, newLine, student.id)
        tBody.appendChild(newLine)
    })
}

const editStudent = event => {
    const editBtn = event.target
    const td = editBtn.parentNode
    const tr = td.parentNode
    studentId = editBtn.id

    const inputArray = createArrayWithInputs()
    inputArray.forEach((input, index) => {
        input.value = tr.childNodes[index].innerHTML
    })
}

const removeStudent = event => {
    const removeBtn = event.target

    const index = studentList.findIndex(student => student.id == removeBtn.id)
    console.log(index)
    studentList.splice(index, 1)
    saveLocalStorage()
    mountTable()
}

const createArrayWithInputs = () => {
    const inputName = document.getElementById('name')
    const inputEmail = document.getElementById('email')
    const inputCellPhone = document.getElementById('cellphone')
    const inputBirthday = document.getElementById('birthday')
    return [inputName, inputEmail, inputCellPhone, inputBirthday]
}

const createActionButton = (inputValue, clickEventCallback, newLine, id) => {
    const td = document.createElement('td')
    button = document.createElement('input')
    button.type = 'button'
    button.value = inputValue
    button.onclick = clickEventCallback
    button.id = id
    td.appendChild(button)
    newLine.appendChild(td)
}

const createStudentObject = inputArray => {
    return {
        name: inputArray[0].value,
        email: inputArray[1].value,
        cellphone: inputArray[2].value,
        birthday:  inputArray[3].value
    }
}

const createTableData = (newLine, inputValue) => {
    const td = document.createElement('td')
    const tdContent = document.createTextNode(inputValue)
    td.appendChild(tdContent)
    newLine.appendChild(td)
}

const saveLocalStorage = () => {
    localStorage.setItem('STUDENTS', JSON.stringify(studentList))
}

const loadLocalStorageItems = () => {
    const items = localStorage.getItem('STUDENTS')
    if (items) {
        studentList = JSON.parse(items)
        mountTable()
    }
}

start()