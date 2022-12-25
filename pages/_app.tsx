import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StoreProvider from 'store'
import ThemeProvider from "../theme/styledGlobal"
import { Inter } from "@next/font/google"

import "antd/dist/antd.css";
import "../theme/tailwindGlobal.css";
import "../styles/main.css"
import { Header, SEO } from 'module/components'

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider >
      <ThemeProvider>
        <main className={inter.className + " main relative"}>
          <div className="container">
            <SEO />
            <Header />
            <div className="mt-12 md:mt-12">
              <Component {...pageProps} />
            </div>
          </div>
        </main>
      </ThemeProvider>
    </StoreProvider>
  )
}
