import { convertDate } from '@lib/utils'

export function getStaticContact(t, styles) {

  return {
    address: process.env.NEXT_PUBLIC_ADDRESS,
    styleLogoLocation: `fas fa-map-marker-alt fa-2x ${styles.logo_location}`,
    phoneText: process.env.NEXT_PUBLIC_PHONE_INFO,
    styleIconPhone: `fas fa-phone-volume fa-2x ${styles.logo_phone}`,
    phoneFormPlaceholder: `${t.phone} (${t.optional})`,
    geolocationPosition: process.env.NEXT_PUBLIC_GEOLOCATION
  }

}

export function getMessageFilter(t) {

  return {
    search_cabin: t.search_cabin,
    guests: t.guests,
    all: t.all,
    price: t.price,
    by_nigth: t.by_nigth
  }

}

export function getMessageList(t) {

  return {
    not_cabins_found: t.not_cabins_found,
    by_nigth: t.by_nigth,
    more_info: t.more_info,
    from: t.from
  }

}

export function getSpecialpackList(t) {

  return {
    not_cabins_found: t.not_cabins_found,
    code: t.code,
    cost: t.cost
  }

}

export function getInfoList(t) {

  return {
    not_info_found: t.not_info_found,
    view_more: t.view_more
  }

}

export function getInfoGeneral(t) {

  return {
    info: t.info,
    infogeneral1: t.infogeneral1,
    infogeneral2: t.infogeneral2,
    we_offer: t.we_offer,
    infooffer1: t.infooffer1,
    infooffer2: t.infooffer2,
    infooffer3: t.infooffer3,
    infooffer4: t.infooffer4,
    infooffer5: t.infooffer5,
    infooffer6: t.infooffer6,
    infooffer7: t.infooffer7,
    infooffer8: t.infooffer8,
    infogeneral3: t.infogeneral3,
    infogeneral4: t.infogeneral4,
    contact: t.contact
  }

}

export function getMessageCabinNotFound(t) {

  return {
    cabin_not_found: t.cabin_not_found
  }

}

export function getMessageCabinDetail(t, detail) {

  return {
    detail: t.detail,
    detailText: detail
  }

}


export function getMessageCabinInfo(t) {

  return {
    by_nigth: t.by_nigth,
    info: t.info,
    jacuzzi: t.jacuzzi,
    kitchen: t.kitchen,
    m: t.m,
    people: t.people,
    price: t.price,
    priceHigh: t.priceHigh,
    priceHighDesc: t.priceHighDesc,
    priceLow: t.priceLow,
    size: t.size,
    square_meter: t.square_meter,
    tv: t.tv,
    wifi: t.wifi
  }

}

export function getMessageBookingFilter(t) {

  return {
    booking: t.booking,
    guests: t.guests,
    all: t.all,
    date_checkin: t.date_checkin,
    date_checkout: t.date_checkout,
    check_availability: t.check_availability
  }

}

export function getMessageBookingList(t) {

  return {
    not_cabins_available: t.not_cabins_available,
    by_nigth: t.by_nigth,
    book: t.book,
    from: t.from
  }

}

export function getMessageTitleBooking(t, query) {
  return `${t.booking_title} ${t.from}: ${convertDate(query.in)}  -  ${t.to}: ${convertDate(query.out)}`
}

export function getMessageTotalBooking(t, total) {
  return `${t.total_price} ${total} €`
}
