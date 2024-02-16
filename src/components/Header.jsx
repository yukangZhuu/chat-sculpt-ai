import { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'


export default function Header() {
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
            <span>Help</span>
            <span>Contact Me</span>
            <span>Sign In</span>
          </div>

        </div>
    );
}