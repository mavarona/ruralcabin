import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'
import styles from '@styles/Home.module.css'
import stylesInfo from '@styles/Info.module.css'

import Hero from '@components/common/hero'
import Banner from '@components/common/banner'
import ButtonLink from '@components/common/buttonlink'

import InfoList from '@components/info/infolist'

import { getSession } from '@controllers/stripe'

import { getTranslate } from '@lib/locale'
import { getInfoList } from '@config/info'

import { decodeBase64 } from '@lib/utils'

import { Dialog } from 'primereact/dialog'

import dataApi from '@api/data'

export default function Home({home}) {

  const t = getTranslate(useRouter())
  const messageList = getInfoList(t)

  const router = useRouter()
  const { query } = router
  const { session_id, wrong } = query

  const [displayDialog, setDisplayDialog] = useState(false)
  const [msgBooking, setMsgBooking] = useState('')

  useEffect(() => {

    if (session_id) {
      getSession(session_id)
          .then((data) => {
            // Make booking
            let bookingSaved = JSON.parse(decodeBase64(localStorage.getItem('bk')))
          
            const booking = {...bookingSaved, 
              total: Number(data.amount_total)/100, 
              total_discount: Number(data.total_details.amount_discount)/100,
              name: data.customer_details.name,
              email: data.customer_details.email
            }
            localStorage.removeItem('bk')

            console.log(booking)

            fetch('/api/booking', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(booking)
            }).then(() => {
              setMsgBooking(t.msg_booking_success)
              setDisplayDialog(true)
            }).catch(err => {
              console.log(err)
            })

          })
          .catch(function (error) {
            /**TODO LOG ERROR */
            console.log(error)
        })
    }
    if (wrong) {
      setMsgBooking(t.msg_booking_wrong)
      setDisplayDialog(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session_id, wrong])

  return (
    <div className={styles.container}>
      <Hero style={styles.defaultHero}>
        <Banner
          style={styles.banner}
          title={t.cabins}
          subtitle={t.cabins_subtitle}
        >
          <ButtonLink path='/cabin'>
            {t.our_cabins}
          </ButtonLink>
        </Banner>
        <Dialog header={t.info}
                        visible={displayDialog} 
                        style={{ width: '80vw' }} 
                        modal 
                        onHide={() => {
                          setDisplayDialog(false)
                          router.push(`${window.location.origin}`)
                        }}>
                        {msgBooking}
                </Dialog>
        <div className={styles.containerServices}>
          <div>
            <InfoList info={home}
                      styles={stylesInfo} 
                      message={messageList}
            />
          </div>
        </div>
      </Hero>
    </div>
  )
}

export async function getStaticProps() {
  const {data} = await dataApi.get('/info')

  return {
    props: {
        home: data.info
    }
  }
}