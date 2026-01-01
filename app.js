import express from "express"
import messagesRouter from "./routes/messagesR.js"
import { config } from "dotenv"
import { addUser, getUserByUsername } from "./controllers/usersC.js"
import { isUserNotExsist, UserAuthentication, validateFieldsInBody, validateTypes } from "./midlewares/usersM.js"
// import { validateFieldsInBody } from "./midlewares/messagesM.js"
config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/messages", messagesRouter)

app.post("/api/auth/register", validateFieldsInBody, isUserNotExsist, validateTypes, addUser )
app.get("/api/users/me", validateFieldsInBody, UserAuthentication, getUserByUsername)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

