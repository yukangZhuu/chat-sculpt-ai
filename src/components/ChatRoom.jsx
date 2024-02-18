import { useState, useEffect, useRef } from 'react'
import '../styles/ChatRoom.css'
import Card from './Card';
import { BotMessage, UserMessage } from './message/Message';
import MessageInput from './message/MessageInput';
import { processMessageToChatGPT } from '../utils';
import { Loader } from './Loader'; 

const API_KEY = "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";

const systemMessage = { 
  "role": "system", "content": "Act like a software engineer with 3 years of experience. Your name is Mike and 25 year-old."
}


function ChatRoom() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Mike! Ask me anything!",
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

    // Wait for 1 second before proceeding
    await new Promise(resolve => setTimeout(resolve, 3000));
  
    // Assuming you have defined systemMessage and API_KEY somewhere
    const responseMessage = await processMessageToChatGPT(newMessages, systemMessage, API_KEY);

    setIsTyping(false);
  
    if (responseMessage) {
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }
  
    
  };

  console.log(messages[0].sender);



  return (
    <>
      <Card className="chat-card">
        <div className="message-list-container">
          {messages.map((message, i) => (
            <div 
              className={`message-animation-container ${i === messages.length - 1 ? 'message-rise-animation' : ''}`} 
              key={i}
            >
              {message.sender === 'user' ? 
                <div style={{textAlign: "right"}}><UserMessage text={message.message} /></div> 
                : 
                <div><BotMessage text={message.message} /></div>
              }
            </div>
          ))}
          {isTyping && <Loader />}
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
