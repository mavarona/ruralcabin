import styles from '@styles/Contact.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

import { getTranslate } from '@lib/locale'
import { initialStateContact } from '@config/state'

import { truncateText, disabledSendEmail, callPhone } from '@lib/utils'
import { getStaticContact } from '@config/info'

import ContactMap from '@components/contact/contactmap'
import ContactInfo from '@components/contact/contactinfo'
import Title from '@components/common/title'
import Privacypolicy from '@components/common/privacypolicy'

import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Dialog } from 'primereact/dialog'

import { TOAST_TIMEOUT, SEVERITY_INFO } from '@config/globals'
import { Toast } from 'primereact/toast'

export default function Contact() {

  const toast = useRef(null)
  const t = getTranslate(useRouter())

  const data = getStaticContact(t, styles)

  const [customer, setCustomer] = useState(initialStateContact())
  const [disabledButton, setDisabledButton] = useState(true)
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState(false)

  const styleInputText = `p-float-label ${styles.formInputSpan}`
  const styleCheckbox = `p-float-label ${styles.formCheckboxSpan}`

  useEffect(() => {
    const {title, text, email, name} = customer
    setDisabledButton(disabledSendEmail(title, text, email, name, privacyPolicy))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer, privacyPolicy])

  const resetFields = () => {
    setPrivacyPolicy(false)
    setCustomer(initialStateContact())
    setDisabledButton(true)
  }

  const changeCustomer = (e) => {
    const {name, value} = e.target
    setCustomer(customer => ({
      ...customer,
      [name]: value
    }))
  }

  const sendEmail = (e) => { 
    e.preventDefault()
    setDisabledButton(true)
    const {title} = customer
    setCustomer(customer => ({
      ...customer,
      [title]: truncateText(title, 100)
    }))

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }).then(() => {
      resetFields()
      showInfo()
    }).catch(err => {
      console.log(err)
    })
  }

  const showInfo = () => {
    toast.current.show({severity:SEVERITY_INFO, summary:t.info, detail:t.email_sended, life: TOAST_TIMEOUT})
  }

  return (
    <div className={styles.container}>
      <Toast ref={toast} />
      <div>
        <Title style={styles.title} text={t.location} />
        <ContactMap styles={styles} path={data.geolocationPosition} />
        <ContactInfo styles={styles} 
                     path='#'
                     styleLogo={data.styleLogoLocation} 
                     text={data.address} />
        <ContactInfo styles={styles}
                     path='#'
                     onClick={callPhone} 
                     styleLogo={data.styleIconPhone} 
                     text={data.phoneText} />
      </div>
      <div>
        <Title style={styles.title} text={t.info} />
        <div className={styles.formMail}>
          <Title style={styles.formMailHeader} text={t.canHelp} />
          <div className="card">
            <span className={styleInputText}>
              <InputText id='title'
                         name='title'
                         className={styles.formInputControl} 
                         value={customer.title}  
                         onChange={(e)=>changeCustomer(e)} />
              <label htmlFor='title'>{t.title_mail}</label>
            </span>
            <span className={styleInputText}>
              <InputText id='email'
                         name='email'
                         className={styles.formInputControl} 
                         value={customer.email}  
                         onChange={(e)=>changeCustomer(e)} />
              <label htmlFor='email'>{t.email}</label>
            </span>
            <span className={styleInputText}>
              <InputText id='name'
                         name='name'
                         className={styles.formInputControl} 
                         value={customer.name}  
                         onChange={(e)=>changeCustomer(e)} />
              <label htmlFor='name'>{t.name}</label>
            </span>
            <span className={styleInputText}>
              <InputText id='phone'
                         name='phone'
                         className={styles.formInputControl} 
                         value={customer.phone}  
                         onChange={(e)=>changeCustomer(e)} />
              <label htmlFor='phone'>{data.phoneFormPlaceholder}</label>
            </span>

            <span className={styleInputText}>
              <InputTextarea 
                             name='text'
                             className={styles.formTextareaControl}
                             value={customer.text} 
                             onChange={(e)=>changeCustomer(e)}
                             placeholder={t.info} 
                             rows={5} cols={30} />
            </span>
            <span className={styleCheckbox}>
              <div className={styles.divPrivatePolicy}>
                <Checkbox inputId='privacyPolicy' 
                          name='privacyPolicy' 
                          checked={privacyPolicy} 
                          onChange={()=>setPrivacyPolicy(!privacyPolicy)} />
                <Button label={t.privacyPolicy}
                        onClick={()=>setDisplayPrivacyPolicy(true)} 
                        className="p-button-text mr-2" />
                <Dialog header={t.privacyPolicy}
                        visible={displayPrivacyPolicy} 
                        style={{ width: '90vw' }} 
                        modal 
                        onHide={() => setDisplayPrivacyPolicy(false)}>
                          <Privacypolicy />
                </Dialog>
              </div>
            </span>
            <span className={styles.formButtonSpan}>
              <Button label={t.ask_for_information}
                      className={disabledButton? styles.formButtonDisabled : styles.formButton} 
                      onClick={(e)=>sendEmail(e)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}