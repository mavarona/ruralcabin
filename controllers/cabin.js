import { dbConnect } from '@lib/mongoose'
import Cabin from '@models/cabin'

export async function getCabins(res) {
    try {

        dbConnect()
        const cabins = await Cabin.find({}).sort({ price: 1 })

        return res.json({
            message: JSON.parse(JSON.stringify(cabins)),
            success: true,
        })
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

export async function getCabin(req, select) {
    try {
        const { query: { id } } = req
        dbConnect()

        let cabin = null

        if (select) {
            cabin = await Cabin.findById(id)
                               .select(select)
        } else {
            cabin = await Cabin.findById(id)
        }

        return cabin

    } catch (error) {
        return null
    }
}