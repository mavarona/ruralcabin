import Link from 'next/link'

export default function ButtonLink({children, path}){
    return <Link href={path}>
                {children}
           </Link>               
}