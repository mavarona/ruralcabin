import styles from '@styles/Login.module.css'
import { useRouter } from 'next/router'

import { getTranslate } from '@lib/locale' 

export default function Login() {

    const t = getTranslate(useRouter())

    const handleFacebook = () => {console.log('Login facebook')}
    const handleGoogle = () => {console.log('Login Google')}

  return (
      <>
        <div className={styles.container}>
            <h2>{t.access_message}</h2>
            <div className={styles.row}>
                <div className={styles.fb}>
                    <button onClick={handleFacebook}>
                        <a href="#">
                            <i className="fab fa-facebook fa-fw"></i>{t.access_facebook}
                        </a>
                    </button>
                </div>
                <div className={styles.google}>
                    <button onClick={handleGoogle}>
                        <a href="#">
                            <i className="fab fa-google fa-fw"></i>{t.access_google}
                        </a>
                    </button>
                </div>
            </div>
        </div>
      </>
  )
}