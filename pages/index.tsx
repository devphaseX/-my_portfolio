import Head from 'next/head';
import { getCurrentDate } from '../util/index';
import style from '../styles/home.module.scss';
import Navigation from '../components/navigation/Navigation';
import Heroes from '../components/hero/Hero';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>Ayomide/folio{getCurrentDate().year}</title>
      </Head>
      <Navigation />
      <Heroes />
      <About />
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  return {};
}
