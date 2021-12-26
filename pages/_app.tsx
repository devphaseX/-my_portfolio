import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (!['/', ''].includes(router.pathname)) {
    return router.push('/');
  }
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
