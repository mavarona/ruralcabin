import Link from 'next/link'
import SpecialpackGalleryImages from '@components/specialpack/specialpackGalleryImages'

export default function Specialpack({specialpack, images, styles, message}){
    const paragraphs = (specialpack.info || '').split(/\n+/).filter(text => text.trim())
    const isGiftVoucher = /bono regalo/i.test(`${specialpack.code || ''} ${specialpack.title || ''}`)
    const showCost = specialpack.cost && !/^\s*consultar/i.test(specialpack.cost)

    return (
        <article className={styles.offerCard}>
            {images.length > 0 && (
                <SpecialpackGalleryImages images={images}
                    styles={styles} title={specialpack.title} message={message} />
            )}
            <div className={styles.offerBody}>
                <h2 className={styles.offerTitle}>{specialpack.title}</h2>
                <div className={styles.offerDescription}>
                    {paragraphs.map((text, index) => <p key={index}>{text}</p>)}
                </div>
                {showCost && (
                    <dl className={styles.offerDetails}>
                        <div><dt>{message.cost}</dt><dd>{specialpack.cost}</dd></div>
                    </dl>
                )}
                {isGiftVoucher ? (
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <a className={styles.primaryButton}
                            href="https://buy.stripe.com/00w5kCfJdffMfvFfs9aVa02"
                            target="_blank" rel="noopener noreferrer">
                            Comprar bono 1 noche · 195 €
                        </a>
                        <a className={styles.primaryButton}
                            href="https://buy.stripe.com/8x200i40v8RoerB2FnaVa01"
                            target="_blank" rel="noopener noreferrer">
                            Comprar bono 2 noches · 330 €
                        </a>
                    </div>
                ) : (
                    <Link href='/contact'>
                        <a className={styles.primaryButton}>{message.consult_offer}</a>
                    </Link>
                )}
            </div>
        </article>
    )
}
