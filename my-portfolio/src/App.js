import Navbar from "./components/navbar/Navbar.tsx";
import './App.css';
import React from 'react';
import InfoSection from "./components/InfoSection/InfoSection.tsx";
import SkillsAndMe from "./components/Information/SkillsAndMe.tsx";


function App() {
  
  return (
    <div className="App">
    <Navbar />
    <InfoSection />
    <SkillsAndMe />
    </div>
  );
}

export default App;
