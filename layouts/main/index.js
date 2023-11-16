import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@styles/Layout.module.css'
import Head from 'next/head'

import NavbarItem from '@components/navbar/navbaritem'
import NavbarLogo from '@components/navbar/navbarlogo'
import NavbarImage from '@components/navbar/navbarimage'
import NavbarButtonHamburger from '@components/navbar/navbarbuttonhamburger'

import Youtube from '@components/common/youtube'
import Twitter from '@components/common/twitter'
import Facebook from '@components/common/facebook'
import Instagram from '@components/common/instagram'
import Whatsapp from '@components/common/whatsapp'

import { getTranslate, getLocale } from '@lib/locale'

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false)
    const openMenu = ()=> setIsOpen(!isOpen)
    const t = getTranslate(useRouter())
    const styleIconCabins = `fas fa-home fa-1x ${styles.cabins}`
    const styleIconBooking = `fas fa-address-card fa-1x ${styles.booking}`
    const styleIconContact = `fas fa-file-signature fa-1x ${styles.contact}`
    const styleIconLogin = `fas fa-user-circle fa-1x ${styles.login}`
    const styleIconPhone = `fas fa-phone-volume fa-1x ${styles.call}`
    const styleIconSpecialpack = `fas fa-bahai fa-1x ${styles.specialpack}`
    const styleIconInfo = `fas fa-info-circle fa-1x ${styles.info}`

    const callPhone = () => {
        openMenu()
        const phone = process.env.NEXT_PUBLIC_PHONE_CONTACT
        window.open(`tel:${phone}`, '_self')
    }
    const displayLogin = process.env.NEXT_PUBLIC_DISPLAY_LOGIN

    const textChange = ` ${t.idiom}`

    return <> 
            <Head>
                <title>{t.title_page}</title>
                <meta name="description" content={t.meta_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/naturhunt.ico" />
            </Head>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <NavbarLogo styles={styles}  
                                path='/'
                                image='/logo.png'
                                altText={t.home_page} 
                                />
                    <ul className={isOpen === false ? styles.navmenu : styles.navmenu +' '+ styles.active}>
                        <NavbarItem styles={styles} 
                                    path='/cabin' 
                                    isOpen={isOpen}
                                    openMenu={openMenu} 
                                    styleIcon={styleIconCabins} 
                                    textLink={t.cabins} />
                        <NavbarItem styles={styles} 
                                    path='https://www.casasrurales.net/ebooking/mod_2.php?id=71158&k=138085dbb7ca94a50e8482fbf4385508' 
                                    isOpen={isOpen}
                                    openMenu={openMenu} 
                                    styleIcon={styleIconBooking} 
                                    textLink={t.booking} />
                        <NavbarItem styles={styles} 
                                    path='/contact' 
                                    isOpen={isOpen}
                                    openMenu={openMenu} 
                                    styleIcon={styleIconContact} 
                                    textLink={t.contact} />
                        <NavbarItem styles={styles} 
                                    path='/specialpack' 
                                    isOpen={isOpen}
                                    openMenu={openMenu} 
                                    styleIcon={styleIconSpecialpack} 
                                    textLink={t.specialpack} />
                        <NavbarItem styles={styles} 
                                    path='/info' 
                                    isOpen={isOpen}
                                    openMenu={openMenu} 
                                    styleIcon={styleIconInfo} 
                                    textLink={t.info} />
                        {displayLogin === 'true' ? 
                            <>
                                <NavbarItem styles={styles} 
                                        path='/login' 
                                        isOpen={isOpen}
                                        openMenu={openMenu} 
                                        styleIcon={styleIconLogin} 
                                        textLink={t.login} />
                            </>
                        : null    
                        }
                        
                        { getLocale(useRouter()) === 'en' ?
                            <NavbarImage styles={styles}
                                        path='#'
                                        locale='es'
                                        isOpen={isOpen}
                                        openMenu={openMenu}
                                        image='/es.png'
                                        altText={t.spanish}
                                        text={textChange} />
                            :  
                            <NavbarImage styles={styles}
                                        path='#'
                                        locale='en'
                                        isOpen={isOpen}
                                        openMenu={openMenu}
                                        image='/gb.png'
                                        altText={t.english}
                                        text={textChange} />                   
                        }
                        { isOpen === true && (
                            <>
                            <NavbarItem styles={styles} 
                                    path='#'
                                    isOpen={isOpen}
                                    openMenu={callPhone} 
                                    styleIcon={styleIconPhone} 
                                    textLink={t.callus} />
                            </>
                        )}
                    </ul>
                    <NavbarButtonHamburger styles={styles} 
                                           isOpen={isOpen}
                                           openMenu={openMenu}
                                           label={t.menu} />
                </nav>
            </header>
        {children}
        <div className={styles.container}>
            <Whatsapp />
        </div>
        <footer className={styles.footerApp}> 
            <Youtube />
            <Twitter />
            <Facebook />
            <Instagram />
        </footer>
     </>
}
