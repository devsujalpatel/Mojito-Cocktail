import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, [isLoaded]);

  if (!isLoaded)
    return (
      <div className="flex-center h-screen flex-col">
        <div className="w-14 h-14 border-b-4 border-t-4 border-blue-500 rounded-full border-r-4 border-r-transparent border-l-4 border-l-transparent animate-spin"></div>
        <p className="mt-4 text-gray-300">Loading...</p>
      </div>
    );

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
