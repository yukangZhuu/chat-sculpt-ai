import { useState, useEffect, useRef } from 'react'
import '../styles/ChatRoom.css'
import Card from './Card';
import { BotMessage, UserMessage } from './message/Message';
import MessageInput from './message/MessageInput';
import { processMessageToChatGPT } from '../utils';

const API_KEY = "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";

const systemMessage = { 
  "role": "system", "content": "Chat like you're talking to a bad boy."
}


function ChatRoom() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "nearest", 
        inline: "start" 
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };
  
    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);
    setIsTyping(true);
  
    // Assuming you have defined systemMessage and API_KEY somewhere
    const responseMessage = await processMessageToChatGPT(newMessages, systemMessage, API_KEY);
  
    if (responseMessage) {
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }
  
    setIsTyping(false);
  };

  console.log(messages[0].sender);



  return (
    <>
      <Card className="chat-card">
        <div className="message-list-container">
          {messages.map((message, i) => (
            message.sender === 'user' ? 
            <div style={{textAlign: "right"}}><UserMessage key={i} text={message.message} /></div> : 
            <div><BotMessage key={i} text={message.message} /></div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </Card>
      
      <div className="message-input-container">
        <MessageInput onSend={handleSend} />
      </div>
      
    </>

  )
}

export default ChatRoom;
