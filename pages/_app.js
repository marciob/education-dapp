import Layout from '../components/Layout'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { ConnectWalletProvider } from '../context2/ConnectWalletContext'
import { IdentityContextProvider } from '../context/IdentityContextProvider'

function MyApp({ Component, pageProps }) {
  return (
    <IdentityContextProvider>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </IdentityContextProvider>
  )
}

export default MyApp
