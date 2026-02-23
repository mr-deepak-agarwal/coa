import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SyllabusOverview from "./components/SyllabusOverview";
import UnitContent from "./components/UnitContent";
import InteractiveLab from "./components/InteractiveLab";
import Footer from "./components/Footer";

function App() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <>
      <Header />
      <HeroSection />

      <SyllabusOverview setSelectedUnit={setSelectedUnit} />

      <UnitContent selectedUnit={selectedUnit} />

      <InteractiveLab />
      <Footer />
    </>
  );
}

export default App;