import { Schema, model, models } from 'mongoose'

const InfoSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String
        },
        path: {
            type: String
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Info || model('Info', InfoSchema)