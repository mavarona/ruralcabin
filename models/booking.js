import { Schema, model, models } from 'mongoose'

const BookingSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        bookingstate: {
            type: Schema.Types.ObjectId,
            required: true
        },
        cabin: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        total_discount: {
            type: Number,
            required: true,
        },
        from: {
            type: Date,
            required: true,
        },
        to: {
            type: Date,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        default_price_booking: {
            type: String,
            required: true,   
        },
        comment: {
            type: String
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Booking || model('Booking', BookingSchema)