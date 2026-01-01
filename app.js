import express from "express"
import messagesRouter from "./routes/messagesR.js"
import { addUser, getUserByUsername } from "./controllers/usersC.js"
import { isUserNotExsist, UserAuthentication, validateFieldsInbody, validateTypes } from "./midlewares/usersM.js"
import { config } from "dotenv"
config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/messages", messagesRouter)

app.post("/api/auth/register", validateFieldsInbody, isUserNotExsist, validateTypes, addUser )
app.get("/api/users/me", validateFieldsInbody, UserAuthentication, getUserByUsername)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

