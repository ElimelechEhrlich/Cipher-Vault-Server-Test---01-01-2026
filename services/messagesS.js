

export function reverseAndUppercaseText(text) {
    const textToArray = text.split("")
    console.log(textToArray);
    const reversedText = textToArray.reverse()
    const encryptedText = reversedText.join("").toUpperCase()
    return encryptedText
}
