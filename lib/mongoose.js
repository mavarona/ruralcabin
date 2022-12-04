import { connect, connection } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const conn = {
    isConnected: false
}

export async function dbConnect() {

    if (conn.isConnected) return

    const db = await connect(MONGODB_URI)
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", () => {
    console.log('Connected to Database')
})

connection.on('error', (err) => {
    console.log('Error to connect Database: ', err)
})