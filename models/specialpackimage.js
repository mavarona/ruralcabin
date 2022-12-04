import { Schema, model, models } from 'mongoose'

const SpecialpackimageSchema = new Schema(
    {
        specialpack_id: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Specialpackimage || model('Specialpackimage', SpecialpackimageSchema)