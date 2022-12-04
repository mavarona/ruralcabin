import Title from '@components/common/title'
import { useState } from 'react'

import { addLocale } from 'primereact/api'

import { getUnique, 
         getDataDropdown, 
         getLastMidnight, 
         getNextMidnight } from '@lib/utils'

export default function BookingFilter({cabins, styles, message, locale, onChange, onClick}){

    return (
        <>
            <section className={styles.filterContainer}>
                <Title style={styles.title} 
                       text={message.booking} />
                <div className={styles.titleProvisional}>Si quiere agilizar su reserva llamar al 620419157</div>
            </section>
        </>
    )
}
