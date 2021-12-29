import Head from 'next/head';
import { getCurrentDate } from '../util/index';
import Navigation from '../components/navigation/Navigation';
import Heroes from '../components/hero/Hero';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Ayomide/folio{getCurrentDate().year}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Navigation type="header" />
      <Heroes />
      <About />
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  return { props: {} };
}
