import { getBookings, setBooking } from '@controllers/booking'
import { addCustomer } from '@controllers/customer'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            let response = await getBookings(res)
            return response
        }
        case 'POST': {
            let resp = await addCustomer(req)
            if (resp.error) {
              console.log('Error save customer', resp.message)
            }
            resp = await setBooking(req, res)
            return resp
        }
    }
}