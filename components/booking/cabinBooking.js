import Link from 'next/link'
import Image from 'next/image'
import { datesDiff } from '@lib/utils'

export default function CabinBooking({cabin, styles, message, filter, onClick}){

    const imagePath = `${cabin.image}`
    
    const path = `/booking/${cabin._id}?in=${filter.checkin}&out=${filter.checkout}`

    const styleImegeDiv = (cabin.price >0)? styles.imgContainer : styles.imgContainerNotHover

    const diffDays = datesDiff(filter.checkout,filter.checkin)

    let linkBooking = <div className={styles.cabinLink}>
                        <Link href={path}>
                            {message.book} 
                        </Link>
                      </div>
    if (diffDays > 0) {
      linkBooking = <div className={styles.cabinLink} onClick={onClick}>
        <p>
            {message.book} 
        </p>
      </div>
    }

    return (
      <article>
        <div className={styleImegeDiv}>
          <Image src={imagePath} 
                 alt={message.view_cabin}
                 layout="fill"
                 className={styles.imgContainerImg} 
          />
          { cabin.price >0 &&
            <>
              <div className={styles.priceTop}>
                  <h6>{message.from} {cabin.price} €</h6>
                  <p>{message.by_nigth}</p>
              </div>
              {linkBooking}
            </>
          }
        </div>
        <p className={styles.cabinInfo}>{cabin.name}</p>
      </article>
    )        
}
