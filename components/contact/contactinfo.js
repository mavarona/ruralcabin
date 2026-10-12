
export default function ContactInfo({styles, path, styleLogo, text, onClick}){
    return (
            <div className={styles.divInfo} onClick={onClick}>
                {path ? <a href={path} className={styles.info}>
                    <i className={styleLogo} aria-hidden='true'></i>
                    <span className={styles.info_location}>{text}</span>
                </a> : <div className={styles.info}>
                    <i className={styleLogo} aria-hidden='true'></i>
                    <p className={styles.info_location}>{text}</p>
                </div>}
            </div>
        )
                      
}


