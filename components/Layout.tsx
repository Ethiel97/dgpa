import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'



const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>DGPA</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Work+Sans&display=swap' />

            </Head>

            <Navbar />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout
