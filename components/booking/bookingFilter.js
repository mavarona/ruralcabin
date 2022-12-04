import Title from '@components/common/title'

import { callPhone } from '@lib/utils'

export default function BookingFilter({cabins, styles, message, locale, onChange, onClick}){

    return (
        <>
            <section className={styles.filterContainer}>
                <Title style={styles.title} 
                       text={message.booking} />
                <div className={styles.titleProvisional}>Si quiere agilizar su reserva llamar al <div className={styles.titleProvisionalLink} onClick={callPhone}>620419157</div></div>
            </section>
        </>
    )
}
