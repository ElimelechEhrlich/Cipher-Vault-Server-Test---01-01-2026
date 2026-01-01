import express from "express"
import { addMessage, deleteMessageById, getMessageByUser, getMessagesSortedByCreated_at, updateMessageById } from "../controllers/messagesC.js"
import { validateFieldsInBody, validateUsersMessage } from "../midlewares/messagesM.js"
import { validateUserToNext } from "../midlewares/usersM.js"



const router = express.Router()

router.post("/encrypt", validateUserToNext, validateFieldsInBody, addMessage)
router.post("/decrypt", validateUserToNext, validateFieldsInBody, addMessage)
router.get("/", validateUserToNext, getMessagesSortedByCreated_at)

export default router