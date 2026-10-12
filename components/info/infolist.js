import Info from '@components/info/info'
import MessageSearch from '@components/common/messagesearch'

export default function InfoList({info = [], styles, message}) {
    if (info.length === 0) {
      return(
        <MessageSearch style={styles.emptySearch} message={message.not_info_found} />
      )
    } else {
      return (
        <section className={styles.destinationList}>
            {info.map(inf => {
                    return (
                        <Info key={inf._id}
                                    info={inf} 
                                     styles={styles} 
                                     message={message}/>
                    )
                })}
        </section>
      ) 
    }          
}
