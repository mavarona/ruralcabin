import styles from '@styles/GuestPages.module.css'
import SpecialpackList from '@components/specialpack/specialpacklist'
import { useRouter } from 'next/router'

import { getTranslate } from '@lib/locale'
import { getSpecialpackList } from '@config/info'

import dataApi from '@api/data'

export default function Specialpack({specialpacks, specialpackimages}) {

  const t = getTranslate(useRouter())
  const messageList = getSpecialpackList(t)

  return (
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{t.specialpack}</h1>
          <p className={styles.pageSubtitle}>{t.specialpack_message}</p>
        </header>
        <SpecialpackList specialpacks={specialpacks}
                         specialpackimages={specialpackimages}
                         styles={styles}
                         message={messageList}
        />
      </main>
  )

}

export async function getStaticProps() {
  const [{data}, dataImages] = await Promise.all([
    dataApi.get('/specialpacks'),
    dataApi.get('/specialpackimages')
  ])

  return {
    props: {
        specialpacks: data.specialpacks,
        specialpackimages: dataImages.data.specialpackimages
    }
  }
}
