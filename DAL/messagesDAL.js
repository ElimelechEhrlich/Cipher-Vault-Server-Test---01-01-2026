import supabase from "../db/supabaseDbConnection.js";

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

async function getMessageByUser(username) {
    try {
        const { data, error } = await supabase
            .from("messages")
            .select("*")
            .eq("username", username)
        if (error) throw error
        return data
    } catch (error) {
        res.status(500).json({ error })
    }
}

export {
    insertTo,
    getMessageByUser,

}