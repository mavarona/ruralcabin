import styles from '@styles/Cabin.module.css'
import { useRouter } from 'next/router'
import ErrorMessage from '@components/common/errormessage'
import ButtonLink from '@components/common/buttonlink'
import CabinGalleryImages from '@components/cabin/cabinGalleryImages'
import CabinDescription from '@components/cabin/cabinDescription'
import CabinInfo from '@components/cabin/cabinInfo'

import Hero from '@components/common/hero'
import Banner from '@components/common/banner'

import { Card } from 'primereact/card'

import dataApi from '@api/data'

import { getTranslate } from '@lib/locale'
import { getMessageCabinNotFound, 
         getMessageCabinDetail, 
         getMessageCabinInfo } from '@config/info' 

export default function CabinDetails({info}) {

    let cabin = null
    let images = null

    if(info && info['cabin']) {
        cabin = info['cabin']
    }

    if(info && info['images']) {
        images = info['images']
    }
    
    const imagesCabin = (images) ? 
        <div className={styles.container}>
            <CabinGalleryImages images={images} styles={styles} />
        </div>  
        : null

    const t = getTranslate(useRouter())

    const messageNotFound = getMessageCabinNotFound(t)
    const messageDetail = getMessageCabinDetail(t, cabin?.detail)
    const messageInfo = getMessageCabinInfo(t)

    const linkBookCabin = "test";


    if(!cabin) {
        return(
            <ErrorMessage styles={styles} 
                          message={messageNotFound}>
                <div className={styles.btnPrimary}>
                    <ButtonLink path='/cabin'>
                        {t.our_cabins}
                    </ButtonLink> 
                </div>
            </ErrorMessage>
        )
    }

    if(cabin){
        return (
            <>
                <div className={styles.divHero}
                    style={{
                        backgroundImage: `url(${cabin.image})`
                    }}
                >
                    <Hero style={styles.cabinHero}>
                        <Banner
                                style={styles.banner}
                                title={cabin.name}
                                subtitle=''
                            >
                            <ButtonLink path='/cabin'>
                                {t.our_cabins}
                            </ButtonLink>
                        </Banner>
                    </Hero>
                </div>
                <Card>
                    {imagesCabin}
                    <div className={styles.singleCabinInfo}>
                        <CabinDescription message={messageDetail} styles={styles} />
                        <a href={linkBookCabin}>RESERVAR</a>
                        <CabinInfo cabin={cabin} styles={styles} message={messageInfo} />
                    </div>
                </Card>        
            </>
        )
    }
}

export async function getStaticPaths() {
    const {data} = await dataApi.get('/cabins')
    const paths = data.cabins.map(c => ({ 
        params: { id: c._id }
      })
    )
    return {
      paths,
      fallback: 'blocking'
    }
  }

export async function getStaticProps(ctx) {

    let res = {}
    const { id } = ctx.params
    const {data} = await dataApi.get(`/cabins/${id}`)
    res = {...res, cabin: data.cabin}
    const dataImages = await dataApi.get(`/cabinimages?cabin_id=${id}`)
    res = {...res, images: dataImages.data.cabinimages}
    return {
      props: {
        info: res
      }
    }
  }