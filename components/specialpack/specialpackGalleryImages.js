import { useState } from 'react'
import Image from 'next/image'

export default function SpecialpackGalleryImages({images, styles, title, message}){
    const [activeIndex, setActiveIndex] = useState(0)
    const index = activeIndex % images.length
    const moveImage = (direction) => setActiveIndex(current => (current + direction + images.length) % images.length)

    return (
        <div className={styles.offerGallery} role='group' aria-label={title}>
            <div className={styles.offerImage}>
                <Image key={index} src={images[index].image} alt={title}
                       layout='fill' objectFit='contain'
                       sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw' />
            </div>
            {images.length > 1 && (
                <>
                    <button type='button' className={`${styles.galleryControl} ${styles.galleryPrevious}`}
                            aria-label={message.previous_image} onClick={() => moveImage(-1)}>
                        <i className='fas fa-chevron-left' aria-hidden='true' />
                    </button>
                    <button type='button' className={`${styles.galleryControl} ${styles.galleryNext}`}
                            aria-label={message.next_image} onClick={() => moveImage(1)}>
                        <i className='fas fa-chevron-right' aria-hidden='true' />
                    </button>
                    <span className={styles.galleryCounter} aria-live='polite' aria-atomic='true'>
                        {index + 1} / {images.length}
                    </span>
                </>
            )}
        </div>
    )
}
