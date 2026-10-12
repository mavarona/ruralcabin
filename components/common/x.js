import styles from '@styles/X.module.css'
import { openX } from '@lib/utils'

export default function X(){
    return (
        <div>
            <a href={openX()}
               target="_blank"
               rel="noopener noreferrer"
               aria-label="X"
               title="X"
               className={styles.xLink}>
                <svg viewBox="0 0 24 24"
                     aria-hidden="true"
                     focusable="false"
                     className={styles.xSvg}>
                    <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.29 19.494h2.039L6.487 3.24H4.3l13.312 17.407z" />
                </svg>
            </a>
        </div>
    )
}
