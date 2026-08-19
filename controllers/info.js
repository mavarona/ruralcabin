import { dbConnect } from '@lib/mongoose'
import Info from '@models/info'

export async function allInfo(res) {
    try {
        dbConnect()
        const info = await Info.find({})
        return JSON.parse(JSON.stringify(info))
    } catch (error) {
        return null
    }
}
