import Layout from '../components/Layout'
import '../styles/globals.scss'
import { Header } from '../components/Header'
import { ConnectWalletProvider } from '../context2/ConnectWalletContext'
import { IdentityContextProvider } from '../context/IdentityContextProvider'

function MyApp({ Component, pageProps }) {
  return (
    <IdentityContextProvider>
        <Header />
        <Component {...pageProps} />
    </IdentityContextProvider>
  )
}

export default MyApp
