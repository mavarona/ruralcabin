import Link from 'next/link'
import SpecialpackGalleryImages from '@components/specialpack/specialpackGalleryImages'

export default function Specialpack({specialpack, images, styles, message}){
    const paragraphs = (specialpack.info || '').split(/\n+/).filter(text => text.trim())

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
                {(specialpack.code || specialpack.cost) && (
                    <dl className={styles.offerDetails}>
                        {specialpack.code && <div><dt>{message.code}</dt><dd>{specialpack.code}</dd></div>}
                        {specialpack.cost && <div><dt>{message.cost}</dt><dd>{specialpack.cost}</dd></div>}
                    </dl>
                )}
                <Link href='/contact'>
                    <a className={styles.primaryButton}>{message.consult_offer}</a>
                </Link>
            </div>
        </article>
    )
}
