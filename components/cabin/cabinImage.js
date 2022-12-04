import Image from 'next/image'

export default function CabinImage({image, styles}){

    return (
      <article>
        <div className={styles.imgContainerDetail}>
          <Image src={image} 
                 alt="Detalle"
                 layout="fill"
                 className={styles.imgContainerImgDetail} 
          />
        </div>
      </article>
    )        
}