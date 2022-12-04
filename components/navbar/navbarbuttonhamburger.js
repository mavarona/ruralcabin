export default function NavbarButtonHamburger({styles, isOpen, openMenu, label}){
    return (
        <button className={isOpen === false ? 
                    styles.hamburger : styles.hamburger+' '+styles.active}
                    onClick={openMenu}
                    aria-label={label}
                    aria-haspopup="true"
                    >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    )
                      
}


