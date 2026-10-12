export function splitCabinDescription(text) {
    if (typeof text !== 'string' || !text.trim()) return []
    const parts = []
    const boundary = /[.!?]\s+(?=[A-ZÁÉÍÓÚÜÑ0-9])/g
    let start = 0
    let match
    while ((match = boundary.exec(text)) !== null) {
        parts.push(text.slice(start, match.index + 1).trim())
        start = match.index + match[0].length
    }
    parts.push(text.slice(start).trim())
    return parts.filter(Boolean)
}

export default function CabinDescription({styles, message}){
    const details = splitCabinDescription(message.detailText)
    if (!details.length) return null

    return (
        <article className={styles.desc}>
            <h2>{message.detail}</h2>
            <ul className={styles.detailList}>
                {details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
        </article>
    )          
}
