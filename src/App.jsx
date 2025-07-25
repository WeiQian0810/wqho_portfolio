import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Experience,
  Achievements,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements />
      </div>
    </BrowserRouter>
  );
}

export default App;
