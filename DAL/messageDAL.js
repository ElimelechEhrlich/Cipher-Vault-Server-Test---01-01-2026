import connect from "../db/mongoDbConnection.js"
import {ObjectId} from "mongodb"

const messages = connect.collection("messages")

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

export async function getDataById(id) {
    try {
        const result = await messages.findOne({_id: new ObjectId(id)})
        return result
    } catch (error) {
        return {error}    
    }
}

export async function insertData(data) {
    try {
        const result = await messages.insertOne(data)
        return result.insertedId
    } catch (error) {
        return error     
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
