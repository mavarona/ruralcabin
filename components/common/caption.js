export default function Caption({children, style, caption}){
    return (
        <div className={style}>
          <h4>{caption}</h4>
          {children}
        </div>
    )                     
}