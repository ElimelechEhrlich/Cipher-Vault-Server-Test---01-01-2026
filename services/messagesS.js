

export function reverseAndUppercaseText(text) {
    const textToArray = text.split("")
    console.log(textToArray);
    const reversedText = textToArray.reverse()
    const encryptedText = reversedText.join("").toUpperCase()
    return encryptedText
}

export function reverseAndtoLowerCaseText(text) {
    const textToArray = text.split("")
    console.log(textToArray);
    const reversedText = textToArray.reverse()
    const encryptedText = reversedText.join("").toLowerCase()
    return encryptedText
}


