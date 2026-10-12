import Image from 'next/image'
import Link from 'next/link'

export default function Info({info, styles, message}){
    return (
        <article className={styles.destinationArticle}>
            {info.image && <div className={styles.destinationPhoto}>
                <Image src={info.image} alt={info.title || ''} layout='fill' objectFit='cover'
                       sizes='(max-width: 639px) 100vw, 50vw' />
            </div>}
            <div>
                <h2 className={styles.destinationTitle}>{info.title}</h2>
                <p className={styles.destinationDescription}>{info.description}</p>
                {info.link?.trim() && <a href={info.link} target='_blank' rel='noopener noreferrer'
                    className={styles.textLink}>{message.view_more}<i className='fas fa-arrow-right' aria-hidden='true' /></a>}
                {info.path?.trim() && <Link href={info.path}>
                    <a className={styles.textLink}>{message.view_more}<i className='fas fa-arrow-right' aria-hidden='true' /></a>
                </Link>}
            </div>
        </article>
    )
}
