import { Schema, model, models } from 'mongoose'

const BookingstateSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            unique: true
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Bookingstate || model('Bookingstate', BookingstateSchema)