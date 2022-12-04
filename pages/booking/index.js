import styles from '@styles/Booking.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'
import MessageSearch from '@components/common/messagesearch'

import BookingFilter from '@components/booking/bookingFilter'
import CabinListAvailable from '@components/booking/cabinlistavailable'

import { filterCabinsByRangeDate } from '@lib/utils'
import { getTranslate, getLocale } from '@lib/locale'
import { initialStateFilterBooking } from '@config/state'
import { getMessageBookingFilter, getMessageBookingList } from '@config/info'

import { Dialog } from 'primereact/dialog'
import { useData } from '@context/DataContext'

export default function Booking({ bookings}) {

    const t = getTranslate(useRouter())

    const { cabins, cabinbooked } = useData()

    const messageList = getMessageBookingList(t)

    const [filter,setFilter] = useState(initialStateFilterBooking())
    const [cabinsAvailable, setCabinsAvailable] = useState([])
    const messageFilter = getMessageBookingFilter(t)
    const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState(false)

    useEffect(() => {
        searchCabins()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchCabins = () => {
        const cabinsForBook = cabins.filter(c => c.price > 0)

        // Filter by date
        const resFilterByDate = filterCabinsByRangeDate (cabinsForBook, bookings, filter.checkin, filter.checkout)
        if (cabinbooked.length > 0) {
            // Filter by cabin booked
            const externalBooking = []
            cabinbooked.forEach(item => {
                externalBooking.push({...item, cabin: item.cabin._id})
            })
            resFilterByDate = filterCabinsByRangeDate (resFilterByDate, externalBooking, filter.checkin, filter.checkout)
        }

        setCabinsAvailable(resFilterByDate)
    } 

    const onChange = (e) => {
        if (!e.target) {
            return
        }
        const {name, value} = e.target
        setFilter(filter => ({
            ...filter,
            [name]: value
        }))
    }

    const onClick = (e) => {
        e.preventDefault()
        searchCabins()
    }

    return (
        <>
            <div className="{styles.container}">
                <BookingFilter cabins={cabins}
                        styles={styles}
                        message={messageFilter}
                        locale={getLocale(useRouter())}
                        onChange={onChange}
                        onClick={onClick}
                />
            </div>
        </>
    )

}

export async function getServerSideProps(ctx) {

    let dev = process.env.MODE !== 'production'
    let { DEV_URL, PROD_URL } = process.env
  
    const prefix = dev ? DEV_URL : PROD_URL
    let path =  `${prefix}/api/booking`
  
    let response = await fetch(path)
    const dataBooking = await response.json()
  
    return {
        props: {
            bookings: dataBooking['message']
        }
    }
  }