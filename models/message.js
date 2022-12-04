import { Schema, model, models } from 'mongoose'

const MessageSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        customer: {
            type: Schema.Types.ObjectId,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Message || model('Message', MessageSchema)