import styles from '@styles/Info.module.css'
import { useRouter } from 'next/router'
import InfoGeneral from '@components/info/infogeneral'

import { getTranslate } from '@lib/locale'
import { getInfoGeneral } from '@config/info'

export default function Info() {

  const t = getTranslate(useRouter())
  const messageList = getInfoGeneral(t)

  return (
    <>
      <div className={styles.container}>
        <InfoGeneral 
            styles={styles}
            message={messageList}
        />
      </div>
    </>
  )

}