import { dbConnect } from '@lib/mongoose'
import Specialpack from '@models/specialpack'

export async function getSpecialspack(req, res) {
    try {

        dbConnect()
        /** TODO filter by date */
        const specialspack = await Specialpack.find({})
        return specialspack
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}