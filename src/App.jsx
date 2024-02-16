import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <div className='app-container'>

      <div className='header-container'>
        <Header />
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