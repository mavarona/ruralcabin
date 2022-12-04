import { Fragment } from 'react'
import Image from 'next/image'

export default function Service({key, service, styleItem}){
    return (
        <Fragment key={key}>
            <div className={styleItem}>
                <Image src={service.icon}
                        width='64px'
                        height='64px' 
                        alt={service.title} />
                <span>{service.title}</span>
            </div>
        </Fragment>
    )                     
}