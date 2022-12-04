import Link from 'next/link'
import Image from 'next/image'

export default function Cabin({cabin, styles, message}){

    const imagePath = `${cabin.image}`
    const path = '/cabin/'

    return (
      <article>
        <div className={styles.imgContainer}>
          <Image src={imagePath} 
                 alt={message.view_cabin}
                 layout="fill"
                 className={styles.imgContainerImg} 
          />
          {cabin.price >0 &&
              <div className={styles.priceTop}>
                <h6>{message.from} {cabin.price} €</h6>
                <p>{message.by_nigth}</p>
              </div>
          }
            <div className={styles.cabinLink}>
              <Link href={path + cabin._id}>
                  {message.more_info} 
              </Link>
            </div>   
        </div>
        <p className={styles.cabinInfo}>{cabin.name}</p>
      </article>
    )           
}