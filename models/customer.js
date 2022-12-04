import { Schema, model, models } from 'mongoose'

const CustomerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        }
    },
    { 
      timestamps: true,
      versionKey: false 
    }
)

export default models.Customer || model('Customer', CustomerSchema)