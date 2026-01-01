import { reverseAndtoLowerCaseText, reverseAndUppercaseText } from "../services/messagesS.js"
import { getUserByUserName } from "../DAL/usersDAL.js"
import { insertTo } from "../DAL/messagesDAL.js"

async function addMessage(req, res) {
    try {
        const { message, cipher_type } = req.body
        const encrypted_text = reverseAndUppercaseText(message)
        const username = req.body.username
        const result = await insertTo(username, cipher_type, encrypted_text)
        const user = await getUserByUserName(req.body.username)
        await updateEncryptedMessagesCountByUser(user.username, user.encryptedMessagesCount + 1)
        res.json({id: result.id, cipher_type: result.cipher_type, encrypted_text: result.encrypted_text})
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function decryptMessage(req, res) {
    try {
        reverseAndtoLowerCaseText(req.body.messageId)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export {
    addMessage,
    decryptMessage
}