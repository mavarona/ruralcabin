import Link from 'next/link'

export default function NavbarLogo({ styles, path, image, altText }) {

  return (
    <Link href={path}>
      <a className={styles.navlogoMain}>
        <img src={image} width="200" height="50" alt={altText} />
      </a>
    </Link>
  )
}
