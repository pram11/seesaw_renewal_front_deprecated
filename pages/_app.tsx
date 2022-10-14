import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from 'next/app';
import cookies from 'next-cookies';

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
App.getInitialProps = async (appContext:AppContext) =>{
  const {ctx} = appContext;
  const cookie = ctx.req?ctx.req.headers.cookie:null;
  if (cookie===null){
    const accessToken = null;
  }else{
    const accessToken = cookies(ctx)['SEESAW_ACCESS_TOKEN']
    
  }
}

export default MyApp
