import styles from '@styles/Booking.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import ErrorMessage from '@components/common/errormessage'
import ButtonLink from '@components/common/buttonlink'
import Title from '@components/common/title'

import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

import { getTranslate } from '@lib/locale'
import { getMessageCabinNotFound, getMessageTitleBooking, getMessageTotalBooking } from '@config/info' 
import { initialStateBooking } from '@config/state'
import { datesDiff, calculateTotal, disabledBookingCabin, isInCalendar, encodeBase64 } from '@lib/utils'

import { Checkbox } from 'primereact/checkbox'
import { Dialog } from 'primereact/dialog'
import Privacypolicy from '@components/common/privacypolicy'

import { Toast } from 'primereact/toast'

import { useData } from '@context/DataContext'
import { checkout } from '@lib/payment'

export default function CabinMakeBooking({id}) {

    const { calendar, cabins } = useData()

    const { query } = useRouter()
    const t = getTranslate(useRouter())
    const toast = useRef(null)

    const days = datesDiff(query.in, query.out)
    const [numDays] = useState(days)

    const calculateSeasonDay = isInCalendar(calendar, query.in, query.out)
    const [isHighSeason] = useState(calculateSeasonDay)

    const cabin = cabins.filter(cabin => cabin._id === id)[0]
    const priceBookingNight = (isHighSeason === true) ? cabin.price_high : cabin.price

    const messageNotFound = getMessageCabinNotFound(t)
    const titleBooking = getMessageTitleBooking(t, query)
    const totalPrice = calculateTotal(numDays, priceBookingNight)

    const lblVocher = `* (${t.apply_voucher})`

    const [booking, setBooking] = useState(initialStateBooking(query.in, query.out, totalPrice, cabin._id))
    const [disabledButton, setDisabledButton] = useState(true)
    const [totalBooking, setTotalBooking] = useState(getMessageTotalBooking(t, totalPrice))
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState(false)


    const styleInputText = `p-float-label ${styles.formInputSpan}`
    const styleCheckbox = `p-float-label ${styles.formCheckboxSpan}`

    useEffect(() => {
        if (isHighSeason === true) {
            setBooking({ ...booking, default_price_booking: cabin.default_price_high })
        } else {
            setBooking({ ...booking, default_price_booking:  cabin.default_price })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      const {name, phone} = booking
      setDisabledButton(disabledBookingCabin(name, phone, privacyPolicy))
      setTotalBooking(getMessageTotalBooking(t, booking.total))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [booking, privacyPolicy])

    const changeBooking = (e) => {
        const {name, value} = e.target
        setBooking(booking => ({
            ...booking,
            [name]: value
        }))
    }

    const makeBooking = () => {
        localStorage.setItem('bk', encodeBase64(JSON.stringify(booking)))
        checkout({lineItems: [{price: booking.default_price_booking, 
                              quantity: numDays}]})
    }

    if (!cabin) {
        return(
            <ErrorMessage styles={styles} 
                message={messageNotFound}>
                <div className={styles.btnPrimary}>
                    <ButtonLink path='/booking'>
                        {t.booking}
                    </ButtonLink> 
                </div>
            </ErrorMessage>
        )
    }

    return (
        <div className={styles.container}>
        <Toast ref={toast} />
        <div className={styles.formBooking}>
            <Title style={styles.formBookingHeader} text={titleBooking} />
            <div className="card">
                <span className={styleInputText}>
                    <InputText id='name'
                                name='name'
                                className={styles.formInputControl} 
                                value={booking.name}  
                                onChange={(e)=>changeBooking(e)} />
                    <label htmlFor='name'>{t.name}</label>
                </span>
                <span className={styleInputText}>
                    <InputText id='phone'
                                name='phone'
                                className={styles.formInputControl} 
                                value={booking.phone}  
                                onChange={(e)=>changeBooking(e)} />
                    <label htmlFor='phone'>{t.phone}</label>
                </span>
                <span className={styleInputText}>
                    <InputTextarea 
                            name='comment'
                            className={styles.formTextareaControl}
                            value={booking.comment} 
                            onChange={(e)=>changeBooking(e)}
                            placeholder={t.comment} 
                            rows={5} cols={30} />
                </span>
                <Title style={styles.formBookingTotal} text={totalBooking} />
                <span className={styleCheckbox}>
                    <div className={styles.divPrivatePolicy}>
                        <Checkbox inputId='privacyPolicy' 
                                name='privacyPolicy' 
                                checked={privacyPolicy} 
                                onChange={()=>setPrivacyPolicy(!privacyPolicy)} />
                        <Button label={t.privacyPolicy}
                                onClick={()=>setDisplayPrivacyPolicy(true)} 
                                className="p-button-text mr-2" />
                        <Dialog header={t.privacyPolicy}
                                visible={displayPrivacyPolicy} 
                                style={{ width: '90vw' }} 
                                modal 
                                onHide={() => setDisplayPrivacyPolicy(false)}>
                                <Privacypolicy />
                        </Dialog>
                    </div>
                </span>
                <span className={styles.formButtonSpan}>
                    <Button label={t.pay}
                            className={disabledButton? styles.formButtonDisabled : styles.formButtonBooking} 
                            onClick={(e)=>makeBooking(e)} />
                </span>
                <Title style={styles.formBookingMessage} text={lblVocher} />
            </div>
        </div>
    </div>  
    )
}

export async function getServerSideProps(ctx) {

    const { id } = ctx.query

    return {
        props: {
            id: id
        },
    }
}