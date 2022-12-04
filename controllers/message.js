import { dbConnect } from '@lib/mongoose'
import Message from '@models/message'

export async function addMessage(req, customerInserted) {

    dbConnect()

    const {title, text} = req.body 

    const newMessage = {
        title,
        text,
        customer: customerInserted._id
    }

    try {
        const message = new Message(newMessage)
        await message.save()

        return {error: false, message: 'ok'}
    } catch (error) {
        return {error: true, message: error.message}
    }
}