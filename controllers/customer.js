import { dbConnect } from '@lib/mongoose'
import Customer from '@models/customer'

export async function addCustomer(req) {

    dbConnect()

    const {name, phone, email} = req.body
    const customer = new Customer({name, phone, email})

    try {
        let customerInserted = await Customer.find({email: email}) 

        if (!customerInserted || customerInserted.length === 0) {
            customerInserted = await customer.save()
        }

        return {error: false, message: 'ok', customerInserted}
    } catch (error) {
        return {error: true, message: error.message, customerInserted}
    }
}