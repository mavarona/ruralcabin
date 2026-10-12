export default function CabinInfo({cabin, styles, message}) {
    const amenities = [
        {available: cabin.wifi, text: message.wifi, icon: 'fa-wifi'},
        {available: cabin.kitchen, text: message.kitchen, icon: 'fa-utensils'},
        {available: cabin.tv, text: message.tv, icon: 'fa-tv'},
        {available: cabin.jacuzzi, text: message.jacuzzi, icon: 'fa-hot-tub'}
    ].filter(item => item.available)

    return (
        <article className={styles.info}>
            <h2>{message.info}</h2>
            <dl className={styles.rateList}>
                <div className={styles.rateRow}>
                    <dt>{message.priceHigh}</dt>
                    {cabin.price_high > 0 && <dd><strong>{cabin.price_high}€</strong> / {message.by_nigth}</dd>}
                </div>
            </dl>
            <p className={styles.seasonNote}>{message.priceHighDesc}</p>
            {cabin.price > 0 && (
                <dl className={styles.rateList}>
                    <div className={styles.rateRow}>
                        <dt>{message.priceLow}</dt>
                        <dd><strong>{cabin.price}€</strong> / {message.by_nigth}</dd>
                    </div>
                </dl>
            )}
            <ul className={styles.cabinFacts}>
                <li><i className='fas fa-home' aria-hidden='true' /> <span>{cabin.size} {message.m}<sup>2</sup></span></li>
                <li><i className='fas fa-restroom' aria-hidden='true' /> <span>{cabin.capacity} {message.people}</span></li>
            </ul>
            {amenities.length > 0 && (
                <ul className={styles.amenityList}>
                    {amenities.map(item => (
                        <li key={item.icon}><i className={`fas ${item.icon}`} aria-hidden='true' /> <span>{item.text}</span></li>
                    ))}
                </ul>
            )}
        </article>
    )
}
