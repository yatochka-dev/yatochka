import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <>
            <Head>
                <meta
                    name={'viewport'}
                    content={'width=device-width, initial-scale=1.0'}
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Portfolio</title>
            </Head>
            <div
                className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen overflow-x-hidden`}
            >
                <NavBar />
                <AnimatePresence mode={'wait'}>
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </div>
        </>
    )
}
