import Title from '@components/common/title'
import Label from '@components/form/label'
import { useState } from 'react'

import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'

import { addLocale } from 'primereact/api'

import { getUnique, 
         getDataDropdown, 
         getLastMidnight, 
         getNextMidnight, 
         buildObjectDatePicker,
         convertTimestamp } from '@lib/utils'

export default function BookingFilter({cabins, styles, message, locale, onChange, onClick}){

    const [startDate, setStartDate] = useState(getLastMidnight())
    const [endDate, setEndDate] = useState(getNextMidnight())

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    })

    let people = getUnique(cabins, 'capacity', true)
    people = getDataDropdown(people, message.all)

    return (
        <>
            <section className={styles.filterContainer}>
                <Title style={styles.title} 
                       text={message.booking} />
                <div className={styles.titleProvisional}>Web en pruebas, contactar 620419157</div>
                <form className={styles.filterForm}>
                    <div className={styles.formGroup}>
                            <Label htmlFor='checkin'
                                style={styles.formGroupLabel}>
                                {message.date_checkin}
                            </Label>
                            <Calendar id='checkin'
                                      value={startDate}
                                      name='checkin' 
                                      locale={locale}
                                      dateFormat='dd/mm/yy'
                                      onChange={(e) => 
                                        { setStartDate(e)
                                        e = buildObjectDatePicker({name:'checkin', value:convertTimestamp(e)})   
                                        onChange(e)}} 
                                        minDate={getLastMidnight()}  />
                            <Label htmlFor='checkout'
                                style={styles.formGroupLabel}>
                                {message.date_checkout}
                            </Label>
                            <Calendar id='checkout'
                                      value={endDate}
                                      name='checkout' 
                                      locale={locale}
                                      dateFormat='dd/mm/yy'
                                      onChange={(e) => 
                                        { e.preventDefault() 
                                        setEndDate(e)
                                        e = buildObjectDatePicker({name:'checkout', value:convertTimestamp(e)})  
                                        onChange(e)}}
                                        minDate={getNextMidnight()}  />
                    </div>
                    <Button label={message.check_availability}
                            className={styles.buttonFilter}
                            onClick={onClick} />
                </form>
            </section>
        </>
    )
}
