import styles from '@styles/GuestPages.module.css'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { getTranslate } from '@lib/locale'
import { initialStateContact } from '@config/state'
import { truncateText, disabledSendEmail } from '@lib/utils'
import { getStaticContact } from '@config/info'
import ContactMap from '@components/contact/contactmap'
import ContactInfo from '@components/contact/contactinfo'
import Privacypolicy from '@components/common/privacypolicy'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { TOAST_TIMEOUT, SEVERITY_INFO } from '@config/globals'
import { Toast } from 'primereact/toast'

export default function Contact() {
  const toast = useRef(null)
  const t = getTranslate(useRouter())
  const data = getStaticContact(t, styles)
  const [customer, setCustomer] = useState(initialStateContact())
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState(false)
  const [sending, setSending] = useState(false)
  const disabledButton = sending || disabledSendEmail(
    customer.title.trim(), customer.text.trim(), customer.email.trim(), customer.name.trim(), privacyPolicy
  )

  const changeCustomer = (event) => {
    const {name, value} = event.target
    setCustomer(current => ({...current, [name]: value}))
  }

  const sendEmail = async (event) => {
    event.preventDefault()
    if (disabledButton) return
    setSending(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'},
        body: JSON.stringify({...customer, title: truncateText(customer.title, 100)})
      })
      if (!response.ok) throw new Error('Contact request failed')
      setCustomer(initialStateContact())
      setPrivacyPolicy(false)
      toast.current.show({severity: SEVERITY_INFO, summary: t.info, detail: t.email_sended, life: TOAST_TIMEOUT})
    } catch {
      toast.current.show({severity: 'error', summary: t.info, detail: t.email_failed, life: TOAST_TIMEOUT})
    } finally {
      setSending(false)
    }
  }

  return (
    <main className={styles.page}>
      <Toast ref={toast} />
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t.contact}</h1>
      </header>
      <div className={styles.contactLayout}>
        <section className={styles.locationSection} aria-labelledby='contact-location'>
          <h2 id='contact-location' className={styles.sectionTitle}>{t.location}</h2>
          <ContactMap styles={styles} path={data.geolocationPosition} title={t.location} />
          <ContactInfo styles={styles} styleLogo={data.styleLogoLocation} text={data.address} />
          <ContactInfo styles={styles} path={`tel:${process.env.NEXT_PUBLIC_PHONE_CONTACT}`}
                       styleLogo={data.styleIconPhone} text={data.phoneText} />
        </section>
        <section className={styles.formArea} aria-labelledby='contact-information'>
          <h2 id='contact-information' className={styles.sectionTitle}>{t.info}</h2>
          <div className={styles.woodForm}>
            <form className={styles.formBody} onSubmit={sendEmail}>
              <h3 className={styles.formMailHeader}>{t.canHelp}</h3>
              <div className={styles.formFields}>
                <div className={styles.formField}>
                  <label htmlFor='title'>{t.title_mail}</label>
                  <InputText id='title' name='title' className={styles.formInputControl}
                             value={customer.title} onChange={changeCustomer} required maxLength={100} />
                </div>
                <div className={styles.formField}>
                  <label htmlFor='email'>{t.email}</label>
                  <InputText id='email' name='email' type='email' autoComplete='email'
                             className={styles.formInputControl} value={customer.email} onChange={changeCustomer} required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor='name'>{t.name}</label>
                  <InputText id='name' name='name' autoComplete='name' className={styles.formInputControl}
                             value={customer.name} onChange={changeCustomer} required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor='phone'>{data.phoneFormPlaceholder}</label>
                  <InputText id='phone' name='phone' type='tel' autoComplete='tel'
                             className={styles.formInputControl} value={customer.phone} onChange={changeCustomer} />
                </div>
                <div className={styles.formField}>
                  <label htmlFor='text'>{t.message}</label>
                  <InputTextarea id='text' name='text' className={styles.formTextareaControl}
                                 value={customer.text} onChange={changeCustomer} rows={5} required />
                </div>
              </div>
              <div className={styles.consent}>
                <label htmlFor='privacyPolicy' className={styles.consentLabel}>
                  <input type='checkbox' id='privacyPolicy' name='privacyPolicy' checked={privacyPolicy}
                         onChange={event => setPrivacyPolicy(event.target.checked)} />
                  <span>{t.privacy_consent}</span>
                </label>
                <Button type='button' label={t.privacyPolicy} onClick={() => setDisplayPrivacyPolicy(true)}
                        className={`p-button-text ${styles.privacyLink}`} />
              </div>
              <Button type='submit' label={t.ask_for_information} className={styles.submitButton}
                      disabled={disabledButton} loading={sending} />
            </form>
          </div>
        </section>
      </div>
      <Dialog header={t.privacyPolicy} visible={displayPrivacyPolicy}
              className={styles.privacyDialog} modal onHide={() => setDisplayPrivacyPolicy(false)}>
        <Privacypolicy />
      </Dialog>
    </main>
  )
}
