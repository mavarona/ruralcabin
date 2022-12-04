import Image from 'next/image'
import { Card } from 'primereact/card'
import SpecialpackGalleryImages from '@components/specialpack/specialpackGalleryImages'

export default function Specialpack({specialpack, images, styles, message}){

    const imagePath = `${specialpack.image}`

    const styleCardHeader = 'flex align-items-center justify-content-between mb-0 p-3 pb-0'
    const styleTitleCard = `m-0 ${styles.titleCard}`
    const styleInfo = `m-0 ${styles.infoDesc}`
    const styleDescription = 'm-2'

    const cardHeader = (
        <div className={styleCardHeader}>
            <h5 className={styleTitleCard}>{specialpack.title}</h5>
        </div>
    )

    return (
      <>
        <Card header={cardHeader}>
            <p className={styleInfo}>{specialpack.info}</p>
            {
                images.length === 1 &&             
                <Image src={imagePath} 
                        alt=''
                        width={300}
                        height={300}
                        className={styles.imgContainerImg} 
                />
            }
            {
                images.length > 1 &&             
                <SpecialpackGalleryImages images={images} styles={styles} />
            }
            <p className={styleDescription}><span className={styles.fontbold}>{message.code} - </span> <span>{specialpack.code}</span></p>
            <p className={styleDescription}><span className={styles.fontbold}>{message.cost} - </span> <span>{specialpack.cost}</span></p>
        </Card>
      </>
    )           
}