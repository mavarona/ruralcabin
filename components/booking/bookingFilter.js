import Title from '@components/common/title'

import { callPhone } from '@lib/utils'

export default function BookingFilter({cabins, styles, message, locale, onChange, onClick}){

    return (
        <>
            <section className={styles.filterContainer}>
                <Title style={styles.title} 
                       text={message.booking} />
                <div className={styles.titleProvisional}>Si quiere agilizar su reserva</div>
                <div className={styles.titleProvisional} onClick={callPhone}>
                    <i className="fas fa-phone-volume fa-2x"></i>
                    <span className={styles.titleProvisionalLink}>620419157</span>
                </div>
            </section>
        </>
    )
}
