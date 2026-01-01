import { reverseAndUppercaseText } from "../services/messagesS.js"
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

async function getMessagesSortedByCreated_at(req, res) {
    try {
        const result = await getData()
        const data = result.sort((a, b) => b.created_at - a.created_at)
        res.json(data)
    } catch (error) {
        res.status(500).json()
    }
}

async function getMessageByUser(req, res) {
    try {
        const user = await getUserById(req.params.userId)
        console.log(user);
        console.log(typeof user.username);
        console.log(req.body.username);
        console.log(typeof req.body.username);


        if (user.username === req.body.username) {
            const result = await getDataByUserId(user.id)
            console.log(result);

            res.json(result)
        }
        else res.json("This is not your id.")
    } catch (error) {
        res.status(500).json()
    }
}

async function updateMessageById(req, res) {
    try {
        if (req.body.content) {
            const result = await updateDataById(req.params.id, { content: req.body.content })
            res.json({
                message: "message updated",
                result: result
            })
        }
        else res.sendStatus(400)
    } catch (error) {
        res.status(500).json()
    }
}

async function deleteMessageById(req, res) {
    try {
        const result = await deleteDataById(req.params.id)
        res.json({
            message: "message deleted",
            result: result
        })
    } catch (error) {
        res.status(500).json()
    }
}

export {
    addMessage,
    getMessagesSortedByCreated_at,
    getMessageByUser,
    updateMessageById,
    deleteMessageById
}