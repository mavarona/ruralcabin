import { dbConnect } from '@lib/mongoose'
import Voucher from '@models/voucher'

export async function getVouchers(res) {
    try {

        dbConnect()
        const vouchers = await Voucher.find({enabled: true})
        return vouchers
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}