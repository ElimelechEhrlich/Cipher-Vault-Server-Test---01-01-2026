import { getData, insertData, updateDataById, deleteDataById, getDataByUserId } from "../DAL/usersDAL.js"
import { getUserById, getUserByUsername } from "../DAL/messagesDAL.js"

async function addMessage(req, res) {
    try {
        const { content } = req.body
        const user = await getUserByUsername(req.body.username)
        const result = await insertData({ userId: user.id, username: req.body.username, content })
        res.json({ insertid: result })
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