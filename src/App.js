import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";

function App() {
  console.log("window.scrollY", window.scrollY);
  return (
    <div className="app_css h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto text-white ">
      <ScrollButton />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
