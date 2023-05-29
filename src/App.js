import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { PacmanLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black w-full h-full relative">
          <div className="text-white absolute left-2/4" style={{ top: "20%" }}>
            <PacmanLoader color="#fff" />
          </div>
          <Loading height={2000} width={2000} zIndex={9} size={10} />
        </div>
      ) : (
        <div className="app_css h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto text-white ">
          <ScrollButton />
          <Hero />
          <Who />
          <Works />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
