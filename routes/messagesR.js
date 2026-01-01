import express from "express"
import { UserAuthentication, validateFieldsInbody } from "../midlewares/usersM.js"
import { addMessage, decryptMessage } from "../controllers/messagesC.js"
import { validateDecryptFieldsInBody, validateMessageFieldsInBody } from "../midlewares/messagesM.js"

const router = express.Router()

router.post("/encrypt",validateFieldsInbody, UserAuthentication, validateMessageFieldsInBody, addMessage )
router.post("/decrypt", validateFieldsInbody, UserAuthentication, validateDecryptFieldsInBody, decryptMessage )
router.get("/", validateFieldsInbody, UserAuthentication,  )

export default router