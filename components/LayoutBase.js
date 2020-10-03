import Head from 'next/head'

export default function LayoutBase({ children }) {

  return (
    <div>
      <Head>
        <meta name="twitter:title" content="LayoutBase.js" />
        <meta property="og:title" content="LayoutBase.js" />
      </Head>
       <main>{children}</main>
    </div>
  )
}
