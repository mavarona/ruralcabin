import Title from '@components/common/title'
import Label from '@components/form/label'
import { useEffect, useRef, useState } from 'react'

export default function CabinFilter({cabins, styles, message, onChange, rangePrices}){

    const rangePriceRef = useRef()

    useEffect(() => {
        setCurrentPrice(rangePriceRef.current.value)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[rangePriceRef?.current?.value])

    let priceCabinText = `${message.price} ${message.by_nigth}`

    const [currentPrice, setCurrentPrice] = useState(rangePrices.max)

    return (
        <>
            <section className={styles.filterContainer}>
                <Title style={styles.title} 
                       text={message.search_cabin} />
                <form className={styles.filterForm}>
                    <div className={styles.formGroup}>
                        <Label htmlFor='price'
                               style={styles.formGroupLabel} >
                                   {priceCabinText} {currentPrice} €
                        </Label>
                        <input type='range'
                               name='price'
                               ref={rangePriceRef}
                               min={rangePrices.min}
                               max={rangePrices.max}
                               className={styles.formControl}
                               onChange={onChange}
                            />
                    </div>
                </form>
            </section>
        </>
    )
}
