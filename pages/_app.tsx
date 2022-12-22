import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from 'pages'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
