import { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'


export default function Header({ onHelpClick, onSignInClick }) {
    return (
        <div className='header'>
          <div className='title'>
            <span>ChatSculpt.AI</span>

            <div className='slogan'>
              <span>Sculpt</span>
              <span>Your</span>
              <span>Own</span>
              <span>Chatbot</span>

            </div>
          </div>
          
          <div className='menu'>
            <button onClick={onHelpClick}>Help</button>
            <button>Contact Me</button>
            <button onClick={onSignInClick}>Sign In</button>
          </div>

        </div>
    );
}