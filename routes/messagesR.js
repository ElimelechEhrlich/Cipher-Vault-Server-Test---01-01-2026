import express from "express"
import { UserAuthentication, validateFieldsInbody } from "../midlewares/usersM.js"
import { addMessage } from "../controllers/messagesC.js"
import { validateFieldsInBody } from "../midlewares/messagesM.js"

const router = express.Router()

router.post("/encrypt",validateFieldsInbody, UserAuthentication, validateFieldsInBody, addMessage )
router.post("/decrypt", () => {} )
router.get("/", () => {} )

export default router