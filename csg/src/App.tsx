import Hero from './layout/main-section/Main';
import Navigation from './components/navigation/Navigation';
import Events from './layout/events-section/Events';
import Announcement from './layout/announcement-section/Announcement';
import Document from './layout/document-section/Document';
import About from './layout/about-section/About';
import Officer from './layout/officer-layout/Officer';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Announcement />
      <Document />
      <Events />
      <About />
      <Officer />
      <Footer />
    </div>
  );
};

export default App;
