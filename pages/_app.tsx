import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </RecoilRoot>
  )
}

export default MyApp
