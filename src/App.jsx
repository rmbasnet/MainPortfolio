import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Now from './components/Now';
import Projects from './components/Projects';
import Experience from './components/Experience';
import OffScreen from './components/OffScreen';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CanvasBackground />
      <main className="wrap">
        <Nav />
        <Hero />
        <Now />
        <Projects />
        <Experience />
        <OffScreen />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;