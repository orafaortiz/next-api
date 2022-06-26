import connect from "../../../utils/database"

async function handler(request, response) {
    try {
        const {db} = await connect()

        const data = {
            username: request.body.username,
            password: request.body.password,
            email: request.body.email,
            // username: 'janedoe',
            // password: 'password',
            // email: 'jane@site.com',
        }
        
        const user = await db.collection('users').insertOne(data)

        response.json(user)

    } catch (error) {
        console.log(error)
    }

    finally {
        const {client} = await connect()
        client.close()
    }
}

export default handler