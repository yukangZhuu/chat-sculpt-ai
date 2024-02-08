import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="chat-room-container">
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;