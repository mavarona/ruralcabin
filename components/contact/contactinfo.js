
export default function ContactInfo({styles, path, styleLogo, text, onClick}){
    return (
            <div className="styles.divInfo" onClick={onClick}>
                <a href={path} className={styles.info}>
                    <i className={styleLogo}></i>
                    <h2 className={styles.info_location}>{text}</h2>
                </a>
            </div>
        )
                      
}


