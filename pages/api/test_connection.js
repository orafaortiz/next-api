import connect from "../../utils/database"

async function handler(request, response) {
    try {
        const {db} = await connect()

        const user = await db.collection('users').findOne()

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

// audição
// fala
// leitura
// escrita
