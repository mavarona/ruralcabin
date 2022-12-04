export default function CabinInfo({cabin, styles, message}){

    const wifi = (cabin.wifi) ? message.wifi: null
    const kitchen = (cabin.kitchen) ? message.kitchen: null
    const tv = (cabin.tv) ? message.tv: null
    const jacuzzi = (cabin.jacuzzi) ? message.jacuzzi: null

    const cabinIcon = `fas fa-home fa-1x`
    const peopleIcon = `fas fa-restroom fa-1x`
    const wifiIcon = `fas fa-wifi fa-1x`
    const kitchenIcon = `fas fa-utensils fa-1x`
    const tvIcon = `fas fa-tv fa-1x`
    const jacuzziIcon = `fas fa-hot-tub fa-1x`

    return (
        <article className={styles.info}>
            <h3>{message.info}</h3>
            { cabin.price_high > 0 && 
                <p>{message.priceHigh}= <span className={styles.infoBold}>{cabin.price_high}€ </span>{message.by_nigth}</p>
            }
            { cabin.price_high <= 0 && 
                <p>{message.priceHigh}</p>
            }
            <p className={styles.infoDesc}>{message.priceHighDesc}</p>
            { cabin.price > 0 && 
                <p className={styles.infoMargin}>{message.priceLow}= <span className={styles.infoBold}>{cabin.price}€ </span>{message.by_nigth}</p>
            }
            <div className={styles.infoDiv}>
                <p className={styles.infoMarginSup}><i className={cabinIcon}></i> {cabin.size} {message.m}<sup>2</sup></p>
                <p className={styles.infoMarginRigth}><i className={peopleIcon}></i> {cabin.capacity} {message.people}</p>
            </div>
            <div className={styles.infoDiv}>
                <p><i className={wifiIcon}></i> {wifi}</p>
                {kitchen && <p className={styles.infoMarginRigth}><i className={kitchenIcon}></i> {kitchen}</p>}
            </div>
            <div className={styles.infoDiv}>
                <p><i className={tvIcon}></i> {tv}</p>
                {jacuzzi && <p className={styles.infoMarginRigth}><i className={jacuzziIcon}></i> {jacuzzi}</p>}
            </div>
        </article>
    )           
}