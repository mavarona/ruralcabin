import styles from '@styles/Privacypolicy.module.css'
import { getTranslate } from '@lib/locale'
import { useRouter } from 'next/router'

export default function Privacypolicy(){

    const t = getTranslate(useRouter())

    return (
        <>
            <p className={styles.dialogP}>
                {t.privacyPolicyHeader}
            </p>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyInfoUser}
            </h3>
            <p className={styles.dialogP}> 
            <span className={styles.dialogSpanBold}>{t.privacyCompany}</span>, {t.privacyPolicyInfoUser1}
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyInfoUser2}
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyInfoUser3}
            </p>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyContact}
            </h3>
            <p className={styles.dialogP}> 
            {t.privacyPolicyContactSocial} <span className={styles.dialogSpanBold}>{t.privacyPolicyContactSocialRes}</span>
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyContactName} <span className={styles.dialogSpanBold}>{t.privacyPolicyContactNameRes}</span>
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyContactCif} <span className={styles.dialogSpanBold}>{t.privacyPolicyContactCifRes}</span>
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyContactAddress} <span className={styles.dialogSpanBold}>{t.privacyPolicyContactAddressRes}</span>
            </p>
            <p className={styles.dialogP}> 
            {t.privacyPolicyContactEmail} <span className={styles.dialogSpanBold}>{t.privacyPolicyContactEmailRes}</span>
            </p>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyKeyPrinciples}
            </h3>
            <p className={styles.dialogP}> 
            {t.privacyPolicyKeyPrinciplesInfo}
            </p>
            <ul>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesLegality}</span>: {t.privacyPolicyKeyPrinciplesLegalityRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesDataMin}</span>: {t.privacyPolicyKeyPrinciplesDataMinRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesPurposeLim}</span>: {t.privacyPolicyKeyPrinciplesPurposeLimRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesPrecision}</span>: {t.privacyPolicyKeyPrinciplesPrecisionRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesDataSec}</span>: {t.privacyPolicyKeyPrinciplesDataSecRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesAccess}</span>: {t.privacyPolicyKeyPrinciplesAccessRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesConservation}</span>: {t.privacyPolicyKeyPrinciplesConservationRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesInter}</span>: {t.privacyPolicyKeyPrinciplesInterRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesThird}</span>: {t.privacyPolicyKeyPrinciplesThirdRes}</li>
                <li className={styles.dialogLi}><span className={styles.dialogSpanBold}>{t.privacyPolicyKeyPrinciplesMarketing}</span>: {t.privacyPolicyKeyPrinciplesMarketingRes}</li>
            </ul>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyCollection}
            </h3>
            <p className={styles.dialogP}> 
                {t.privacyPolicyCollectionInfo}
            </p>
            <ul>
                <li className={styles.dialogLi}>{t.privacyPolicyCollectionData}</li>
            </ul>
            <p className={styles.dialogP}> 
                 {t.privacyPolicyCollectionInfo2}
            </p>
            <p className={styles.dialogP}> 
                {t.privacyPolicyCollectionInfo3}
            </p>   
            <ul>
                <li className={styles.dialogLi}>{t.privacyPolicyCollectionPropInfo}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyCollectionSend}</li>
            </ul>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyLegitimacy}
            </h3>
            <p className={styles.dialogP}> 
                {t.privacyPolicyLegitimacyInfo}
            </p>
            <ul>
                <li className={styles.dialogLi}>{t.privacyPolicyLegitimacyInfo2}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyLegitimacyInfo3}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyLegitimacyInfo4}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyLegitimacyInfo5}</li>
            </ul>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyCommuication}
            </h3>
            <p className={styles.dialogP}> 
                {t.privacyPolicyCommuication2} <span className={styles.dialogSpanBold}>{t.privacyCompany}</span> {t.privacyPolicyCommuication3}
            </p>
            <h3 className={styles.dialogP}>
                {t.privacyPolicyYourRights}
            </h3>
            <p className={styles.dialogP}> 
                {t.privacyPolicyYourRightsInfo}
            </p>
            <ul>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList2}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList3}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList4}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList5}</li>
                <li className={styles.dialogLi}>{t.privacyPolicyYourRightsList6}</li>
            </ul>
            <p className={styles.dialogP}> 
                {t.privacyPolicyYourRightsInfo2}
            </p>
            <p className={styles.dialogP}> 
                {t.privacyPolicyYourRightsInfo3}
            </p>
            <p className={styles.dialogP}> 
                {t.privacyPolicyYourRightsInfo4} <a target="_blank" className={styles.dialogA} rel="noreferrer" href={t.privacyPolicyYourRightsLink}>{t.privacyPolicyYourRightsInfo5}</a> {t.privacyPolicyYourRightsInfo6}
            </p>  
            <h3 className={styles.dialogP}>
                {t.privacyPolicyLegal}
            </h3>
            <p className={styles.dialogP}> 
                {t.privacyPolicyLegalInfo}
            </p>
            <p className={styles.dialogP}> 
                {t.privacyPolicyLegalInfo2}
            </p>
        </>
    )               
}