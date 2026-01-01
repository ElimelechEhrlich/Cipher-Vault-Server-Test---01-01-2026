import { insertData } from "../DAL/usersDAL.js"
import { validateuser } from "../DAL/messagesDAL.js"

async function addUser(req, res) {
    try {
        const { username, password } = req.body
        if (username && password) {
            const result = await insertData({ username, password, encryptedMessagesCount: 0, createdAt: Date() })
            console.log(result);
            
            res.json(result)
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function validateUser(req, res) {
    if ((req.body.username) && (req.body.password)) {
        try {
            const { username, password } = req.body
            const result = await validateuser(username, password)
            if (result.length > 0) {
                res.json({ massege: "Login successful" })
            }
            else res.json({ massege: "Wrong password" })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error })
        }
    }
    else res.sendStatus(400)
}

export {
    addUser,
    validateUser
}