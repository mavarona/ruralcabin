export default function Label({children, htmlFor ,style}){
    return (
        <label htmlFor={htmlFor} className={style}>{children}</label>
    )                     
}