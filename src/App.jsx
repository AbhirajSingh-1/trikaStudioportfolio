import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import AIAdvertising from './pages/AIAdvertising/AIAdvertising';
import Visualization from './pages/3Dvisualization/Visualization';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}

function AppInner() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--bg)',
        overflowX: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <ScrollToTop />
      <Header />
      <main style={{ overflowX: 'hidden' }}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-advertising" element={<AIAdvertising />} />
            <Route path="/3d-visualization" element={<Visualization />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}