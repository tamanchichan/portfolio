import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header><Header /></header>
      <main>
        <Landscape />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer><Footer /></footer>
    </>
  );
};

export default App;
