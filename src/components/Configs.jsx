import React from 'react';
import FirstContent from './configsContent/FirstContent';
import '../styles/Configs.css'

function Configs() {
    return (
        <div className="configs-card">
        {/* First Slide Content */}
            <FirstContent />

            {/* Radio Buttons */}
            <input type="radio" name="select" id="configs_slide_1" defaultChecked hidden />
            <input type="radio" name="select" id="configs_slide_2" hidden />
            <input type="radio" name="select" id="configs_slide_3" hidden />
            <input type="radio" name="select" id="configs_slide_4" hidden />
    
            {/* Slider Labels */}
            <div className="configs-slider">
            <label htmlFor="configs_slide_1" className="configs-slide"></label>
            <label htmlFor="configs_slide_2" className="configs-slide"></label>
            <label htmlFor="configs_slide_3" className="configs-slide"></label>
            <label htmlFor="configs_slide_4" className="configs-slide"></label>
            </div>
      </div>
    );
  }
  
  export default Configs;