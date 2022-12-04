import { ALL, ID, CABIN, SECONDS_IN_DAY, 
         SECONDS_TO_MILISECONDS, 
         OFFSET_MINUTES, HOURS_IN_DAY,
         SPECIALPACK_ID } from '@config/globals'

export function getUnique(items, value, addAll=false) {
    let data = [...new Set(items.map(item => item[value]))]
    if (addAll) {
        data = [ALL, ...data]
    }
    return data
}

export function fillSelect(data, message) {
    return data.map((item, index) => {
        if (item === ALL) {
          return (
              <option value={item} key={index}>
                {message}
              </option>
            )
        } else {
          return (
              <option value={item} key={index}>
                {item}
              </option>
            )
        }
      })
}

export function getDataDropdown(data, message) {
  const res = []
  data.map(item => {
    if (item === ALL) {
      res.push({'label':message, 'value':item})
    } else {
      res.push({'label':item, 'value':item})
    }
  })
  return res
}

export function getLastMidnight(convertTimestamp=false) {
  let date = new Date()
  const offsetHours = Number(getOffsetHours(date))
  date.setHours(offsetHours,0,0,0)
  if (convertTimestamp===true){
    date = Date.parse(date)/SECONDS_TO_MILISECONDS
  }
  return date 
}

export function getNextMidnight(convertTimestamp=false) {
  let date = new Date()
  const offsetHours = Number(HOURS_IN_DAY) + Number(getOffsetHours(date))
  date.setHours(offsetHours,0,0,0)
  if (convertTimestamp===true){
    date = Date.parse(date)/SECONDS_TO_MILISECONDS
  }
  return date 
}

export function buildObjectDatePicker(props) {
  let obj = {}
  obj.target = {}
  obj.target = {...obj.target, ...props}
  return obj
}

export function convertTimestamp (date) {
  return Date.parse(date.value)/SECONDS_TO_MILISECONDS
}

export function convertDatetime(timestamp) {
  const t = timestamp * SECONDS_TO_MILISECONDS
  return new Date(t)
}

export function convertDate(timestamp) {
  const t = timestamp * SECONDS_TO_MILISECONDS
  const day = new Date(t).getDate()
  const month = new Date(t).getMonth()+1
  const year = new Date(t).getFullYear()
  return `${day}/${month}/${year}`
}

export function datesDiff(from, to) {
  return (to - from) / SECONDS_IN_DAY
}

export function datesDiffFormtDate(from, to) {
  from = parseTimestamp(from)
  to = parseTimestamp(to)
  return (to - from) / SECONDS_IN_DAY
}

export function truncateText (str, n) {
  return (str.length > n) ? str.substr(0, n-1) + '...' : str
}

export function validateEmail (val) {  
  const mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return val.match(mailformat)
}

