import { Schema, model, models } from 'mongoose'

const SpecialpackSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        info: {
            type: String,
            required: true,
        },
        cost: {
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

export default models.Specialpack || model('Specialpack', SpecialpackSchema)