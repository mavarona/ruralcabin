import Link from 'next/link'
import Image from 'next/image'

export default function NavbarLogo({styles, path, image, altText}) {
    
    return (
        <Link href={path}>
            <a className={styles.navlogoMain}>
                <Image src={image}
                    width={200}
                    height={50}
                    alt={altText} />
            </a>
        </Link>
    )
                      
}
