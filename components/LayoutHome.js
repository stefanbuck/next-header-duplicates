import Head from 'next/head'
import LayoutBase from '../components/LayoutBase'

export default function LayoutHome({ children }) {

  return (
    <LayoutBase>
      <Head>
        <meta name="twitter:title" content="LayoutHome.js" />
        <meta property="og:title" content="LayoutHome.js" />
      </Head>
       <main>{children}</main>
    </LayoutBase>
  )
}
