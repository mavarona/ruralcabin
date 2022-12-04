import Link from 'next/link'
import Image from 'next/image'

export default function NavbarLogo({styles, path, image, altText}) {
    
    return (
        <Link href={path}>
            <a className={styles.navlogoMain}>
                <Image src={image}
                    width='200px'
                    height='50px' 
                    alt={altText} />
            </a>
        </Link>
    )
                      
}