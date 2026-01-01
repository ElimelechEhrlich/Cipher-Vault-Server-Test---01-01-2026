import { getUserByUserName } from "../DAL/usersDAL.js";

async function validateFieldsInbody(req, res, next) {
    try {
        if (req.body.username && req.body.password ) {
            next()    
        }
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function validateTypes(req, res, next) {
    try {
        const {username, password} = req.body
        if ((typeof (username) === "string") && (typeof (password) === "string")) {
            next()
        }
        else res.json("one of values in body is not text.")
    } catch (error) {
        res.status(500).json({ error })  
    }
}

const isUserNotExsist = async (req, res, next) => {
    try {
        const result = await getUserByUserName(req.body.username)       
        if (!result) next()
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).send(error)    
    }
}

const UserAuthentication = async (req, res, next) => {
    try {
        const result = await getUserByUserName(req.body.username)       
        console.log(result);
        
        if (result) {
            if(req.body.password === result.password) next()
            else res.status(401).json({message: "User is not verified."})
        }
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).send(error)    
    }
}

export {
    validateFieldsInbody,
    validateTypes,
    isUserNotExsist,
    UserAuthentication
}