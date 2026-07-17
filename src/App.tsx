import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Diaspora } from './components/Diaspora';
import { Trust } from './components/Trust';
import { Grow } from './components/Grow';
import { Footer } from './components/Footer';
import { LOCALES } from './i18n';
import type { Locale } from './i18n';
import { CopyProvider, useCopy } from './i18n/CopyContext';

function SkipLink() {
  const { a11y } = useCopy();
  return <a className="skip" href="#main">{a11y.skipToMain}</a>;
}

export default function App({ locale }: { locale: Locale }) {
  return (
    <CopyProvider copy={LOCALES[locale]}>
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <div className="wrap"><div className="stitch" /></div>
        <Story />
        <Features />
        <Diaspora />
        <Trust />
        <Grow />
      </main>
      <Footer />
    </CopyProvider>
  );
}
