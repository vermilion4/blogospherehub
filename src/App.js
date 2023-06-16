
import './index.css';
import Blog from './components/BLOG/Blog';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import News from './components/News';

function App() {
  return (
    <div className="App">
     <Hero />
     <Blog />
     <News />
     <Events />
     <Jobs />
     <Footer />
    </div>
  );
}

export default App;
