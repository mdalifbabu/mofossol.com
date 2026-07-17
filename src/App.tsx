import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Diaspora } from './components/Diaspora';
import { Trust } from './components/Trust';
import { Grow } from './components/Grow';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">মূল অংশে যান</a>
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
    </>
  );
}
