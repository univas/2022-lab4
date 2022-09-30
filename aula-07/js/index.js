const saveButton = document.getElementById('saveBtn')
if (saveButton) {
    saveButton.onclick = function() {
        const inputName = document.getElementById('name')
        alert(inputName.value)
    }
}

