import Cabin from '@components/cabin/cabin'
import MessageSearch from '@components/common/messagesearch'

export default function CabinList({cabins, styles, message}) {
    if (cabins.length === 0) {
      return(
        <MessageSearch style={styles.emptySearch} message={message.not_cabins_found} />
      )
    } else {
      return (
        <section className={styles.cabinslist}>
          <div className={styles.cabinslistCenter}>
            {cabins.map(cabin => {
                return (
                    <Cabin key={cabin._id}
                        cabin={cabin} 
                        styles={styles} 
                        message={message} />
                )
            })}
          </div>
        </section>
      ) 
    }          
}