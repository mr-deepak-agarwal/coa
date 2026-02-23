import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SyllabusOverview from './components/SyllabusOverview';
import UnitContent from './components/UnitContent';
import InteractiveLab from './components/InteractiveLab';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedUnit, setSelectedUnit] = useState(null);
  
  const syllabusRef = useRef(null);
  const unitsRef = useRef(null);
  const interactiveRef = useRef(null);

  const handleNavigate = (section) => {
    setActiveSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSelectedUnit(null);
    } else if (section === 'syllabus') {
      setSelectedUnit(null);
      syllabusRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'units') {
      unitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'interactive') {
      setSelectedUnit(null);
      interactiveRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section.startsWith('unit-')) {
      const unitId = parseInt(section.split('-')[1]);
      setSelectedUnit(unitId);
      unitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectUnit = (unitId) => {
    setSelectedUnit(unitId);
    setActiveSection('units');
    setTimeout(() => {
      unitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackFromUnit = () => {
    setSelectedUnit(null);
    setActiveSection('syllabus');
    syllabusRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !selectedUnit) {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selectedUnit]);

  return (
    <div className="App bg-white" style={{ fontFamily: "Outfit, sans-serif" }} min-h-screen">
      <BrowserRouter>
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main>
          <section id="home">
            <HeroSection onNavigate={handleNavigate} />
          </section>
          
          <div ref={syllabusRef}>
            <SyllabusOverview onNavigate={handleNavigate} onSelectUnit={handleSelectUnit} />
          </div>
          
          <div ref={unitsRef}>
            {selectedUnit ? (
              <UnitContent selectedUnit={selectedUnit} onBack={handleBackFromUnit} />
            ) : (
              <section className="py-24 bg-[#f8fafc]" id="units">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Select a Unit to Begin</h3>
                    <p className="text-gray-500">
                      Choose any unit from the syllabus above to start learning. Each unit contains
                      comprehensive theory, examples, and interactive content.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
          
          <div ref={interactiveRef}>
            <InteractiveLab />
          </div>
        </main>
        
        <Footer onNavigate={handleNavigate} />
      </BrowserRouter>
    </div>
  );
}

export default App;