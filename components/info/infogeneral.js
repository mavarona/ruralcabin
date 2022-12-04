import { Card } from 'primereact/card'
import ButtonLink from '@components/common/buttonlink'

export default function InfoGeneral({styles, message}){

    const styleCardHeader = 'flex align-items-center justify-content-between mb-0 p-3 pb-0'
    const styleTitleCard = `m-0 ${styles.titleCard}`
    const styleDescription = 'm-0'
    const styleLi = `m-0 ${styles.fontbold}`
    const path = '/contact'

    const cardHeader = (
        <div className={styleCardHeader}>
            <h5 className={styleTitleCard}>{message.info}</h5>
        </div>
    )

    const pStyle = `m-2 ${styles.buttonContainer}`

    return (
      <>
        <Card header={cardHeader}>
            <p className={styleDescription}>{message.infogeneral1}</p>
            <br></br>
            <p className={styleDescription}>{message.infogeneral2}</p>
            <br></br>
            <p className={styleDescription}>{message.we_offer} :</p>
            <ul>
                <li className={styleLi}>- {message.infooffer1}</li>
                <li className={styleLi}>- {message.infooffer2}</li>
                <li className={styleLi}>- {message.infooffer3}</li>
                <li className={styleLi}>- {message.infooffer4}</li>
                <li className={styleLi}>- {message.infooffer5}</li>
                <li className={styleLi}>- {message.infooffer6}</li>
                <li className={styleLi}>- {message.infooffer7}</li>
                <li className={styleLi}>- {message.infooffer8}</li>
            </ul>
            <br></br>
            <p className={styleDescription}>{message.infogeneral3}</p>
            <br></br>
            <p className={styleDescription}>{message.infogeneral4}</p>
            <p className={pStyle}>
                <ButtonLink path={path}>
                    <span className={styles.anchorButton}>
                        {message.contact}
                    </span>
                </ButtonLink> 
            </p> 
        </Card>
      </>
    )           
}