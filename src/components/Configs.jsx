import React, { useState } from 'react';
import FirstContent from './configsContent/FirstContent';
import SecondContent from './configsContent/SecondContent';
// import ThirdContent from './configsContent/ThirdContent';
// import ForthContent from './configsContent/ForthContent';
import '../styles/Configs.css';

function Configs() {
  const [activeSlide, setActiveSlide] = useState(1);

  const goToSlide = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="configs-card">
      {/* Render Content Based on Active Slide */}
      {activeSlide === 1 && <FirstContent goToSlide={goToSlide} />}
      {activeSlide === 2 && <SecondContent goToSlide={goToSlide} />}
      {/* activeSlide === 3 && <ThirdContent goToSlide={goToSlide} />}
      {activeSlide === 4 && <ForthContent goToSlide={goToSlide} />} */}

      {/* Radio Buttons as Progress Bar */}
      <input type="radio" name="select" id="configs_slide_1" checked={activeSlide === 1} readOnly hidden />
      <input type="radio" name="select" id="configs_slide_2" checked={activeSlide === 2} readOnly hidden />
      <input type="radio" name="select" id="configs_slide_3" checked={activeSlide === 3} readOnly hidden />
      <input type="radio" name="select" id="configs_slide_4" checked={activeSlide === 4} readOnly hidden />

      {/* Slider Labels */}
      <div className="configs-slider">
        <label className="configs-slide" style={{backgroundColor: activeSlide === 1 ? '#000000' : 'rgba(232,221,217, 0.85)'}}></label>
        <label className="configs-slide" style={{backgroundColor: activeSlide === 2 ? '#000000' : 'rgba(232,221,217, 0.85)'}}></label>
        <label className="configs-slide" style={{backgroundColor: activeSlide === 3 ? '#000000' : 'rgba(232,221,217, 0.85)'}}></label>
        <label className="configs-slide" style={{backgroundColor: activeSlide === 4 ? '#000000' : 'rgba(232,221,217, 0.85)'}}></label>
      </div>
    </div>
  );
}

export default Configs;
