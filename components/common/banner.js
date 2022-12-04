export default function Banner({children, style, title, subtitle}){
    return (
        <div className={style}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
        </div> 
    )               
}