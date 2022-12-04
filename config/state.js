import { getLastMidnight, 
  getNextMidnight } from '@lib/utils'
import { ALL } from '@config/globals'

export function initialStateContact() {
    return {
     title: '',
     email: '',
     name: '',
     phone: '',
     text: ''
   }
}

export function initialStateFilterCabins(maxPrice) {
  return {
    capacity: ALL,
    price: maxPrice
  }
}

export function initialStateFilterBooking() {
  return {
    capacity: ALL,
    'checkin': getLastMidnight(true),
    'checkout': getNextMidnight(true)
  }
}

export function initialStateBooking(from = '', to = '', total = 0, cabin='') {
  return {
    from,
    to,
    total,
    cabin,
    name: '',
    phone: '',
    email: '',
    comment: '',
    default_price_booking: '',
    total_discount: 0
 }
}
