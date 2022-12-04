import '@styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Layout from '@layouts/main'

import { useState } from 'react'
import Router from 'next/router'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Spinner from '@components/common/spinner'

import { DataProvider } from "@context/DataContext"

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })

  return  (
    <>
      <DataProvider>
        <Layout>
          {loading && <Spinner />}
          <Component {...pageProps} />
        </Layout> 
      </DataProvider>
    </>
  )
  
}

export default MyApp
