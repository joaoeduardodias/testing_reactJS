import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
