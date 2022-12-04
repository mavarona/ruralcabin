import Info from '@components/info/info'
import MessageSearch from '@components/common/messagesearch'

export default function InfoList({info, styles, message}) {
    if (info.length === 0) {
      return(
        <MessageSearch style={styles.emptySearch} message={message.not_specialpack_found} />
      )
    } else {
      return (
        <section className={styles.specialpacklist}>
          <div className={styles.specialpacklistCenter}>
            {info.map(inf => {
                    return (
                        <Info key={inf._id}
                                    info={inf} 
                                     styles={styles} 
                                     message={message}/>
                    )
                })}
          </div>
        </section>
      ) 
    }          
}