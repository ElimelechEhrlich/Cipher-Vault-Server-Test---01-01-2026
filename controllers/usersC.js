import { getUserByUserName, insertData } from "../DAL/usersDAL.js"


async function addUser(req, res) {
    try {
        const { username, password } = req.body
        if (username && password) {
            const result = await insertData({ username, password, encryptedMessagesCount: 0, createdAt: Date() })
            res.json(result)
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function getUserByUsername(req, res) {
    try {
        const user = await getUserByUserName(req.body.username)
        if (user) res.json({username: user.username, encryptedMessagesCount: user.encryptedMessagesCount})
        else res.status(404).json({message: "user is not depind."})
    } catch (error) {
        res.status(500).json(error)
    }
}


export {
    addUser,
    getUserByUsername,
}