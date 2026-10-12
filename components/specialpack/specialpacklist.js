import Specialpack from '@components/specialpack/specialpack'
import MessageSearch from '@components/common/messagesearch'
import { getImagesSpecialpack } from '@lib/utils'

export default function SpecialpackList({specialpacks = [], specialpackimages = [], styles, message}) {
    const offers = specialpacks.filter(offer => typeof offer?.title === 'string' && offer.title.trim())
    if (offers.length === 0) {
      return(
        <MessageSearch style={styles.emptySearch} message={message.not_specialpack_found} />
      )
    } else {
      return (
        <section className={styles.offers}>
          <div className={styles.offerGrid}>
            {offers.map(specialpack => {
                const seenImages = new Set()
                const images = [...getImagesSpecialpack(specialpackimages, specialpack._id), specialpack]
                    .filter(item => {
                        if (typeof item?.image !== 'string' || !item.image.trim() || seenImages.has(item.image)) return false
                        seenImages.add(item.image)
                        return true
                    })
                return (
                    <Specialpack key={specialpack._id || specialpack.code}
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
