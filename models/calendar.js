import { Schema, model, models } from 'mongoose'

const CalendarSchema = new Schema(
    {
        season: {
            type: String,
            required: true,
        },        
        from: {
            type: Date,
            required: true,
        },
        to: {
            type: Date,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Calendar || model('Calendar', CalendarSchema)