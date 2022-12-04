import styles from '@styles/Specialpack.module.css'
import SpecialpackList from '@components/specialpack/specialpacklist'
import { useRouter } from 'next/router'

import { getTranslate } from '@lib/locale'
import { getSpecialpackList } from '@config/info'
import Title from '@components/common/title'

import dataApi from '@api/data'

export default function Specialpack({specialpacks, specialpackimages}) {

  const t = getTranslate(useRouter())
  const messageList = getSpecialpackList(t)

  return (
    <>
      <div className={styles.container}>
      <Title style={styles.title} text={t.specialpack_message} />
        <SpecialpackList specialpacks={specialpacks}
                         specialpackimages={specialpackimages}
                         styles={styles}
                         message={messageList}
        />
      </div>
    </>
  )

}

export async function getStaticProps() {
  const {data} = await dataApi.get('/specialpacks')
  const dataImages = await dataApi.get(`/specialpackimages`)

  return {
    props: {
        specialpacks: data.specialpacks,
        specialpackimages: dataImages.data.specialpackimages
    }
  }
}