import { Schema, model, models } from 'mongoose'

const ServiceSchema = new Schema(
    {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Service || model('Service', ServiceSchema)