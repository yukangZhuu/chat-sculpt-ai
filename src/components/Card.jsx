import React from 'react';
import '../styles/Card.css'; 

const Card = ({ children, className }) => {
  // Combine the base "card" class with any additional classes passed via props
  const cardClass = `card ${className || ''}`.trim();
  return <div className={cardClass}>{children}</div>;
};

export default Card;