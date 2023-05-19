import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app_css h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
