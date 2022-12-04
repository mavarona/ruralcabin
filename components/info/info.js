import Image from 'next/image'
import { Card } from 'primereact/card'
import ButtonLink from '@components/common/buttonlink'

export default function Info({info, styles, message}){

    const imagePath = `${info.image}`
    const styleCardHeader = 'flex align-items-center justify-content-between mb-0 p-3 pb-0'
    const styleTitleCard = `m-0 ${styles.titleCard}`
    const styleDescription = 'm-0'

    const cardHeader = (
        <div className={styleCardHeader}>
            <h5 className={styleTitleCard}>{info.title}</h5>
        </div>
    )

    const pStyle = `m-2 ${styles.buttonContainer}`

    return (
      <>
        <Card header={cardHeader}>
            <p className={styleDescription}>{info.description}</p>
            <Image src={imagePath} 
                    alt=''
                    width={300}
                    height={300}
                    className={styles.imgContainerImg} 
            />
            {info.link.trim() !== '' &&  
                <p className={pStyle}>
                    <a href={info.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.anchorButton}>
                        {message.view_more}
                    </a>
                </p> 
            }

            { info.path.trim() !== '' && 
                    <p className={pStyle}>
                        <ButtonLink path={info.path}>
                            <span className={styles.anchorButton}>
                                {message.view_more}
                            </span>
                        </ButtonLink> 
                    </p> 
            }
           
        </Card>
      </>
    )           
}