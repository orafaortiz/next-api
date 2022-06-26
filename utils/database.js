import {MongoClient} from 'mongodb'

const database_url = process.env.DATABASE_URL

const client = new MongoClient(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function connect() {
    try {
        await client.connect()
        console.log("Connected correctly to server");
        
        const db = client.db("negocios")
        
        return {db, client}
    } catch (error) {
        console.log(error.stack)
    }
}

export default connect

