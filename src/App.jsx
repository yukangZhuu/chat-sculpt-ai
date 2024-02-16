import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='app-container'>

      <div className='header-container'>
        <p>AI can make mistakes. Consider checking important information. © 2023.  Powered by React.js</p>
      </div>

      <div className="main-container">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="chat-room-container">
          <ChatRoom />
        </div>
      </div>

      <div className='footer'>
        <p>AI can make mistakes. Consider checking important information. © 2024.  Made by Yukang</p>
      </div>
      
    </div>
  );
}

export default App;