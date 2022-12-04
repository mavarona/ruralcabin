import { Galleria } from 'primereact/galleria'
import Image from 'next/image'

export default function SpecialpackGalleryImages({images, styles}){

    const galleriaResponsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 5,
        },
        {
            breakpoint: "960px",
            numVisible: 4,
        },
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
        },
    ]

    const galleriaItemTemplate = (item) => <Image src={item.image} alt="Detalle" width="350" height="350" className={styles.imgContainerImgDetail} />
    const galleriaThumbnailTemplate = (item) => <Image src={item.image} alt="Detalle" width="100" height="100" className={styles.imgContainerImgDetail} />

    return (
        <Galleria value={images} 
                 responsiveOptions={galleriaResponsiveOptions} 
                 numVisible={images.length} 
                 circular 
                 style={{ maxWidth: '800px', margin: 'auto' }}
                 item={galleriaItemTemplate} 
                 thumbnail={galleriaThumbnailTemplate}>
        </Galleria>
    )          
}