import connect from "../db/mongoDbConnection.js"
import {ObjectId} from "mongodb"

const users = connect.collection("users")

export async function getData() {
    try {
        const result = await messages.find({}).toArray()
        return result
    } catch (error) {
        return {error}    
    }
}

export async function getDataByUserId(id) {
    try {
        const result = await messages.find({userId: id}).toArray()

        return result
    } catch (error) {
        return {error}    
    }
}

export async function getUserByUsername(username) {
    try {
        const result = await users.findOne({username})
        return result
    } catch (error) {
        throw error  
    }
}

export async function insertData(data) {
    try {
        const result = await users.insertOne(data)
        return {id: result.insertedId, username: data.username}
    } catch (error) {
        throw error     
    }
}

export async function updateDataById(id, data = {}) {
    try {
        const result = messages.updateOne({_id: new ObjectId(id)}, {$set: data})
        return result
    } catch (error) {
        return error 
    }
}

export async function deleteDataById(id) {
    try {
        const result = messages.deleteOne({_id: new ObjectId(id)})
        return result
    } catch (error) {
        return error    
    }
}
