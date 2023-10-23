import Image from 'next/image'
import { inter } from '../src/components/fonts/fonts'
// import { ConnectWallet } from '@thirdweb-dev/react/evm'
import Hero from '@/components/libs/hero/Hero'
import WhyHepper from '@/components/libs/whyHepper/WhyHepper'
import WhyHepperTwo from '@/components/libs/whyHepper/WhyHepperTwo'
import Partners from '@/components/libs/partners/Partners'
import Tokenomics from '@/components/libs/tokenomics/Tokenomics'
import Roadmap from '@/components/libs/roadmap/Roadmap'
import Navbar from '@/components/libs/navbar/Navbar'
import Footer from '@/components/libs/footer/Footer'

export default function Page() {
  return (
    <main className="flex">
      <div>
        <Navbar/>
        <Hero/>
        {/* <ConnectWallet/> */}
        <WhyHepper/>
        <WhyHepperTwo/>
        <Partners/>
        <Tokenomics/>
        <Roadmap/>
        <Footer />
      </div>
    </main>
  )
}
