import { Fragment } from 'react'
import Caption from '@components/common/caption'
import Service from '@components/home/service'

export default function Services({services, key, styles, message}){
    
    return (
        <Fragment key={key}>
            <Caption style={styles.sectionTitle} caption={message} />
            <div className={styles.servicesCenter}>
                {services?.map((service) => {
                    return (
                        <Service
                            key={service._id} 
                            service={service}
                            styleItem={styles.serviceItem} />
                    )
                })}
            </div>
        </Fragment>
    )                     
}