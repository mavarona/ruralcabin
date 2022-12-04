import { Schema, model, models } from 'mongoose'

const VoucherSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
        enabled: {
            type: Boolean,
            required: true,
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
)

export default models.Voucher || model('Voucher', VoucherSchema)