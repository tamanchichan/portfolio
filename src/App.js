import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header><Header /></header>
      <main>
        <Landscape />
        <Skills />
        <Experience />
        <About />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
