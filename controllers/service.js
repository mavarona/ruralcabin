import { dbConnect } from '@lib/mongoose'
import Service from '@models/service'

export async function allServices(res) {
    try {
        dbConnect()
        const services = await Service.find({})
        return services
    } catch (error) {
        return null
    }
}