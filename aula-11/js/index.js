const start = () => {
    const saveBtn = document.getElementById('saveBtn')
    saveBtn.onclick = getInputName

    const value = localStorage.getItem('USERNAME')
    if (value) {
        alert(`Bem vindo de volta: ${value}`)
    }
}

const getInputName = () => {
    const inputName = document.getElementById('name')
    alert(inputName.value)

    localStorage.setItem('USERNAME', inputName.value)
}

start()
