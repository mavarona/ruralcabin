import Link from 'next/link'

export default function NavbarItem({styles, path, isOpen, openMenu, styleIcon, textLink}){
    return (
                <li className={styles.navitem}>
                    <Link href={path}>
                        <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={isOpen ? openMenu : null}>
                                <i className={styleIcon}></i>{textLink}
                        </a>
                    </Link>
                </li>   
        )
                      
}