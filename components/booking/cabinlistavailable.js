import CabinBooking from '@components/booking/cabinBooking'

export default function CabinListAvailable({cabins, styles, message, filter, onClick}) {
    if (cabins.length === 0) {
      return(
        null
      )
    } else {
      return (
        <section className={styles.cabinslist}>
          <div className={styles.cabinslistCenter}>
            { cabins.map(cabin => {
                if ( cabin.price > 0 ){
                  return (
                    <CabinBooking key={cabin._id}
                        cabin={cabin} 
                        styles={styles} 
                        message={message}
                        filter={filter}
                        onClick={onClick} />
                  )
                } 
              }
            )}
          </div>
        </section>
      ) 
    }          
}