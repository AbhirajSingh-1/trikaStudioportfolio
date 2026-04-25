import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import AIAdvertising from './pages/AIAdvertising/AIAdvertising';
import Visualization from './pages/3DVisualization/Visualization';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#04081A' }}>
      {/* Grain texture overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Home />
        <AIAdvertising />
        <Visualization />
        <DigitalMarketing />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}