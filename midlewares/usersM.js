import { getUserByUserName } from "../DAL/usersDAL.js";
import supabase from "../db/supabaseDbConnection.js";

async function validateFieldsInBody(req, res, next) {
    try {
        if (req.body.username && req.body.password ) {
            next()    
        }
        else res.sendStatus(409)
    } catch (error) {
        console.log("validateFieldsInBody catch");
        res.status(500).json({ error })
    }
}

async function validateUserToNext (req, res, next) {
    if ((req.body.username) && (req.body.password)) {
        try {
            const {username, password} = req.body
            const result = await validateuser(username, password)
            if (result.length > 0) {
                next()
            }
            else res.json({ massege: "Wrong password"  })
        } catch (error) {
            console.error(error)
            res.status(500).json({error})
        }
    }
    else res.sendStatus(400)
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
        console.log("isUserNotExsist catch")
        console.log(error);
        
        res.status(500).send(error)    
    }
}

const UserAuthentication = async (req, res, next) => {
    try {
        const result = await getUserByUserName(req.body.username)       
        if (result) {
            if(req.body.password === result.password) next()
            else res.status(401).json({message: "User is not verified."})
        }
        else res.sendStatus(409)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)    
    }
}

export {
    validateFieldsInBody,
    validateTypes,
    isUserNotExsist,
    validateUserToNext,
    UserAuthentication
}