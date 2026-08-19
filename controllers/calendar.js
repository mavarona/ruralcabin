import { dbConnect } from '@lib/mongoose'
import Calendar from '@models/calendar'

export async function allCalendar() {
    try {
        dbConnect()
        const calendar = await Calendar.find({})
        return JSON.parse(JSON.stringify(calendar))
    } catch (error) {
        return null
    }
}
