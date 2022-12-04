import { Schema, model, models } from 'mongoose'

const CabinimageSchema = new Schema(
    {
        cabin_id: {
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

export default models.Cabinimage || model('Cabinimage', CabinimageSchema)