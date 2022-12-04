import { dbConnect } from '@lib/mongoose'
import Specialpackimage from '@models/specialpackimage'
import mongoose from 'mongoose'

export async function getImages(req, select) {
    try {
        const { query: { id } } = req
        dbConnect()

        let images = null

        if (select) {
            images = await Specialpackimage.find({cabin_id: mongoose.Types.ObjectId(id)}).select(select)
        } else {
            images = await Specialpackimage.find({cabin_id: mongoose.Types.ObjectId(id)})
        }

        return images

    } catch (error) {
        return null
    }
}