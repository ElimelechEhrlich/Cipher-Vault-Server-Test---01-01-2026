
async function validateMessageFieldsInBody(req, res, next) {
    try {
        if (req.body.message && req.body.cipher_type) {
            next()
        }
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function validateDecryptFieldsInBody(req, res, next) {
    try {
        if (req.body.messageId) {           
            next()
        }
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).json({ error })
    }
}


export {
    validateMessageFieldsInBody,
    validateDecryptFieldsInBody
}


