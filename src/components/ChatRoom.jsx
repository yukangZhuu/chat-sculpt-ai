import { useState } from 'react'
import '../styles/ChatRoom.css'
import Card from './Card';
import { BotMessage, UserMessage } from './message/Message';
import MessageInput from './message/MessageInput';

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

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

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
        </div>
      </Card>
      
      <div className="message-input-container">
        <MessageInput onSend={handleSend} />
      </div>
      
    </>

  )
}

export default ChatRoom;
