export default function ErrorMessage({children, styles, message}){
    return (
        <div className={styles.emptySearch}>
            <h3>{message.cabin_not_found}</h3>
            {children}
        </div>
      )         
}