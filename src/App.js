import Intro from "./components/intro";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App dark:bg-slate-500 dark:text-white h-screen duration-500">
      <Navbar/>
      <Intro />
    </div>
  );
}

export default App;