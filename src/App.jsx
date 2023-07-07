import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Services from "./Pages/Services";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Rentals from "./Pages/Rentals";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
  // const location = useLocation();
  return (
    <>
      {/* <AnimatePresence> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
