import styles from '@styles/Cabin.module.css'
import CabinList from '@components/cabin/cabinlist'
import { useRouter } from 'next/router'

import { getTranslate } from '@lib/locale'
import { getMessageList } from '@config/info'

import dataApi from '@api/data'

export default function Cabin({cabins}) {

  const t = getTranslate(useRouter())
  const messageList = getMessageList(t)

  return (
    <>
      <div className={styles.container}>
        <CabinList cabins={cabins}
                   styles={styles}
                   message={messageList}
        />
      </div>
    </>
  )

}

export async function getStaticProps() {
  const {data} = await dataApi.get('/cabins')
  return {
    props: {
      cabins: data.cabins
    }
  }
}