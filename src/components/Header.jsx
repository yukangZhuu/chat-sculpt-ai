import { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'


function handleContactClick() {
  const emailAddress = "zhuyukang2000@gmail.com"; // Replace with your desired email address
  const emailSubject = encodeURIComponent("[From: ChatSculpt.AI]");
  const emailBody = encodeURIComponent("Hi Yukang,\n\n..."); // Email body content

  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
  window.location.href = mailtoLink;
}

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
            <button onClick={handleContactClick}>Contact Me</button>
            <button onClick={onSignInClick}>Sign In</button>
          </div>

        </div>
    );
}