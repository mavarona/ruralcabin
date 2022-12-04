import { Schema, model, models } from 'mongoose'

const CabinSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        price_high: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        jacuzzi: {
            type: Boolean,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        kitchen: {
            type: Boolean,
            required: true,
        },
        tv: {
            type: Boolean,
            required: true,
        },
        wifi: {
            type: Boolean,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        detail: {
            type: String,
            required: true,
        },
        default_price: {
            type: String,
            required: true,
        },
        default_price_high: {
            type: String,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Cabin || model('Cabin', CabinSchema)