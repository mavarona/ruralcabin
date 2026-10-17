import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@styles/Layout.module.css'
import Head from 'next/head'

import NavbarItem from '@components/navbar/navbaritem'
import NavbarLogo from '@components/navbar/navbarlogo'
import NavbarImage from '@components/navbar/navbarimage'
import NavbarButtonHamburger from '@components/navbar/navbarbuttonhamburger'

import Youtube from '@components/common/youtube'
import X from '@components/common/x'
import Facebook from '@components/common/facebook'
import Instagram from '@components/common/instagram'
import Whatsapp from '@components/common/whatsapp'

import { getTranslate, getLocale } from '@lib/locale'

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false)
    const openMenu = ()=> setIsOpen(!isOpen)
    const t = getTranslate(useRouter())

    const router = useRouter()
    const seoPages = {
        '/': 'home',
        '/cabin': 'cabin',
        '/booking': 'booking',
        '/contact': 'contact',
        '/specialpack': 'specialpack',
        '/info': 'info'
    }
    const seoName = seoPages[router.pathname]
    const pageTitle = (seoName && t[`seo_title_${seoName}`]) || t.title_page
    const pageDescription = (seoName && t[`seo_description_${seoName}`]) || t.meta_description

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
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
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
                        <NavbarItem styles={st
