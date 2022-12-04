import styles from '@styles/Youtube.module.css'
import { openYoutube } from '@lib/utils'

export default function Youtube(){

    return (
        <div>
            <a href={openYoutube()} 
               target="_blank" 
               rel="noopener noreferrer"
               className={styles.youtubeLink}>
                 <svg className={styles.youtubeSvg} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#FF0000"/>
                    <path d="M36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.1231 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.1231 36.265 18.0732" fill="white"/>
                    <path d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z" fill="#FF0000"/>
                </svg>
            </a>
        </div>
    )               
}