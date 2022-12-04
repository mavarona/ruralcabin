
export default function ContactMap({styles, path}){
 
    return (
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className={styles.iframeMap}
                            id="gmap_canvas" 
                            src={path}
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
                    </iframe>
                </div>
            </div>
        )
                      
}