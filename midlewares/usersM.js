import supabase from "../db/supabaseDbConnection.js";

async function validateFieldsInBody(req, res, next) {
    try {
        if (req.body.username && req.body.password ) {
            console.log("validateFieldsInBody next");
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
            const result = await validateUser(username, password)
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
        console.log( typeof username );
        console.log( typeof password );
        if ((typeof (username) === "string") && (typeof (password) === "string")) {
            next()
        }
        else res.json("one of values in body is not string.")
    } catch (error) {
        res.status(500).json({ error })  
    }
}

const isUserExsist = async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("username", req.body.username)
        if (error) throw error
        if (data.length > 0) next()
        else res.sendStatus(404)
    } catch (error) {
        res.status(500).send(error)    
    }
}

export {
    validateFieldsInBody,
    validateTypes,
    isUserExsist,
    validateUserToNext
}