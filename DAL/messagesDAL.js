import supabase from "../db/supabaseDbConnection.js";

async function getAllUsers() {
    const { data, error } = await supabase.from("users").select("*")
    if (error) throw error
    return data
}

async function insertTo(username, cipher_type, encrypted_text) {
    const { data, error } = await supabase.from("messages").insert({ username, cipher_type, encrypted_text }).select().single()
    if (error) {
        console.log(error);
        throw error    
    }
    return data
}


export async function updateEncryptedMessagesCountByUser(username, encryptedMessagesCount) {
    const { data, error } = await supabase.from('messages')
    .update({encryptedMessagesCount})
    .eq('username',username)
    .select("")
    .single()
    if (error) throw error
    return data
}

async function getUserById(id) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", id)
            .single()
        if (error) throw error
        return data
    } catch (error) {
        res.status(500).json({ error })
    }
}        

const validateuser = async (username, password) => {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("username", username)
            .eq("password", password)
        if (error) throw error
        return data
    } catch (error) {
        throw error
    }
}


async function getUserByUsername(username) {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single()
    if (error) throw error
    return data
}

export {
    validateuser,
    insertTo,
    getUserById,
    getUserByUsername
}