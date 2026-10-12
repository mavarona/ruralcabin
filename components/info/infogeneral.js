import Image from 'next/image'
import Link from 'next/link'

const serviceIcons = ['fa-mug-hot', 'fa-wifi', 'fa-hot-tub', 'fa-gift', 'fa-parking', 'fa-mountain', 'fa-utensils', 'fa-charging-station']

export default function InfoGeneral({styles, message}){
    const services = Array.from({length: 8}, (_, index) => message[`infooffer${index + 1}`])

    return (
        <>
            <header className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>{message.info}</h1>
            </header>
            <div className={styles.infoPhoto}>
                <Image src='/cabinmain.jpeg' alt='' layout='fill' objectFit='cover'
                       sizes='(max-width: 767px) 100vw, 1100px' priority />
            </div>
            <div className={styles.infoContent}>
                <div className={styles.infoIntro}>
                    <p>{message.infogeneral1}</p>
                    <p>{message.infogeneral2}</p>
                </div>
                <section className={styles.services} aria-labelledby='included-services'>
                    <h2 id='included-services' className={styles.sectionTitle}>{message.we_offer}</h2>
                    <ul className={styles.serviceList}>
                        {services.map((service, index) => (
                            <li key={index} className={styles.serviceRow}>
                                <span className={styles.serviceIcon} aria-hidden='true'>
                                    <i className={`fas ${serviceIcons[index]}`} />
                                </span>
                                <p>{service}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <p className={styles.equipmentNote}>{message.infogeneral3}</p>
                <div className={styles.infoContact}>
                    <p>{message.infogeneral4}</p>
                    <Link href='/contact'>
                        <a className={styles.primaryButton}>{message.contact}</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
