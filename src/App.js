import About from "./components/about";
import Contact from "./components/contact";
import Intro from "./components/intro";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App dark:text-white hover:cursor-default capitalize">
      <Navbar/>
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;