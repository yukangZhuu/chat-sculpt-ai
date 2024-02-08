import React from 'react';
import '../../styles/message/Message.css';

export const BotMessage = ({ text }) => {
  console.log(text);
  return (
    <div className="bot-message">
      <p>{text}</p>
    </div>
  );
};

export const UserMessage = ({ text }) => {
    console.log(text);
    return (
      <div className="user-message">
        <p>{text}</p>
      </div>
    );
};