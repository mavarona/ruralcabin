import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'
import styles from '@styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>{t.home_title}</h1>
          <p className={styles.heroSubtitle}>{t.cabins_subtitle}</p>
          <p className={styles.heroIntro}>{t.home_intro}</p>
          <div className={styles.heroActions}>
            <Link href='/cabin'><a className={styles.primaryButton}>{t.our_cabins}</a></Link>
            <Link href='/booking'><a className={styles.secondaryButton}>{t.book}</a></Link>
          </div>
        </div>
        <div className={styles.heroPhoto}>
          <Image src='/cabinmain.jpeg' alt={t.home_title} layout='fill' objectFit='cover'
                 sizes='(max-width: 1023px) 100vw, 60vw' priority />
        </div>
      </section>
      <ul className={styles.benefits}>
        <li><i className='fas fa-hot-tub' aria-hidden='true' /><span>{t.private_jacuzzi}</span></li>
        <li><i className='fas fa-mug-hot' aria-hidden='true' /><span>{t.daily_breakfast}</span></li>
        <li><i className='fas fa-wifi' aria-hidden='true' /><span>{t.wifi}</span></li>
      </ul>
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
      <div className={styles.destination}>
        <InfoList info={home} styles={styles} message={messageList} />
      </div>
      <section className={styles.homeContact}>
        <h2>{t.info}</h2>
        <p>{t.infogeneral4}</p>
        <div className={styles.heroActions}>
          <Link href='/info'><a className={styles.primaryButton}>{t.info}</a></Link>
          <Link href='/specialpack'><a className={styles.secondaryButton}>{t.specialpack}</a></Link>
        </div>
      </section>
    </main>
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
