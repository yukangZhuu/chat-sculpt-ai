import React from 'react';
import '../../styles/configsContent/FirstContent.css'
import botTalking from '../../images/bot_talking.png'

function FirstContent() {
  return (
    <div className="configs-content">
      <h2 className="configs-title">Welcome to ChatSculpt.AI!</h2>
      {/* Add the path to your image in the src attribute */}
      <img className="configs-image" src={botTalking} alt="ChatSculpt.AI" />
        <p className="configs-text">
            Personalize your AI chat companion in three easy steps with ChatSculpt.AI:
            <br/><br/>
            ◉ <strong>Basic Configs:</strong> Set fundamental attributes.
            <br/>
            ◉ <strong>Advanced Configs:</strong> Fine-tune personality and abilities.
            <br/>
            ◉ <strong>Additional Customizations:</strong> Tailor unique constraints and features.
        </p>
      <button className="configs-start-button">Start</button>
    </div>
  );
}

export default FirstContent;