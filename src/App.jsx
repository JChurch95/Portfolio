import Navigation from './components/Navigation';
import SocialNav from './components/SocialNav';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { PageLayout } from './components/Layout';

function App() {
  return (
    <PageLayout>
      <Navigation />
      <SocialNav />
      <main className="relative z-10">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </PageLayout>
  );
}

export default App