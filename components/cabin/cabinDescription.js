export default function CabinDescription({styles, message}){

    return (
        <article className={styles.desc}>
            <h3>{message.detail}</h3>
            <p className={styles.infoDesc}>{message.detailText}</p>
        </article>
    )          
}