import supabase from "../db/supabaseDbConnection.js";

async function getAllUsers() {
    const { data, error } = await supabase.from("users").select("*")
    if (error) throw error
    return data
}

async function insertTo(username, password) {
    const { data, error } = await supabase.from("users").insert({ username, password }).select()
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

const validateUser = async (username, password) => {
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
    validateUser,
    insertTo,
    getUserById,
    getUserByUsername
}