import React from 'react';
import '../styles/Modal.css';


export function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className='help-content'>
            <h2>Welcome to ChatSculpt.AI!</h2>
            <p>Discover the art of conversation with ChatSculpt.AI, where you personalize your AI chat companion.</p>
            <p>Choose traits, set preferences, and shape the persona of your bot for a unique chatting experience.</p>
            <p>Whether for learning, advice, or fun, your AI companion is ready to adapt.</p>
            <p><strong>Start sculpting your chat today!</strong></p>
            <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
  
export function SignInModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className='help-content'>
            <h2>Login & Signup are coming soon!</h2>
            <p>Backend is still under development right now.</p>
            <p>Try this app free from login or type in your own GPT API key below!</p>
            <input placeholder='API key here..'></input>
            <p><strong>Enjoy sculpting your chat today!</strong></p>
            <button onClick={onClose}>Let's go</button>
        </div>
      </div>
    </div>
  );
}