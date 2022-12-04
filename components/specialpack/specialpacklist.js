import Specialpack from '@components/specialpack/specialpack'
import MessageSearch from '@components/common/messagesearch'
import { getImagesSpecialpack } from '@lib/utils'

export default function SpecialpackList({specialpacks, specialpackimages, styles, message}) {
    if (specialpacks.length === 0) {
      return(
        <MessageSearch style={styles.emptySearch} message={message.not_specialpack_found} />
      )
    } else {
      return (
        <section className={styles.specialpacklist}>
          <div className={styles.specialpacklistCenter}>
            {specialpacks.map(specialpack => {
                let images = getImagesSpecialpack(specialpackimages, specialpack._id)
                images = [...images, specialpack]
                return (
                    <Specialpack key={specialpack._id}
                                  specialpack={specialpack}
                                  images= {images} 
                                  styles={styles} 
                                  message={message}/>
                )
            })}
          </div>
        </section>
      ) 
    }          
}