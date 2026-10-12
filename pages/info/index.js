import styles from '@styles/GuestPages.module.css'
import { useRouter } from 'next/router'
import InfoGeneral from '@components/info/infogeneral'

import { getTranslate } from '@lib/locale'
import { getInfoGeneral } from '@config/info'

export default function Info() {

  const t = getTranslate(useRouter())
  const messageList = getInfoGeneral(t)

  return (
      <main className={`${styles.page} ${styles.infoPage}`}>
        <InfoGeneral 
            styles={styles}
            message={messageList}
        />
      </main>
  )

}
