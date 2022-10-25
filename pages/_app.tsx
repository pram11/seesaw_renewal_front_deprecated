import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { atom, RecoilRoot, useSetRecoilState } from 'recoil'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from 'next/app';
import { seesawTokenState } from '../states';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>  
      <RecoilRoot>
      <Component {...pageProps} />  
      </RecoilRoot>
    </QueryClientProvider>
  )
}
App.getInitialProps = async (appContext:AppContext) =>{
  function getCookie(key: any) {
    let result = null;
// cookie log를 찍어보면 ;로 구분해서 string 값으로 들어오기 때문에 split으로 나눈다.
    let cookie = ctx?.ctx?.req?.headers?.cookie?.split(";");
    cookie.some(function (item: any) {
        // 공백을 제거
        item = item.replace(" ", "");

        let dic = item.split("=");

        if (key === dic[0]) {
            result = dic[1];
            return true; // break;
        }
    });
    return result;
  }
  
  return {};
  
}

export default MyApp
