import Intro from "./components/intro";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App h-screen bg-lime-100 dark:bg-slate-500 dark:text-white duration-500 hover:cursor-default">
      <Navbar/>
      <Intro />
    </div>
  );
}

export default App;