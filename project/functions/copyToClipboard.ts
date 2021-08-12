const copyToClipboard = (text: string): void => {
    let textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
}

export default copyToClipboard;