import React, { useState } from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import Header from './components/Header';

import { HelpModal, SignInModal } from './components/Modal';
import Configs from './components/Configs';

function App() {

  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const toggleHelpModal = () => {
    setIsHelpModalVisible(!isHelpModalVisible);
  };

  const toggleSignInModal = () => {
    setIsSignInModalVisible(!isSignInModalVisible);
  };

  const isModalOpen = isHelpModalVisible || isSignInModalVisible;

  return (
    <div className='app-container'>

      <div className={`header-container ${isModalOpen ? 'blur-background' : ''}`}>
        <Header onHelpClick={toggleHelpModal} onSignInClick={toggleSignInModal} />
      </div>

      <div className={`main-container ${isModalOpen ? 'blur-background' : ''}`}>
        <div className="configs-container">
          <Configs />
        </div>
        <div className="chat-room-container">
          <ChatRoom />
        </div>
      </div>

      <div className={`footer ${isModalOpen ? 'blur-background' : ''}`}>
        <p>AI can make mistakes. Consider checking important information. © 2024.  Made by Yukang</p>
      </div>
      
      {isHelpModalVisible && <HelpModal onClose={toggleHelpModal} />}
      {isSignInModalVisible && <SignInModal onClose={toggleSignInModal} />}
    </div>
  );
}

export default App;