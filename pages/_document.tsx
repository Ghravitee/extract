import Footer from '@/components/libs/footer/Footer'
import { SiteBlob } from '@/components/ui/site-blob'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head />
        <body>

        {/* <Navbar /> */}
        <SiteBlob />
          <Main />
          
          <NextScript />
        </body>
    </Html>
  )
}