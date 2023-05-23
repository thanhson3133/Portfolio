import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Test from "./components/Test";

function App() {
  return (
    <div className="app_css h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto text-white ">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
