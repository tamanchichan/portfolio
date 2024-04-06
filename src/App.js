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
      </main>
      <footer></footer>
    </>
  );
};

export default App;
