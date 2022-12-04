import Link from 'next/link'
import Image from 'next/image'

export default function NavbarImage({styles, path, locale, isOpen, openMenu, image, altText, text}){
    return (
            <li className={styles.navitem}>
                <Link href={path} locale={locale}>
                    <a className={isOpen === false ? 
                        styles.navlink : styles.navlink+' '+styles.active}
                        onClick={isOpen ? openMenu : null}>
                            <Image src={image} 
                                alt={altText} 
                                width="24" 
                                height="24"/>{text}
                    </a>
                </Link>
            </li>
        )
                      
}


