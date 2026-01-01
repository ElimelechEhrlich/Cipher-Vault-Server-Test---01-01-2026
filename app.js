import express from "express"
import messagesRouter from "./routes/messagesR.js"
import { config } from "dotenv"
import { addUser, validateUser } from "./controllers/usersC.js"
import { isUserExsist, validateFieldsInBody, validateTypes } from "./midlewares/usersM.js"
config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/messages", messagesRouter)

app.post("/api/auth/register", validateFieldsInBody, isUserExsist, validateUser)
app.get("/api/users/me", validateFieldsInBody, validateTypes, addUser)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