export function disabledSendEmail (title, message, email, name, privacyPolicy) {
  if(!privacyPolicy){
    return true
  }
  if (title !== '' && message !== '' && email !== '' && name !== '') {
    if (isValidEmail(email)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

export function disabledBookingCabin (name, phone, privacyPolicy) {
  if(!privacyPolicy){
    return true
  }
  if (name !== '' && phone !== '') {
    return false
  } else {
    return true
  }
}

export function callPhone () {
  const phone = process.env.NEXT_PUBLIC_PHONE_CONTACT
  window.open(`tel:${phone}`, '_self')
}

export function openWhatsapp () {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_CONTACT
  return `https://wa.me/${whatsappNumber}` 
}

export function openInstagram () {
  const accountInstagram = process.env.NEXT_PUBLIC_ACCOUNT_INSTAGRAM
  return accountInstagram 
}

export function openFacebook () {
  const accountFacebook = process.env.NEXT_PUBLIC_ACCOUNT_FACEBOOK
  return accountFacebook 
}

export function openTwitter () {
  const accountTwitter = process.env.NEXT_PUBLIC_ACCOUNT_TWITTER
  return accountTwitter 
}

export function openYoutube () {
  const accountYoutube = process.env.NEXT_PUBLIC_ACCOUNT_YOUTUBE
  return accountYoutube 
}

export function calculateMax (data, prop) {
  return Math.max(...data.map(item => item[`${prop}`]))
}

export function filterByCapacity (data, capacity) {
  return (capacity === ALL) ? data : data.filter(item => Number(item.capacity) >= capacity)
}

export function filterCabinsByRangeDate (data, dataBooking, checkin, checkout) {

  const dataCabinsId = plainData(data ,ID)
  let cabinsAvailable = data
  if (!dataCabinsId) {
    return null
  }
  dataCabinsId.forEach(cabinId => {

    const dataBookingByCabinId = dataBooking.filter(booking => booking[CABIN] === cabinId)
    if (dataBookingByCabinId && dataBookingByCabinId.length) {
      if (dataBookingByCabinId[0].hasOwnProperty('bookingstate')){
        if (isBooking (dataBookingByCabinId, checkin, checkout) ) {
          cabinsAvailable = cabinsAvailable.filter(item => item[ID] !== cabinId)
        }
      } else {
        if (isInDatesExternal (dataBookingByCabinId, checkin, checkout) ) {
          cabinsAvailable = cabinsAvailable.filter(item => item[ID] !== cabinId)
        }
      }
    } 
  
  })

  return cabinsAvailable
}

export function calculateTotal(days, price) {
  return days * price
}

export function extractInfoServices(data, t) {
  const res = []
  data.map((item) => {
    res.push({'_id': item._id, 'icon': item.icon, 'title': t[item.title]})
  })
  return res
}

export function hasDiscount(data, code) {
  const res = data.filter(item => item.code === code)[0]
  if(!res) return {discount:0, id:''}
  return {discount:res.discount, id:res._id} 
}

export function getImagesSpecialpack(data, id) {
  const images = data.filter(item => item[SPECIALPACK_ID] === id)
  return images
}

export function isInCalendar (dataCalendar, checkin, checkout) {
  let isCalendar = false
  dataCalendar.forEach(item => {
    const dateFrom = Date.parse(item.from)/SECONDS_TO_MILISECONDS
    const dateTo = Date.parse(item.to)/SECONDS_TO_MILISECONDS
    if ( (checkin >= dateFrom && checkin <= dateTo) || 
         (checkout >= dateFrom && checkout <= dateTo)
       ) {
        isCalendar = true
    }
  })
  return isCalendar
}

export function encodeBase64(data) {
  return btoa(data)
}

export function decodeBase64(data) {
  return atob(data)
}

function isValidEmail (val) {  
  const mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return val.match(mailformat)
}

function plainData (data, prop) {

  if (!data) {
    return null
  }

  return data.map(function(item){
        return item[prop]
    })

}


function isBooking (dataBookingCabin, checkin, checkout) {
  let booking = false
  dataBookingCabin.forEach(item => {
    const dateFrom = Date.parse(item.from)/SECONDS_TO_MILISECONDS
    const dateTo = Date.parse(item.to)/SECONDS_TO_MILISECONDS
    if ( ( dateFrom < checkin && dateTo > checkin ) || 
        ( (dateFrom >= checkin && dateTo > checkin ) && (dateFrom < checkout && dateTo < checkout ) ) || 
        ( dateFrom < checkout && dateTo >= checkout )
       ) {
      booking = true
    }
  })
  return booking
}

function isInDatesExternal (dataBookingCabin, checkin, checkout) {
  let isInDates = false

  const diffSecond = getTimeZoneSeconds()

  dataBookingCabin.forEach(item => {
    const dateFrom = Date.parse(item.from)/SECONDS_TO_MILISECONDS
    const dateTo = Date.parse(item.to)/SECONDS_TO_MILISECONDS
    if (  ( (dateFrom + (diffSecond)) < checkin && (dateTo + (diffSecond)) > checkin ) || 
          ( ((dateFrom + (diffSecond)) >= checkin && (dateTo + (diffSecond)) > checkin) && ((dateFrom + (diffSecond))  < checkout && (dateTo + (diffSecond)) < checkout )) || 
          ( (dateFrom + (diffSecond)) < checkout && (dateTo + (diffSecond)) >= checkout )
       ) {
        isInDates = true
    }
  })
  return isInDates
}

function getTimeZoneSeconds () {
  return new Date().getTimezoneOffset() * 60
}

function getOffsetHours(date) {
  return - (date.getTimezoneOffset() / OFFSET_MINUTES)
}

function parseTimestamp (date) {
  return Date.parse(date.value)/SECONDS_TO_MILISECONDS
}