import { config } from "dotenv"
import { MongoClient, Db } from "mongodb"
config()

const client = new MongoClient(process.env.MONGO_DB_CONNECTION)

/**
 * @type {Db || null}
 */
let db = null
/**
 * @returns {Promise<Db>}
 */
async function getConnect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("start_mongo");
            console.log("DB Connected");
        }
        return db
    } catch (error) {
        console.error(error)
    }
}

const connect = await getConnect()

export default connect;