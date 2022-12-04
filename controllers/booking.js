import { getLastMidnight, convertDatetime } from '@lib/utils'
import { ObjectID } from 'bson'

import { dbConnect } from '@lib/mongoose'
import Booking from '@models/booking'

export async function getBookings(res) {
    try {

        dbConnect()

        const bookings = await Booking.find({from: {$gte : getLastMidnight()}})
                                      .sort({ from: 1 })        

        return res.json({
            message: JSON.parse(JSON.stringify(bookings)),
            success: true,
        })
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

export async function setBooking(req, res) {
    
    dbConnect()
    const { email, name, phone, from, to, comment, total, cabin, total_discount, default_price_booking } = req.body
    const bookingstate = '621026dc6c33c55e3cc05b93'
    const newBooking = {
        email,
        name, 
        phone,
        from: convertDatetime(from),
        to: convertDatetime(to),
        comment,
        total,
        bookingstate: ObjectID(bookingstate),
        cabin: ObjectID(cabin),
        total_discount,
        default_price_booking
    }

    const booking = new Booking(newBooking)

    try {
        await booking.save()
            return res.json({
                message: JSON.parse(JSON.stringify(booking)),
                success: true,
            })

    } catch (error) {
        console.error(error)
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}