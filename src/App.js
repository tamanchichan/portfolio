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
      </main>
      <footer></footer>
    </>
  );
};

export default App;
