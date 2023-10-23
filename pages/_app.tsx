import type { AppProps } from 'next/app'
import '../globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import { Ethereum, Binance, Polygon} from "@thirdweb-dev/chains"
import { Providers } from '@/components/ui/provider';



// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), zerionWallet()]}
      supportedChains={[Ethereum, Binance, Polygon]}
      activeChain={activeChain}
    >
     
      <Component {...pageProps} />
   
    </ThirdwebProvider>
    </Providers>
    
  );
}