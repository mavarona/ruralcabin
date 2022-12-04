import styles from '@styles/Spinner.module.css'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useRouter } from 'next/router'
import { getTranslate } from '@lib/locale'

export default function Spinner(){

    const t = getTranslate(useRouter())

    return (
        <div className={styles.container}>
            <ProgressSpinner style={{width: '100px', height: '100px'}} 
                             strokeWidth="5" 
                             fill="var(--surface-ground)" 
                             animationDuration=".5s"/>
            <h5 className={styles.textCenter}>{t.searching}</h5>
        </div>
    )               
}